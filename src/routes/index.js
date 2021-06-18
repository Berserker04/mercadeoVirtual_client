import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./styles.css";

import HeaderContainer from "../components/header/HeaderContainer";
import CheckAuth from "../pages/login/CheckAuth";
import LoginContainer from "../pages/login/LoginContainer";
import RegisterContainer from "../pages/login/RegisterContainer";
import HomeContainer from "../pages/home/HomeContainer";
import UserContainer from "../pages/user/UserContainer";
import NoFound from "../pages/noFound";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/registrar" component={RegisterContainer} />
      <Route exact path="/login" component={LoginContainer} />
    </Switch>
    <CheckAuth>
      <div className="dashboard-header">
        <HeaderContainer />
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/usuarios" component={UserContainer} />
          <Route component={NoFound} />
        </Switch>
      </div>
    </CheckAuth>
  </BrowserRouter>
);

export default App;
