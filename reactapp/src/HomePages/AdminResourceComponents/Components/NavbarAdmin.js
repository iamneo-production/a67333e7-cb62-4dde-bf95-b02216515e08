import React from "react";
import { NavLink } from "react-router-dom"
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar_left">
        <h1>TrulyCourse</h1>
      </div>
      <div className="navbar_right">
        <NavLink className="navlink" to="/home" activeStyle={{fontsize: "25px"}}>
          <button id="homeButton" value="Home">
            Home
          </button>
        </NavLink>

        <NavLink className="navlink" to="/admin" activeStyle={{fontsize: "25px"}}>
            <button id="coursesButton" value="Courses">
              Courses
            </button>
        </NavLink>

        <NavLink className="navlink" to="/admin" activeStyle={{fontsize: "25px"}}>
            <button id="logoutButton" value="Logout">
              Logout
            </button>
        </NavLink>
      </div>
    </nav>
  );
}
