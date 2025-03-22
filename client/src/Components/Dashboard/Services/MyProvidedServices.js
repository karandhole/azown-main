import React, { useContext, useEffect } from "react";
import { ServiceContext } from "../../../context/ServiceContext";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalTitle,
  Moda,
  Button,
  Tabs,
  Tab,
} from "react-bootstrap";

import ServiceLead from "./ServiceLead";
import ServiceList from "./ServiceList";

const MyProvidedServices = () => {
  const context = useContext(ServiceContext);
  const { venderOwnServiceData, venderOwnServices } = context;
  const [show, setShow] = React.useState(false);

  useEffect(() => {
    venderOwnServices();
  }, []);

  return (
    <>
      <div className="col-lg-9 col-md-8 col-sm-12">
        <div className="dashboard-body mb-3">
          {/* <h3>My Provided Services</h3> */}
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="card">
              <div className="card-header d-flex justify-content-center align-items-center">
                  <h3 className="mb-0">My Provided Services</h3>
              </div>

                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table table-lg table-hover">
                      <thead>
                        <tr>
                          <th><strong>Service Name</strong></th>
                          <th><strong>Service Charge</strong></th>
                          <th><strong>Date Created</strong></th>
                          <th><strong>Leads</strong></th>
                          <th className="m2_hide"><strong>Actions</strong></th>
                        </tr>
                      </thead>
                      <tbody>
                        {venderOwnServiceData.map((service) => (
                         <ServiceList service={service} />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </>
  );
};

export default MyProvidedServices;
