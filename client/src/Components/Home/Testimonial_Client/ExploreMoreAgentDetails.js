import React from "react";
import Footer from "../../Footer/Footer";
import Navbar from "../../Header/Navbar";

const ExploreMoreAgentDetails = () => {
  return (
    <>
      <Navbar />
      <hr />
      <div className="sec-heading center mt-3">
        <h2>Mover & Packers Vendors</h2>
        <strong>
          We provide a Mover & Packers service to make your life easier.
        </strong>
      </div>
      <section class="light-bg min">
        <div class="container">
          <div class="row">
            {/* <!-- property main detail --> */}
            <div class="col-lg-8 col-md-12 col-sm-12">
              {/* <!-- Single Block Wrap --> */}
              <div class="property_block_wrap">
                <div class="property_block_wrap_header">
                  <h3 class="property_block_title">Agent Info</h3>
                </div>

                <div class="block-body">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>

              {/* <!-- Single Block Wrap --> */}
              <div class="_prtis_list mb-4">
                <div class="_prtis_list_header">
                  <ul>
                    <li>
                      <div class="content_thumb">
                        <i class="fa fa-envelope"></i>
                      </div>
                      <div class="content">
                        <span class="dark">Adam K. Jollio@gmail.com</span>
                        <span class="title">Email</span>
                      </div>
                    </li>
                    <li>
                      <div class="content_thumb">
                        <i class="fa fa-phone"></i>
                      </div>
                      <div class="content">
                        <span class="dark">856 574 2314</span>
                        <span class="title">Call Me</span>
                      </div>
                    </li>
                    <li>
                      <div class="content_thumb">
                        <i class="fa fa-map-marker-alt"></i>
                      </div>
                      <div class="content">
                        <span class="dark">Montreal, USA</span>
                        <span class="title">Location</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="_prtis_list_body">
                  <ul class="deatil_features">
                    <li>
                      <strong>Adam K. Jollio</strong>Name
                    </li>
                    <li>
                      <strong>Adam K. Jollio@gmail.com</strong>Email
                    </li>
                    <li>
                      <strong>568 942 5163</strong>Call
                    </li>
                    <li>
                      <strong>Liverden</strong>City
                    </li>
                    <li>
                      <strong>California</strong>State
                    </li>
                    <li>
                      <strong>United State</strong>Country
                    </li>
                    <li>
                      <strong>+91 256 8547</strong>Fax
                    </li>
                    <li>
                      <strong>22 Listed</strong>Property
                    </li>
                  </ul>
                </div>
              </div>
              <div class="div_wraps"></div>

              <div class="row justify-content-center"></div>
            </div>

            {/* <!-- property Sidebar --> */}
            <div class="col-lg-4 col-md-12 col-sm-12">
              <div class="property-sidebar">
                {/* <!-- Agent Detail --> */}
                <div class="sider_blocks_wrap">
                  <div class="side-booking-body">
                    <div class="agent-_blocks_title">
                      <div class="agent-_blocks_thumb">
                        <img src="assets/img/team-1.jpg" alt="" />
                      </div>
                      <div class="agent-_blocks_caption">
                        <h4>Adam K. Jollio</h4>
                        <span class="approved-agent">
                          <i class="ti-check"></i>approved
                        </span>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ExploreMoreAgentDetails;
