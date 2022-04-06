import React from "react";
import "./adminHome.css";
import NavbarAdmin from "./Components/NavbarAdmin";
import AdminResource from "./Components/AdminResource";
function Home() {
  return (
    <div id="Home">
      <NavbarAdmin />
      <AdminResource />
    </div>
  );
}

export default Home;
