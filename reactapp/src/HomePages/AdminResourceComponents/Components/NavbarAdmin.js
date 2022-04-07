import React from "react";

import { Button } from "react-bootstrap";

import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar_left">
        <h1>TrulyCourse</h1>
      </div>
      <div className="navbar_right">
 <NavLink activeClassName="active" to="/home">
        <Button variant="primary" value="Home">
          Home
        </Button>
      </NavLink>
     <NavLink activeClassName="active" to="/admin">
        <Button variant="primary" value="Courses">
          Courses
        </Button>
            </NavLink>
     <NavLink activeClassName="active" to="/login">
        <Button variant="primary" value="Logout">
          Logout
        </Button>
            </NavLink>
      </div>
    </nav>
  );
}
