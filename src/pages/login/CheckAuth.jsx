import React, { Component } from "react";
import { API } from "../../api";
import { connect } from "react-redux";
import { Token, delStorage } from "../../redux/actions/services";
import { User } from "../../redux/actions/users";
import { Redirect } from "react-router";

class CheckAuth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      isCheck: false,
    };
  }

  componentDidMount() {
    this.checkToken();
  }

  async checkToken() {
    let token = localStorage.getItem("token");

    if (token) {
      try {
        let config = {
          headers: {
            authorization: `bearer ${token}`,
          },
        };
        await API.GET("/login", {}, config).then(({ data }) => {
          if (!data.ok) {
            this.props.delStorage("token");
          } else {
            this.props.setUser(data.body.user);
            this.props.setToken(token);
            // this.setState({ loading: false, isCheck: true });
          }
        });
      } catch (error) {
        console.log(error);
      }
    }

    this.setState({ loading: false });

  }

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    } else if (this.state.isCheck || this.props.getToken) {
      return this.props.children;
    }

    return <Redirect from="/" to="/login" />;
  }
}

const mapStateToProps = (reducers) => {
  return {
    getToken: reducers.serviceReducer.token,
  };
};

const mapDispatchToProps = (Dispatch) => {
  return {
    setToken: (newToken) => Dispatch(Token(newToken)),
    setUser: (user) => Dispatch(User(user)),
    delStorage: (key) => delStorage(key),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckAuth);
