import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ModalMessage = ({ closeModal, title, type, children }) => {
  const handleClose = () => {
    closeModal(true);
  };

  return (
    <Modal show={true} onHide={handleClose}>
      <Modal.Header closeButton className={`bg-${type} text-white`}>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalMessage;
