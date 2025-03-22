import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { leadContext } from '../../../context/LeadContext';
import propertyContext from '../../../context/PropertyContext';


import img from '../../images/p-1.png'

const ShortList = () => {
  const leadcontext = useContext(leadContext);
  const { userleadsdata } = leadcontext;
  const context = useContext(propertyContext);
  const { dash, host } = context;

  const { ownerlead, ownerleaddata } = leadcontext
  const [model, setmodel] = useState(false);
  const [rr, setrr] = useState([])
  const [rrs, setrrs] = useState([])
  const [rpg, setrpg] = useState([])
  const [rfm, setrfm] = useState([])
  const [cmr, setcmr] = useState([])
  const [cms, setcms] = useState([])
  const [plot, setplot] = useState([])


  useEffect(() => {
    async function userliked(ptype) {
      const responce = await fetch(`${host}/likes/userlike/${ptype}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,
        },
      });
      const resdata = await responce.json();
      if (ptype === 1) {
        setrr(resdata)
        console.log(resdata)
      } else if (ptype === 2) {
        setrrs(resdata)
      } else if (ptype === 3) {
        setrpg(resdata)
      } else if (ptype === 4) {
        setrfm(resdata)
      } else if (ptype === 5) {
        setcmr(resdata)
      } else if (ptype === 6) {
        setcms(resdata)
      } else if (ptype === 7) {
        setplot(resdata)
      }
    };
    userliked(1)
    userliked(2)
    userliked(3)
    userliked(4)
    userliked(5)
    userliked(6)
    userliked(7)
  }, [])
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 h-dashboard">
      <div className="dashboard-body mb-3">
        <div className="row">
{rr && rr.map(item=>{
  return <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="property-listing property-2">
              <div className="listing-img-wrapper">
                <div className="_exlio_125">For Rent</div>
                <div className="list-img-slide">
                  <div className="click">
                    <div><a href><img src={`${item.images && item.images.length===0?"assets/img/p-4.png":item.images[0] }`} className="img-fluid mx-auto" alt="dj" /></a></div>
                  
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
                        <label className="toggler toggler-danger"><input type="checkbox" /><i className="fa fa-heart" style={{color:"red"}} /></label>
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
{rrs && rrs.map(item=>{
  return <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="property-listing property-2">
              <div className="listing-img-wrapper">
                <div className="_exlio_125">For Sale</div>
                <div className="list-img-slide">
                  <div className="click">
                    <div><a href><img src={`${item.images && item.images.length===0?"assets/img/p-4.png":item.images[0] }`} className="img-fluid mx-auto" alt="dj" /></a></div>
                  
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
                        <label className="toggler toggler-danger"><input type="checkbox" /><i className="fa fa-heart" style={{color:"red"}} /></label>
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
                  <Link  to={`/rsale-detail/${item._id}`} className="prt-view">View Detail</Link>
                </div>
              </div>
            </div>
          </div>
})}
{rpg && rpg.map(item=>{
  return <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="property-listing property-2">
              <div className="listing-img-wrapper">
                <div className="_exlio_125">For PG</div>
                <div className="list-img-slide">
                  <div className="click">
                    <div><a href><img src={`${item.images && item.images.length===0?"assets/img/p-4.png":item.images[0] }`} className="img-fluid mx-auto" alt="dj" /></a></div>
                  
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
                        <label className="toggler toggler-danger"><input type="checkbox" /><i className="fa fa-heart" style={{color:"red"}}  /></label>
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
                  <Link to={`/rpg-detail/${item._id}`} className="prt-view">View Detail</Link>
                </div>
              </div>
            </div>
          </div>
})}
{rfm && rfm.map(item=>{
  return <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="property-listing property-2">
              <div className="listing-img-wrapper">
                <div className="_exlio_125">For Flatmate</div>
                <div className="list-img-slide">
                  <div className="click">
                    <div><a href><img src={`${item.images && item.images.length===0?"assets/img/p-4.png":item.images[0] }`} className="img-fluid mx-auto" alt="dj" /></a></div>
                  
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
                        <label className="toggler toggler-danger"><input type="checkbox" /><i className="fa fa-heart"  style={{color:"red"}}/></label>
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
                  <Link  to={`/rfm-detail/${item._id}`} className="prt-view">View Detail</Link>
                </div>
              </div>
            </div>
          </div>
})}
         
{cmr && cmr.map(item=>{
  return <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="property-listing property-2">
              <div className="listing-img-wrapper">
                <div className="_exlio_125">For Com Rent</div>
                <div className="list-img-slide">
                  <div className="click">
                    <div><a href><img src={`${item.images && item.images.length===0?"assets/img/p-4.png":item.images[0] }`} className="img-fluid mx-auto" alt="dj" /></a></div>
                  
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
                        <label className="toggler toggler-danger"><input type="checkbox" /><i className="fa fa-heart"  style={{color:"red"}}/></label>
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
                  <Link  to={`/cmr-detail/${item._id}`} className="prt-view">View Detail</Link>
                </div>
              </div>
            </div>
          </div>
})}
{cms && cms.map(item=>{
  return <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="property-listing property-2">
              <div className="listing-img-wrapper">
                <div className="_exlio_125">For Com Sale</div>
                <div className="list-img-slide">
                  <div className="click">
                    <div><a href><img src={`${item.images && item.images.length===0?"assets/img/p-4.png":item.images[0] }`} className="img-fluid mx-auto" alt="dj" /></a></div>
                  
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
                        <label className="toggler toggler-danger"><input type="checkbox" /><i className="fa fa-heart"  style={{color:"red"}}/></label>
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
                  <Link  to={`/cms-detail/${item._id}`} className="prt-view">View Detail</Link>
                </div>
              </div>
            </div>
          </div>
})}
{plot && plot.map(item=>{
  return <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="property-listing property-2">
              <div className="listing-img-wrapper">
                <div className="_exlio_125">For Plot</div>
                <div className="list-img-slide">
                  <div className="click">
                    <div><a href><img src={`${item.images && item.images.length===0?"assets/img/p-4.png":item.images[0] }`} className="img-fluid mx-auto" alt="dj" /></a></div>
                  
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
                        <label className="toggler toggler-danger"><input type="checkbox" /><i className="fa fa-heart"  style={{color:"red"}}/></label>
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
                  <Link  to={`/plot-detail/${item._id}`} className="prt-view">View Detail</Link>
                </div>
              </div>
            </div>
          </div>
})}
        </div>

      </div>




    </div>

  )
}

export default ShortList