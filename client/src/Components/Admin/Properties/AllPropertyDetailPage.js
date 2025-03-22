import React,{useState} from "react";
import Slider from "react-slick";
import Layout from "../Layout";



const AllPropertyDetailPage = () => {
  const [model, setmodel] = useState(false)

  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <button className="slick-next slick-arrow">Next</button>,
    prevArrow: <button className="slick-prev slick-arrow">Previous</button>,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  
  return (
    <>
    <Layout>
      <div className="container" style={{backgroundColor:"white",borderRadius:10}}>
      <div className="clearfix" />
    <section className="gallery_parts pt-2 pb-2 d-none d-sm-none d-md-none d-lg-none d-xl-block">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-7 col-sm-12 pr-1">
              <div className="gg_single_part left"><img src="assets/img/p-2.png" className="img-fluid mx-auto" alt="img" /></div>
            </div>
            <div className="col-lg-4 col-md-5 col-sm-12 pl-1">
              <div className="gg_single_part-right min"><img src= "assets/img/p-1.png" className="img-fluid mx-auto" alt='img' /></div>
              <div className="gg_single_part-right min mt-2 mb-2"><img src= "assets/img/p-3.png" className="img-fluid mx-auto" alt='nu' /></div>
              <div className="gg_single_part-right min"><img src= "assets/img/p-4.png" className="img-fluid mx-auto" alt='kj' /></div>
          </div>
          </div>
        </div>
      </section>
      
          <div className="featured_slick_gallery gray d-block d-md-block d-lg-block d-xl-none">
            <div className="featured_slick_gallery-slide">
            <Slider {...settings}>
              <div className="featured_slick_padd" ><a  className="mfp-gallery"><img src="assets/img/slider-2.jpg" className="img-fluid mx-auto" alt="" /></a></div>
              <div className="featured_slick_padd" ><a  className="mfp-gallery"><img src="assets/img/slider-3.jpg" className="img-fluid mx-auto" alt="" /></a></div>
              <div className="featured_slick_padd" ><a  className="mfp-gallery"><img src="assets/img/slider-4.jpg" className="img-fluid mx-auto" alt="" /></a></div>
              <div className="featured_slick_padd" ><a  className="mfp-gallery"><img src="assets/img/slider-5.jpg" className="img-fluid mx-auto" alt="" /></a></div>
              </Slider>
            </div>
          </div>
      

            <section className="pt-4">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-12 col-sm-12">
                  <div className="property_info_detail_wrap mb-4">
                    <div className="property_info_detail_wrap_first">
                      <div className="pr-price-into">
                        <ul className="prs_lists">
                          <li><span className="bed">2 BHK</span></li>
                          <li><span className="bath">2 Bath</span></li>
                          <li><span className="gar">1 Balcony</span></li>
                          <li><span className="sqft">100 sqft</span></li>
                        </ul>
                        <h2>2 BHK Appartment Available For Rent In Colonel Ganj</h2>
                        <span><i className="lni-map-marker" />Kanpur</span>
                      </div>
                    </div>
                    <div className="property_detail_section">
                      <div className="prt-sect-pric">
                      </div>
                    </div>
                  </div>
                  <div className="property_block_wrap">
                    <div className="property_block_wrap_header">
                      <h4 className="property_block_title">Property Description</h4>
                    </div>
                    <div className="block-body">
                      <p>2 BHK Appartment Available For Rent In Colonel Ganj</p>
                    </div>
                  </div>
                  <div className="property_block_wrap">
                    <div className="property_block_wrap_header">
                      <h4 className="property_block_title">Property Features</h4>
                    </div>								
                    <div className="block-body">
                      <ul className="row p-0 m-0">
                        <li className="col-lg-6 col-md-6 mb-2 p-0 col-6"><img src="assets/icons/apartment.png" className="icon-details mr-1" />Apartment Type</li><p className='col-6'>Apartment</p>
                        <li className="col-lg-6 col-md-6 mb-2 p-0 col-6"><img src="assets/icons/house.png" className="icon-details mr-1" />BHK Type</li><p className='col-6'>2 BHK</p>
                        <li className="col-lg-6 col-md-6 mb-2 p-0 col-6"><img src="assets/icons/building.png" className="icon-details mr-1" />Floor</li><p className='col-6'>1</p>
                        <li className="col-lg-6 col-md-6 mb-2 p-0 col-6"><img src="assets/icons/all.png" className="icon-details mr-1" />Total Floor</li><p className='col-6'>10</p>
                        <li className="col-lg-6 col-md-6 mb-2 p-0 col-6"><img src="assets/icons/parquet.png" className="icon-details mr-1" />Floor Type</li><p className='col-6'>Tiles</p>
                        <li className="col-lg-6 col-md-6 mb-2 p-0 col-6"><img src="assets/icons/kitchen-set-solid.png" className="icon-details mr-1" />Kitchen Type</li><p className='col-6'>Modular</p>
                        <li className="col-lg-6 col-md-6 mb-2 p-0 col-6"><img src="assets/icons/cake.png" className="icon-details mr-1" />Property Age</li><p className='col-6'>0-10</p>
                        <li className="col-lg-6 col-md-6 mb-2 p-0 col-6"><img src="assets/icons/compass.png" className="icon-details mr-1" />Facing</li><p className='col-6'>North</p>
                        <li className="col-lg-6 col-md-6 mb-2 p-0 col-6"><img src="assets/icons/scale-screen.png" className="icon-details mr-1" />Built-up Area</li><p className='col-6'>100 sqft.</p>
                        <li className="col-lg-6 col-md-6 mb-2 p-0 col-6"><img src="assets/icons/armchair.png" className="icon-details mr-1" />Furnishing</li><p className='col-6'>Furnished</p>
                        <li className="col-lg-6 col-md-6 mb-2 p-0 col-6"><img src="assets/icons/parking.png" className="icon-details mr-1" />Parking</li><p className='col-6'>Car/Bike</p>
                        <li className="col-lg-6 col-md-6 mb-2 p-0 col-6"><img src="assets/icons/bath.png" className="icon-details mr-1" />Bathrooms</li><p className='col-6'>2</p>
                        <li className="col-lg-6 col-md-6 mb-2 p-0 col-6"><img src="assets/icons/balcony.png" className="icon-details mr-1" />Balcony</li><p className='col-6'>1</p>
                        <li className="col-lg-6 col-md-6 mb-2 p-0 col-6"><img src="assets/icons/drop.png" className="icon-details mr-1" />Water Supply</li><p className='col-6'>Yes</p>
                      </ul>
                    </div>
                  </div>
                  <div className="property_block_wrap">
                  </div>
                  <div className="property_block_wrap">
                    <div className="property_block_wrap_header">
                      <h4 className="property_block_title">Location</h4>
                    </div>
                    <div className="block-body">
                      <div className="map-container">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15090.183774083564!2d72.82822336977539!3d18.99565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cef0d17ace6f%3A0xba0d758b25d8b289!2sICICI%20Bank%20Curry%20Road%2C%20Mumbai-Branch%20%26%20ATM!5e0!3m2!1sen!2sin!4v1624183548415!5m2!1sen!2sin" className="full-width" height={450} style={{border: 0}} allowFullScreen loading="lazy" />
                      </div>
                    </div>
                    
                  </div>
                  
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12">
                  <div className="property-sidebar">
                    <div className="sider_blocks_wrap">
                      <div className="side-booking-header">
                        <div className="sb-header-left"><h3> Rent Details </h3></div>
                        <div className="price_offer">#</div>
                      </div>
                      <div className="side-booking-body">
                        <div className="row">											
                          <div className="col-lg12 col-md-12 col-sm-12 mt-3">
                            <label htmlFor="guests">Price &amp; Tax</label>
                            <div className="_adv_features">
                              <ul>
                                <li>Rent<span>Rs.1,00,000</span></li>
                                <li>Expected Deposit<span>Rs.2,50,000</span></li>
                              </ul>
                            </div>
                          </div>
                          <div className="side-booking-foot">
                            <span className="sb-header-left">Total Payment</span>
                            <h3 className="price theme-cl">Rs.3,50,000</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sider_blocks_wrap">
                      <div className="side-booking-body">
                        <div className="agent-_blocks_title">
                          <div className="agent-_blocks_thumb"><img src="assets/img/user-5.jpg" alt /></div>
                          <div className="agent-_blocks_caption">
                            <h4><a href>John Doe</a></h4>
                            <p>Property Owner</p>
                            <span className="approved-agent"><i className="ti-check" />approved</span>
                          </div>
                          <div className="clearfix" />
                        </div>
                      </div>
                    </div>
                  
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

    </Layout>
    </>
  );
};

export default AllPropertyDetailPage;
