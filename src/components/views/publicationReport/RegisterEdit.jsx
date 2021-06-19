import React from "react";

const RegisterEdit = ({ form, onChange }) => (
  <form action="">
    <div className="row">
      <div className="col-12">
        <label htmlFor="user_name">Titulo *</label>
        <input
          onChange={onChange}
          name="title"
          className="form-control"
          type="text"
          placeholder="Titulo"
          value={form.title}
        />
      </div>
    </div>
    <br />
    <div className="row">
      <div className="col-12">
        <label htmlFor="user_name">Descripción *</label>
        <textarea
          onChange={onChange}
          name="description"
          className="form-control"
          type="text"
          placeholder="Descripción"
          value={form.description}
        />
      </div>
    </div>
  </form>
);

export default RegisterEdit;
