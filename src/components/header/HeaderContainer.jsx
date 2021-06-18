import React, { Component } from "react";
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
      <div>
        <div>
          <h1>InfoTeck</h1>
          <figure>
            <img height={150} width={150} src={logo} alt="" />
          </figure>
        </div>

        <div>
          <NavLink activeClassName="module-active" to="/">
            Inicio
          </NavLink>
          <NavLink activeClassName="module-active" to="/">
            Gestión de usuario
          </NavLink>
          <NavLink activeClassName="module-active" to="/">
            Publicaciones
          </NavLink>
          <NavLink activeClassName="module-active" to="/">
            Reportes
          </NavLink>
          <NavLink activeClassName="module-active" to="/">
            Perfil
          </NavLink>
          <NavLink activeClassName="module-active" to="/">
            Cerrar sesión
          </NavLink>
        </div>
      </div>
    );
  }
}

export default HeaderContainer;
