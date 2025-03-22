import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import Layout from "../Layout";
import { UserContext } from "../../../context/UserContext";
import { Modal, Tab, Tabs } from "react-bootstrap";
import { ServiceContext } from "../../../context/ServiceContext";
import propertyContext from "../../../context/PropertyContext";
import Loader from "../../loader";
import ServiceLead from "../../Dashboard/Services/ServiceLead";

const UserDetailPageAll = () => {
   const context = useContext(ServiceContext);
  const { myservice, myownservices ,serviceLeads,
    getServiceLeads } = context;
    const [show, setShow] = React.useState(false);
 
  const { getUserData, userData } = useContext(UserContext);
  const {
    getUserRr,
    getUserRrs,
    getUserRfm,
    getUserRpg,
    getUserCmr,
    getUserCms,
    getUserPlot,
    userRrData,
    userRrsData,
    userRfmData,
    userRpgData,
    userCmrData,
    userCmsData,
    userPlotData,
    showLoader
  } = useContext(propertyContext);

  const { id } = useParams();

  useEffect(() => {
    getUserData(id);
    getUserRr(id, 2);
    getUserRrs(id, 2);
    getUserRfm(id, 2);
    getUserRpg(id, 2);
    getUserCmr(id, 2);
    getUserCms(id, 2);
    getUserPlot(id, 2);
    
  }, []);

  useEffect(() => {
    myownservices(id);
  }, []);

  const totalProperties =
  userRrData.length +
  userRrsData.length +
  userRfmData.length +
  userRpgData.length +
  userCmrData.length +
  userCmsData.length +
  userPlotData.length;
  
// console.log("asdfasd",userData)
  return (
    <Layout>
    {/* <div id="main-wrapper"> */}
      {/* <Navbar /> */}
{showLoader && <Loader />}
      <div className="clearfix" />
      <section className="gray min">
        <div className="container">
          <div className="row">
            {/* property main detail */}
            <div className="col-lg-8 col-md-12 col-sm-12">
              {/* Single Block Wrap */}
              <div className="property_block_wrap">
                <div className="property_block_wrap_header">
                  <h4 className="property_block_title">User Info</h4>
                </div>
                <div className="block-body">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and {userData.usertype}
                    typesetting industry. Lorem Ipsum has been the industry's s
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>
              {/* Single Block Wrap */}
              <div className="_prtis_list pb-2">
                <div className="row">
                  <div className="col-lg-7 col-md-7 col-sm-12">
                  <div className="_prtis_list_header">
                  <div className="content_thumb">
                        <i className="fa fa-envelope mr-3" />
                        <strong>{userData && userData.email}</strong>
                      </div>
                      
                    </div>
                 
                  </div>
                  <div className="col-lg-5 col-md-5 col-sm-12">
                  <div className="_prtis_list_header">
                  <div className="content_thumb">
                    <i className="fa fa-phone mr-3" />
                    <strong>{userData && userData.phone ? userData.phone : "Not Update"}</strong>
                    
                      </div>
                      
                    </div>
                 
                  </div>
                </div>
               
                <div className="_prtis_list_body">
                  <ul className="deatil_features">
                    <li>
                      <strong>{userData.facebook_link}</strong>FaceBook
                    </li>
                    <li>
                      <strong>{userData.instagram_link}</strong>Instagram
                    </li>
                    <li>
                      <strong>{userData.linkedin_link}</strong>LinkedIn
                    </li>
                  </ul>
                </div>
              </div>
              {/* Single Block Wrap */}
            </div>
            {/* property Sidebar */}
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="property-sidebar">
                <div className="agency_gridio_wrap">
                  <div
                    className="agency_gridio_header"
                    style={{
                      background: "#d2382d url(assets/img/bg2.png)no-repeat",
                    }}
                  >
                    <span className="agents_count">{totalProperties} Properties</span>
                  </div>
                  <div className="agency_gridio_caption">
                    <div className="agency_gridio_thumb">
                      <a>
                        <img
                          src="assets/img/user-5.jpg"
                          style={{width:'7rem',borderRadius:'50px'}}
                        />
                      </a>
                    </div>
                    <div className="agency_gridio_txt">
                      <h4>
                        <a >{userData && userData.name}</a>
                      </h4>
                     

                      {/* <a   className="vew_agency_btn">Send Message</a>	 */}
                      <a className="vew_agency_btn text-white theme-bg">
                        Premium Landing Page
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="property_block_wraps">
                <div className="property_block_wrap_header">
                  <ul
                    className="nav nav-pills tabs_system"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="pills-property-tab"
                        data-toggle="pill"
                        role="tab"
                        aria-controls="pills-property"
                        aria-selected="true"
                      >
                        Properties
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="block-bodys">
                  <div className="sidetab-content">
                    <div className="tab-content" id="pills-tabContent">
                    {/* <Slider {...settings}> */}
                      {/* Book Now Tab */}
                      <div
                        className="tab-pane fade show active"
                        id="pills-property"
                        role="tabpanel"
                        aria-labelledby="pills-property-tab"
                      >
                        <div className="row ">
                          {/* Rrent Property */}
                          {userRrData && userRrData.map(item=>{
                            
  return <div className="col-lg-4 col-md-6 col-sm-12" key={item._id}>
  

            <div className="property-listing property-2">
              <div className="listing-img-wrapper">
                <div className="_exlio_125">For Rent</div>
                <div className="list-img-slide">
                  <div className="click">
                    <div><a><img src={`${item.images && item.images.length===0?"assets/img/p-4.png":item.images[0] }`} className="img-fluid mx-auto" style={{objectFit:'cover'}} alt="dj" /></a></div>
                  
                  </div>
                </div>
              </div>
              <div className="listing-detail-wrapper">
                <div className="listing-short-detail-wrap">
                  <div className="_card_list_flex mb-2">
                    <div className="_card_flex_01">
                      <span className="_list_blickes _netork">{item.rr_detail_bhk_type}</span>
                      <span className="_list_blickes types">{item.rr_detail_app_type}</span>
                    </div>
                    <div className="_card_flex_last">
                      <div className="prt_saveed_12lk">
                        {/* <label className="toggler toggler-danger"><input type="checkbox" /><i className="fa fa-heart" style={{color:"red"}} /></label> */}
                      </div>
                    </div>
                  </div>
                  <div className="_card_list_flex">
                    <div className="_card_flex_01">
                      <h4 className="listing-name verified"><Link to={`/rrent-detail/${item._id}`} className="prt-link-detail">{item.rr_detail_title && item.rr_detail_title.slice(0,50)+"..."}</Link></h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="price-features-wrapper">
                <div className="list-fx-features">
                  <div className="listing-card-info-icon">
                    <div className="inc-fleat-icon"><img src="assets/img/bed.svg" width={13} alt /></div>{item.rr_detail_bhk_type}
                  </div>
                  <div className="listing-card-info-icon">
                    <div className="inc-fleat-icon"><img src="assets/img/bathtub.svg" width={13} alt /></div>{item.rr_detail_bathroom} Bath
                  </div>
                  <div className="listing-card-info-icon">
                    <div className="inc-fleat-icon"><img src="assets/img/move.svg" width={13} alt /></div>{item.rr_detail_builtup_area}sqft
                  </div>
                </div>
              </div>
              <div className="listing-detail-footer">
                <div className="footer-first">
                  <h6 className="listing-card-info-price mb-0 p-0">Rs. {item.rr_rental_detail_rent}</h6>
                </div>
                <div className="footer-flex">
                  <Link  to={`/rrent-detail/${item._id}`} className="prt-view">View Detail</Link>
                </div>
              </div>
            </div>
         
          </div>
})}
                          {/* Rrent Property */}
                          {/* RSale Property */}
                          {userRrsData && userRrsData.map(item=>{
  return <div className="col-lg-4 col-md-6 col-sm-12" key={item._id}>
            <div className="property-listing property-2">
              <div className="listing-img-wrapper">
                <div className="_exlio_125">For Sale</div>
                <div className="list-img-slide">
                  <div className="click">
                    <div><a><img src={`${item.images && item.images.length===0?"assets/img/p-4.png":item.images[0] }`} className="img-fluid mx-auto" alt="dj" style={{objectFit:'cover'}} /></a></div>
                  
                  </div>
                </div>
              </div>
              <div className="listing-detail-wrapper">
                <div className="listing-short-detail-wrap">
                  <div className="_card_list_flex mb-2">
                    <div className="_card_flex_01">
                      <span className="_list_blickes _netork">{item.rrs_detail_bhk_type}</span>
                      <span className="_list_blickes types">{item.rrs_detail_furnishing}</span>
                    </div>
                    <div className="_card_flex_last">
                      <div className="prt_saveed_12lk">
                        {/* <label className="toggler toggler-danger"><input type="checkbox" /><i className="fa fa-heart" style={{color:"red"}} /></label> */}
                      </div>
                    </div>
                  </div>
                  <div className="_card_list_flex">
                    <div className="_card_flex_01">
                      <h4 className="listing-name verified"><Link to={`/rsale-detail/${item._id}`} className="prt-link-detail">{item.rrs_detail_title && item.rrs_detail_title.slice(0,50)+"..."}</Link></h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="price-features-wrapper">
                <div className="list-fx-features">
                  <div className="listing-card-info-icon">
                    <div className="inc-fleat-icon"><img src="assets/img/bed.svg" width={13} alt /></div>{item.rrs_detail_bhk_type}
                  </div>
                  <div className="listing-card-info-icon">
                    <div className="inc-fleat-icon"><img src="assets/img/bathtub.svg" width={13} alt /></div>{item.rrs_detail_bathroom} Bath
                  </div>
                  <div className="listing-card-info-icon">
                    <div className="inc-fleat-icon"><img src="assets/img/move.svg" width={13} alt /></div>{item.rrs_detail_builtup_area}sqft
                  </div>
                </div>
              </div>
              <div className="listing-detail-footer">
                <div className="footer-first">
                  <h6 className="listing-card-info-price mb-0 p-0">Rs. {item.rrs_resale_detail_exp_price}</h6>
                </div>
                <div className="footer-flex">
                  <Link to={`/rsale-detail/${item._id}`} className="prt-view">View Detail</Link>
                </div>
              </div>
            </div>
          </div>
})}

                        
                          {/* RSale Property */}

                          {/* Rpg Property */} 
                          {userRpgData && userRpgData.map(item=>{
  return <div className="col-lg-4 col-md-6 col-sm-12" key={item._id}>
            <div className="property-listing property-2">
              <div className="listing-img-wrapper">
                <div className="_exlio_125">For PG</div>
                <div className="list-img-slide">
                  <div className="click">
                    <div><a><img src={`${item.images && item.images.length===0?"assets/img/p-4.png":item.images[0] }`} className="img-fluid mx-auto" alt="dj" style={{objectFit:'cover'}} /></a></div>
                  
                  </div>
                </div>
              </div>
              <div className="listing-detail-wrapper">
                <div className="listing-short-detail-wrap">
                  <div className="_card_list_flex mb-2">
                    <div className="_card_flex_01">
                      <span className="_list_blickes _netork">{item.rpg_detail_room_occupany} Occupany</span>
                      <span className="_list_blickes types">For {item.rpg_detail_availablefor}</span>
                    </div>
                    <div className="_card_flex_last">
                      <div className="prt_saveed_12lk">
                        {/* <label className="toggler toggler-danger"><input type="checkbox" /><i className="fa fa-heart" style={{color:"red"}}  /></label> */}
                      </div>
                    </div>
                  </div>
                  <div className="_card_list_flex">
                    <div className="_card_flex_01">
                      <h4 className="listing-name verified"><Link to={`/rpg-detail/${item._id}`} className="prt-link-detail">{item.rpg_detail_title && item.rpg_detail_title.slice(0,50)+"..."}</Link></h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="price-features-wrapper">
                <div className="list-fx-features">
                  <div className="listing-card-info-icon">
                    <div className="inc-fleat-icon"><img src="assets/img/bed.svg" width={13} alt /></div>{item.rpg_detail_room_occupany} 
                  </div>
                  <div className="listing-card-info-icon">
                    <div className="inc-fleat-icon"><img src="assets/img/bathtub.svg" width={13} alt /></div>{item.rpg_detail_parking} 
                  </div>
                  <div className="listing-card-info-icon">
                    <div className="inc-fleat-icon"><img src="assets/img/move.svg" width={13} alt /></div>{item.rpg_detail_availablefor}
                  </div>
                </div>
              </div>
              <div className="listing-detail-footer">
                <div className="footer-first">
                  <h6 className="listing-card-info-price mb-0 p-0">Rs. {item.rpg_detail_room_rent}</h6>
                </div>
                <div className="footer-flex">
                  <Link to={`/rpg-detail/${item._id}`}  className="prt-view">View Detail</Link>
                </div>
              </div>
            </div>
          </div>
})}

                           {/* Rpg Property */}
                          {/* Rfm Property */}
                          {userRfmData && userRfmData.map(item=>{
  return <div className="col-lg-4 col-md-6 col-sm-12" key={item._id}>
            <div className="property-listing property-2">
              <div className="listing-img-wrapper">
                <div className="_exlio_125">For Sale</div>
                <div className="list-img-slide">
                  <div className="click">
                    <div><a ><img src={`${item.images && item.images.length===0?"assets/img/p-4.png":item.images[0] }`} className="img-fluid mx-auto" style={{objectFit:'cover'}} alt="dj" /></a></div>
                  
                  </div>
                </div>
              </div>
              <div className="listing-detail-wrapper">
                <div className="listing-short-detail-wrap">
                  <div className="_card_list_flex mb-2">
                    <div className="_card_flex_01">
                      <span className="_list_blickes _netork">{item.rfm_detail_bhk_type}</span>
                      <span className="_list_blickes types">{item.rfm_detail_furnishing}</span>
                    </div>
                    <div className="_card_flex_last">
                      <div className="prt_saveed_12lk">
                        {/* <label className="toggler toggler-danger"><input type="checkbox" /><i className="fa fa-heart"  style={{color:"red"}}/></label> */}
                      </div>
                    </div>
                  </div>
                  <div className="_card_list_flex">
                    <div className="_card_flex_01">
                      <h4 className="listing-name verified"><Link to={`/rfm-detail/${item._id}`} className="prt-link-detail">{item.rfm_detail_title && item.rfm_detail_title.slice(0,50)+"..."}</Link></h4>
                    </div>
                  </div>   
                </div>
              </div>
              <div className="price-features-wrapper">
                <div className="list-fx-features">
                  <div className="listing-card-info-icon">
                    <div className="inc-fleat-icon"><img src="assets/img/bed.svg" width={13} alt /></div>{item.rfm_detail_bhk_type}
                  </div>
                  <div className="listing-card-info-icon">
                    <div className="inc-fleat-icon"><img src="assets/img/bathtub.svg" width={13} alt /></div>{item.rfm_detail_bathroom} Bath
                  </div>
                  <div className="listing-card-info-icon">
                    <div className="inc-fleat-icon"><img src="assets/img/move.svg" width={13} alt /></div>{item.rfm_detail_builtup_area}sqft
                  </div>
                </div>
              </div>
              <div className="listing-detail-footer">
                <div className="footer-first">
                  <h6 className="listing-card-info-price mb-0 p-0">Rs. {item.rfm_rental_detail_exp_deposit}</h6>
                </div>
                <div className="footer-flex">
                  <Link to={`/rfm-detail/${item._id}`} className="prt-view">View Detail</Link>
                </div>
              </div>
            </div>
          </div>
})}
                          {/* Rfm Property */}
                          {/* Cmr  */}
                          {userCmrData && userCmrData.map(item=>{
  return <div className="col-lg-4 col-md-6 col-sm-12" key={item._id}>
            <div className="property-listing property-2">
              <div className="listing-img-wrapper">
                <div className="_exlio_125">For Com Rent</div>
                <div className="list-img-slide">
                  <div className="click">
                    <div><a ><img src={`${item.images && item.images.length===0?"assets/img/p-4.png":item.images[0] }`} className="img-fluid mx-auto" style={{objectFit:'cover'}} alt="dj" /></a></div>
                  
                  </div>
                </div>
              </div>
              <div className="listing-detail-wrapper">
                <div className="listing-short-detail-wrap">
                  <div className="_card_list_flex mb-2">
                    <div className="_card_flex_01">
                      <span className="_list_blickes _netork">{item.cr_detail_property_type}</span>
                      <span className="_list_blickes types">{item.cr_detail_furnishing}</span>
                    </div>
                    <div className="_card_flex_last">
                      <div className="prt_saveed_12lk">
                        {/* <label className="toggler toggler-danger"><input type="checkbox" /><i className="fa fa-heart"  style={{color:"red"}}/></label> */}
                      </div>
                    </div>
                  </div>
                  <div className="_card_list_flex">
                    <div className="_card_flex_01">
                      <h4 className="listing-name verified"><Link to={`/cmr-detail/${item._id}`} className="prt-link-detail">{item.cr_detail_title && item.cr_detail_title.slice(0,50)+"..."}</Link></h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="price-features-wrapper">
                <div className="list-fx-features">
                  <div className="listing-card-info-icon">
                    <div className="inc-fleat-icon"><img src="assets/img/bed.svg" width={13} alt /></div>{item.cr_detail_floor} Floor
                  </div>
                  <div className="listing-card-info-icon">
                    <div className="inc-fleat-icon"><img src="assets/img/bathtub.svg" width={13} alt /></div>{item.cr_detail_furnishing}
                  </div>
                  <div className="listing-card-info-icon">
                    <div className="inc-fleat-icon"><img src="assets/img/move.svg" width={13} alt /></div>{item.cr_detail_builtup_area}sqft
                  </div>
                </div>
              </div>
              <div className="listing-detail-footer">
                <div className="footer-first">
                  <h6 className="listing-card-info-price mb-0 p-0">Rs. {item.cr_rental_detail_rent}</h6>
                </div>
                <div className="footer-flex">
                  <Link to={`/cmr-detail/${item._id}`}  className="prt-view">View Detail</Link>
                </div>
              </div>
            </div>
          </div>
})}
                          {/* Cmr  */}
                          {/* Cms */}
                          {userCmsData && userCmsData.map(item=>{
  return <div className="col-lg-4 col-md-6 col-sm-12" key={item._id}>
            <div className="property-listing property-2">
              <div className="listing-img-wrapper">
                <div className="_exlio_125">For Com Sale</div>
                <div className="list-img-slide">
                  <div className="click">
                    <div><a ><img src={`${item.images && item.images.length===0?"assets/img/p-4.png":item.images[0] }`} className="img-fluid mx-auto" alt="dj" style={{objectFit:'cover'}} /></a></div>
                  
                  </div>
                </div>
              </div>
              <div className="listing-detail-wrapper">
                <div className="listing-short-detail-wrap">
                  <div className="_card_list_flex mb-2">
                    <div className="_card_flex_01">
                      <span className="_list_blickes _netork">{item.cs_detail_property_type}</span>
                      <span className="_list_blickes types">{item.cs_detail_furnishing}</span>
                    </div>
                    <div className="_card_flex_last">
                      <div className="prt_saveed_12lk">
                        {/* <label className="toggler toggler-danger"><input type="checkbox" /><i className="fa fa-heart"  style={{color:"red"}}/></label> */}
                      </div>
                    </div>
                  </div>
                  <div className="_card_list_flex">
                    <div className="_card_flex_01">
                      <h4 className="listing-name verified"><Link to={`/cms-detail/${item._id}`} className="prt-link-detail">{item.cs_detail_title && item.cs_detail_title.slice(0,50)+"..."}</Link></h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="price-features-wrapper">
                <div className="list-fx-features">
                  <div className="listing-card-info-icon">
                    <div className="inc-fleat-icon"><img src="assets/img/bed.svg" width={13} alt /></div>{item.cs_detail_floor} Floor
                  </div>
                  <div className="listing-card-info-icon">
                    <div className="inc-fleat-icon"><img src="assets/img/bathtub.svg" width={13} alt /></div>{item.cs_detail_furnishing}
                  </div>
                  <div className="listing-card-info-icon">
                    <div className="inc-fleat-icon"><img src="assets/img/move.svg" width={13} alt /></div>{item.cs_detail_builtup_area}sqft
                  </div>
                </div>
              </div>
              <div className="listing-detail-footer">
                <div className="footer-first">
                  <h6 className="listing-card-info-price mb-0 p-0">Rs. {item.cs_resale_details_exp_price}</h6>
                </div>
                <div className="footer-flex">
                  <Link to={`/cms-detail/${item._id}`} className="prt-view">View Detail</Link>
                </div>
              </div>
            </div>
          </div>
})}

                          {/* Cms  */}
                        {/* Plot */}
                        {userPlotData && userPlotData.map(item=>{
  return <div className="col-lg-4 col-md-6 col-sm-12" key={item._id}>
            <div className="property-listing property-2">
              <div className="listing-img-wrapper">
                <div className="_exlio_125">For Plot</div>
                <div className="list-img-slide">
                  <div className="click">
                    <div><a ><img src={`${item.images && item.images.length===0?"assets/img/p-4.png":item.images[0] }`} className="img-fluid mx-auto" alt="dj"  style={{objectFit:'cover'}}/></a></div>
                  
                  </div>
                </div>
              </div>
              <div className="listing-detail-wrapper">
                <div className="listing-short-detail-wrap">
                  <div className="_card_list_flex mb-2">
                    <div className="_card_flex_01">
                      <span className="_list_blickes _netork">{item.ps_detail_width_of_facing_road} Facing Road</span>
                      {/* <span className="_list_blickes types">{item.cs_detail_furnishing}</span> */}
                    </div>
                    <div className="_card_flex_last">
                      <div className="prt_saveed_12lk">
                        {/* <label className="toggler toggler-danger"><input type="checkbox" /><i className="fa fa-heart"  style={{color:"red"}}/></label> */}
                      </div>
                    </div>
                  </div>
                  <div className="_card_list_flex">
                    <div className="_card_flex_01">
                      <h4 className="listing-name verified"><Link to={`/plot-detail/${item._id}`} className="prt-link-detail">{item.ps_detail_title && item.ps_detail_title.slice(0,50)+"..."}</Link></h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="price-features-wrapper">
                <div className="list-fx-features">
                  <div className="listing-card-info-icon">
                    <div className="inc-fleat-icon"><img src="assets/img/bed.svg" width={13} alt /></div>{item.ps_rules_allowed_floors} Allow
                  </div>
                  <div className="listing-card-info-icon">
                    <div className="inc-fleat-icon"><img src="assets/img/bathtub.svg" width={13} alt /></div>{item.ps_detail_has_boundary?"Yes":"No"}
                  </div>
                  <div className="listing-card-info-icon">
                    <div className="inc-fleat-icon"><img src="assets/img/move.svg" width={13} alt /></div>{parseInt(item.ps_detail_plot_length)*parseInt(item.ps_detail_plot_width)}
                  </div>
                </div>
              </div>
              <div className="listing-detail-footer">
                <div className="footer-first">
                  <h6 className="listing-card-info-price mb-0 p-0">Rs. {Math.floor(parseInt(item.ps_sale_detail_price)/1000) }K</h6>
                </div>
                <div className="footer-flex">
                  <Link to={`/plot-detail/${item._id}`} className="prt-view">View Detail</Link>
                </div>
              </div>
            </div>
          </div>
})}
                        {/* Plot */}
                        
                        </div>
                      </div>
                {/* <div class="row">
									<div class="col-lg-12 col-md-12">
										<div class="card">
											<div class="card-header">
												<h4 class="mb-0">Order Status</h4>
											</div>
											<div class="card-body p-0">
												<div class="table-responsive">
                        <table className="table table-lg table-hover">
                      <thead>
                        <tr>
                          <th>Service Name</th>
                          <th>Service Charge / Service Unit</th>
                          <th>Date Created</th>
                          <th>Leads</th>
                        </tr>
                      </thead>
                      <tbody>
                        {myservice.map((service) => (
                         <tr>
                          <td>{service.service_name}</td>
                          <td>Rs. {service.service_charge} / {service.charge_unit}</td>
                          <td>{service.createdAt && service.createdAt.slice(0, 10)}</td>
                           <td>
          <div
            className="_leads_action"
            onClick={() => {
              setShow(!show);
              console.log(service)
              getServiceLeads(service.service_id,service.vender_id);
            }}
            style={{cursor:"pointer"}}
          >
            <i className="fas fa-eye" />
          </div>
        </td>

                         </tr>
                        ))}
                      </tbody>
                    </table>
												</div>
											</div>
										</div>
									</div>
								</div> */}
                {userData.usertype === "1"  && (
          <div>
            <div className="property_block_wrap_header">
              <ul className="nav nav-pills tabs_system" id="pills-tab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="pills-property-tab"
                    data-toggle="pill"
                    role="tab"
                    aria-controls="pills-property"
                    aria-selected="true"
                  >
                    Services
                  </a>
                </li>
              </ul>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="mb-0">Order Status</h4>
                  </div>
                  <div className="card-body p-0">
                    <div className="table-responsive">
                      <table className="table table-lg table-hover">
                        <thead>
                          <tr>
                            <th>Service Name</th>
                            <th>Service Charge / Service Unit</th>
                            <th>Date Created</th>
                            <th>Leads</th>
                          </tr>
                        </thead>
                        <tbody>
                          {myservice.map((service) => (
                            <tr>
                              <td>{service.service_name}</td>
                              <td>
                                Rs. {service.service_charge} / {service.charge_unit}
                              </td>
                              <td>
                                {service.createdAt && service.createdAt.slice(0, 10)}
                              </td>
                              <td>
                                <div
                                  className="_leads_action"
                                  onClick={() => {
                                    setShow(!show);
                                    console.log(service);
                                    getServiceLeads(
                                      service.service_id,
                                      service.vender_id
                                    );
                                  }}
                                  style={{ cursor: "pointer" }}
                                >
                                  <i className="fas fa-eye" />
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
) }
                      
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        //   style={{  height: '100%', margin: '0', padding: '0', overflow: 'hidden'}}
        size="xl"
        scrollable={true}
      >
        <Modal.Header>
          <Modal.Title id="example-custom-modal-styling-title">
            Service Leads
          </Modal.Title>
          <i
            className="float-end fa fa-times"
            onClick={() => {
              setShow(false);
            }}
            style={{ cursor: "pointer",marginRight:10 }}
          ></i>
        </Modal.Header>
        <Modal.Body>
          <Tabs defaultActiveKey="All" id="uncontrolled-tab-example" fill>
            <Tab eventKey="All" title="All Lead">
            <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="mb-0">Order Status</h4>
                </div>
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table table-lg table-hover">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th className="m2_hide">Phone No</th>
                          <th>Status</th>
                          <th>Lead Date</th>
                        </tr>
                      </thead>
                      <tbody>
                      {serviceLeads.map((lead) => (
                        <tr>
                          <td>
                            <a >
                                {lead.client_name}
                            </a>
                          </td>
                          <td className="m2_hide">{lead.client_phone}</td>
                          <td>
                            <div className="label text-success bg-success-light">
                                {lead.lead_stage ==0 ?  "New One" : lead.lead_stage ==10 ? "Pending" : lead.lead_stage == 20 ? "Completed" :"Cancel"}
                            </div>
                          </td>
                         
                          <td>{lead.createdAt && lead.createdAt.slice(0,10)}</td>
                        </tr>

                            
                        ))}
                     
                             
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
            </Tab>
            <Tab eventKey="New" title="New Lead">
           <ServiceLead stage={0} leads={serviceLeads} />
            </Tab>
            <Tab eventKey="Pending" title="Pending">
            <ServiceLead stage={10} leads={serviceLeads} />
            </Tab>
            <Tab eventKey="Cancel" title="Cancel">
            <ServiceLead stage={-10} leads={serviceLeads} />
            </Tab>
            <Tab eventKey="Completed" title="Completed">
            <ServiceLead stage={20} leads={serviceLeads} />
            </Tab>
          </Tabs>
        </Modal.Body>
      </Modal>

      {/* <Footer /> */}
    {/* </div> */}
    </Layout>
  );
};

export default UserDetailPageAll;