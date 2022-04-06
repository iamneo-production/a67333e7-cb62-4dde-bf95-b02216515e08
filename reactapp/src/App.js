import React from "react";

import "./App.css";

import Home from "./HomePages/HomeComponents/Home";
import AdminPage from "./HomePages/AdminResourceComponents/AdminPage";
import Login from "./EntryPages/login/App";
import Signup from "./EntryPages/signup/App"
import "bootstrap/dist/css/bootstrap.min.css";

import Chat from "./HomePages/ChatComponents/Chat.js";
import AdminResource from "./HomePages/AdminResourceComponents/Components/AdminResource";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/signup" component={Signup} />

          <Route path="/resource" component={<></>} />
          
          <Route path="/admin" component={AdminPage} />
          <Redirect to="/" />
        </Switch>
      </Router>
    
  );
}

export default App;

/*
  
  <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Redirect to="/" />
        </Switch>
      </Router>
*/
