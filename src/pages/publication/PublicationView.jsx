import React from "react";
import "./styles.css";
import Card from "../../components/card/Card";

const PublicationView = ({
  permits,
  publications,
  showRegister,
  showEdit,
  changeState,
  deletePublication,
}) => (
  <div className="body publicaton-container">
    <div className="publicaton-header">
      <h1>Publicaciones</h1>
      {permits.publish && (
        <button className="m-20 btn btn-success" onClick={() => showRegister()}>
          Publicar
        </button>
      )}
    </div>
    <main className="body-card">
      {publications.length === 0 && <h3>Sin publicaiones</h3>}
      {publications.map((p) => (
        <Card
          key={p._id}
          item={p}
          permits={permits}
          showEdit={(publicacion) => showEdit(publicacion)}
          changeState={(publicacion) => changeState(publicacion)}
          deletePublication={(publicacion) => deletePublication(publicacion)}
        />
      ))}
    </main>
  </div>
);

export default PublicationView;
