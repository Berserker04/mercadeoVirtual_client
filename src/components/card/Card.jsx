import React from "react";
import "./styles.css";

const Card = ({ item, permits, showEdit, changeState, deletePublication }) => (
  <div className="publication-card-container">
    <div className="publication-card-header">
      <h2>{item.title}</h2>
      <div>
        <p>{item.person_id.first_name}</p>
        <span>{item.created_at.split("T")[0]}</span>
      </div>
    </div>
    <hr />
    <article>
      <p>{item.description}</p>
    </article>
    <hr />
    <div className="btn-action">
      {permits.hide && (
        <button
          onClick={() => changeState(item)}
          className={`btn ${
            item.state === "active"
              ? "btn-outline-success"
              : "btn-outline-danger"
          }`}
        >
          <i
            class={`${
              item.state === "active" ? "fas fa-eye" : "fas fa-eye-slash"
            }`}
          ></i>
        </button>
      )}

      {permits.edit && (
        <button
          onClick={() => showEdit(item)}
          className="btn btn-outline-warning"
        >
          <i class="fas fa-edit"></i>
        </button>
      )}

      {permits.delete && (
        <button
          onClick={() => deletePublication(item._id)}
          className="btn btn-outline-danger"
        >
          <i class="fas fa-trash-alt"></i>
        </button>
      )}
    </div>
  </div>
);

export default Card;
