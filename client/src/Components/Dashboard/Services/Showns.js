import { useContext, useState,useEffect,useParams } from "react";
import { UserContext } from "../../../context/UserContext";
import Modal from "react-bootstrap/Modal";
import Tabs from "./Tabs";
import "./tabs.css";
import { ServiceContext } from "../../../context/ServiceContext";
import { ServiceData } from "./localAPI";

const Showns = () => {
  const context = useContext(ServiceContext);
  const { vendersData,vendata, shows } = context;
  const [show, setShow] = useState(false);

// console.log("MAi ven Data hu",vendata)
  useEffect(()=>{
    vendersData()
  },[])
  
  return ( 
    <>
      <div className="col-lg-9 col-md-8 col-sm-12">
      <div className="row">
        {/* {shows.map((service) => {
          const serviceImg = ServiceData.find(
            (serviceObj) => serviceObj.service_name === service.service_name
          )?.service_img; */}
            {vendata.map((service)=>{ 
             const serviceImg = ServiceData.find(
              (serviceObj) => serviceObj.service_name === service.service_name
            )?.service_img; 
            
           return ( 
            <div className=" col-lg-6 col-md-12 col-sm-12" key={service._id} >
              <div className="property-listing list_view">
                <div>
                  <img
                    src={serviceImg}
                    className="img-fluid"
                    alt="sdsd"
                    style={{ width: 150, height: 150 }}
                  />
                  </div>
                  <div className="list_view_flex">
                    <div className="listing-detail-wrapper mt-2">
                      <div className="listing-short-detail-wrap">
                        <div className="_card_list_flex">
                          <div className="_card_flex_01">
                            <h4 className="listing-name verified">
                              <ul style={{ lineHeight: 0.5 }}>
                                <li style={{ fontSize: 17 }}>
                                  <i className="ti-settings pr-2"></i>
                                  {service.vender_id}
                                </li>
                                <li style={{ color: "grey" }}>
                                  <i className="ti-world pr-2"></i>
                                  {/* {service.} */}
                                </li>
                                <li style={{ color: "grey" }}>
                                  <i className="ti-receipt pr-2"></i>
                                  {service.service_description}
                                </li>
                              </ul>
                            </h4>
                          </div>
                        </div>
                        <div
                          className="listing-detail-footer"
                          style={{ marginLeft: 0 }}
                        >
                          <div className="footer-first">
                            <div className="">
                              <li style={{ marginLeft: 55 }}>
                                <i
                                  className="ti-money  pr-2"
                                  style={{ fontSize: 20 }}
                                >
                                  {service.service_charge}
                                </i>
                              </li>
                            </div>
                          </div>
                          <div className="footer-flex">
                            <button
                              style={{
                                backgroundColor: "#27ae60",
                                color: "white",
                                cursor: "pointer",
                                outline: "none",
                                borderRadius: 5,
                              }}
                              onClick={() => setShow(true)}
                            >
                              View Leads
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             )})} 
        </div>
      

                  


      </div>

      {/* </div> */}

      {/* <Modal
        show={show}
        onHide={() => setShow(false)}
        size="xl"
        dialogClassName="modal-100w"
      >
        <Modal.Header>
          <Modal.Title>Service Leads</Modal.Title>
          <i
            className="float-end fa fa-times"
            onClick={() => {
              setShow(false);
            }}
            style={{ cursor: "pointer" }}
          ></i>
        </Modal.Header>
        <Modal.Body className="mbody">
          <Tabs />
        </Modal.Body>
      </Modal> */}
    </>
  );
};

export default Showns;
