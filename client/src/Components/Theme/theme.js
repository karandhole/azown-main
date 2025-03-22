import React from 'react'
// import './styel.css'
import { Helmet } from 'react-helmet';

const Theme = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };
    const backgroundImageUrl = 'https://www.thehousedesigners.com/images/uploads/SiteImage-Landing-modern-house-plans-1.webp';
  return (
    <>
    <div>
    <Helmet>
        <link
          rel="stylesheet"
          href="https://androcoders.in/temp/css/propTemp1.css"
          type="text/css"
        />
      </Helmet>
        <header className="header-area" style={{cursor:"pointer"}}>   	
            <div id="header-sticky" className="menu-area">
                <div className="container">
                    <div className="second-menu">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-2">
                                <div className="logo">
                                    <a ><img src="assets/img/logo.png" style={{width:'12rem'}} alt="logo"/></a>

                                    

                                </div>
                            </div>
                            <div className="col-xl-10 col-lg-9">
                                <div className="main-menu text-right <text-xl-right></text-xl-right>">
                                <nav id="mobile-menu">
      <ul>
        <li className="has-sub">
          <a onClick={() => scrollToSection('home')}>Home</a>
        </li>
        <li>
          <a onClick={() => scrollToSection('interior-views-section')}>Interior Views</a>
        </li>
        <li>
          <a onClick={() => scrollToSection('what-we-do-section')}>What We Do</a>
        </li>
        <li>
          <a onClick={() => scrollToSection('neighborhoods-section')}>Neighborhoods</a>
        </li>
        <li>
          <a onClick={() => scrollToSection('location-section')}>Location</a>
        </li>
      </ul>
    </nav>
                                </div>
                            </div>                           
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <section id="home" className="slider-area fix p-relative">
               
               <div className="slider-active">
               <div className="single-slider slider-bg d-flex align-items-center" style={{ backgroundImage: `url('${backgroundImageUrl}')` }}>
    <div className="container">
        <div className="row">
            <div className="col-lg-8">
                <div className="slider-content s-slider-content text-left">
                    <h2>Discover  Modern<br/>Building Design.</h2>
                    <ul data-animation="fadeInUp" data-delay=".6s">
                        <li>
                            <i className="fas fa-bed"></i>
                            <span>3 Bedrooms.</span>
                        </li>
                        <li>
                            <i className="fal fa-pencil-ruler"></i>
                            <span>Square Feet</span>
                        </li>
                        <li>
                            <i className="fas fa-bath"></i>
                            <span>Bedrooms</span>
                        </li>
                        <li>
                            <i className="fas fa-car"></i>
                            <span>Car parking</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="slider-price">
                    <h3>Price:</h3>
                    <h2>$1,786.80</h2>
                </div>
            </div>
        </div>
    </div>
</div>

                   </div>

           </section>
           <section id="about" className="about-area about-p pt-120 pb-120 p-relative">
                <div className="container">
                    <div className="row align-items-center">
					<div className="col-lg-6">
                            <div className="s-about-img p-relative">
                                <img src="http://zcube.in/relxtower/img/features/about_img02.png" alt="img"/>
                                <div className="about-text second-about">
                                    <span>35 years of <br/> experience</span>
                                </div>
                            </div>
                        </div>
					<div className="col-lg-6">
                            <div className="about-content s-about-content pl-30">
                                <div className="about-title second-atitle">
                                    <span>About Us</span>
                                    <h2>Welcome To Our Relxtower</h2>
                                    <p><span></span>We provide an essential service for you</p>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
                                omnis iste natus error sit voluptatem accusantium doloremque laudantiue.</p>
                                <a href className="btn">Get Started</a>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </section>
            {/* Add image in div */}
            <div className="counter-area pt-120 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-counter text-center mb-30 wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
								<i className="fal fa-pencil-ruler"></i>
                                <div className="counter p-relative">
                                    <span className="count text-dark">2543</span>                                   
                                </div>
                                <p style={{fontSize:'1.06rem'}}>Square Feet</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-counter text-center mb-30 wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
							<i className="fas fa-bath"></i>
                                <div className="counter p-relative">
                                    <span className="count text-dark">4</span>                                   
                                </div>
                                <p style={{fontSize:'1.06rem'}}>Bathrooms</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-counter text-center mb-30 wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
							<i className="fas fa-bed"></i>
                                <div className="counter p-relative">
                                    <span className="count text-dark">6</span>                                   
                                </div>
                                <p style={{fontSize:'1.06rem'}}> Bedrooms</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-counter text-center mb-30 wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
							<i className="fas fa-car"></i>
                                <div className="counter p-relative">
                                    <span className="count text-dark">4</span>                                   
                                </div>
                                <p style={{fontSize:'1.06rem'}}>Car parking</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section id="interior-views-section" className="services-area pt-113 pb-150">
              
              <div className="container">
                  <div className="row justify-content-center">
                      <div className="col-xl-8 col-lg-10">
                          <div className="section-title text-center pl-40 pr-40 mb-80">
                              <span>Best Work</span>
                              <h2>Interior Views</h2>
                          </div>
                      </div>
                  </div>
                  <div className="row services-active">
                      <div className="col-xl-4">
                          <div className="single-services mb-30">
                              <div className="services-thumb">
                                  <a className="gallery-link popup-image" >
                                  {/* <img src="img/gallery/gallery.jpg" alt="img"/> */}
                                  <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlfGVufDB8fDB8fHww&w=1000&q=80" alt="img"/>
                                  </a>
                              </div>
                              <div className="services-content">                                   
                                  <small>Explore Now</small>
                                  <h4><a>One Room Apartment</a></h4>                                   
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-4">
                          <div className="single-services mb-30">
                              <div className="services-thumb">
                                  <a className="gallery-link popup-image" >
                                  <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlfGVufDB8fDB8fHww&w=1000&q=80" alt="img"/>
                                  </a>
                              </div>
                              <div className="services-content">                                   
                                   <small>Explore Now</small>
                                  <h4><a >Luxury Apartment</a></h4>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-4">
                          <div className="single-services mb-30">
                              <div className="services-thumb">
                                  <a className="gallery-link popup-image" >
                                  <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlfGVufDB8fDB8fHww&w=1000&q=80" alt="img"/>
                                  </a>
                              </div>
                              <div className="services-content">                                   
                                  <small>Explore Now</small>
                                  <h4><a >Deluxe Apartment</a></h4>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <section className="choose-area pt-120 pb-120 p-relative">             
                <div className="chosse-img wow fadeInRight animated" data-animation="fadeInRight animated" data-delay=".2s"></div>
                <div className="container">
                    <div className="row">
						<div className="col-xl-6">
							 <div className="s-about-img p-relative">
                             <img src="http://zcube.in/relxtower/img/features/about_img03.png" alt="img"/>
								</div>
						 </div>
                        <div className="col-xl-6">
                            <div className="choose-wrap">
                                <div className="section-title w-title left-align mb-35 wow fadeInDown animated" data-animation="fadeInDown animated" data-delay=".2s">
                                    <span>Best Place</span>
									<h2>For Sell Properties</h2>
                                </div>
                                <div className="choose-content wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
                                    <p>Pellentesque habitant morbi tristique senectus et netus et fames acturpis egestas. Vestibulum tortor quam, feugiat vitae, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. mivitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien.</p>
									
                                    <div className="choose-list mt-20 mb-20">
                                        <ul>
                                            <li>
                                               <i className="fas fa-bed"></i>
                                                <span>3 Bedrooms.</span>
                                            </li>
                                            <li>
                                               <i className="fal fa-pencil-ruler"></i>
                                                <span>Square Feet </span>
                                            </li>
                                            <li>
                                                <i className="fas fa-bath"></i>
                                                <span>Bedrooms</span>
                                            </li>
											<li>
                                               <i className="fas fa-car"></i>
                                                <span>Car parking</span>
                                            </li>
                                        </ul>
                                    </div>									
									<h3>Price:</h3>
									<h2>$1,786.80</h2>
                                    <div className="choose-btn mt-30">
                                        <a className="btn">Contact Us</a>
                                    </div>
                                </div>
                            </div>
                        </div>
						 
                    </div>
					
                </div>
            </section>
            <section id="what-we-do-section" className="services-area services-bg services-two pt-120 pb-90">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10">
                            <div className="section-title text-center pl-40 pr-40 mb-80 wow fadeInDown animated" data-animation="fadeInDown animated" data-delay=".2s">
                                <span>our services</span>
                                <h2>What We Do </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
					
						<div className="col-lg-4 col-md-6 mb-30">
                            <div className="s-single-services wow fadeInUp  animated" data-animation="fadeInDown animated" data-delay=".2s" style={{visibility:'visible',animationName:'fadeInUp'}}>
                                <div className="services-ico2">
                                <i className="far fa-building"></i>
                                </div>
                                <div className="second-services-content2">
                                    <h5>Dedicated Production & Planning Teams </h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc ididunt ut labore. </p>
									<a>Read More</a>
                                </div>
                            </div>
                        </div>
						<div className="col-lg-4 col-md-6 mb-30">
                            <div className="s-single-services wow fadeInUp  animated" data-animation="fadeInDown animated" data-delay=".2s" style={{visibility:'visible',animationName:'fadeInUp'}}>
                                <div className="services-ico2">
                                   <i className="far fa-building"></i>
                                </div>
                                <div className="second-services-content2">
                                    <h5>Were Here To Make You Successful</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc ididunt ut labore. </p>
									<a >Read More</a>
                                </div>
                            </div>
                        </div>
						<div className="col-lg-4 col-md-6 mb-30">
                            <div className="s-single-services wow fadeInUp  animated" data-animation="fadeInDown animated" data-delay=".2s" style={{visibility:'visible',animationName:'fadeInUp'}}>
                                <div className="services-ico2">
                                <i className="far fa-building"></i>
                                </div>
                                <div className="second-services-content2">
                                    <h5>Premium, Fresh Cuisine Made Onsite</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc ididunt ut labore. </p>
									<a >Read More</a>
                                </div>
                            </div>
                        </div>
						<div className="col-lg-4 col-md-6 mb-30">
                            <div className="s-single-services wow fadeInUp  animated" data-animation="fadeInDown animated" data-delay=".2s" style={{visibility:'visible',animationName:'fadeInUp'}}>
                                <div className="services-ico2">
                                <i className="far fa-building"></i>
                                </div>
                                <div className="second-services-content2">
                                    <h5>Flexible, Contemporary & Included Spaces </h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc ididunt ut labore. </p>
									<a >Read More</a>
                                </div>
                            </div>
                        </div>
						<div className="col-lg-4 col-md-6 mb-30">
                            <div className="s-single-services wow fadeInUp  animated" data-animation="fadeInDown animated" data-delay=".2s" style={{visibility:'visible',animationName:'fadeInUp'}}>
                                <div className="services-ico2">
                                <i className="far fa-building"></i>
                                </div>
                                <div className="second-services-content2">
                                    <h5>Human-Centered Design Friendly Spaces</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc ididunt ut labore. </p>
									<a >Read More</a>
                                </div>
                            </div>
                        </div>
						<div className="col-lg-4 col-md-6 mb-30">
                            <div className="s-single-services wow fadeInUp  animated" data-animation="fadeInDown animated" data-delay=".2s" style={{visibility:'visible',animationName:'fadeInUp'}}>
                                <div className="services-ico2">
                                <i className="far fa-building"></i>
                                </div>
                                <div className="second-services-content2">
                                    <h5>Broker Cutting-Edge And Technology</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc ididunt ut labore. </p>
									<a >Read More</a>
                                </div>
                            </div>
                        </div>
                      
                    </div>
                    
                </div>
            </section>
            <section className="cta-area cta-bg pt-120 pb-120"  style={{ backgroundImage: `url('${backgroundImageUrl}')` }}>
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-12">
                            <div className="section-title cta-title wow fadeInLeft animated" data-animation="fadeInDown animated" data-delay=".2s">
								<p style={{color:"black"}}>Don't hestitate to contact us</p>
                                <h2 className='mb-3' style={{color:"black"}}>MAKE AN APPOINTMENT NOW</h2>
								<h3 style={{color:"black"}}>666 888 0000</h3>
								 <div className="cta-btn s-cta-btn wow fadeInRight animated mt-30" data-animation="fadeInDown animated" data-delay=".2s">
									{/* <a  className="btn">Contact Us</a> */}
								</div>
                            </div>
                                             
                        </div>
					
                    </div>
                </div>
            </section>
            <section id="neighborhoods-section" className="services-area services-bg services-two pt-120 pb-90">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10">
                            <div className="section-title text-center pl-40 pr-40 mb-80 wow fadeInDown animated" data-animation="fadeInDown animated" data-delay=".2s">
                                <span> villa neihborhoods</span>
                                <h2> Neighborhoods</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="s-single-services  wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
                                <div className="second-services-content">
                                    <h5>Hospital </h5> 
									<p>Christ, General Hospital 0.18km</p>									
                                </div>
								{/* <div className="services-icon">
                                   <i className="far fa-star-half"></i>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="s-single-services active wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
                                <div className="second-services-content">
                                    <h5>Super Market </h5>      
									<p>Moonfrog Super Market 0.25km</p>			
                                </div>
								{/* <div className="services-icon">
                                   <i className="far fa-star-half"></i>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="s-single-services wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
                                <div className="second-services-content">
                                    <h5>Restaurant</h5>
									<p>hot chicken grill 0.4km</p>		                                    
                                </div>
								{/* <div className="services-icon">
                                   <i className="far fa-star-half"></i>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="s-single-services wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
                                <div className="second-services-content">
                                    <h5>Shopping Mall </h5>       
									<p>Amsterdam Shopping Mall 0.13km</p>		            									
                                </div>
								{/* <div className="services-icon">
                                   <i className="far fa-star-half"></i>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="s-single-services wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
                                <div className="second-services-content">
                                    <h5>Coffee Pot </h5>      
									<p>McAfee Coffee Shop 0.35km</p>	
                                </div>
								{/* <div className="services-icon">
                                   <i className="far fa-star-half"></i>
                                </div> */}
                            </div>
                        </div>
                       <div className="col-lg-4 col-md-6">
                            <div className="s-single-services wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
                                <div className="second-services-content">
                                    <h5>Metro Stations</h5>      
									<p>Metro Stations 0.50km</p>	
                                </div>
								{/* <div className="services-icon">
                                   <i className="far fa-star-half"></i>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
            <section id='location-section'>
            <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10">
                            <div className="section-title text-center pl-40 pr-40 mb-80 wow fadeInDown animated" data-animation="fadeInDown animated" data-delay=".2s">
                                <h2> Locations</h2>
                            </div>
                        </div>
                    </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7143.258411797752!2d80.32800799214002!3d26.46767865766068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c4762aa489f91%3A0x71d338565a4a2a43!2sChaman%20Ganj%2C%20Colonelganj%2C%20Kanpur%2C%20Uttar%20Pradesh%20208001!5e0!3m2!1sen!2sin!4v1685620284820!5m2!1sen!2sin" style={{height:450,width:"100%",padding:30}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      
    </section>
        
          
      
    </div>
    </>
  )
}

export default Theme
