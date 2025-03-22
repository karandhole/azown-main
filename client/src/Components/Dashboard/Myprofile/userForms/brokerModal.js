import React from 'react'
import Modal from 'react-bootstrap/Modal';
import BrokerForm from './brokerForm';


const BrokerModal = (props) => {
  const closeModal = (x) => {
    props.toHide(x);
  };
  return (
    <>
    <Modal {...props} centered>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Register As A Broker
        </Modal.Title>
        <i
          className="float-end fa fa-times"
          onClick={() => closeModal(false)}
          style={{ fontSize: "1.5rem", cursor: "pointer" }}
        ></i>
      </Modal.Header>
      <Modal.Body className="pt-1 py-2 pb-3">
        <BrokerForm closeModal={closeModal} />
      </Modal.Body>
    </Modal>
  </>
  )
}

export default BrokerModal