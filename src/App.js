import React from "react";
import Login from "./Pages/Login";
import Admin from "./Pages/Admin";
import User from "./Pages/User";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";
const App = () => {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/admin" component={Admin} />
            <Route path="/user" component={User} />
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
