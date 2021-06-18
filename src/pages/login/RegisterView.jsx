import React from "react";
import { NavLink, Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import "./styles/styles.css";

const RegisterView = ({
  onChange,
  register,
}) => (
  <div className="auth-container">
    <div className="auth-body">
      <figure>
        <img height={100} width={100} src={logo} alt="" />
      </figure>
      <h1>Registro</h1>
      <form action="">
        <div className="row">
          <div className="col-6">
            <label htmlFor="user_name">Nombres *</label>
            <input
              onKeyUp={onChange}
              name="first_name"
              className="form-control"
              type="text"
              placeholder="Nombres"
            />
          </div>
          <br />
          <div className="col-6">
            <label htmlFor="user_name">Apellidos *</label>
            <input
              onKeyUp={onChange}
              name="last_name"
              className="form-control"
              type="text"
              placeholder="Apellidos"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <label htmlFor="user_name">Cédula *</label>
            <input
              onKeyUp={onChange}
              name="document"
              className="form-control"
              type="text"
              placeholder="Cédula"
            />
          </div>
          <br />
          <div className="col-6">
            <label htmlFor="user_name">Correo *</label>
            <input
              onKeyUp={onChange}
              name="email"
              className="form-control"
              type="text"
              placeholder="Correo"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <label htmlFor="user_name">Telefono celular *</label>
            <input
              onKeyUp={onChange}
              name="cell_phone"
              className="form-control"
              type="text"
              placeholder="Celular"
            />
          </div>
          <br />
          <div className="col-6">
            <label htmlFor="user_name">Nombre de usuario *</label>
            <input
              onKeyUp={onChange}
              name="user_name"
              className="form-control"
              type="text"
              placeholder="Usuario"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <label htmlFor="user_name">Contraseña *</label>
            <input
              onKeyUp={onChange}
              name="password"
              className="form-control"
              type="password"
              placeholder="Contraseña"
            />
          </div>
          <br />
          <div className="auth-buttons col-6">
            <br />
            <button type="button" onClick={register} className="btn btn-light">
              Registrar
            </button>
            <br />
            <Link exact to="/login">
              Ingresar
            </Link>
          </div>
        </div>
      </form>
    </div>
  </div>
);

export default RegisterView;
