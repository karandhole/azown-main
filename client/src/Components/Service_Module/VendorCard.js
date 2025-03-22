import React from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ServiceContext } from "../../context/ServiceContext";

const VendorCard = ({ vender,name }) => {
  const serviceContext = React.useContext(ServiceContext);
  const [show, setShow] = React.useState(false);
  const [disableBtn , setDisableBtn] = React.useState(false);

  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="grid_agents">
                      {/* <div className="elio_mx_list theme-bg-2">
                        102 Listings
                      </div> */}
                      <div className="grid_agents-wrap p-3">
                        <div className="fr-grid-thumb">
                          <a>
                            <span className="verified">
                              <img
                                src="assets/img/verified.svg"
                                className="verify mx-auto"
                                alt=""
                              />
                            </span>
                            <img
                              src="assets/img/team-1.jpg"
                              className="img-fluid mx-auto"
                              alt=""
                            />
                          </a>
                        </div>

                        <div className="fr-grid-deatil">
                          
                          <h6 className="fr-can-name py-1">
                            Rs. {vender.service_charge} / {vender.charge_unit}
                          </h6>
                          <h6 className="fr-can-name py-1">{vender.service_name}</h6>
                          <h6 className="fr-can-name py-1 pb-2">
                            {vender.sub_service_name}
                          </h6>


                         
                        </div>
                    <Button className="theme-bg px-4 py-2 rounded text-white border-0 w-100" onClick={()=>{setShow(!show)}}>Service Detail</Button>
                                           
                      </div>
                    </div>
                  </div>
      <Modal
        show={show}
        onHide={() => {
          setShow(!show);
        }}
        size="l"
        style={{overflowY:"auto"}}
      >
         <Modal.Header className="py-3">
          <Modal.Title> Service Details</Modal.Title>
          <i
            className="float-end fa fa-times"
            onClick={() => {
              setShow(false);
            }}
            style={{ cursor: "pointer" }}
          ></i>
        </Modal.Header>
        <Modal.Body className="px-3 py-4" style={{color:'#2D3954'}}>
          <div className="row">
          <div className="col-5"><h5>Vender Name</h5></div>
          <div className="col-7"><p className="py-0 my-0">{name}</p></div>
          </div>
          <div className="row">
          <div className="col-5"><h5>Service Name</h5></div>
          <div className="col-7"><p className="py-0 my-0">{vender.service_name}</p></div>
          </div>
          <div className="row">
          <div className="col-5"><h5>Sub Service Name</h5></div>
          <div className="col-7"><p className="py-0 my-0">{vender.sub_service_name}</p></div>
          </div>
          <div className="row">
          <div className="col-5"><h5>Service Charge</h5></div>
          <div className="col-7"><strong className="py-0 my-0">{vender.service_charge} / {vender.charge_unit}</strong></div>
          </div>
          <div className="row">
          <div className="col-5"><h5>Service Description</h5></div>
          <div className="col-7"><p className="py-0 my-0">{vender.service_description ? vender.service_description : 'No description found'}</p></div>
          </div>
        </Modal.Body>
        <Modal.Footer className="py-2">
          <Button className='theme-bg px-4 py-2 rounded text-white border-0'   onClick={() => {
              setShow(false);
            }}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default VendorCard;
