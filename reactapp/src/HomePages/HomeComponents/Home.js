import React from "react";
import "./Home.css";
import Navbar from './Components/Navbar';
import UserHome from './Components/UserHome';
function Home() {
  return (
    <div id="Home">
        <Navbar />
        <UserHome />
    </div>
  );
}

export default Home;
