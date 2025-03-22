import React, { useState } from "react";
import three from '../../images/user-3.png'
const TestimonialClient = () => {
    const testimonials = [
        {
            author: "John Doe",
            company: "This is a great product!",
            imgurl: "assets/img/user-1.jpg",
            url: "assets/img/c-1.png",
            rat: "4.7",
            data: "Faucibus tristique felis potenti ultrices ornare rhoncus semper hac facilisi Rutrum tellus lorem sem velit n",
        },
        {
            author: "John Ali",
            company: "This is a great product!",
            imgurl: "assets/img/user-1.jpg",
            url: "assets/img/c-1.png",
            rat: "4.7",
            data: "Faucibus tristique felis potenti ultrices ornare rhoncus semper hac facilisi Rutrum tellus lorem sem velit n",
        },
        {
            author: "John Fuzail",
            company: "This is a great product!",
            imgurl: "assets/img/user-1.jpg",
            url: "assets/img/c-1.png",
            rat: "4.7",
            data: "Faucibus tristique felis potenti ultrices ornare rhoncus semper hac facilisi Rutrum tellus lorem sem velit n",
        },
        {
            author: "John Shane",
            company: "This is a great product!",
            imgurl: "assets/img/user-1.jpg",
            url: "assets/img/c-1.png",
            rat: "4.7",
            data: "Faucibus tristique felis potenti ultrices ornare rhoncus semper hac facilisi Rutrum tellus lorem sem velit n",
        },
        {
            author: "John Abhi",
            company: "This is a great product!",
            imgurl: "assets/img/user-1.jpg",
            url: "assets/img/c-1.png",
            rat: "4.7",
            data: "Faucibus tristique felis potenti ultrices ornare rhoncus semper hac facilisi Rutrum tellus lorem sem velit n",
        },
        {
            author: "John sakib",
            company: "This is a great product!",
            imgurl: "assets/img/user-1.jpg",
            url: "assets/img/c-1.png",
            rat: "4.7",
            data: "Faucibus tristique felis potenti ultrices ornare rhoncus semper hac facilisi Rutrum tellus lorem sem velit n",
        },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const currentTestimonials = testimonials.slice(currentIndex, currentIndex + 3);

    const handlePrevious = () => {
        setCurrentIndex(currentIndex - 1);
    };

    const handleNext = () => {
        setCurrentIndex(currentIndex + 1);
    };


    return (
        <section className="gray-simple">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-8">
                        <div className="sec-heading center">
                            <h2>Good Reviews By Clients</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="item-slide space slick-initialized slick-slider">
                            <button type="button" data-role="none" className="slick-prev slick-arrow" onClick={() => { setCurrentIndex(currentIndex - 1); console.log(currentTestimonials) }} disabled={currentIndex === 0}>Previous</button>

                            <div aria-live="polite" className="slick-list draggable">
                                <div className="slick-track" role="listbox" >
                                    <div className="row">
                                    {currentTestimonials.map(item=>{
return <div className="col-4">
                                        <div className="single_items slick-slide slick-cloned" tabIndex={-1} role="option" aria-describedby="slick-slide12" style={{ width: 400 }}  aria-hidden="true">
                                        <div className="_testimonial_wrios">
                                            <div className="_testimonial_flex">
                                                <div className="_testimonial_flex_first">
                                                    <div className="_tsl_flex_thumb">
                                                        <img src="assets/img/user-3.jpg" className="img-fluid" alt />
                                                    </div>
                                                    <div className="_tsl_flex_capst">
                                                        <h5>{item.author}</h5>
                                                        <div className="_ovr_posts"><span>Google Founder</span></div>
                                                        <div className="_ovr_rates"><span><i className="fa fa-star" /></span>4.9</div>
                                                    </div>
                                                </div>
                                                <div className="_testimonial_flex_first_last">
                                                    <div className="_tsl_flex_thumb">
                                                        <img src={three} className="img-fluid" alt />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="facts-detail">
                                                <p>Faucibus tristique felis potenti ultrices ornare rhoncus semper hac facilisi Rutrum tellus lorem sem velit nisi non pharetra in dui.</p>
                                            </div>
                                        </div>
                                    </div>
                                        </div>
                                    })}
                                        
                                     

                                    </div>
                              
                                 


                                </div>
                            </div>
                            <button type="button" data-role="none" onClick={() => { setCurrentIndex(currentIndex + 1) }} className="slick-next slick-arrow" aria-label="Next" role="button" disabled={currentIndex + 3 >= testimonials.length}>Next</button></div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TestimonialClient;

