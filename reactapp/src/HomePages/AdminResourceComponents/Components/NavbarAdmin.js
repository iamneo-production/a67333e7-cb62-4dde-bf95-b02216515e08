import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar_left">
        <h1>TrulyCourse</h1>
      </div>
      <div className="navbar_right">
        <button id="homeButton" value="Home">
          Home
        </button>
        <button id="coursesButton" value="Courses">
          Courses
        </button>
        <button id="logoutButton" value="Logout">
          Logout
        </button>
      </div>
    </nav>
  );
}
