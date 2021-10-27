import React from "react";
import NavItem from "./NavItem";

export default function Navbar({data}) {
    return (
        <ul className ="navbar-nav">
            {Array.isArray(data)&& data.map(
                (item, index) => <NavItem data={item} key={index}/>
                )}
        </ul>
    )
}