import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Header/Navbar'
import { UserContext } from '../../context/UserContext'
import { ServiceContext } from '../../context/ServiceContext'
import { Button } from 'react-bootstrap'
import VendorCard from './VendorCard'


const VenderDetail = () => {
    const context = useContext(UserContext)
    const { getVenderData ,venderDetail} = context
    const serviceContext = useContext(ServiceContext);
    const { myownservices, myservice } = serviceContext;
    const [show, setShow] = React.useState(false);
 
    const {id} = useParams()
    useEffect(() => {
        getVenderData(id)
      
        myownservices(id);   
        // console.log("venderOwnServiceData",venderOwnServiceData)
    }, [])
  return (
    <>
    <Navbar />
   
    <section className="light-bg min">
      <div className="container">
        <div className="row">
          {/* <!-- property main detail --> */}
          <div className="col-lg-8 col-md-12 col-sm-12">
            {/* <!-- Single Block Wrap --> */}
            {/* <div className="property_block_wrap">
              <div className="property_block_wrap_header">
                <h3 className="property_block_title">Agent Info</h3>
              </div>

              <div className="block-body">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a
                  type specimen book.
                </p>
              </div>
            </div> */}

            {/* <!-- Single Block Wrap --> */}
            <div className="_prtis_list">
              <div className="_prtis_list_header">
                <ul>
                  <li>
                    <div className="content_thumb">
                      <i className="fa fa-envelope"></i>
                    </div>
                    <div className="content">
                      <span className="dark">{venderDetail && venderDetail.email}</span>
                      <span className="title">Email</span>
                    </div>
                  </li>
                  <li>
                    <div className="content_thumb">
                      <i className="fa fa-phone"></i>
                    </div>
                    <div className="content">
                      <span className="dark">Not Update</span>
                      <span className="title">Call Me</span>
                    </div>
                  </li>
                  <li>
                    <div className="content_thumb">
                      <i className="fa fa-map-marker-alt"></i>
                    </div>
                    <div className="content">
                      <span className="dark">Not Update</span>
                      <span className="title">Location</span>
                    </div>
                  </li>
                </ul>
              </div>
             
            </div>
           

            <div className="row justify-content-center"></div>
          </div>

          {/* <!-- property Sidebar --> */}
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="property-sidebar">
              {/* <!-- Agent Detail --> */}
              <div className="sider_blocks_wrap">
                <div className="side-booking-body">
                  <div className="agent-_blocks_title">
                    <div className="agent-_blocks_thumb">
                      <img src="assets/img/team-1.jpg" alt="" />
                    </div>
                    <div className="agent-_blocks_caption">
                      <h4>{venderDetail && venderDetail.name}</h4>
                      <span className="approved-agent">
                        <i className="ti-check"></i>approved
                      </span>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

            {/* <!-- property Sidebar --> */}
          {myservice && myservice.length === 0 && (
            <div>
              <h3>No Service Found</h3>
                </div> )}

          {myservice && myservice.length > 0 && myservice.map((vender) => {
            return (
              <VendorCard vender={vender} name={venderDetail.name}/>
            )
            
          }
           
          )}
                
        </div>
      </div>
    </section>
    <Footer />
  </>
  )
}

export default VenderDetail