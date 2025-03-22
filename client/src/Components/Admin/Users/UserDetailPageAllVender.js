import React from 'react'
import { Link } from 'react-router-dom'

const UserDetailPageAllVender = () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12">
    <div className="dashboard-body">
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <div className="_prt_filt_dash">
            <div className="_prt_filt_dash_flex">
              <div className="foot-news-last">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Find User..." />
                  <div className="input-group-append">
                    <span type="button" className="input-group-text theme-bg b-0 text-light"><i className="fas fa-search" /></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="_prt_filt_dash_last m2_hide">
              <div className="_prt_filt_radius">
              </div>
              <div className="_prt_filt_add_new">
                <a  className="prt_submit_link"><i className="fas fa-plus-circle" /><span className="d-none d-lg-block d-md-block">Create Vender</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <div className="dashboard_property">
            <div className="table-responsive">
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Venders</th>
                  
                    <th scope="col" className="m2_hide">Phone No.</th>
                    <th scope="col" className="m2_hide">Join Date</th>
                    <th scope="col">View Details</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
               
                  <tr>
                    <td>
                      <div className="dash_prt_wrap">
                        <div className="dash_prt_thumb text-center">
                          <img src="assets/img/p-1.png" className="img-fluids m-1" style={{width:70,borderRadius:100,height:70}} alt />
                        </div>
                        <div className="dash_prt_caption px-0">
                          <h5>Shane Alam</h5>
                          <div className="prt_dashb_lot">shanelamaam@gamil.com</div>
                          {/* <div className="prt_dashb_lot">2345678990</div> */}
                          {/* <div className="prt_dash_rate"><span>$ 2,200,000</span></div> */}
                        </div>
                      </div>
                    </td>
                 
                    <td className="m2_hide">
                      {/* <div className="_leads_view"><h5 className="up">{Math.floor(Math.random()*100) }</h5></div> */}
                      <div className="_leads_view"><h5 className="up">234567890</h5></div>
                      <div className="_leads_view_title"><span>Contact no.</span></div>
                    </td>
                    <td className="m2_hide">
                      <div className="_leads_posted"><h5>16 Aug 2020</h5></div>
                      <div className="_leads_view_title"><span>On Date</span></div>
                    </td>
                    <td>
                      <div className="_leads_status"><span className="btn btn-dark btn-rounded py-2">View</span></div>
                      {/* <div className="_leads_view_title"><span>Till 12 Oct</span></div> */}
                    </td>
                    <td>
                      <div className="_leads_action">
                        <a><i className="fas fa-edit" /></a>
                        {/* <a href="#"><i className="fas fa-trash" /></a> */}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="dash_prt_wrap">
                        <div className="dash_prt_thumb text-center">
                          <img src="assets/img/p-1.png" className="img-fluids m-1" style={{width:70,borderRadius:100,height:70}} alt />
                        </div>
                        <div className="dash_prt_caption px-0">
                          <h5>Shane Alam</h5>
                          <div className="prt_dashb_lot">shanelamaam@gamil.com</div>
                          {/* <div className="prt_dashb_lot">2345678990</div> */}
                          {/* <div className="prt_dash_rate"><span>$ 2,200,000</span></div> */}
                        </div>
                      </div>
                    </td>
                 
                    <td className="m2_hide">
                      {/* <div className="_leads_view"><h5 className="up">{Math.floor(Math.random()*100) }</h5></div> */}
                      <div className="_leads_view"><h5 className="up">234567890</h5></div>
                      <div className="_leads_view_title"><span>Contact no.</span></div>
                    </td>
                    <td className="m2_hide">
                      <div className="_leads_posted"><h5>16 Aug 2020</h5></div>
                      <div className="_leads_view_title"><span>On Date</span></div>
                    </td>
                    <td>
                      <div className="_leads_status"><Link className="btn btn-dark btn-rounded py-2">View</Link></div>
                      {/* <div className="_leads_view_title"><span>Till 12 Oct</span></div> */}
                    </td>
                    <td>
                      <div className="_leads_action">
                        <a><i className="fas fa-edit" /></a>
                        {/* <a href="#"><i className="fas fa-trash" /></a> */}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* row */}
    </div>
  </div>
  )
}

export default UserDetailPageAllVender