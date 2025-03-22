import React from 'react'
import { Button } from 'react-bootstrap';
import { ServiceContext } from '../../../context/ServiceContext';


const ServiceLead = ({stage, leads}) => {
  const {updateLeadStage} = React.useContext(ServiceContext);


  const filterLeads = leads &&  leads.filter((lead) => lead.lead_stage ==stage);



  return (
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
              {filterLeads &&  filterLeads.map((lead) => (
                <tr>
                  <td>
                    <a>
                    
                        {lead.client_name}
                    </a>
                  </td>
                  <td className="m2_hide">{lead.client_phone}</td>
                  <td>
                    <div className="label text-success bg-success-light">
                    {stage ==0 ? <>
                    <button type="button" className="btn btn-primary btn-sm" onClick={()=>{updateLeadStage(lead._id , -10)}}>Cancel</button>
                   <button type="button" className="btn btn-success btn-sm" onClick={()=>{updateLeadStage(lead._id , 10)}}  >Accept</button> </>:  stage==10 ? "Pending" : stage == 20 ? "Completed" :"Cancel"  }
                        {/* {lead.lead_stage ==0 ?  "New One" : lead.lead_stage ==10 ? "Pending" : lead.lead_stage == 20 ? "Completed" :"Cancel"} */}
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
   
  )
}

export default ServiceLead