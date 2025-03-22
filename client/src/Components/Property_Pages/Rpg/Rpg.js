import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { leadContext } from '../../../context/LeadContext';
import propertyContext from '../../../context/PropertyContext';
import img from '../../images/p-1.png'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import SigninPop from '../SigninPopUp'
import { HandlerContext } from '../../../context/HandlerContext';
import { errorMsg } from '../../notification';

const Rpg = ({property,onAlert}) => {
  const context = useContext(propertyContext);
  const leadcontext = useContext(leadContext)
  const { leadcreate,likeprop } = leadcontext
  const {brokerRequest} = useContext(HandlerContext)
  const [liked, setliked] = useState(false)
  const { lead, handlereq,rpgDetail,rpgdata } = context;
  const [contacted, setcontacted] = useState(false);
  const [show,setShow] = useState(false)
  const [log,setlog] = useState(false)
  const [showUser,setShowUser] = useState(false)
  const [btnText,setBtnText] = useState("Get Owner Details")
  const [userId,setUserId] = useState(2525)
  const data = rpgdata;
  
  useEffect(() => {
    const userDetail = localStorage.getItem('userDetail');
    if (userDetail) {
      setUserId(JSON.parse(userDetail).user._id);
    }
  }, [localStorage.getItem('userDetail')]);

  const getUserInfo = (id) =>{
    rpgDetail(id);
  }
 const handleClose = ()=>{
  setShowUser(false);
}

const handleSignUpPopHide = () =>{
  setShow(false);
}

  
  return (
   
    <div className="row justify-content-center" style={{pointerEvents: property.is_active?"auto":"none"}}>
      {/* Single Property */}
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
        <div className="property-listing list_view" style={{filter:property.is_active ? null:'blur(1px)',backgroundColor: property.is_active?null : "rgba(0, 0, 0, 0.2)"}}>
          <div className="listing-img-wrapper">
            <div className="_exlio_125">For PG</div>
            <div className="list-img-slide">
              <div className="click">
              <div><a href><img src={property.images && property.images.length===0?img:property.images[0]} className="img-fluid mx-auto" alt="djk" /></a></div>
              </div>
            </div>
          </div>

          {show && <SigninPop onHide={handleSignUpPopHide}/>}
          {   showUser &&  <Modal show={showUser} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>Get Owner Details</Modal.Title>
        </Modal.Header>
        <Modal.Body> <p>Owner will contact you shortly</p>
        {data.hasOwnProperty('phone')? <strong>Phone No. : {data.phone}</strong> : <strong>Email: {data.email}</strong>}
</Modal.Body>        <Modal.Footer>
          <Button className='theme-bg rounded border-0' onClick={handleClose}>
            Close
          </Button>
        
        </Modal.Footer>
      </Modal>}

          <div className="list_view_flex">										
            <div className="listing-detail-wrapper mt-1">
              <div className="listing-short-detail-wrap">
                <div className="_card_list_flex mb-2">
                  <div className="_card_list_flex">
                    <div className="_card_flex_01">
                      <h6 className="cms_title mb-0"><Link style={{fontSize:"15px"}} to={`/rpg-detail/${property._id}`}>{property.rpg_detail_title} </Link></h6>
                    </div>
                  </div>
                  
                  <div className="_card_flex_last">
                    <h6 className="cms_amount mb-0">{property.rpg_detail_room_rent}</h6>
                  </div> 
                </div>
              </div>
            </div>
            <div style={{borderTop: '#dddddd solid', borderBottom: '#dddddd solid', paddingBottom: 10}}>
              <br /><div className="_card_list_flex">
                <div className="_card_flex_01">
                  {/* <h4 class="listing-name verified" style="padding-top: 10px;"><a href="single-property-1.html" class="prt-link-detail">5689 Resot Relly Market, Montreal Canada</a></h4> */}
                </div>
              </div>												
              <div className="_card_list_flex mb-2">
                <p style={{lineHeight:'1'}}><i className="lni-map-marker" />{property.rpg_location_city}</p>
              </div>											
              <div className="row" style={{paddingLeft: 17}}>
                <div className="row col-lg-12 col-md-12">
                  <div className="listing-card-info-icon col-lg-4 col-md-4 col-sm-10">
                    <p className="rr_list">₹{property.rpg_detail_room_deposit}</p>
                    <i className="fa fa-money pr-1" /> Deposit
                  </div>
                  <div className="listing-card-info-icon col-lg-4 col-md-4 col-sm-10">
                    <p className=" rr_list">{property.rpg_detail_room_occupany}</p>
                    <i className="fa fa-bed pr-1" />Room Occupy
                  </div>
                  <div className="listing-card-info-icon col-lg-4 col-md-4 col-sm-10">
                    <p className=" rr_list">{property.rpg_detail_availablefor}</p>
                    <i className="fa fa-building pr-1" />Prefered Tenent
                  </div>
                  <div className="listing-card-info-icon col-lg-4 col-md-4 col-sm-10">
                    <p className=" rr_list">{property.rpg_detail_available_from}</p>
                    <i className="fa fa-parking pr-1" />Posted on
                  </div>
                  <div className="listing-card-info-icon col-lg-4 col-md-4 col-sm-10">
                    <p className="rr_list">{property.rpg_detail_food_included}</p>
                    <i className="fa fa-building pr-1" />Food Facility
                  </div>
                  <div className="listing-card-info-icon col-lg-4 col-md-4 col-sm-10">
                    <p className="rr_list">{property.rpg_detail_gate_shut_time}</p>
                    <i className="fa fa-clock pr-1" />Gate Closing Time
                  </div>
                </div>
              </div>
            </div>
            <div className="listing-detail-footer" style={{marginTop: 0, paddingRight: 0}}>
              <div className="footer-first">
                <div className="foot-rates">
                  <span className="elio_rate good">4.2</span>
                  <div className="_rate_stio">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                </div>
              </div>
              {localStorage.getItem('userDetail') ? property.like && property.like.includes(userId) || liked ? <span  >  <i className=" fa fa-heart" style={{fontSize: 35,color:"red", paddingRight: 22, paddingTop: 5 , cursor:"pointer"}} /></span> :<span onClick={()=>{setliked(true);likeprop(property._id,3)}} >  <i className=" fa fa-heart" style={{fontSize: 35,color:`${ !liked ? "#27ae60":"red"}`, paddingRight: 22, paddingTop: 5 , cursor:"pointer"}} /></span>  :  <span onClick={()=>errorMsg("Please Login Before")} >  <i className=" fa fa-heart" style={{fontSize: 35,color:"#27ae60", paddingRight: 22, paddingTop: 5 , cursor:"pointer"}} /></span> }
              <div className="footer-flex">
              {localStorage.getItem('userDetail') && (JSON.parse(localStorage.getItem('userDetail')).user.usertype === '2') ?  (localStorage.getItem("userDetail") ?
                   (
                  (property.handlerIds &&
                      property.handlerIds.includes(userId)) ||
                    contacted ?
                     (
                      <button
                        className="prt-view"
                        style={{ backgroundColor: "#27ae60",cursor:"pointer",border:"none",outline:'none' }}
                        //  disabled={true}
                         onClick={()=>{setShowUser(true)
                          getUserInfo(property._id)

                        //  console.log("lead already created")
                        }}
                        
                      >
                        Requested
                      </button> 
                    ) : (
                      <button
                        className="prt-view"
                        style={{ backgroundColor: "#27ae60" ,cursor:"pointer",border:"none",outline:'none'}}
                        onClick={() => {
                          // leadcreate(property._id, 6);
                          brokerRequest(property._id,3,property.userid);
                          setcontacted(true);
                           setShowUser(true)
                           getUserInfo(property._id)

                    
                          // console.log("recent lead create");
                        }}
                      >
                        Handling Request
                      </button>
                    )
                  ) : (
                    <button
                     onClick={()=>setShow(true)}
                    // onClick={()=>console.log("User not login")}
                      className="prt-view"
                      style={{
                        backgroundColor: "#27ae60",
                        border:"none",
                        cursor:"pointer"
                      }}
                    >
                      Handling Request
                    </button>
                  )) :
              (localStorage.getItem("userDetail") ?
                   (
                  (property.lead &&
                      property.lead.includes(userId)) ||
                    contacted ?
                     (
                      <button
                        className="prt-view"
                        style={{ backgroundColor: "#27ae60",cursor:"pointer",border:"none", outline:'none'}}
                        //  disabled={true}
                         onClick={()=>{setShowUser(true)
                          getUserInfo(property._id)

                        //  console.log("lead already created")
                        }}
                        
                      >
                        Get Owner Details
                      </button> 
                    ) : (
                      <button
                        className="prt-view"
                        style={{ backgroundColor: "#27ae60" ,cursor:"pointer",border:"none",}}
                        onClick={() => {
                          leadcreate(property._id, 3);
                          setcontacted(true);
                           setShowUser(true)
                           getUserInfo(property._id)

                    
                          // console.log("recent lead create");
                        }}
                      >
                        Get Owner Details
                      </button>
                    )
                  ) : (
                    <button
                     onClick={()=>setShow(true)}
                    // onClick={()=>console.log("User not login")}
                      className="prt-view"
                      style={{
                        backgroundColor: "#27ae60",
                        border:"none",
                        cursor:"pointer"
                      }}
                    >
                      Get Owner Details
                    </button>
                  ))}

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Single Property */}
      {/* ////////////////////////////////////// */}
      {/* ///////////////////////////////////////// */}
    </div>
   

  )
}

export default Rpg