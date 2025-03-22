import {React,useContext,useEffect} from 'react'
import Layout from '../Layout'
import { Link, useParams } from 'react-router-dom'
import { UserContext } from '../../../context/UserContext'

const Broker = () => {
  const userContext =useContext(UserContext);
  const { allUserData, alluserData  } = userContext;

  useEffect(() => {
    const id= 2
    // console.log(id,);
    allUserData(id);
  }, []);

  return (
    <Layout>
    <div className="col-lg-12 col-md-12 col-sm-12">
  <div className="dashboard-body">
    {/* <div className="row">
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
              <a href="submit-property-dashboard.html" className="prt_submit_link"><i className="fas fa-plus-circle" /><span className="d-none d-lg-block d-md-block">Create Broker</span></a>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    <div className="row">
      <div className="col-lg-12 col-md-12">
        <div className="dashboard_property">
          <div className="table-responsive">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Brokers</th>
                
                  {/* <th scope="col" className="m2_hide">User Type</th> */}
                  <th scope="col" className="m2_hide">Join Date</th>
                  <th scope="col">View Details</th>
                  <th scope="col" className="m2_hide">Action</th>
                </tr>
              </thead>
              <tbody>
             
              {alluserData && alluserData.map((user)=>{
                        return (<tr key={user.id}>
                  <td>
                    <div className="dash_prt_wrap">
                      <div className="dash_prt_thumb text-center">
                        <img src="assets/img/p-1.png" className="img-fluids m-1 m2_hide" style={{width:70,borderRadius:100,height:70}} alt />
                      </div>
                     
                      <div className="dash_prt_caption px-0">
                        <h5>{user.name}</h5>
                        <div className="prt_dashb_lot">{user.email}</div>
                        <div className="prt_dashb_lot">{user.phone && user.phone ? user.phone : "Not Update"}</div>
                        {/* <div className="prt_dash_rate"><span>$ 2,200,000</span></div> */}
                      </div>
                    </div>
                  </td>
               
                  {/* <td className="m2_hide">
                    <div className="_leads_view"><h5 className="up">{user.usertype === 2 ? 'Broker' : user.usertype}</h5></div>
                    <div className="_leads_view_title"><span>Type</span></div>
                  </td> */}
                  <td className="m2_hide">
                  <div className="_leads_posted"><h5>{user.date ? user.date.slice(0, 10) : "Date is not updated"}</h5></div>
                    <div className="_leads_view_title"><span>On Date</span></div>
                  </td>
                  <td>
                    {/* {console.log("bro",user._id)} */}
                    <Link to ={`/user-detail-page/${user._id}`}><div className="_leads_status"><span className="active">View</span></div></Link>
                    {/* <div className="_leads_view_title"><span>Till 12 Oct</span></div> */}
                  </td>
                  <td  className="m2_hide">
                    <div className="_leads_action">
                      <a><i className="fas fa-edit" /></a>
                    </div>
                  </td>
                </tr>
                        )
                })}
               
              
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    {/* row */}
  </div>
</div>
</Layout>
  )
}

export default Broker