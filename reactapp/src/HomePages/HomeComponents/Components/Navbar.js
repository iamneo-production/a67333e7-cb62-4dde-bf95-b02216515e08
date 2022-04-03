import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar_left">
        <h1>TrulyCourse</h1>
      </div>
      <div className="navbar_right">
        <button id="logout" value="Logout">
          Logout
        </button>
      </div>
    </nav>
  );
}
