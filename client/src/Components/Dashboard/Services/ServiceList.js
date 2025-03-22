import React, { useContext } from "react";
import { ServiceContext } from "../../../context/ServiceContext";
import { Modal, Tab, Tabs } from "react-bootstrap";
import ServiceLead from "./ServiceLead";

const ServiceList = ({ service }) => {
  const context = useContext(ServiceContext);
  const { venderOwnServiceData, venderOwnServices  , serviceLeads,
    getServiceLeads } = context;
  const [show, setShow] = React.useState(false);
 

  return (
    <>
      <tr key={service._id}>
        <td>
          <a>
            {service.service_name}
          </a>
        </td>
        <td>
          Rs. {service.service_charge + " "} / {" " + service.charge_unit}
        </td>
        <td>{service.createdAt && service.createdAt.slice(0, 10)}</td>
        <td>
          <div
            className="_leads_action"
            onClick={() => {
              setShow(!show);
              getServiceLeads(service.service_id,service.vender_id);
            }}
          >
            <i className="fas fa-eye" />
          </div>
        </td>
        <td className="m2_hide">
          <div className="_leads_action">
            <i className="fas fa-edit" />
          </div>
        </td>
      </tr>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        //   style={{  height: '100%', margin: '0', padding: '0', overflow: 'hidden'}}
        size="xl"
        scrollable={true}
      >
        <Modal.Header>
          <Modal.Title id="example-custom-modal-styling-title">
            Service Leads
          </Modal.Title>
          <i
            className="float-end fa fa-times"
            onClick={() => {
              setShow(false);
            }}
            style={{ cursor: "pointer" }}
          ></i>
        </Modal.Header>
        <Modal.Body>
          <Tabs defaultActiveKey="All" id="uncontrolled-tab-example"  className="flex-fill">
            <Tab eventKey="All" title="All Lead">
            <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="mb-0">Order Status</h4>
                </div>
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table table-lg table-hover">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th className="m2_hide">Phone No</th>
                          <th>Status</th>
                          <th>Lead Date</th>
                        </tr>
                      </thead>
                      <tbody>
                      {serviceLeads.map((lead) => (
                        <tr>
                          <td>
                            <a >
                                {lead.client_name}
                            </a>
                          </td>
                          <td className="m2_hide">{lead.client_phone}</td>
                          <td>
                            <div className="label text-success bg-success-light">
                                {lead.lead_stage ==0 ?  "New One" : lead.lead_stage ==10 ? "Pending" : lead.lead_stage == 20 ? "Completed" :"Cancel"}
                            </div>
                          </td>
                         
                          <td>{lead.createdAt && lead.createdAt.slice(0,10)}</td>
                        </tr>

                            
                        ))}
                     
                             
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
            </Tab>
            <Tab eventKey="New" title="New Lead" >
           <ServiceLead stage={0} leads={serviceLeads} />
            </Tab>
            <Tab eventKey="Pending" title="Pending">
            <ServiceLead stage={10} leads={serviceLeads} />
            </Tab>
            <Tab eventKey="Cancel" title="Cancel" >
            <ServiceLead stage={-10} leads={serviceLeads} />
            </Tab>
            <Tab eventKey="Completed" title="Completed" >
            <ServiceLead stage={20} leads={serviceLeads} />
            </Tab>
          </Tabs>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ServiceList;
