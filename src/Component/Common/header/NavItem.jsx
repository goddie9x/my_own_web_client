import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavItem({data}) {
  let hasChildren = !!data.childs;
  let childs = data.childs;
  let [active,setActive] = React.useState(false);
  let currentUrl = useLocation().pathname;

  React.useEffect(()=>{
      setActive(currentUrl!=='/'&&data.url.includes(currentUrl));
  },[currentUrl]);
 
  return (
    <li className={"nav-item " + (hasChildren?("position-relative"):"") + (active ?"active":"")}>
      <Link to={data.url || ""} className={"nav-link " + (active ?"active":"")}>
        {data.description}
      </Link>

      {hasChildren && (
        <ul className="dropdown-menu">
          {childs.map((child, index) => (
            <div className="list-group-item  bg-dark" key={index}>
              <NavItem data={child}/>
            </div>
          ))}
        </ul>
      )}
    </li>
  );
}
