import React from "react";
import "../styles/Profile.scss";

const Friends = ({ data }) => (
  <div className="profile-info_friendsList">
    {data.map((d,i) => (
      <figure key={i} className="profile-info_photFriends">
        <img
          src={require("../../../Assets/images/profile.jpg")}
          alt="miniatua de amigos"
        />
        <p>{d.nick}</p>
      </figure>
    ))}
  </div>
);

export default Friends;
