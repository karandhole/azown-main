import React from "react";
import { Link } from "react-router-dom";
import { ServiceData } from "../Constant/ServiceData";
import Slider from "react-slick";

const OurServices = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
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
      <section className="min">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-8">
              <div className="sec-heading center">
                <h2>Our Services</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
          <div className="col-lg-12 col-md-4 col-sm-12">
          <Slider {...settings}>
          {ServiceData.map((service)=>{
              return<div className="_category_box p-3">
                <div>
                <Link to={`/vender-list/${service.service_id}/${service.service_name}`}>
                <a>
                    <div className="_category_thumb">
                      <img
                        src={service.service_icons}
                      />
                    </div>
                    <div className="_category_caption">
                      <h5>{service.service_name}</h5>
                    </div>
                   
                </a>
                </Link>
              </div>
              </div>
              })}
              </Slider>
            </div>
          
          </div>
          <div className="row mt-3">
            <div className="col-lg-12 col-md-12 col-sm-12 text-center">
              {/* <a href="list-layout-with-map.html" class="btn btn-theme-light-2 rounded">Explore More Services</a> */}
              <Link to="/more-services">
                <button
                  className="btn rounded"
                  style={{ backgroundColor: "#27ae60" }}
                >
                  Explore More Services
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;
