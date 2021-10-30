import React from "react";
import { Link } from "react-router-dom";

export default function UserItem({ item, userRole }) {
  let maxRole = item.maxRole;
  if (maxRole && userRole > maxRole) {
    return "";
  }
  return (
    <li class="nav-item">
      <Link to={item.url} class="nav-link">
        {item.content}
      </Link>
    </li>
  );
}
