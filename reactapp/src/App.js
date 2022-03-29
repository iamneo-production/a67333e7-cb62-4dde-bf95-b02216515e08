import React from "react";

import './App.css';

import Home from "./HomeComponents/Home";
import AdminPage from "./AdminResourceComponents/AdminPage";
import Login from "./login/App";
import "bootstrap/dist/css/bootstrap.min.css";

import Chat from './ChatComponents/Chat.js';
/*import Login from "./Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";*/

function App() {
  return (
    <div className="App">
      <App />
      {/* <Chat primaryUserId="1" secondaryUserId="2" secondaryUserName = "Teacher"/> */}
    </div>
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
