import React from "react";
import "./styles.css";

const UserView = ({
  users,
  showRegister,
  showEdit,
  showUser,
  changeState,
  filterUser,
}) => (
  <div className="body user-container">
    <h1>Usuarios</h1>
    <div className="body-card">
      <div className="row body-card-header">
        <div className="col-6">
          <input
            onChange={({ target }) => filterUser(target.value)}
            className="form-control"
            type="text"
            placeholder="Buscar usuario por nombre, apellido, correo"
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
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Correos</th>
            <th>Celular</th>
            <th>Estado</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 && (
            <tr>
              <td colSpan={7} style={{ textAlign: "center" }}>
                No hay usuarios registrados.
              </td>
            </tr>
          )}
          {users.map((user, i) => (
            <tr key={user._id}>
              <td>{i + 1}</td>
              <td>{user.person_id.first_name}</td>
              <td>{user.person_id.last_name}</td>
              <td>{user.email}</td>
              <td>{user.person_id.cell_phone}</td>
              <td>
                <button
                  onClick={() => changeState(user._id, user.state)}
                  className={`btn ${
                    user.state === "active"
                      ? "btn-outline-success"
                      : "btn-outline-danger"
                  }`}
                >
                  <i className={`fas fa-power-off btn-icon`}></i>
                </button>
              </td>
              <td>
                <button onClick={() => showUser(user)} className="btn btn-info">
                  <i class="fas fa-eye"></i>
                </button>
                <button
                  onClick={() => showEdit(user)}
                  className="btn btn-warning"
                >
                  <i class="fas fa-edit"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default UserView;
