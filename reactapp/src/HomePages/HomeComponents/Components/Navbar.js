import React from "react";
import { Link } from "react-router-dom"
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar_left">
        <h1>TrulyCourse</h1>
      </div>
      <div className="navbar_right">
        <Link to="/">
          <button id="logout" value="Logout">
            Logout
          </button>
        </Link>
      </div>
    </nav>
  );
}
