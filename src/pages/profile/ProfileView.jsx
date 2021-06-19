import React from "react";
import "./styles.css";

const ProfileView = ({ form, onChange, actualizar }) => (
  <div className="body profile-container">
    <div className="profile-header">
      <h1>Perfil</h1>
    </div>
    <main className="body-card">
      <form action="">
        <div className="row">
          <div className="col-6">
            <label htmlFor="user_name">Nombres *</label>
            <input
              onChange={onChange}
              name="first_name"
              className="form-control"
              type="text"
              placeholder="Nombres"
              value={form.first_name}
            />
          </div>
          <br />
          <div className="col-6">
            <label htmlFor="user_name">Apellidos *</label>
            <input
              onChange={onChange}
              name="last_name"
              className="form-control"
              type="text"
              placeholder="Apellidos"
              value={form.last_name}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <label htmlFor="user_name">Cédula *</label>
            <input
              onChange={onChange}
              name="document"
              className="form-control"
              type="text"
              placeholder="Cédula"
              value={form.document}
            />
          </div>
          <br />
          <div className="col-6">
            <label htmlFor="user_name">Correo *</label>
            <input
              onChange={onChange}
              name="email"
              className="form-control"
              type="text"
              placeholder="Correo"
              value={form.email}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <label htmlFor="user_name">Telefono celular *</label>
            <input
              onChange={onChange}
              name="cell_phone"
              className="form-control"
              type="text"
              placeholder="Celular"
              value={form.cell_phone}
            />
          </div>
          <br />
          <div className="col-6">
            <label htmlFor="user_name">Nombre de usuario *</label>
            <input
              onChange={onChange}
              name="user_name"
              className="form-control"
              type="text"
              placeholder="Usuario"
              value={form.user_name}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <label htmlFor="user_name">Contraseña *</label>
            <input
              onChange={onChange}
              name="password"
              className="form-control"
              type="password"
              placeholder="Contraseña"
              value={form.password}
            />
          </div>
          <div className="col-6">
            <br />
            <button
              type="button"
              onClick={() => actualizar()}
              className="btn btn-success"
            >
              Guardar
            </button>
          </div>
        </div>
      </form>
    </main>
  </div>
);

export default ProfileView;
