import React from "react";
import NavItem from "./NavItem";

export default function Navbar({data, userRole}) {
    return (
        <ul className ="navbar-nav">
            {Array.isArray(data)&& data.map(
                (item, index) => <NavItem data={item} userRole={userRole} key={index}/>
                )}
        </ul>
    )
}