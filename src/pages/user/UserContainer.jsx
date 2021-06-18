import React, { Component } from "react";
import { connect } from "react-redux";
import Swal from "sweetalert2";

import UserView from "./UserView";
import { API } from "../../api";
import ModalView from "./components/ModalView";
import RegisterEdit from "./components/views/RegisterEdit";

class UserContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      filter: [],
      roles: [],
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
        user_id: user._id,
      },
    };

    API.GET("/user", {}, config).then(({ data }) => {
      if (data.ok) {
        this.setState({ users: data.body, filter: data.body });
      }
    });

    API.GET("/role", {}, config).then(({ data }) => {
      if (data.ok) {
        this.setState({ roles: data.body });
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

  onChangePermit = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        permits: {
          ...this.state.form.permits,
          [e.target.name]: e.target.checked,
        },
      },
    });
  };

  filterUser(text) {
    let { filter, users } = this.state;

    console.log(filter);

    let result = users.filter((u) => {
      if (
        u.email.includes(text) ||
        u.person_id.first_name.includes(text) ||
        u.person_id.first_name.includes(text)
        // u.person_id.cell_phone.includes(text)
      )
        return true;
      else return false;
    });

    if (text === "") result = users;
    this.setState({ filter: result });
  }

  register = async () => {
    this.setState({ loading: true });

    let { user_name, email, password, role_id, permits, ...person } =
      this.state.form;

    let data = {
      ...person,
      user: {
        user_name,
        email,
        password,
        permits,
        user_id: this.props.getUser._id,
        role_id: !role_id ? this.state.roles[0]._id : "",
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
    this.setState({ loading: true });

    let { user_name, email, password, role_id, permits, ...person } =
      this.state.form;

    let data = {
      ...person,
      user: {
        user_name,
        email,
        password,
        permits,
        user_id: this.props.getUser._id,
        role_id: !role_id ? this.state.roles[0]._id : "",
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

  upData(user) {
    let form = {
      ...user.person_id,
      ...user,
    };
    this.setState({ form });
  }

  changeState(user_id, state) {
    let user = this.props.getUser;
    let config = {
      headers: {
        authorization: `bearer ${this.props.getToken}`,
        SuperUser_Id: user._id,
      },
    };

    let data = {
      state: state === "active" ? "desactive" : "active",
    };

    API.PATCH(`/user/${user_id}`, data, config).then(({ data }) => {
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
    });
  }

  closeModal() {
    let form = {
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
    };
    this.setState({
      showRegister: false,
      showUser: false,
      showEdit: false,
      form,
    });
  }

  render() {
    let { form, filter, roles, showRegister, showUser, showEdit } = this.state;
    return (
      <>
        <UserView
          users={filter}
          changeState={(id, state) => this.changeState(id, state)}
          filterUser={(text) => this.filterUser(text)}
          showRegister={() => this.setState({ showRegister: true })}
          showEdit={(user) => {
            console.log(user);
            this.upData(user);
            this.setState({ showEdit: true });
          }}
          showUser={(user) => {
            this.upData(user);
            this.setState({ showUser: true });
          }}
        />

        <ModalView
          title="Registro de usuario"
          show={showRegister}
          btnSuccess={() => this.register()}
          onHide={() => this.closeModal()}
          btnSuccessTitle="Registrar"
        >
          <RegisterEdit
            form={form}
            roles={roles}
            onChange={this.onChange}
            onChangePermit={this.onChangePermit}
          />
        </ModalView>

        <ModalView
          title="Detalle de usuario"
          show={showUser}
          btnSuccess={() => this.closeModal()}
          onHide={() => this.closeModal()}
          btnSuccessTitle="Cerrar"
        >
          <RegisterEdit form={form} roles={roles} onlyRead={true} />
        </ModalView>

        <ModalView
          title="Actualización de usuario"
          show={showEdit}
          btnSuccess={() => this.actualizar()}
          onHide={() => this.closeModal()}
          btnSuccessTitle="Guardar"
        >
          <RegisterEdit
            form={form}
            roles={roles}
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

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
