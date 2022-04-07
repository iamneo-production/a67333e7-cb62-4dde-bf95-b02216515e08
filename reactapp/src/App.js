import React from "react";

import "./App.css";

import Home from "./HomePages/HomeComponents/Home";
import AdminPage from "./HomePages/AdminResourceComponents/AdminPage";
import Login from "./EntryPages/login/Login";
import Error from "./EntryPages/error/Error";
import Signup from "./EntryPages/signup/Signup";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chat from "./HomePages/ChatComponents/Chat.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;