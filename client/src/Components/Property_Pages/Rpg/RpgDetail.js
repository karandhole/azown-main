import React, { useContext, useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import Slider from 'react-slick'
import { leadContext } from '../../../context/LeadContext'
import propertyContext from '../../../context/PropertyContext'
import Alert from '../../Alert'
import Footer from '../../Footer/Footer'
import Navbar from '../../Header/Navbar'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import SigninPop from '../SigninPopUp'
import PropertyMap from '../PropertyMap'
import { HandlerContext } from '../../../context/HandlerContext'
import PropImg from "../../images/4.png"
import Loader from '../../loader'


const RpgDetail = () => {
  const [model, setmodel] = useState(false)
  const context = useContext(propertyContext);
  const {brokerRequest} = useContext(HandlerContext)

  const { rpgDetail,   rpgdata, showLoader } = context;
  const data = rpgdata
  const [contacted, setcontacted] = useState(false)
  const leadcontext = useContext(leadContext)
  const { leadcreate } = leadcontext
  const [show,setShow] = useState(false)
  const [log,setlog] = useState(false)
  const [showUser,setShowUser] = useState(false)
  const [marker,setMarker] = useState({ lat: 26.477626, lng: 80.31696 });
  const todayDate = new Date().toISOString();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <button className="slick-next slick-arrow">Next</button>,
    prevArrow: <button className="slick-prev slick-arrow" >Previous</button>,
    autoplay: true,
    autoplaySpeed: 3000,

  };
  const setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <button title="Next (Right arrow key)" type="button" class="mfp-arrow mfp-arrow-right mfp-prevent-close"></button>,
    prevArrow:<button title="Previous (Left arrow key)" type="button" class="mfp-arrow mfp-arrow-left mfp-prevent-close"></button>,
    autoplay: true,
    autoplaySpeed: 3000,

  };
  const [showAlert, setShowAlert] = useState(false);

  const handleAlert = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  

  useEffect(() => {
    if(data.rpg_location_latitiude && data.rpg_location_longitude){
      const lat = parseFloat(data.rpg_location_latitiude);
      const lng = parseFloat(data.rpg_location_longitude)
       setMarker({lat:lat,lng:lng})
      
    }
  }, [data.rpg_location_latitiude, data.rpg_location_longitude]);
  
  console.log(data)
 const handleClose = ()=>{
  setShowUser(false);
}

const handleSignUpPopHide = () =>{
  setShow(false);
}

  
  const { id } = useParams();
  useEffect(() => {
    rpgDetail(id);
  }, []);
  return (
    <>
  {showLoader ? <Loader /> : <div id="main-wrapper">
 <Navbar/>
 {/* {showAlert && <Alert msg='Please Login Before !!...' / > } */}
 {show && <SigninPop onHide={handleSignUpPopHide}/>}
{showLoader && <Loader/>}


{   showUser &&  <Modal show={showUser} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Get Owner Details</Modal.Title>
        </Modal.Header>
        <Modal.Body> <p>Owner will contact you shortly</p>
        {data.hasOwnProperty('phone')? <strong>Phone No. : {data.phone}</strong> : <strong>Email: {data.email}</strong>}
         </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <Button className='theme-bg rounded border-0' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>}

  <div className="clearfix" />
  {data.is_active !== true && <div className='fixed-top d-flex justify-content-center align-items-center w-100 h-100' style={{backgroundColor:'rgba(0,0,0,.4)'}}>
  <h1 className='soldout-text'>Rent Out!</h1>
</div>}
  <section className="gallery_parts pt-2 pb-2 d-none d-sm-none d-md-none d-lg-none d-xl-block">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-7 col-sm-12 pr-1" onClick={()=>{setmodel(true)}}>
              <div className="gg_single_part left"><img src={data.images && data.images.length > 0 ? data.images[0] : PropImg} style={{objectFit:'cover'}} className="img-fluid  mx-auto w-100 h-100" alt="img" /></div>
            </div>
            <div className="col-lg-4 col-md-5 col-sm-12 pl-1">
              <div className="gg_single_part-right min"><img src={data.images && data.images.length > 1 ? data.images[1] : PropImg} className="img-fluid mx-auto" alt='img' /></div>
              <div className="gg_single_part-right min mt-2 mb-2"><img src={data.images && data.images.length > 2 ? data.images[2] : PropImg} className="img-fluid mx-auto" alt='nu' /></div>
              <div className="gg_single_part-right min"><img src={data.images && data.images.length > 3 ? data.images[3] :PropImg} className="img-fluid mx-auto" alt='kj' /></div>
            </div>
          </div>
        </div>
      </section>
      <div className="featured_slick_gallery gray d-block d-md-block d-lg-block d-xl-none">
        <div className="featured_slick_gallery-slide">
          <Slider {...settings}>
            {data.images && data.images.map((val) => {
              return <>
                <div className="featured_slick_padd" onClick={()=>{setmodel(true)}}><img src={val} className="img-fluid mx-auto" alt="dj" /></div>
              </>
            })}


          </Slider>

        </div>
      </div>
  
 
    <section className="pt-4">
  <div className="container">
    <div className="row">
      {/* property main detail */}
      <div className="col-lg-8 col-md-12 col-sm-12">
        <div className="property_info_detail_wrap mb-4">
          <div className="property_info_detail_wrap_first">
            <div className="pr-price-into">
              <ul className="prs_lists">
                <li><span className="bed">{data.rpg_detail_room_occupany} Occupany</span></li>
                {/* <li><span className="bath">2 Bath</span></li>
                <li><span className="gar">1 Garage</span></li>
                <li><span className="sqft">800 sqft</span></li> */}
              </ul>
              <h2>{data.rpg_detail_title}</h2>
              <span><i className="lni-map-marker" /> {data.rpg_location_city}</span>
            </div>
          </div>
          <div className="property_detail_section">
            <div className="prt-sect-pric">
              <ul className="_share_lists">
                <li><a><i className="fa fa-bookmark" /></a></li>
                <li><a><i className="fa fa-share" /></a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* Single Block Wrap */}
        <div className="property_block_wrap">
          <div className="property_block_wrap_header">
            <h4 className="property_block_title">Property Description</h4>
          </div>
          <div className="block-body">
            <p> {data.rpg_detail_title}</p>
          </div>
        </div>
        {/* Single Block Wrap */}
        <div className="property_block_wrap">
          <div className="property_block_wrap_header">
            <h4 className="property_block_title">Property Features</h4>
          </div>								
          <div className="block-body">
            <ul className="row p-0 m-0">
              <li className="col-lg-6 col-md-6 mb-2 p-0"><img src="assets/icons/crowd.png" className="icon-details mr-1" />Room Occupany</li><p className='col-6'>{data.rpg_detail_room_occupany}</p><hr />
              <li className="col-lg-6 col-md-6 mb-2 p-0"><img src="assets/icons/group.png" className="icon-details mr-1" />Available For</li><p className='col-6'>{data.rpg_detail_availablefor}</p><hr />
              <li className="col-lg-6 col-md-6 mb-2 p-0"><img src="assets/icons/guest.png" className="icon-details mr-1" />Prefered Guest</li><p className='col-6'>{data.rpg_detail_pref_guest}</p><hr />
              <li className="col-lg-6 col-md-6 mb-2 p-0"><img src="assets/icons/calendar.png" className="icon-details mr-1" />Available From</li><p className='col-6'>{data.rpg_detail_available_from}</p><hr />
              <li className="col-lg-6 col-md-6 mb-2 p-0"><img src="assets/icons/clock.png" className="icon-details mr-1" />Gate Shut Time</li><p className='col-6'>{data.rpg_detail_gate_shut_time}</p><hr />
              {/* <li className="col-lg-6 col-md-6 mb-2 p-0"><img src="assets/icons/parking.png" className="icon-details mr-1" />Parking</li><p className='col-6'>No</p><hr /> */}
            </ul>
          </div>
        </div>
        <div className="property_block_wrap">
          <div className="property_block_wrap_header">
            <h4 className="property_block_title">Rules</h4>
          </div>
          <div className="block-body">
            <ul className="avl-features third">
              {/* <li className={data.rpg_rules_no_girls_entry ?"active":""}>No Smoking</li> */}
              {/* <li className={data.rpg_rules_no_girls_entry ?"active":""}>No Guardian Stay</li> */}
              <li className={data.rpg_rules_no_girls_entry ?"active":""}>No Girl Entry</li>
              <li className={data.rpg_rules_no_drinking ?"active":""}>No Drinking</li>
              <li className={data.rpg_rules_no_non_veg ?"active":""}>No Non-Veg</li>
            </ul>
          </div>
        </div>
        {/* Single Block Wrap */}
        <div className="property_block_wrap">
          <div className="property_block_wrap_header">
            <h4 className="property_block_title">Ameneties</h4>
          </div>
          <div className="block-body">
            <ul className="avl-features third">
              <li className={data.rpg_amenities_ac ?"active":""}>Air Conditioning</li>
              <li className={data.rpg_amenities_lift ?"active":""}>Lift</li>
              <li className={data.rpg_amenities_cupboard ?"active":""}>Cupboard</li>
              <li className={data.rpg_amenities_bed ?"active":""}>Bed</li>
              <li className={data.rpg_amenities_geyser ?"active":""}>Geyser</li>
              <li className={data.rpg_amenities_attached_bathroom ?"active":""}>Attached Bathroom</li>
              <li className={data.rpg_amenities_laundry ?"active":""}>laundry</li>
              <li className={data.rpg_rules_no_non_veg ?"active":""}></li>
              <li className={data.rpg_rules_no_non_veg ?"active":""}>Room Cleaning</li>
              <li className={data.rpg_rules_no_non_veg ?"active":""}>Warden Facility</li>
              <li className={data.rpg_rules_no_non_veg ?"active":""}>Common TV</li>
              <li className={data.rpg_amenities_wifi ?"active":""}>WiFi</li>
              <li className={data.rpg_amenities_power_backup ?"active":""}>Power Backup</li>
              <li className={data.rpg_amenities_mess ?"active":""}>Mess</li>
              <li className={data.rpg_amenities_fridge ?"active":""}>Fridge</li>
              <li className={data.rpg_amenities_mess_cooking ?"active":""}>Mess Cooking</li>
              <li className={data.rpg_rules_no_non_veg ?"active":""}>Food Included</li>
            </ul>
          </div>
        </div>
        {/* Single Block Wrap */}
        <div className="property_block_wrap">								
          <div className="property_block_wrap_header">
            <h4 className="property_block_title">Location</h4>
          </div>								
          <div className="block-body">
            <div className="map-container">
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15090.183774083564!2d72.82822336977539!3d18.99565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cef0d17ace6f%3A0xba0d758b25d8b289!2sICICI%20Bank%20Curry%20Road%2C%20Mumbai-Branch%20%26%20ATM!5e0!3m2!1sen!2sin!4v1624183548415!5m2!1sen!2sin" className="full-width" height={450} style={{border: 0}} allowFullScreen loading="lazy" /> */}
              <PropertyMap position={marker}/>

            </div>
          </div>								
        </div>
       				 
      </div>
      {/* property Sidebar */}
      <div className="col-lg-4 col-md-12 col-sm-12">
        <div className="property-sidebar">
          <div className="sider_blocks_wrap">
            <div className="side-booking-header">
              <div className="sb-header-left"><h3> Rent Details </h3></div>
              {/* <div className="price_offer">#</div> */}
              {data && data.primium_expiry_date > todayDate ? <Link to={`/premium-property/${data._id}/${3}`}> <a className="theme-bg rounded text-white p-2 cursor-pointer">View Premium</a></Link> :null}
            </div>
            <div className="side-booking-body">
              <div className="row">											
                <div className="col-lg12 col-md-12 col-sm-12 mt-3">
                  <label htmlFor="guests">Price &amp; Tax</label>
                  <div className="_adv_features">
                    <ul>
                      <li>Rent<span>Rs.{data.rpg_detail_room_rent}</span></li>
                      <li>Expected Deposit<span>Rs.{data.rpg_detail_room_deposit}</span></li>
                    </ul>
                  </div>
                </div>
                <div className="side-booking-foot">
                  <span className="sb-header-left">Total Payment</span>
                  <h3 className="price theme-cl">Rs.{parseInt( data.rpg_detail_room_rent)+parseInt(data.rpg_detail_room_deposit)}</h3>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="stbooking-footer mt-1">
                      <div className="form-group mb-0 pb-0">
                      {/* {localStorage.getItem('token') ?  data.lead && data.lead.includes(localStorage.getItem('userId')) || contacted ? <button  className="btn book_btn theme-bg" style={{ backgroundColor: 'lightgrey'  }}  disabled={true}>Get Owner Details</button> : <button  className="btn book_btn theme-bg" style={{ backgroundColor: '#27ae60'  }}  onClick={()=>{leadcreate(data._id,3) ; setcontacted(true)}}>Get Owner Details</button> : <button onClick={handleAlert} className="btn book_btn theme-bg" style={{ backgroundColor: '#27ae60',outline:"2px solid #fff"  }}>Get Owner Details</button>} */}
                      {/* {localStorage.getItem("userDetail") ? (
                    (data.lead &&
                      data.lead.includes(JSON.parse(localStorage.getItem("userDetail")).user._id)) ||
                    contacted ? (
                      <button
                        className="prt-view w-100 p-2 rounded text-white"
                        style={{
                          backgroundColor: "#27ae60",
                          cursor: "pointer",
                          border:"none",
                        }}
                        //  disabled={true}
                        onClick={() => {
                          setShowUser(true);
                          //  console.log("lead already created")
                        }}
                      >
                        Get Owner Details
                      </button>
                    ) : (
                      <button
                        className="prt-view w-100 p-2 rounded text-white"
                        style={{
                          backgroundColor: "#27ae60",
                          cursor: "pointer",
                          border:"none",
                        }}
                        onClick={() => {
                          leadcreate(data._id, 3);
                          setcontacted(true);
                          setShowUser(true);
                          // console.log("recent lead create");
                        }}
                      >
                        Get Owner Details
                      </button>
                    )
                  ) : (
                    <button
                      onClick={() => setShow(true)}
                      // onClick={()=>console.log("User not login")}
                      className="prt-view w-100 p-2 rounded text-white"
                      style={{
                        backgroundColor: "#27ae60",
                        border:"none",
                        cursor: "pointer",
                      }}
                    >
                      Get Owner Details
                    </button>
                  )} */}
                        {localStorage.getItem('userDetail') && (JSON.parse(localStorage.getItem('userDetail')).user.usertype === '2') ?  (localStorage.getItem("userDetail") ?
                   (
                  (data.handlerIds &&
                      data.handlerIds.includes(JSON.parse(localStorage.getItem('userDetail')).user._id)) ||
                    contacted ?
                     (
                      <button
                        className="prt-view theme-bg w-100 rounded text-white border-0"
                        style={{ outline:'none' }}
                        //  disabled={true}
                         onClick={()=>{setShowUser(true)
                          

                        //  console.log("lead already created")
                        }}
                        
                      >
                        Requested
                      </button> 
                    ) : (
                      <button
                        className="prt-view theme-bg w-100 rounded text-white border-0"
                        style={{ outline:'none'}}
                        onClick={() => {
                          // leadcreate(property._id, 6);
                          brokerRequest(data._id,3,data.userid);
                          setcontacted(true);
                           setShowUser(true)
                           

                    
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
                      className="prt-view theme-bg w-100 rounded text-white border-0"
                      style={{
                        
                        outline:"none",
                       
                      }}
                    >
                      Handling Request
                    </button>
                  )) :
              (localStorage.getItem("userDetail") ?
                   (
                  (data.lead &&
                      data.lead.includes(JSON.parse(localStorage.getItem('userDetail')).user._id)) ||
                    contacted ?
                     (
                      <button
                        className="prt-view theme-bg w-100 rounded text-white border-0"
                        style={{  outline:'none'}}
                        //  disabled={true}
                         onClick={()=>{setShowUser(true)
                          

                        //  console.log("lead already created")
                        }}
                        
                      >
                        Get Owner Details
                      </button> 
                    ) : JSON.parse(localStorage.getItem("userDetail")).user._id === data.userid ? null :  (
                      <button
                        className="prt-view theme-bg w-100 rounded text-white border-0"
                        style={{ outline:"none",}}
                        onClick={() => {
                          leadcreate(data._id, 3);
                          setcontacted(true);
                           setShowUser(true)
                
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
                      className="prt-view theme-bg w-100 rounded text-white border-0"
                      style={{
                        
                        outline:"none",
                      
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
          </div>
          {/* Agent Detail */}
          <div className="sider_blocks_wrap">
            <div className="side-booking-body">
              <div className="agent-_blocks_title">
                <div className="agent-_blocks_thumb"><img src="assets/img/user-6.jpg" alt /></div>
                <div className="agent-_blocks_caption">
                  <h4><a>{data.name}</a></h4>
                  <span className="approved-agent"><i className="ti-check" />approved</span>
                </div>
                <div className="clearfix" />
              </div>
              {/* <a className="agent-btn-contact" data-toggle="modal" data-target="#autho-message"><i className="ti-comment-alt" />Get Owner Detail</a> */}
              {localStorage.getItem("userDetail") ? <Link to={`/user-detail/${data.handlerid}`} className="agent-btn-contact" ><i className="ti-comment-alt" />View Owner Detail</Link> : <button className='agent-btn-contact w-100 ' style={{cursor:"pointer"}} onClick={()=>setShow(true)}> View Owner Detail</button>}

             
            </div>
          </div>
         
        </div>
      </div>
    </div>
  </div>
</section>

 <Footer/>
 {model && <div>
        <div class="mfp-bg mfp-fade mfp-ready"></div>
        <div className="mfp-wrap mfp-gallery mfp-auto-cursor mfp-fade mfp-ready" tabIndex={-1} style={{ overflow: 'hidden auto' }}>
          <div className="mfp-container mfp-s-ready mfp-image-holder">
            <div className="mfp-content">
              <div className="mfp-figure">
                <div className="mfp-close" />
                <Slider {...setting}>
                {data.images && data.images.map((val)=>{
                  return   <figure>
                  <img className="mfp-img" alt src={val}  style={{ maxHeight: 635 }} /><figcaption>
                    <div className="mfp-bottom-bar">
                      <div className="mfp-title" />
                      <div className="mfp-counter">9 of 12</div>
                    </div>
                  </figcaption>
                </figure>
                })}
               
                </Slider>
              
              </div>
            </div>
            <div className="mfp-preloader">Loading...</div>
            </div>
          <button title="Close (Esc)" type="button" className="mfp-close" onClick={()=>{setmodel(false)}}>×</button>
        </div>

      </div> }
</div>}
</>
  )
}

export default RpgDetail