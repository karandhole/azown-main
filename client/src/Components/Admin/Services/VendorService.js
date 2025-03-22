import React from 'react'
import Layout from '../Layout'
import { Link } from 'react-router-dom'
const VendorService = () => {
  return (
    <div>
        <Layout>
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="card">
              <div className="card-header">
                <h3 className="mb-0" style={{ textAlign: "center" }}>
                  Vendors Service List 
                </h3>
              </div>
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table table-lg table-hover">
                    <thead>
                      <tr>
                        <th>Name</th> 
                        <th>Service ID</th>
                        {/* <th>Service</th> */}
                        <th>Date Created</th>
                        {/* <th>Profile</th> */}
                      </tr>
                    </thead>

                    <tbody style={{ cursor: "pointer" }}>
                      <tr>
                      <td>Mover And Packers</td>
                        <td>#258475</td>
                        {/* <td><div className="label text-success bg-success-light">Paid</div></td>                 */}
                        <td>04/10/2013</td>
                        <Link to="/vendor-service-leads">
                          <td>
                            <div className="_leads_status">
                              <span className="active">Leads</span>
                            </div>
                          </td>
                        </Link>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Layout>
      
    </div>
  )
}

export default VendorService
