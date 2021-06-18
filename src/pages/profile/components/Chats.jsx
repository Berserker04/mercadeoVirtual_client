import React from "react";
import "../styles/Profile.scss";

const Chats = ({ data }) =>
  data.map((d,i) => (
    <div key={i} className="profile-chat_list">
      <figure className="profile-chat_photo">
        <img
          src={require("../../../Assets/images/profile.jpg")}
          alt="miniatua de amigos"
        />
      </figure>
      <div className="profile-chat_message">
        <p className="chat-date">
          {d.date} a las {d.time}
        </p>
        <p className="chat-nick"><strong>{d.nick}</strong> dice:</p>
        <p>{d.message}</p>
      </div>
    </div>
  ));

export default Chats;

// const Chats = ({ data }) => (
//     <div className="profile-chat_list">
//       {data.map((d) => (
//         <div>
//           <figure className="profile-chat_photo">
//             <img
//               src={require("../../../Assets/images/profile.jpg")}
//               alt="miniatua de amigos"
//             />
//           </figure>
//           <div className="profile-chat_message">
//             <p>
//               {d.date} a las {d.time}
//             </p>
//             <p>{d.nick} dice:</p>
//             <p>{d.message}</p>
//           </div>
//         </>
//       ))}
//     </div>
//   );