import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar_left">
        <h1>TrulyCourse</h1>
      </div>
      <div className="navbar_right">
        <NavLink activeClassName="active" to="/home">
            <button id="homeButton" value="Home">
              Home
            </button>
        </NavLink>
        <NavLink activeClassName="active" to="/admin">
            <button id="coursesButton" value="Courses">
              Courses
            </button>
        </NavLink>
        <NavLink activeClassName="active" to="/login">
            <button id="logoutButton" value="Logout">
              Logout
            </button>
        </NavLink>
      </div>
    </nav>
  );
}
