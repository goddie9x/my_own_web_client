import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import LoginInput from "./LoginInput.jsx";
import Search from "./Search.jsx";
import UserButton from "./UserButton.jsx";
import "./header.scss";
import DEFAUL_USER_IMAGE from "../../../medias/default_user.png";

export default function Header({ data, user }) {
  const [fixed, setFixed] = React.useState(0);

  function handleScroll() {
    setFixed(window.scrollY>200);
  }

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    
    return ()=>{
      window.removeEventListener("scroll", handleScroll);
    }
  });
  return (
    <header className={fixed?"shadow-lg position-fixed w-100":"shadow-lg"}>
      {data&&<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={data.logoUrl || DEFAUL_USER_IMAGE} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Navbar data={data.navs} userRole={user&&user.role} />
            <Search />
            {user ? (
              user && (
                <UserButton user={user} dataUserButton={data.UserButton} />
              )
            ) : (
              <LoginInput logo={data&&data.logoUrl}/>
            )}
          </div>
        </div>
      </nav>}
    </header>
  );
}
