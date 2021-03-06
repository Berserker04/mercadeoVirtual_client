import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import "./styles.css";

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="header-container">
        <div className="header-logo">
          <h1>InfoTeck</h1>
          <figure>
            <NavLink exact to="/">
              <img height={80} width={80} src={logo} alt="" />
            </NavLink>
          </figure>
        </div>

        <div className="header-links">
          <NavLink
            exact
            className="header-module-desactive"
            activeClassName="header-module-active"
            to="/"
          >
            Inicio
          </NavLink>
          {this.props.getUser.role_id.name === "superUser" && (
            <NavLink
              className="header-module-desactive"
              activeClassName="header-module-active"
              to="/usuarios"
            >
              Gestión de usuario
            </NavLink>
          )}
          <NavLink
            className="header-module-desactive"
            activeClassName="header-module-active"
            to="/publicaciones"
          >
            Publicaciones
          </NavLink>
          <NavLink
            className="header-module-desactive"
            activeClassName="header-module-active"
            to="/reportes"
          >
            Reportes
          </NavLink>
          {this.props.getUser.role_id.name === "superUser" && (
            <NavLink
              className="header-module-desactive"
              activeClassName="header-module-active"
              to="/roles"
            >
              Roles
            </NavLink>
          )}
          <NavLink
            className="header-module-desactive"
            activeClassName="header-module-active"
            to="/perfil"
          >
            Perfil
          </NavLink>
          <a
            className="header-logout"
            href="/login"
            onClick={() => localStorage.removeItem("token")}
          >
            Cerrar sesión
          </a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    getUser: state.usersReducer.user,
  };
};

const mapDispatchToProps = (Dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
