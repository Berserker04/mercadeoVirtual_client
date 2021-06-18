import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import './styles.css';
import LoginContainer from "../pages/login/LoginContainer";
import RegisterContainer from "../pages/login/RegisterContainer";
import NoFound from "../pages/noFound";
import CheckAuth from "../pages/login/CheckAuth";
import HomeContainer from "../pages/home/HomeContainer";
// import News from "./news/NewsContainer";
// import Rules from "./rules";
// import ManagerContainer from "./manager/Cotainer";
// import ProfileContainer from "./profile/Container";
import HeaderContainer from "../components/header/HeaderContainer";
// import HeaderTop from "../components/Header/ManagerTop";
// import HeaderLeft from "../components/Header/ManagerLeft";

// import * as usersActions from "../reducers/actions/users";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/registrar" component={RegisterContainer} />
      <Route exact path="/login" component={LoginContainer} />
    </Switch>
    <CheckAuth>
      <Switch>
        <div className="dashboard-header">
          <HeaderContainer />
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            {/* <Route
                path="/administracion/perfil"
                component={ProfileContainer}
              /> */}
            {/* <Route component={NoFound} /> */}
          </Switch>
        </div>
        <Route component={NoFound} />
      </Switch>
    </CheckAuth>
  </BrowserRouter>
);

export default App;
