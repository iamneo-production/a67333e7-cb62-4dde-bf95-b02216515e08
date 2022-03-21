import React from "react";
import Home from "./HomeComponents/Home";
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
