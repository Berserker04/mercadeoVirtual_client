import React, { Component } from "react";
import { connect } from "react-redux";
import Swal from "sweetalert2";

import { API } from "../../api";
import PublicationView from "./PublicationView";
import ModalView from "../../components/modal/ModalView";
import RegisterEdit from "../../components/views/publicationReport/RegisterEdit";

class PublicationContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      publications: [],
      form: {
        title: "",
        description: "",
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
        super_user: user._id,
      },
    };

    API.GET("/publication", {}, config).then(({ data }) => {
      if (data.ok) {
        this.setState({ publications: data.body });
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

  register = async () => {
    let user = this.props.getUser;
    let config = {
      headers: {
        authorization: `bearer ${this.props.getToken}`,
        super_user: user.user_id ? user.user_id : user._id,
      },
    };

    let data = {
      ...this.state.form,
      person_id: user.person_id,
    };

    await API.POST("/publication", data, config).then(({ data }) => {
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
  };

  actualizar = async () => {
    let user = this.props.getUser;
    let config = {
      headers: {
        authorization: `bearer ${this.props.getToken}`,
        super_user: user.user_id ? user.user_id : user._id,
      },
    };

    let data = this.state.form;

    await API.PUT(`/publication/${data._id}`, data, config).then(({ data }) => {
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
  };

  async deletePublication(id) {
    let config = {
      headers: {
        authorization: `bearer ${this.props.getToken}`,
      },
    };
    await API.DEL(`/publication/${id}`, config).then(({ data }) => {
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
  }

  closeModal() {
    let form = {
      title: "",
      description: "",
    };
    this.setState({
      showRegister: false,
      showEdit: false,
      form,
    });
  }

  render() {
    let { form, showRegister, showEdit } = this.state;
    return (
      <>
        <PublicationView
          changeState={async (form) => {
            form.state = form.state === "active" ? "desactive" : "active";
            await this.setState({ form });
            this.actualizar();
          }}
          showRegister={() => this.setState({ showRegister: true })}
          showEdit={(form) => {
            this.setState({ showEdit: true, form });
          }}
          deletePublication={(id) => this.deletePublication(id)}
          permits={this.props.getUser.permits}
          publications={this.state.publications}
        />

        <ModalView
          title="Registro de publicación"
          show={showRegister}
          btnSuccess={() => this.register()}
          onHide={() => this.closeModal()}
          btnSuccessTitle="Registrar"
        >
          <RegisterEdit form={form} onChange={this.onChange} />
        </ModalView>

        <ModalView
          title="Actualización de publicación"
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PublicationContainer);
