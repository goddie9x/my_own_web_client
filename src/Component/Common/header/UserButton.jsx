import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import DEFAUL_USER_IMAGE from "../../../medias/default_user.png";
import UserItem from "./UserItem";

export default function UserButton({ user, dataUserButton }) {
  function logout() {
    document.cookie =
      "tokenUID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.reload();
  }

  return (
    <div className="ms-2 dropdown user_menu">
      <Button
        className=" dropdown-toggle"
        id="user-menu"
        data-bs-toggle="dropdown"
        variant="outlined"
      >
        <Avatar
          alt="User"
          src={user.image || DEFAUL_USER_IMAGE}
          sx={{ width: 35, height: 35, display: "inline-block" }}
        />
      </Button>
      <ul  className="dropdown-menu user-menu-list bg-dark"  aria-labelledby="user-menu">
        {dataUserButton && dataUserButton.map((data, index)=>{
           return <UserItem item={data} userRole={user.role} key={index}/>
        })}
        <li className="nav-item">
          <Button className="btn nav-link loggout_btn" onClick={logout}>
            Đăng xuất
          </Button>
        </li>
      </ul>
    </div>
  );
}
