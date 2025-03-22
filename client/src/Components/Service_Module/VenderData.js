import React from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ServiceContext } from "../../context/ServiceContext";

const VenderData = ({ vender, id }) => {
  const serviceContext = React.useContext(ServiceContext);
  const { createServiceLead } = serviceContext;
  const [show, setShow] = React.useState(false);
  const [disableBtn , setDisableBtn] = React.useState(false);

  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="grid_agents">
          {/* <div className="elio_mx_list theme-bg-2" style={{fontSize:12}}>102 Customers</div> */}
          <div className="grid_agents-wrap px-3 pt-2 pb-3">
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

            {/* <div className="fr-grid-deatil"> */}
              {/* <span>
                            <i className="ti-location-pin mr-1"></i>
                            {vender.city}
                          </span> */}
             <h5 className="fr-can-name text-center pt-1 pb-2">
                <Link to={`/user-detail/${vender.vender_id}`}>
                 {vender.vender_name}
                </Link>
              </h5>
              <h6 className="fr-can-name pb-1">
              <i className="fas fa-rupee-sign mr-3"></i> {vender.service_charge} / {vender.charge_unit}
              </h6>
              {/* <h6 className="fr-can-name">Rating: {vender.rating}</h6>
               */}
              <h6 className="fr-can-name pb-1"><i className="fa fa-cog mr-3"></i>{vender.service_name}</h6>
              <h6 className="fr-can-name pb-1 mb-2"><i className="ti-receipt mr-3 mb-2"></i>{vender.sub_service_name}</h6>
            {/* </div> */}
            <div className="d-flex justify-content-center">
            <Button
              className='theme-bg  rounded text-white p-2 mr-2 border-0'
              onClick={() => {
                setShow(!show);
              }}
            >
            Service Detail
            </Button>
           
            {!disableBtn ?  <Button
              className='theme-bg  rounded text-white py-2 px-4 border-0'
               onClick={() => {
                createServiceLead({
                  vender_id: vender.vender_id,
                  service_id: id,
                  _id:vender._id,
                } );
                setDisableBtn(true);
              }}
              disabled={vender &&  vender.service_leads && vender.service_leads.includes(JSON.parse(localStorage.getItem("userDetail")).user._id)}
            >
            
              Request
            </Button> : <Button className='theme-bg px-4 py-2 rounded text-white border-0' disabled
            >
                Requested
              </Button> }
              </div>
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
          <div className="col-7"><p className="py-0 my-0">{vender.vender_name}</p></div>
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

export default VenderData;
