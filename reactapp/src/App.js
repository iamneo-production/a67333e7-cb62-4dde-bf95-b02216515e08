import React from "react";

import Home from "./HomeComponents/Home";
import AdminPage from "./AdminResourceComponents/AdminPage";

import Home from "./signup/App";

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
      <Home />

	  <AdminPage />
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
