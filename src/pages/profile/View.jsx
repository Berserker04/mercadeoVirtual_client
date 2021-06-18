import React from "react";
// import "./styles/Profile.scss";
import Friends from "./components/Friends";
import Chats from "./components/Chats";

const ProfileView = ({ friends, recentViews, chats }) => (
  <main id="profile" className="profile scrollBar">
    <section className="profile-info">
      <h2 className="profile-nick">Berserker</h2>
      <figure className="profile-info_foto">
        <img
          src={require("../../Assets/images/profile.jpg")}
          alt="foto del perfil"
        />
      </figure>
      <div className="profile-info_rol">
        <p>Okplayer</p>
        <p>Administrador</p>
      </div>
      <div className="profile-info_links">
        <i className="far fa-comment-dots"> Enviar mensaje al usuario</i>
        <i className="far fa-comment-dots"> Buscar mensaje recientes</i>
        <i className="far fa-comment-dots"> Buscar temas iniciados recientes</i>
      </div>
      <div className="profile-info_state">
        <div>
          <p>Fecha de <br/> ingreso: </p>
          <p>02/05/2020</p>
        </div>
        <div>
          <p>Actividad <br/> actual: </p>
          <p>Viendo <br/> manager</p>
        </div>
        <div>
          <p>Últiima <br/> actividad: </p>
          <span>Hoy 20:57</span>
        </div>
      </div>
      <div className="profile-info_friends">
        <div className="profile-info_friends_header">
          <p>
            <span>{"71 amigos"}</span>
          </p>
          {/* <a href="#">Ver más</a> */}
        </div>
        <Friends data={friends} />
      </div>
      <div className="profile-info_views">
        <h4>Visitas recientes</h4>
        <p>{recentViews.map((d) => d.nick + ", ")}</p>
        <p>
          Este perfil ha tenido <br/> <span>80.000</span> Visitas
        </p>
      </div>
    </section>
    <section className="profile-chat">
      <h4>24 mensajes de Visitas</h4>
      <div className="profile-chat_textArea">
          Librería de texto
      </div>
      <Chats data={chats} />
    </section>
  </main>
);

export default ProfileView;
