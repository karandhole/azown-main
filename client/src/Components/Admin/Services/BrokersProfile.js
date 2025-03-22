import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../Layout'

const BrokersProfile = () => {
  return (
    <div>
        <Layout>
      
        <div className="container">
          <div className="row">
            
            <div className="col-lg-8 col-md-12 col-sm-12">
              
              <div className="property_block_wrap">
                <div className="property_block_wrap_header">
                  <h3 className="property_block_title">Broker Info</h3>
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
              </div>

              
              <div className="_prtis_list ">
                <div className="_prtis_list_header">
                  <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                      <i className="fa fa-envelope mr-2"></i><span className="dark">Adam Kohli@gmail.com</span>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                      <i className="fa fa-phone mr-2"></i><span className="dark">856 574 2314</span>
                    </div>
                    </div>
                    <div className='row mt-2'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                      <i className="fa fa-map-marker-alt mr-2"></i> <span className="dark">Montreal, USA</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="property-sidebar gray">
              
              <div className="sider_blocks_wrap">
                <div className="side-booking-body d-flex flex-column align-items-center justify-content-center">
                  <div className="agent-_blocks_title">
                    <div className="agent-_blocks_thumb">
                      <img src="assets/img/team-1.jpg" alt="" />
                    </div>
                    <div className="agent-_blocks_caption">
                      <h4>Adam K. Jollio</h4>
                      <p>The Popular Builder</p>
                      <span className="approved-agent">
                        <i className="ti-check"></i>approved
                      </span>
                    </div>
                  </div>
                  <div className='row'>
                  <div className='col-lg-6 col-md-6 col-sm-6 btn text-center' style={{marginLeft:3}}>
                    <Link to ="/handover-property">
                      <button className="btn agent-btn theme-bg" style={{fontSize:12,marginRight:3,padding:5}} >
                        Handover Properties
                      </button>
                    </Link>
                    <Link to ="/handover-property">
                      <button className="btn agent-btn theme-bg"style={{fontSize:12,marginLeft:3,padding:5}}>
                        Requested Handover
                      </button>
                    </Link>
                  </div>
                  </div>
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

export default BrokersProfile
