import {React,useEffect} from "react";
import {Link} from "react-router-dom";
import Footer from "../../Footer/Footer";
import Slider from "react-slick";
import image1 from "./ExploreImg/image1.jpeg";
import image2 from "./ExploreImg/image2.jpeg";
import image3 from "./ExploreImg/image3.jpeg";
import home1 from "./ExploreImg/home1.jpeg";
import image4 from "./ExploreImg/image4.jpeg";
import Navbar from "../../Header/Navbar";

const ExploreMoreServices = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
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
      <Navbar/>
      <div className="sec-heading center mt-3 ">
        <h2>Our Services</h2>
        <p>
          We provide a comprehensive range of service to make your life easier.
        </p>
      </div>

      <section>
        <div className="container">
          <div className="col-lg-12 col-md-12"></div>
          <div className="row"></div>
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="eplios_tags">
                <div className="tags-1">01</div>
                <h2>Search &amp; Find Perfect Place</h2>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga. Et harum
                  quidem rerum facilis est et expedita distinctio.
                </p>
                <ul className="eplios_list">
                  <li>100% Money Gaurantee</li>
                  <li>Super &amp; Perfect Place</li>
                  <li>Effective &amp; Best Price</li>
                  <li>Friendly &amp; Lovely Area</li>
                </ul>
              </div>
            </div>

            <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12">
              <div className="text-center">
                <img src={home1} className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12">
              <div className="text-center">
                <img src={image4} className="img-fluid" alt="img" />
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="eplios_tags right">
                <div className="tags-2">02</div>
                <h2>Meet Venders &amp; Fixed Your Deal</h2>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga. Et harum
                  quidem rerum facilis est et expedita distinctio.
                </p>
                {/* <a href="#" className="btn exliou theme-bg mt-2">Find Properties</a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="light-bg min">
        <div className="container">
          <div className="sec-heading center">
            <h2>Our Services</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg col-md-4">
              {/* <!-- Single Category --> */}
              <Link to="/agent-home">
              <button style={{border:'none',background:'none',cursor:'pointer',outline:"none"}}>
              <div className="property_cats_boxs">
                <div className="category-box">
                  <div className="property_category_short">
                    <div className="category-icon clip-1">
                      <i className="flaticon-beach-house-2"></i>
                    </div>
                    <div className="property_category_expand property_category_short-text">
                      <h4>Mover & Packers</h4>
                    </div>
                  </div>
                  </div>
              </div>
              </button>
                </Link>
            </div>

            <div className="col-lg col-md-4">
              {/* <!-- Single Category --> */}
              <div className="property_cats_boxs">
                <a
                  href="grid-layout-with-sidebar.html"
                  className="category-box"
                >
                  <div className="property_category_short">
                    <div className="category-icon clip-2">
                      <i className="flaticon-cabin"></i>
                    </div>

                    <div className="property_category_expand property_category_short-text">
                      <h4>Sale / Rent agreement</h4>
                      {/* <p>155 Property</p> */}
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-lg col-md-4">
              {/* <!-- Single Category --> */}
              <div className="property_cats_boxs">
                <a
                  href="grid-layout-with-sidebar.html"
                  className="category-box"
                >
                  <div className="property_category_short">
                    <div className="category-icon clip-3">
                      <i className="flaticon-apartments"></i>
                    </div>

                    <div className="property_category_expand property_category_short-text">
                      <h4>Home Loan</h4>
                      {/* <p>300 Property</p> */}
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-lg col-md-4">
              {/* <!-- Single Category --> */}
              <div className="property_cats_boxs">
                <a
                  href="grid-layout-with-sidebar.html"
                  className="category-box"
                >
                  <div className="property_category_short">
                    <div className="category-icon clip-4">
                      <i className="flaticon-student-housing"></i>
                    </div>

                    <div className="property_category_expand property_category_short-text">
                      <h4>Painters </h4>
                      {/* <p>80 Property</p> */}
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-lg col-md-4">
              {/* <!-- Single Category --> */}
              <div className="property_cats_boxs">
                <a
                  href="grid-layout-with-sidebar.html"
                  className="category-box"
                >
                  <div className="property_category_short">
                    <div className="category-icon clip-5">
                      <i className="flaticon-modern-house-4"></i>
                    </div>

                    <div className="property_category_expand property_category_short-text">
                      <h4>AC Repaires </h4>
                      {/* <p>80 Property</p> */}
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg col-md-4">
              {/* <!-- Single Category --> */}
              <div className="property_cats_boxs">
                <a
                  href="grid-layout-with-sidebar.html"
                  className="category-box"
                >
                  <div className="property_category_short">
                    <div className="category-icon clip-5">
                      <i className="flaticon-modern-house-4"></i>
                    </div>

                    <div className="property_category_expand property_category_short-text">
                      <h4>Carpenters</h4>
                      {/* <p>80 Property</p> */}
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg col-md-4">
              {/* <!-- Single Category --> */}
              <div className="property_cats_boxs">
                <a
                  href="grid-layout-with-sidebar.html"
                  className="category-box"
                >
                  <div className="property_category_short">
                    <div className="category-icon clip-1">
                      <i className="flaticon-beach-house-2"></i>
                    </div>

                    <div className="property_category_expand property_category_short-text">
                      <h4>Electricians</h4>
                      {/* <p>122 Property</p> */}
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-lg col-md-4">
              {/* <!-- Single Category --> */}
              <div className="property_cats_boxs">
                <a
                  href="grid-layout-with-sidebar.html"
                  className="category-box"
                >
                  <div className="property_category_short">
                    <div className="category-icon clip-2">
                      <i className="flaticon-cabin"></i>
                    </div>

                    <div className="property_category_expand property_category_short-text">
                      <h4>Pest Contro</h4>
                      {/* <p>155 Property</p> */}
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-lg col-md-4">
              {/* <!-- Single Category --> */}
              <div className="property_cats_boxs">
                <a
                  href="grid-layout-with-sidebar.html"
                  className="category-box"
                >
                  <div className="property_category_short">
                    <div className="category-icon clip-3">
                      <i className="flaticon-apartments"></i>
                    </div>

                    <div className="property_category_expand property_category_short-text">
                      <h4>Plumber</h4>
                      {/* <p>300 Property</p> */}
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-lg col-md-4">
              {/* <!-- Single Category --> */}
              <div className="property_cats_boxs">
                <a
                  href="grid-layout-with-sidebar.html"
                  className="category-box"
                >
                  <div className="property_category_short">
                    <div className="category-icon clip-4">
                      <i className="flaticon-student-housing"></i>
                    </div>

                    <div className="property_category_expand property_category_short-text">
                      <h4>Salon at Home</h4>
                      {/* <p>80 Property</p> */}
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-lg col-md-4">
              {/* <!-- Single Category --> */}
              <div className="property_cats_boxs">
                <a
                  href="grid-layout-with-sidebar.html"
                  className="category-box"
                >
                  <div className="property_category_short">
                    <div className="category-icon clip-5">
                      <i className="flaticon-modern-house-4"></i>
                    </div>

                    <div className="property_category_expand property_category_short-text">
                      <h4>TV Repaire </h4>
                      {/* <p>80 Property</p> */}
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg col-md-4">
              {/* <!-- Single Category --> */}
              <div className="property_cats_boxs">
                <a
                  href="grid-layout-with-sidebar.html"
                  className="category-box"
                >
                  <div className="property_category_short">
                    <div className="category-icon clip-5">
                      <i className="flaticon-modern-house-4"></i>
                    </div>

                    <div className="property_category_expand property_category_short-text">
                      <h4>Housekeeping</h4>
                      {/* <p>80 Property</p> */}
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg col-md-4">
              {/* <!-- Single Category --> */}
              <div className="property_cats_boxs">
                <a
                  href="grid-layout-with-sidebar.html"
                  className="category-box"
                >
                  <div className="property_category_short">
                    <div className="category-icon clip-1">
                      <i className="flaticon-beach-house-2"></i>
                    </div>

                    <div className="property_category_expand property_category_short-text">
                      <h4>Milk Man </h4>
                      {/* <p>122 Property</p> */}
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-lg col-md-4">
              {/* <!-- Single Category --> */}
              <div className="property_cats_boxs">
                <a
                  href="grid-layout-with-sidebar.html"
                  className="category-box"
                >
                  <div className="property_category_short">
                    <div className="category-icon clip-2">
                      <i className="flaticon-cabin"></i>
                    </div>

                    <div className="property_category_expand property_category_short-text">
                      <h4>Shopkeepers</h4>
                      {/* <p>155 Property</p> */}
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-lg col-md-4">
              {/* <!-- Single Category --> */}
              <div className="property_cats_boxs">
                <a
                  href="grid-layout-with-sidebar.html"
                  className="category-box"
                >
                  <div className="property_category_short">
                    <div className="category-icon clip-3">
                      <i className="flaticon-apartments"></i>
                    </div>

                    <div className="property_category_expand property_category_short-text">
                      <h4>Medical Store</h4>
                      {/* <p>300 Property</p> */}
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-lg col-md-4">
              {/* <!-- Single Category --> */}
              <div className="property_cats_boxs">
                <a
                  href="grid-layout-with-sidebar.html"
                  className="category-box"
                >
                  <div className="property_category_short">
                    <div className="category-icon clip-4">
                      <i className="flaticon-student-housing"></i>
                    </div>

                    <div className="property_category_expand property_category_short-text">
                      <h4>Furniture Shop</h4>
                      {/* <p>80 Property</p> */}
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-lg col-md-4">
              {/* <!-- Single Category --> */}
              <div className="property_cats_boxs">
                <a
                  href="grid-layout-with-sidebar.html"
                  className="category-box"
                >
                  <div className="property_category_short">
                    <div className="category-icon clip-5">
                      <i className="flaticon-modern-house-4"></i>
                    </div>

                    <div className="property_category_expand property_category_short-text">
                      <h4>Mobile Shop</h4>
                      {/* <p>80 Property</p> */}
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg col-md-4">
              {/* <!-- Single Category --> */}
              <div className="property_cats_boxs">
                <a
                  href="grid-layout-with-sidebar.html"
                  className="category-box"
                >
                  <div className="property_category_short">
                    <div className="category-icon clip-5">
                      <i className="flaticon-modern-house-4"></i>
                    </div>

                    <div className="property_category_expand property_category_short-text">
                      <h4>Water Purifier</h4>
                      {/* <p>80 Property</p> */}
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ============================ Top Agents ================================== --> */}
      <section className="min gray">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-8">
              <div className="sec-heading center">
                <h2>Our Featured Venders</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="item-slide space">
                <Slider {...settings}>
                  <div className="single_items">
                    <div className="grid_agents style-2">
                      <div className="elio_mx_list theme-bg-2">20 Listings</div>
                      <div className="grid_agents-wrap">
                        <div className="fr-grid-thumb">
                          <img
                            src={image1}
                            className="rounded mx-auto d-block"
                            alt="img"
                            style={{
                              width: 350,
                              height: 300,
                              objectFit: "cover",
                            }}
                          />

                          <ul className="inline_social">
                            <li>
                              <a >
                                <i className="ti-facebook"></i>
                              </a>
                            </li>
                            <li>
                              <a >
                                <i className="ti-linkedin"></i>
                              </a>
                            </li>
                            <li>
                              <a >
                                <i className="ti-instagram"></i>
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="ti-twitter"></i>
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div className="fr-grid-deatil">
                          <span>
                            <i className="ti-location-pin mr-1"></i>3298 Sardis
                            Station
                          </span>
                          <h5 className="fr-can-name">
                            <a href="agent-page.html">Fannie T. Dean</a>
                          </h5>
                        </div>

                        <div className="fr-infos-deatil">
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#autho-message"
                            className="btn agent-btn theme-bg"
                          >
                            <i className="fa fa-envelope mr-2"></i>Message
                          </a>
                          <a href="#" className="btn agent-btn theme-black">
                            <i className="fa fa-phone"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="single_items">
                    <div className="grid_agents style-2">
                      <div className="elio_mx_list theme-bg-2">18 Listings</div>
                      <div className="grid_agents-wrap">
                        <div className="fr-grid-thumb">
                          <a href="agent-page.html">
                            {/* <img src="assets/img/team-2.jpg" className="img-fluid mx-auto" alt=""> */}
                            <img
                              src={image2}
                              className="rounded mx-auto d-block"
                              alt="img"
                              style={{
                                width: 350,
                                height: 300,
                                objectFit: "cover",
                              }}
                            />
                          </a>
                          <ul className="inline_social">
                            <li>
                              <a href="#">
                                <i className="ti-facebook"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="ti-linkedin"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="ti-instagram"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="ti-twitter"></i>
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div className="fr-grid-deatil">
                          <span>
                            <i className="ti-location-pin mr-1"></i>1700
                            Pursglove, USA
                          </span>
                          <h5 className="fr-can-name">
                            <a href="agent-page.html">Sylvia J. Church</a>
                          </h5>
                        </div>

                        <div className="fr-infos-deatil">
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#autho-message"
                            className="btn agent-btn theme-bg"
                          >
                            <i className="fa fa-envelope mr-2"></i>Message
                          </a>
                          <a href="#" className="btn agent-btn theme-black">
                            <i className="fa fa-phone"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="single_items">
                    <div className="grid_agents style-2">
                      <div className="elio_mx_list theme-bg-2">30 Listings</div>
                      <div className="grid_agents-wrap">
                        <div className="fr-grid-thumb">
                          <a href="agent-page.html">
                            {/* <img src="assets/img/team-3.jpg" className="img-fluid mx-auto" alt=""> */}
                            <img
                              src={image3}
                              className="rounded mx-auto d-block"
                              alt="img"
                              style={{
                                width: 350,
                                height: 300,
                                objectFit: "cover",
                              }}
                            />
                          </a>
                          <ul className="inline_social">
                            <li>
                              <a href="#">
                                <i className="ti-facebook"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="ti-linkedin"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="ti-instagram"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="ti-twitter"></i>
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div className="fr-grid-deatil">
                          <span>
                            <i className="ti-location-pin mr-1"></i>188
                            Barrington Court
                          </span>
                          <h5 className="fr-can-name">
                            <a href="agent-page.html">Regina J. Stanhope</a>
                          </h5>
                        </div>

                        <div className="fr-infos-deatil">
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#autho-message"
                            className="btn agent-btn theme-bg"
                          >
                            <i className="fa fa-envelope mr-2"></i>Message
                          </a>
                          <a href="#" className="btn agent-btn theme-black">
                            <i className="fa fa-phone"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="single_items">
                    <div className="grid_agents style-2">
                      <div className="elio_mx_list theme-bg-2">42 Listings</div>
                      <div className="grid_agents-wrap">
                        <div className="fr-grid-thumb">
                          <a href="agent-page.html">
                            <img
                              src={image4}
                              className="rounded mx-auto d-block"
                              alt="img"
                              style={{
                                width: 350,
                                height: 300,
                                objectFit: "cover",
                              }}
                            />
                          </a>
                          <ul className="inline_social">
                            <li>
                              <a href="#">
                                <i className="ti-facebook"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="ti-linkedin"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="ti-instagram"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="ti-twitter"></i>
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div className="fr-grid-deatil">
                          <span>
                            <i className="ti-location-pin mr-1"></i>1548
                            Cimmaron Road
                          </span>
                          <h5 className="fr-can-name">
                            <a href="agent-page.html">Rose M. Bischof</a>
                          </h5>
                        </div>

                        <div className="fr-infos-deatil">
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#autho-message"
                            className="btn agent-btn theme-bg"
                          >
                            <i className="fa fa-envelope mr-2"></i>Message
                          </a>
                          <a href="#" className="btn agent-btn theme-black">
                            <i className="fa fa-phone"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ============================ Top Agents End ================================== --> */}

      <Footer />
    </>
  );
};

export default ExploreMoreServices;