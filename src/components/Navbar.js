import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      {localStorage.getItem("username") ? (
        <div className="navBar">
          <div className="logo">HeyUser!</div>
          <div className="navContent">
            <Link style={{ textDecoration: "none" }} to={"/"}>
              <p className="navItem">All</p>
            </Link>
            <Link style={{ textDecoration: "none" }} to={"/yourdata"}>
              <p className="navItem">Your</p>
            </Link>
            <Link style={{ textDecoration: "none" }} to={"/bocked"}>
              <p className="navItem">Blocked</p>
            </Link>
          </div>
          <div className="loginContent">
            <Link style={{ textDecoration: "none" }} to={"/login"}>
              <button className="lgButton">Login</button>
            </Link>
            <Link to={"/signup"}>
              <button className="lgButton">Signup</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="navBar">
          <div className="logo">HeyUser!</div>
          <div className="navContent">
            <p className="navItem">All</p>
          </div>
          <div className="loginContent">
            <Link to={"/login"}>
              <button className="lgButton">Login</button>
            </Link>
            <Link to={"/signup"}>
              <button className="lgButton">Signup</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
