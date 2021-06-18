import React from "react";

import { Modal, Button } from "react-bootstrap";

const ModalView = ({
  title,
  show,
  onHide,
  btnSuccess,
  btnCanceTitle,
  btnSuccessTitle,
  children
}) => (
  <Modal
    size="lg"
    show={show}
    onHide={() => onHide()}
    aria-labelledby="example-modal-sizes-title-lg"
  >
    <Modal.Header closeButton>
      <Modal.Title id="example-modal-sizes-title-lg">{title || ""}</Modal.Title>
    </Modal.Header>
    <Modal.Body>{children}</Modal.Body>
    <Modal.Footer>
      <Button className="btn btn-danger" onClick={() => onHide()}>
        {btnCanceTitle || "Cancelar"}
      </Button>
      <Button className="btn btn-success" onClick={() => btnSuccess()}>
        {btnSuccessTitle || "Envíar"}
      </Button>
    </Modal.Footer>
  </Modal>
);

export default ModalView;
