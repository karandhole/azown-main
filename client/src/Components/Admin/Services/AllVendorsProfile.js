import {React,useEffect,useContext} from 'react'
import Layout from '../Layout'
import { Link, useParams } from "react-router-dom";
import { UserContext } from '../../../context/UserContext'

const AllVendorsProfile = () => {
  const userContext =useContext(UserContext);
  const { allUserData,alluserData} = userContext;

  useEffect(() => {
    const id= 1
    // id 1 for vender
    // console.log(id,);
    allUserData(id); 
    
  }, []);
  return (
    <div>
        <Layout>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="card">
              <div className="card-header">
                <h3 className="mb-0" style={{ textAlign: "center" }}>
                 All Vendors List
                </h3>
              </div>
              <div className="card-body p-0 col-sm-12">
                <div className="table-responsive">
                  <table className="table table-lg table-hover">
                    <thead>
                    <tr style={{backgroundColor:"#27ae60",color:"white",borderRadius:5}}>
                      <th  className="m2_hide">Image</th>
                        <th>Name</th>
                        <th  className="m2_hide">Email</th>
                        <th>Phone Number</th>
                        <th>Profile</th>
                      </tr>
                    </thead>
                    <tbody>
                    {alluserData && alluserData.map((user)=>{
                        return (<tr key={user.id}>
                        <td  className="m2_hide">
                        <img
                            src="assets/img/team-1.jpg"
                            className="avatar avatar-40 mr-2 "
                            alt="Avatar"
                          />
                        </td>
                        <td>
                          {user.name}
                        </td>

                        <td  className="m2_hide">{user.email}</td>
                        <td>{user.phone && user.phone ? user.phone : "Not Update"}</td>
                        <td>
                        <Link to ={`/user-detail-page/${user._id}`}><div className="_leads_status"><span className="active">View</span></div></Link>
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
        </div>
      </Layout>
      
    </div>
  )
}

export default AllVendorsProfile
