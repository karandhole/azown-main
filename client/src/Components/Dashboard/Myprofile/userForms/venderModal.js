import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import BrokerForm from './brokerForm';
import VendorForm from './vendorForm';


const VenderModal = (props) => {
    const closeModal = (x) =>{
        props.toHide(x);
    }
  return (
    <>
    <Modal
      {...props}
      // size="lg"
      // aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
          Register As Vender
        </Modal.Title>
         <i className='float-end fa fa-times' onClick={()=>closeModal(false)} style={{fontSize:'1.5rem',cursor:'pointer'}}></i> 
      </Modal.Header>
      <Modal.Body className="pt-1 py-2 pb-3">
        {/* <h4>Centered Modal</h4> */}
       <VendorForm closeModal={closeModal} />
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
    </>
  )
}

export default VenderModal