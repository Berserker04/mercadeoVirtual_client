import React from "react";
import "./styles.css";
import Card from "../../components/card/Card";

const PublicationView = ({
  permits,
  reports,
  showRegister,
  showEdit,
  changeState,
  deletePublication,
}) => (
  <div className="body user-container">
    <div className="publicaton-header">
      <h1>Reportes</h1>
      {permits.publish && (
        <button className="m-20 btn btn-success" onClick={() => showRegister()}>
          Publicar
        </button>
      )}
    </div>
    <main className="body-card">
      {reports.length === 0 && <h2>Sin reportes</h2>}
      {reports.map((p) => (
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
