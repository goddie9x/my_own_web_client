import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import LoginInput from "./LoginInput.jsx";
import Search from "./Search.jsx";
import "./header.scss";

export default function Header({ data, user }) {
  if (data) {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              <img src={data.logoUrl} alt="logo" />
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <Navbar data={data.navs} />
              <Search />
              <LoginInput />
            </div>
          </div>
        </nav>
      </header>
    );
  } else {
    return "";
  }
}
