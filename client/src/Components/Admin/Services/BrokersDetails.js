import {React,useEffect,useState,useContext} from 'react'
import { Link } from 'react-router-dom'
import Layout from '../Layout'
import { UserContext } from '../../../context/UserContext'

const BrokersDetails = () => {
  const userContext =useContext(UserContext);
  const { allUserData, alluserData  } = userContext;

  useEffect(() => {
    const id= 2
    console.log(id,);
    allUserData(id);
  }, []);
  
  return (
    <div>
        <Layout>
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="card">
              <div className="card-header">
                <h3 className="mb-0" style={{ textAlign: "center" }}>
                  Brokers List 
                </h3>
              </div>
              <div className="card-body p-0">
                <div className="table-responsive">
                <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr style={{backgroundColor:"#27ae60",color:"white"}}>
                      <th  className="m2_hide">Image</th>
                      <th>Name</th> 
                      <th>Phone Number</th>
                      {/* <th>Handover Prop..</th> */}
                      <th>Profile</th>
                    </tr>
                  </thead>
                  <tbody>
                  {alluserData.map((user)=>{
                        return (<tr key={user.id}>
                      <td  className="m2_hide"><img src="assets/img/team-1.jpg" className="avatar avatar-40 mr-2" alt="Avatar"/></td>
                      <td>{user.name}</td>
                      <td>{user.phone}</td>
                      {/* <td>5</td> */}
                      <td>
                        <div className="_leads_status">
                          <Link to ={`/user-detail-page/${user._id}`}><a  className="active">View</a></Link>
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
          </div>
        </div>
      </Layout>
      
    </div>
  )
}

export default BrokersDetails
