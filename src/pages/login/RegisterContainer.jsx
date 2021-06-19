import React, { Component } from "react";
import Swal from "sweetalert2";

import RegisterView from "./RegisterView";
import { API } from "../../api";

class RegisterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        first_name: "",
        last_name: "",
        document: null,
        cell_phone: null,
        user_name: "",
        email: "",
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

  register = async () => {
    this.setState({ loading: true });

    let { user_name, email, password, ...person } = this.state.form;

    let data = {
      ...person,
      user: {
        user_name,
        email,
        password,
        user_id: null,
      },
    };

    await API.POST("/user", data).then(({ data }) => {
      if (data.ok) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: data.message,
          showConfirmButton: false,
          timer: 2000,
        });
        this.props.history.push("/login");
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
    return <RegisterView onChange={this.onChange} register={this.register} />;
  }
}

export default RegisterContainer;
