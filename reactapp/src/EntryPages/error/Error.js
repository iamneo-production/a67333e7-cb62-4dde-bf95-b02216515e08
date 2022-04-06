import { useState, useEffect } from "react";
import "./Error.css";
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
      <div className="err">
        <h1>Error 404</h1>
        <h2>Page not Found</h2>
      </div>
    </div>
  );
}

export default App;
