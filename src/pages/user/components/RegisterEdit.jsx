import React from "react";

const RegisterEdit = ({ form, onChange, onChangePermit, roles, onlyRead }) => {
  return (
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
            disabled={onlyRead}
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
            disabled={onlyRead}
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
            disabled={onlyRead}
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
            disabled={onlyRead}
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
            disabled={onlyRead}
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
            disabled={onlyRead}
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
            disabled={onlyRead}
          />
        </div>
        <br />
        <div className="col-6">
          <label htmlFor="user_name">Rol de usuario *</label>
          <select
            className="form-control"
            onChange={onChange}
            name="role_id"
            id=""
            disabled={onlyRead}
          >
            {roles &&
              roles.map((role, i) => (
                <option
                  key={i}
                  value={role._id}
                  selected={form.role_id === role._id ? true : false}
                >
                  {role.name}
                </option>
              ))}
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <label htmlFor="user_name">Permisos *</label>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              name="edit"
              onChange={onChangePermit}
              checked={form.permits.edit ? true : false}
              disabled={onlyRead}
            />
            <label class="form-check-label" for="flexCheckChecked">
              Editar
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              name="delete"
              onChange={onChangePermit}
              checked={form.permits.delete ? true : false}
              disabled={onlyRead}
            />
            <label class="form-check-label" for="flexCheckChecked">
              Eliminar
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              name="hide"
              onChange={onChangePermit}
              checked={form.permits.hide ? true : false}
              disabled={onlyRead}
            />
            <label class="form-check-label" for="flexCheckChecked">
              Ocultar
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              name="publish"
              onChange={onChangePermit}
              checked={form.permits.publish ? true : false}
              disabled={onlyRead}
            />
            <label class="form-check-label" for="flexCheckChecked">
              Publicar
            </label>
          </div>
          {/* <input
            onChange={null}
            name="permitEdit"
            className="form-control"
            type="checkbox"
            placeholder="Contraseña"
          /> */}
        </div>
      </div>
    </form>
  );
};

export default RegisterEdit;
