import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../Layout";
import { ServiceContext } from "../../../context/ServiceContext";

const VendorsProfile = () => {
  const {venderList, getVenderList} = useContext(ServiceContext)
  const {id,name} = useParams();
  useEffect(()=>{
    getVenderList(id);
  },[id])
 
console.log(venderList)
  return (
    <>
      <Layout>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="card">
              <div className="card-header">
                <h3 className="mb-0" style={{ textAlign: "center" }}>
              {name}
                </h3>
              </div>
              <div className="card-body p-0 col-sm-12">
                <div className="table-responsive">
                  <table className="table table-lg table-hover">
                    <thead>
                    <tr style={{backgroundColor:"#27ae60",color:"white",borderRadius:5}}>
                      <th  className="m2_hide">Image</th>
                        <th>Name</th>
                        <th>Service Price/ Unit</th>
                        <th>Service</th>
                        <th>Profile</th>
                      </tr>
                    </thead>

                    <tbody>
                    {venderList && venderList.map((curEle)=>{
                      return(
<tr>
                        <td  className="m2_hide">
                        <img
                            src="assets/img/team-1.jpg"
                            className="avatar avatar-40 mr-2 d-none d-md-block"
                            alt="Avatar"
                          />
                        </td>
                        <td>
                          {curEle.vender_name}
                        </td>
                        <td> {curEle.service_charge} / {curEle.charge_unit}</td>
                        <td>{curEle.service_name}</td>
                        <td>
                          <Link to={`/user-detail-page/${curEle.vender_id}`}>
                            <div
                              className="_leads_status"
                              style={{ cursor: "pointer" }}
                            >
                              <span className="active">View</span>
                            </div>
                          </Link>
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
    </>
  );
};

export default VendorsProfile;
