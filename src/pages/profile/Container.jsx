import React, { Component } from "react";
import ProfileView from "./View";

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [
        {
          nick: "Berserker",
        },
        {
          nick: "Kratoz",
        },
        {
          nick: "AfroGamer",
        },
        {
            nick: "Cheo",
          },
      ],
      recentViews: [
        {
          nick: "Berserker",
        },
        {
          nick: "Kratoz",
        },
        {
          nick: "AfroGamer",
        },
      ],
      chats: [
        {
          date: "15/11/2018",
          time: "15:20",
          nick: "Berserker",
          message: "Verde es el peor usuario del mundo",
        },
        {
          date: "15/11/2018",
          time: "15:20",
          nick: "Kratoz",
          message: "que rica la milanesa",
        },
        {
          date: "15/11/2018",
          time: "15:20",
          nick: "AfroGamer",
          message: "Me vendes tu casa?",
        },
        {
          date: "15/11/2018",
          time: "15:20",
          nick: "Cheo",
          message: "si yo roleo de gay",
        },
      ],
    };
  }

  render() {
    return (
      <ProfileView
        friends={this.state.friends}
        recentViews={this.state.recentViews}
        chats={this.state.chats}
      />
    );
  }
}

export default ProfileContainer;
