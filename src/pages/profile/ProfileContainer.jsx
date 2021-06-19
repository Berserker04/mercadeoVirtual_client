import React, { Component } from "react";
import { connect } from "react-redux";
import Swal from "sweetalert2";

import { API } from "../../api";
import PublicationView from "./ProfileView";

class PublicationContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      publications: [],
      form: {
        first_name: "",
        last_name: "",
        document: null,
        cell_phone: null,
        user_name: "",
        email: "",
        password: "",
        role_id: "",
        permits: {
          edit: false,
          delete: false,
          hide: false,
          publish: false,
        },
      },
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    let user = this.props.getUser;
    let config = {
      headers: {
        authorization: `bearer ${this.props.getToken}`,
      },
    };

    API.GET(`/user/id/${user._id}`, {}, config).then(({ data }) => {
      if (data.ok) {
        let form = {
          ...data.body[0],
          ...data.body[0].person_id,
        };
        this.setState({ form });
      }
    });
  }

  onChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  actualizar = async () => {
    let user = this.props.getUser;
    let config = {
      headers: {
        authorization: `bearer ${this.props.getToken}`,
        user_id: user._id,
      },
    };

    let { user_name, email, password, role_id, permits, ...person } =
      this.state.form;

    let data = {
      ...person,
      user: {
        user_name,
        email,
        password,
      },
    };
    
    await API.PUT(`/user/${user._id}`, data, config)
      .then(({ data }) => {
        if (data.ok) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: data.message,
            showConfirmButton: false,
            timer: 2000,
          });
          this.loadData();
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: data.message,
            showConfirmButton: false,
            timer: 2000,
          });
        }
      })
      .catch((e) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: e.response.data.message,
          showConfirmButton: false,
          timer: 2000,
        });
      });
    this.setState({ loading: false });
  };

  render() {
    let { form } = this.state;
    return (
      <PublicationView
        form={form}
        onChange={this.onChange}
        actualizar={() => this.actualizar()}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    getToken: state.serviceReducer.token,
    getUser: state.usersReducer.user,
  };
};

const mapDispatchToProps = (Dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PublicationContainer);
