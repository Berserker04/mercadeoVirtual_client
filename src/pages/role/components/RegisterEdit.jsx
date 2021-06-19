import React from "react";

const RegisterEdit = ({ form, onChange }) => {
  return (
    <form action="">
      <div className="row">
        <div className="col-6">
          <label htmlFor="user_name">Rol *</label>
          <input
            onChange={onChange}
            name="name"
            className="form-control"
            type="text"
            placeholder="Rol"
            value={form.name}
          />
        </div>
      </div>
    </form>
  );
};

export default RegisterEdit;
