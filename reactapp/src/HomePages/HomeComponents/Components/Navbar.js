import React from "react";
import { Link } from "react-router-dom";

import { Button } from "react-bootstrap";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar_left">
        <h1>TrulyCourse</h1>
      </div>
      <div className="navbar_right">

     <Link to="/login">
        <Button id="logout" value="Logout">
          Logout
        </Button>
      </Link>
      </div>
    </nav>
  );
}
