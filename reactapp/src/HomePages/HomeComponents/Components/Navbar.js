import React from "react";

import { Button } from "react-bootstrap";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar_left">
        <h1>TrulyCourse</h1>
      </div>
      <div className="navbar_right">
        <Button id="logout" value="Logout">
          Logout
        </Button>
      </div>
    </nav>
  );
}
