import React, { Component } from "react";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import Swal from "sweetalert2";

import LoginView from "./LoginView";
import { API } from "../../api";
import { Token, setStorage } from "../../redux/actions/services";
import { User } from "../../redux/actions/users";

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      form: {
        user_name: "",
        password: "",
      },
    };
  }

  onChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  singIn = async () => {
    this.setState({ loading: true });
    await API.POST("/login", this.state.form).then(({ data }) => {
      if (data.ok) {
        this.props.setStorage("token", data.body.token);
        this.props.setUser(data.body.user);
        this.props.setToken(data.body.token);
      } else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: data.message,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
    this.setState({ loading: false });
  };

  render() {
    if (this.props.getToken) {
      return <Redirect to="/" />;
    }
    return <LoginView onChange={this.onChange} singIn={this.singIn} />;
  }
}

const mapStateToProps = (state) => {
  return {
    getToken: state.serviceReducer.token,
  };
};

const mapDispatchToProps = (Dispatch) => {
  return {
    setToken: (newToken) => Dispatch(Token(newToken)),
    setUser: (user) => Dispatch(User(user)),
    setStorage: (key, value) => setStorage(key, value),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
