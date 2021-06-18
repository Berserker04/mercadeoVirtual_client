import React from "react";
import "./styles.css";

const HomeView = ({ amounts }) => (
  <div className="home-container">
    <h1>Estadísticas del negocio</h1>
    <div className="home-card-body">
      <div className="group-card">
        <div className="home-card card1">
          <div>
            <h3>Usuarios registrados</h3>
            <i className="fas fa-users icons"></i>
          </div>
          <span className="home-card-amount">{amounts.amountUsers}</span>
        </div>
        <div className="home-card card3">
          <div>
            <h3>Activos</h3>
            <div>
              <i class="fas fa-user-plus icons2"></i>
              <span className="home-card-amount">
                {amounts.amountUsersActive}
              </span>
            </div>
          </div>
          <div>
            <h3>Desactivo</h3>
            <i class="fas fa-user-times icons2"></i>
            <span className="home-card-amount">
              {amounts.amountUsersDesactive}
            </span>
          </div>
        </div>
      </div>
      <div className="group-card">
        <div className="home-card card2">
          <div>
            <h3>Reportes</h3>
            <i class="fas fa-file-invoice-dollar icons"></i>
          </div>
          <span className="home-card-amount">{amounts.amountReports}</span>
        </div>
        <div className="home-card card4">
          <div>
            <h3>Publicaciones</h3>
            <i class="far fa-file-alt icons"></i>
          </div>
          <span className="home-card-amount">{amounts.amountPublications}</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomeView;
