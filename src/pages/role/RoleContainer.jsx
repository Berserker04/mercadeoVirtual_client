import React, { Component } from "react";
import { connect } from "react-redux";
import Swal from "sweetalert2";

import RoleView from "./RoleView";
import { API } from "../../api";
import ModalView from "../../components/modal/ModalView";
import RegisterEdit from "./components/RegisterEdit";

class RoleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roles: [],
      filter: [],
      form: {
        name: "",
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
        user_id: user._id,
      },
    };

    API.GET("/role", {}, config).then(({ data }) => {
      if (data.ok) {
        this.setState({ roles: data.body, filter: data.body });
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

  filterRole(text) {
    let { roles } = this.state;

    let result = roles.filter((r) => {
      if (r.name.includes(text)) return true;
      else return false;
    });

    if (text === "") result = roles;
    this.setState({ filter: result });
  }

  register = async () => {
    let user = this.props.getUser;
    let config = {
      headers: {
        authorization: `bearer ${this.props.getToken}`,
        user_id: user._id,
      },
    };

    await API.POST("/role", this.state.form, config).then(({ data }) => {
      if (data.ok) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: data.message,
          showConfirmButton: false,
          timer: 2000,
        });
        this.loadData();
        this.closeModal();
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

  actualizar = async () => {
    let user = this.props.getUser;
    let config = {
      headers: {
        authorization: `bearer ${this.props.getToken}`,
        user_id: user._id,
      },
    };

    await API.PUT(`/role/${this.state.form._id}`, this.state.form, config)
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
          this.closeModal();
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

  closeModal() {
    let form = { name: "" };
    this.setState({
      showRegister: false,
      showEdit: false,
      form,
    });
  }

  deleteRole(id) {
    let user = this.props.getUser;
    let config = {
      headers: {
        authorization: `bearer ${this.props.getToken}`,
        user_id: user._id,
      },
    };
    API.DEL(`/role/${id}`, config)
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
          this.closeModal();
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
  }

  render() {
    let { form, filter, showRegister, showEdit } = this.state;
    return (
      <>
        <RoleView
          roles={filter}
          filterRole={(text) => this.filterRole(text)}
          showRegister={() => this.setState({ showRegister: true })}
          showEdit={(role) => {
            this.setState({ showEdit: true, form: role });
          }}
          deleteRole={(id) => this.deleteRole(id)}
        />

        <ModalView
          title="Registro de rol"
          show={showRegister}
          btnSuccess={() => this.register()}
          onHide={() => this.closeModal()}
          btnSuccessTitle="Registrar"
        >
          <RegisterEdit
            form={form}
            onChange={this.onChange}
            onChangePermit={this.onChangePermit}
          />
        </ModalView>

        <ModalView
          title="Actualización de rol"
          show={showEdit}
          btnSuccess={() => this.actualizar()}
          onHide={() => this.closeModal()}
          btnSuccessTitle="Guardar"
        >
          <RegisterEdit
            form={form}
            onChange={this.onChange}
            onChangePermit={this.onChangePermit}
          />
        </ModalView>
      </>
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

export default connect(mapStateToProps, mapDispatchToProps)(RoleContainer);
