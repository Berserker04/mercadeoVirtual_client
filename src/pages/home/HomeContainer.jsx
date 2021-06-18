import React, { Component } from "react";

import HomeView from "./HomeView";
import { API } from "../../api";
import { connect } from "react-redux";

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountUsers: 0,
      amountUsersActive: 0,
      amountUsersDesactive: 0,
      amountReports: 0,
      amountPublications: 0,
    };
  }

  componentDidMount() {
    let user = this.props.getUser;
    let config = {
      headers: {
        authorization: `bearer ${this.props.getToken}`,
        super_user: user.user_id ? user.user_id : user._id,
      },
    };

    API.GET(
      [
        "statistic/user",
        "statistic/user/active",
        "statistic/user/desactive",
        "statistic/report",
        "statistic/publication",
      ],
      {},
      config
    ).then(async (d) => {
      let amountUsers = await d[0].then(({ data }) => data.body);
      let amountUsersActive = await d[1].then(({ data }) => data.body);
      let amountUsersDesactive = await d[2].then(({ data }) => data.body);
      let amountReports = await d[3].then(({ data }) => data.body);
      let amountPublications = await d[4].then(({ data }) => data.body);

      this.setState({
        amountUsers,
        amountUsersActive,
        amountUsersDesactive,
        amountReports,
        amountPublications,
      });
    });
  }

  render() {
    return <HomeView amounts={this.state} />;
  }
}

const mapStateToProps = (state) => {
  return {
    getToken: state.serviceReducer.token,
    getUser: state.usersReducer.user,
  };
};

const mapDispatchToProps = (Dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
