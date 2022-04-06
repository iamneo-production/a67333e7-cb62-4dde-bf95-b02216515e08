import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navbar/Navbar";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
function App() {
  return (
    <div className="bg">
      <div>
        <Navbar />
      </div>
      <div className="container">
        <div></div>
        <h1>404</h1>
        <h3>Error Page not Found</h3>
      </div>
    </div>
  );
}

export default App;
