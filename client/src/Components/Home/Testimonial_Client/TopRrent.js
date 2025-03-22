import React, { useContext, useEffect, useState } from 'react'
import Slider from 'react-slick'
import propertyContext from '../../../context/PropertyContext';
import img from '../../images/p-1.png'

const TopRrent = () => {
    const context = useContext(propertyContext);
    const { host } = context;
    const [data ,setData] = useState([])
    useEffect(  () => {
        async function listrrprop(){
          const responce =await  fetch(`${host}/property/get-top-rr`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          const resdata =await  responce.json();
          setData(resdata)
          console.log(resdata);  
        } 
        listrrprop()
      }, []);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <button className="slick-next slick-arrow">Next</button>,
        prevArrow: <button className="slick-prev slick-arrow" >Previous</button>,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };
    return (
        <section className="gray-simple min">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-8">
                        <div className="sec-heading center">
                            <h2>Our Recent Properties</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="item-slide space">
                            {/* Single Item */}
                            <Slider {...settings}>
                            {data &&  data.map((item,key)=>{
                                
                                return  <div key={key}>
                                <div className="px-3">
								<div className="property-listing property-2">
									<div className="listing-img-wrapper">
										<div className="_exlio_125">For Rent</div>
										<div className="list-img-slide">
											<div className="click">
												<div><a ><img src={item.images && item.images.length!==0 ?item.images[0]:img} className="img-fluid mx-auto" alt="img" /></a></div>
												
											</div>
										</div>
									</div>
									<div className="listing-detail-wrapper">
										<div className="listing-short-detail-wrap">
											<div className="_card_list_flex mb-2">
												<div className="_card_flex_01">
													<span className="_list_blickes _netork mx-2">{item.rr_detail_bhk_type}</span>
													<span className="_list_blickes types">{item.rr_detail_furnishing}</span>
												</div>
												<div className="_card_flex_last">
													<h6 className="listing-card-info-price mb-0">Rs.{item.rr_rental_detail_rent}</h6>
												</div>
											</div>
											<div className="_card_list_flex">
												<div className="_card_flex_01">
													<h4 className="listing-name verified"><a  className="prt-link-detail">{`${item.rr_detail_bhk_type}  flat in ${item.rr_location_state}`}</a></h4>
												</div>
											</div>
										</div>
									</div>
									<div className="price-features-wrapper">
										<div className="list-fx-features">
											<div className="listing-card-info-icon">
												<div className="inc-fleat-icon"><img src="assets/img/bed.svg" width={13} alt="img" /></div>{item.rr_detail_floor} 
											</div>
											<div className="listing-card-info-icon">
												<div className="inc-fleat-icon"><img src="assets/img/bathtub.svg" width={13} alt="imh" /></div>{item.rr_detail_bathroom} Bath
											</div>
											<div className="listing-card-info-icon">
												<div className="inc-fleat-icon"><img src="assets/img/move.svg" width={13} alt="img" /></div>{item.rr_detail_builtup_area} sqft
											</div>
										</div>
									</div>
									<div className="listing-detail-footer">
										<div className="footer-first">
											<div className="foot-location"><img src="assets/img/pin.svg" width={18} alt="img" />{item.rr_location_city && item.rr_location_city.slice(0,25) +"..." }</div>
										</div>
										<div className="footer-flex">
											<ul className="selio_style">
												{/* <li>
													<div className="prt_saveed_12lk">
														<label className="toggler toggler-danger" data-toggle="tooltip" data-placement="top" data-original-title="Save property"><input type="checkbox" /><i className="ti-heart" /></label>
													</div>
												</li> */}
												
												<li>
													<div className="prt_saveed_12lk">
														<a  data-toggle="tooltip" data-placement="top" data-original-title="View Property"><i className="ti-arrow-right" /></a>
													</div>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
                                </div>
                            })}
                               

                          
                          

                           
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TopRrent