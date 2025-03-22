import React, { useContext, useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import propertyContext from "../../../context/PropertyContext";
import Navbar from "../../Header/Navbar";
import Slider from "react-slick";
import Alert from "../../Alert";
import { leadContext } from "../../../context/LeadContext";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import SigninPop from "../SigninPopUp";
import PropertyMap from '../PropertyMap'
import { HandlerContext } from "../../../context/HandlerContext";
import PropImg from "../../images/4.png"
import Loader from "../../loader";

const CrentDetail = () => {
  const [model, setmodel] = useState(false);
  const {brokerRequest} = useContext(HandlerContext)
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <button className="slick-next slick-arrow">Next</button>,
    prevArrow: <button className="slick-prev slick-arrow">Previous</button>,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <button
        title="Next (Right arrow key)"
        type="button"
        className="mfp-arrow mfp-arrow-right mfp-prevent-close"
      ></button>
    ),
    prevArrow: (
      <button
        title="Previous (Left arrow key)"
        type="button"
        className="mfp-arrow mfp-arrow-left mfp-prevent-close"
      ></button>
    ),
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const context = useContext(propertyContext);
  const { cmrDetail, cmrdata, showLoader } = context;
  const data = cmrdata;
  const [contacted, setcontacted] = useState(false);
  const leadcontext = useContext(leadContext);
  const { leadcreate } = leadcontext;
  const [showAlert, setShowAlert] = useState(false);
  const [show, setShow] = useState(false);
  const [log, setlog] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [marker,setMarker] = useState({ lat: 26.477626, lng: 80.31696 });
  const todayDate = new Date().toISOString();

  useEffect(() => {
   if(data.cr_location_latitiude && data.cr_location_longitude){
      const lat = parseFloat(data.cr_location_latitiude);
      const lng = parseFloat(data.cr_location_longitude)
       setMarker({lat:lat,lng:lng})
      
    }
  }, [data.cr_location_latitiude, data.cr_location_longitude]);

  console.log(data);
  const handleClose = () => {
    setShowUser(false);
  };

  const handleSignUpPopHide = () => {
    setShow(false);
  };

  const handleAlert = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const { id } = useParams();
  useEffect(() => {
    cmrDetail(id);
  }, []);
  return (<>{showLoader ? <Loader /> : 
    <div id="main-wrapper">
      <Navbar />
  
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
      {data && data.is_active !== true && <div className='fixed-top d-flex justify-content-center align-items-center w-100 h-100' style={{backgroundColor:'rgba(0,0,0,.4)'}}>
  <h1 className='soldout-text'>Rent Out!</h1>
</div>}
      <section className="gallery_parts pt-2 pb-2 d-none d-sm-none d-md-none d-lg-none d-xl-block">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-8 col-md-7 col-sm-12 pr-1"
              onClick={() => {
                setmodel(true);
              }}
            >
              <div className="gg_single_part left">
                <img
                  src={
                    data.images && data.images.length > 0
                      ? data.images[0]
                      : PropImg
                  }
                  style={{objectFit:'cover'}} className="img-fluid  mx-auto w-100 h-100"
                  alt="img"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-5 col-sm-12 pl-1">
              <div className="gg_single_part-right min">
                <img
                  src={
                    data.images && data.images.length > 1
                      ? data.images[1]
                      : PropImg
                  }
                  className="img-fluid mx-auto"
                  alt="img"
                />
              </div>
              <div className="gg_single_part-right min mt-2 mb-2">
                <img
                  src={
                    data.images && data.images.length > 2
                      ? data.images[2]
                      : PropImg
                  }
                  className="img-fluid mx-auto"
                  alt="nu"
                />
              </div>
              <div className="gg_single_part-right min">
                <img
                  src={
                    data.images && data.images.length > 3
                      ? data.images[3]
                      : PropImg
                  }
                  className="img-fluid mx-auto"
                  alt="kj"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="featured_slick_gallery gray d-block d-md-block d-lg-block d-xl-none">
        <div className="featured_slick_gallery-slide">
          <Slider {...settings}>
            {data.images &&
              data.images.map((val) => {
                return (
                  <>
                    <div
                      className="featured_slick_padd"
                      onClick={() => {
                        setmodel(true);
                      }}
                    >
                      <img src={val} className="img-fluid mx-auto" alt="dj" />
                    </div>
                  </>
                );
              })}
          </Slider>
        </div>
      </div>
      {/* ============================ Hero Banner End ================================== */}
      {/* ============================ Property Detail Start ================================== */}
      <section className="pt-4">
        <div className="container">
          <div className="row">
            {/* property main detail */}
            <div className="col-lg-8 col-md-12 col-sm-12">
              <div className="property_info_detail_wrap mb-4">
                <div className="property_info_detail_wrap_first">
                  <div className="pr-price-into">
                    <ul className="prs_lists">
                      <li>
                        <span className="bed">
                          {data.cr_detail_floor} Floor
                        </span>
                      </li>
                      {/* <li><span className="bath">2 Bath</span></li> */}
                      {/* <li><span className="gar">1 Garage</span></li> */}
                      <li>
                        <span className="sqft">
                          {data.cr_detail_builtup_area} sqft
                        </span>
                      </li>
                    </ul>
                    <h2>{data.cr_detail_title}</h2>
                    <span>
                      <i className="lni-map-marker" /> {data.cr_location_city}
                    </span>
                  </div>
                </div>
                <div className="property_detail_section">
                  <div className="prt-sect-pric">
                    <ul className="_share_lists">
                      <li>
                        <a>
                          <i className="fa fa-bookmark" />
                        </a>
                      </li>
                      <li>
                        <a >
                          <i className="fa fa-share" />
                        </a>
                      </li>
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
                  <p> {data.cs_detail_title}</p>
                </div>
              </div>

              <div className="property_block_wrap">
                <div className="property_block_wrap_header">
                  <h4 className="property_block_title">property Details</h4>
                </div>
                <div className="block-body">
                  <ul className="row p-0 m-0">
                    <li className="col-lg-6 col-md-6 mb-2  p-0">
                      <img
                        src="assets/icons/office-building.png"
                        className="icon-details mr-1"
                        alt="icon"
                      />
                      Property Type
                    </li>
                    <p className="col-6">{data.cr_detail_property_type} </p>

                    <li className="col-lg-6 col-md-6 col-sm-6 mb-2 p-0">
                      <img
                        src="assets/icons/buildingpro.png"
                        className="icon-details mr-1"
                        alt="icon"
                      />
                      Building type
                    </li>
                    <p className="col-6">{data.cr_detail_building_type}</p>
                    <li className="col-lg-6 col-md-6 col-sm-6 mb-2 p-0">
                      <img
                        src="assets/icons/cake.png"
                        className="icon-details mr-1"
                        alt="icon"
                      />
                      Property Age
                    </li>
                    <p className="col-6">{data.cr_detail_prop_age}</p>
                    <li className="col-lg-6 col-md-6 col-sm-6 mb-2 p-0">
                      <img
                        src="assets/icons/building.png"
                        className="icon-details mr-1"
                        alt="icon"
                      />
                      Floor
                    </li>
                    <p className="col-6">{data.cr_detail_floor}</p>
                    <li className="col-lg-6 col-md-6 mb-2 p-0">
                      <img
                        src="assets/icons/all.png"
                        className="icon-details mr-1"
                        alt="icon"
                      />
                      Total Floor
                    </li>
                    <p className="col-6">{data.cr_detail_total_floor}</p>
                    <li className="col-lg-6 col-md-6 mb-2 p-0">
                      <img
                        src="assets/icons/scale-screen.png"
                        className="icon-details mr-1"
                        alt="icon"
                      />
                      built-up Area
                    </li>
                    <p className="col-6">{data.cr_detail_builtup_area} sqft.</p>
                    <li className="col-lg-6 col-md-6 mb-2 p-0">
                      <img
                        src="assets/icons/armchair.png"
                        className="icon-details mr-1"
                        alt="icon"
                      />
                      Furnishing
                    </li>
                    <p className="col-6">{data.cr_detail_furnishing}</p>
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
                    <li className={data.cr_amenities_lift ? "active" : ""}>
                      Lift
                    </li>
                    <li className={data.cr_amenities_parking ? "active" : ""}>
                      Parking
                    </li>
                    <li className={data.cr_amenities_washroom ? "active" : ""}>
                      Wahroom
                    </li>
                    <li
                      className={data.cr_amenities_power_backup ? "active" : ""}
                    >
                      Power Backup
                    </li>
                    <li className={data.cr_amenities_security ? "active" : ""}>
                      Security
                    </li>
                    <li className={data.cr_amenities_wifi ? "active" : ""}>
                      WiFI
                    </li>
                    <li
                      className={
                        data.cr_amenities_water_storage ? "active" : ""
                      }
                    >
                      Water Storage
                    </li>
                  </ul>
                </div>
              </div>

              <div className="property_block_wrap">
                <div className="property_block_wrap_header">
                  <h4 className="property_block_title">Location</h4>
                </div>
                <div className="block-body">
                  <div className="map-container">
                    {/* <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15090.183774083564!2d72.82822336977539!3d18.99565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cef0d17ace6f%3A0xba0d758b25d8b289!2sICICI%20Bank%20Curry%20Road%2C%20Mumbai-Branch%20%26%20ATM!5e0!3m2!1sen!2sin!4v1624183548415!5m2!1sen!2sin"
                      className="full-width"
                      height={450}
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                    /> */}
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
                    <div className="sb-header-left">
                      <h3> Rent Details </h3>
                    </div>
                    {data && data.primium_expiry_date > todayDate ? <Link to={`/premium-property/${data._id}/${5}`}> <a className="theme-bg rounded text-white p-2 cursor-pointer">View Premium</a></Link> :null }
                    {/* <a className="theme-bg rounded text-white p-2 cursor-pointer" onClick={()=>handleViewPremium}>View Premium</a> */}
                  </div>
                  <div className="side-booking-body">
                    <div className="row">
                      <div className="col-lg12 col-md-12 col-sm-12 mt-3">
                        <label htmlFor="guests">Price &amp; Tax</label>
                        <div className="_adv_features">
                          <ul>
                            <li>
                              Rent<span>Rs.{data.cr_rental_detail_rent}</span>
                            </li>
                            <li>
                              Expected Deposit
                              <span>
                                Rs.{data.cr_rental_detail_exp_deposit}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="side-booking-foot">
                        <span className="sb-header-left">Total Payment</span>
                        <h3 className="price theme-cl">
                          Rs.
                          {parseInt(data.cr_rental_detail_exp_deposit) +
                            parseInt(data.cr_rental_detail_rent)}
                        </h3>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="stbooking-footer mt-1">
                          <div className="form-group mb-0 pb-0">
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
                          outline:'none',
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
                          outline:"none"
                        }}
                        onClick={() => {
                          leadcreate(data._id, 5);
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
                        outline:"none"
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
                        className="prt-view text-white w-100 rounded py-2 "
                        style={{ backgroundColor: "#27ae60",cursor:"pointer",border:"none",outline:'none' }}
                        //  disabled={true}
                         onClick={()=>{setShowUser(true)
                          

                        //  console.log("lead already created")
                        }}
                        
                      >
                        Requested
                      </button> 
                    ) : (
                      <button
                        className="prt-view text-white w-100 rounded py-2 "
                        style={{ backgroundColor: "#27ae60" ,cursor:"pointer",border:"none",outline:'none'}}
                        onClick={() => {
                      
                          brokerRequest(data._id,5,data.userid);
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
                      className="prt-view text-white w-100 rounded py-2 "
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
                  (data.lead &&
                      data.lead.includes(JSON.parse(localStorage.getItem('userDetail')).user._id)) ||
                    contacted ?
                     (
                      <button
                        className="prt-view text-white w-100 rounded py-2 "
                        style={{ backgroundColor: "#27ae60",cursor:"pointer",border:"none", outline:'none'}}
                        //  disabled={true}
                         onClick={()=>{setShowUser(true)
                          

                        //  console.log("lead already created")
                        }}
                        
                      >
                        Get Owner Details
                      </button> 
                    ) : JSON.parse(localStorage.getItem("userDetail")).user._id === data.userid ? null :  (
                      <button
                        className="prt-view text-white w-100 rounded py-2 "
                        style={{ backgroundColor: "#27ae60" ,cursor:"pointer",border:"none",}}
                        onClick={() => {
                          leadcreate(data._id, 5);
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
                      className="prt-view text-white w-100 rounded py-2 "
                      style={{
                        backgroundColor: "#27ae60",
                        border:"none",
                        cursor:"pointer"
                      }}
                    >
                      Get Owner Details
                    </button>
                  ))}
                            {/* <button className="btn book_btn theme-bg">Get Owner Detail</button> */}
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
                      <div className="agent-_blocks_thumb">
                        <img src="assets/img/user-6.jpg" alt />
                      </div>
                      <div className="agent-_blocks_caption">
                        <h4>
                          <a>{data.name}</a>
                        </h4>
                        <span className="approved-agent">
                          <i className="ti-check" />
                          approved
                        </span>
                      </div>
                      <div className="clearfix" />
                    </div>
                    {localStorage.getItem("userDetail") ? <Link to={`/user-detail/${data.handlerid}`} className="agent-btn-contact" ><i className="ti-comment-alt" />View Owner Detail</Link> : <button className='agent-btn-contact w-100 ' style={{cursor:"pointer"}} onClick={()=>setShow(true)}> View Owner Detail</button>}
                  
                    {/* <span id="number" data-last={+1234567896}>
                  <span><i className="ti-headphone-alt" /><a className="see">+355(44)35...Show</a></span>
                </span> */}
                  </div>
                </div>

                {/* <div className="sidebar-widgets">
              <h4>Similar Property</h4>
              <div className="sidebar_featured_property">
               
                <div className="sides_list_property">
                  <div className="sides_list_property_thumb">
                    <img src="assets/img/p-1.png" className="img-fluid" alt />
                  </div>
                  <div className="sides_list_property_detail">
                    <h4><a href="single-property-1.html">Loss vengel New Apartment</a></h4>
                    <span><i className="ti-location-pin" />Sans Fransico</span>
                    <div className="lists_property_price">
                      <div className="lists_property_types">
                        <div className="property_types_vlix sale">For Sale</div>
                      </div>
                      <div className="lists_property_price_value">
                        <h4>$4,240</h4>
                      </div>
                    </div>
                  </div>
                </div>
             
                <div className="sides_list_property">
                  <div className="sides_list_property_thumb">
                    <img src="assets/img/p-4.png" className="img-fluid" alt />
                  </div>
                  <div className="sides_list_property_detail">
                    <h4><a href="single-property-1.html">Montreal Quriqe Apartment</a></h4>
                    <span><i className="ti-location-pin" />Liverpool, London</span>
                    <div className="lists_property_price">
                      <div className="lists_property_types">
                        <div className="property_types_vlix">For Rent</div>
                      </div>
                      <div className="lists_property_price_value">
                        <h4>$7,380</h4>
                      </div>
                    </div>
                  </div>
                </div>
             
                <div className="sides_list_property">
                  <div className="sides_list_property_thumb">
                    <img src="assets/img/p-7.png" className="img-fluid" alt />
                  </div>
                  <div className="sides_list_property_detail">
                    <h4><a href="single-property-1.html">Curmic Studio For Office</a></h4>
                    <span><i className="ti-location-pin" />Montreal, Canada</span>
                    <div className="lists_property_price">
                      <div className="lists_property_types">
                        <div className="property_types_vlix buy">For Buy</div>
                      </div>
                      <div className="lists_property_price_value">
                        <h4>$8,730</h4>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="sides_list_property">
                  <div className="sides_list_property_thumb">
                    <img src="assets/img/p-5.png" className="img-fluid" alt />
                  </div>
                  <div className="sides_list_property_detail">
                    <h4><a href="single-property-1.html">Montreal Quebec City</a></h4>
                    <span><i className="ti-location-pin" />Sreek View, New York</span>
                    <div className="lists_property_price">
                      <div className="lists_property_types">
                        <div className="property_types_vlix">For Rent</div>
                      </div>
                      <div className="lists_property_price_value">
                        <h4>$6,240</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {model && (
        <div>
          <div className="mfp-bg mfp-fade mfp-ready"></div>
          <div
            className="mfp-wrap mfp-gallery mfp-auto-cursor mfp-fade mfp-ready"
            tabIndex={-1}
            style={{ overflow: "hidden auto" }}
          >
            <div className="mfp-container mfp-s-ready mfp-image-holder">
              <div className="mfp-content">
                <div className="mfp-figure">
                  <div className="mfp-close" />
                  <Slider {...setting}>
                    {data.images &&
                      data.images.map((val) => {
                        return (
                          <figure>
                            <img
                              className="mfp-img"
                              alt
                              src={val}
                              style={{ maxHeight: 635 }}
                            />
                            <figcaption>
                              <div className="mfp-bottom-bar">
                                <div className="mfp-title" />
                                <div className="mfp-counter">9 of 12</div>
                              </div>
                            </figcaption>
                          </figure>
                        );
                      })}
                  </Slider>
                </div>
              </div>
              <div className="mfp-preloader">Loading...</div>
            </div>
            <button
              title="Close (Esc)"
              type="button"
              className="mfp-close"
              onClick={() => {
                setmodel(false);
              }}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>}
    </>
  );
};

export default CrentDetail;
