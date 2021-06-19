import React from "react";
import "./styles.css";

const RoleView = ({ roles, showRegister, showEdit, deleteRole, filterRole }) => (
  <div className="body role-container">
    <h1>Roles</h1>
    <div className="body-card">
      <div className="row body-card-header">
        <div className="col-6">
          <input
            onChange={({ target }) => filterRole(target.value)}
            className="form-control"
            type="text"
            placeholder="Buscar rol"
          />
        </div>
        <div className="col-6">
          <button className="btn btn-success" onClick={() => showRegister()}>
            Crear
          </button>
        </div>
      </div>
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Rol</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {roles.length === 0 && (
            <tr>
              <td colSpan={7} style={{ textAlign: "center" }}>
                No hay roles registrados.
              </td>
            </tr>
          )}
          {roles.map((role, i) => (
            <tr key={role._id}>
              <td>{i + 1}</td>
              <td>{role.name}</td>
              <td>
                <button
                  onClick={() => showEdit(role)}
                  className="btn btn-warning"
                >
                  <i class="fas fa-edit"></i>
                </button>
                <button
                  onClick={() => deleteRole(role._id)}
                  className="btn btn-danger"
                >
                  <i class="fas fa-trash-alt"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default RoleView;
