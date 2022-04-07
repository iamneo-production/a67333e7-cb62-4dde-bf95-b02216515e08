import React from "react";
import { Button } from "react-bootstrap";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar_left">
        <h1>TrulyCourse</h1>
      </div>
      <div className="navbar_right">
        <Button variant="primary" value="Home">
          Home
        </Button>
        <Button variant="primary" value="Courses">
          Courses
        </Button>
        <Button variant="primary" value="Logout">
          Logout
        </Button>
      </div>
    </nav>
  );
}
