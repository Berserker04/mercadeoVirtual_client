import React from "react";
import { NavLink, Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import "./styles/styles.css";

const LogiView = ({
  // Variables
  singIn,
  // Funtions
  onChange,
}) => (
  <div className="auth-container">
    <div className="auth-body">
      <figure>
        <img height={100} width={100} src={logo} alt="" />
      </figure>
      <h1>Iniciar sesión</h1>
      <form action="">
        <div className="row">
          <div className="">
            <label htmlFor="user_name">Correo o usuario</label>
            <input
              onKeyUp={onChange}
              name="user_name"
              className="form-control"
              type="text"
              placeholder="Usuario"
            />
          </div>
          <br />
          <div className="">
            <label htmlFor="user_name">Contraseña</label>
            <input
              onKeyUp={onChange}
              name="password"
              className="form-control"
              type="password"
              placeholder="Contraseña"
            />
          </div>
        </div>
        <br />
        <div className="auth-buttons">
          <button type="button" onClick={singIn} className="btn btn-light">
            Ingresar
          </button>
          <br />
          <Link exact to="/registrar">
            Registrase
          </Link>
        </div>
      </form>
    </div>
  </div>
);

export default LogiView;
