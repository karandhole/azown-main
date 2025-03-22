import React, { useState, useEffect, useContext } from "react";
import { ServiceContext } from "../../../context/ServiceContext";
import { ServiceData } from "../../Constant/ServiceData";


const ServiceRequest = () => {
  const [loading, setLoading] = useState(true);
  const { requestService, myRequestService ,updateLeadStage } = useContext(ServiceContext);


  useEffect(() => {
    myRequestService();
  }, []);

  const getServiceName = (id) => {
    // console.log(id);
    const service = ServiceData.find((service) => service.service_id == id);
    // console.log(service);
    // const service = ServiceData.find((service) => service.service._id == id);
    
    return service;

   
  
  };

  return (
    <>
      <div className="col-lg-9 col-md-8 col-sm-12 h-dashboard">
        <div className="dashboard-body mb-3">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="dashboard_property">
                <div className="table-responsive">
                  <table className="table">
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col">Service Name</th>
                        <th scope="col" >
                          Owner Phone
                        </th>
                        <th scope="col" className="m2_hide" >
                          Vendor Name
                        </th>
                        <th scope="col" className="m2_hide" >
                          Request Date
                        </th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                    {  
                      requestService && requestService.map((request) => (
                        <tr>
                        <td>
                          <img
                            src={getServiceName(request.service_id).service_icons}
                            alt="dfsd"
                            style={{ height: 70, width: 100 }}
                          />
                          <b>{getServiceName(request.service_id).service_name}</b>
                        </td>
                        <td>
                          <b>{request.vender_phone==undefined ? "Not Update": request.vender_phone}</b>
                        </td>
                        <td className="m2_hide">
                          <b>{request.vender_name}</b>
                        </td>
                        <td className="m2_hide">
                          <b>{request.createdAt && request.createdAt.slice(0,10)}</b>
                        </td>
                        <td>
                          {request.lead_stage == 0 ? (
    <button type="button" className="btn btn-primary btn-sm">Pending</button> 
                          ) : request.lead_stage == 10 ? ( <button type="button" className="btn btn-primary btn-sm"  onClick={()=>{updateLeadStage(request._id,20)}}>Service Done</button> ) : request.lead_stage == 20 ? (
                            <button type="button" className="btn btn-primary btn-sm">Completed</button>
                          ) : (
                            <button type="button" className="btn btn-primary btn-sm">Cancel</button>
                          )

    }

                        </td>
                      </tr>
                      ))

                        
                     }
                     
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceRequest;
