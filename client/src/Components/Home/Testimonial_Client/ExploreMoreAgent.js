import React from "react";
import Footer from "../../Footer/Footer";
import {Link} from 'react-router-dom';
import Navbar from "../../Header/Navbar";
import { toast} from 'react-toastify';
import { errorMsg,warningMsg } from "../../notification";



const ExploreMoreAgent = () => {

  return (
    <>
    <Navbar/>
    <hr/>

      <div className="sec-heading center mt-3">
        <h2>Mover & Packers Vendors</h2>
        <strong>
          We provide a Mover & Packers service to make your life easier.
        </strong>
      </div>
      <section className="light-bg min">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_agents">
                <div className="elio_mx_list theme-bg-2">102 Listings</div>
                <div className="grid_agents-wrap">
                  <div className="fr-grid-thumb">
                    <a>
                      <span className="verified">
                        <img
                          src="assets/img/verified.svg"
                          className="verify mx-auto"
                          alt=""
                        />
                      </span>
                      <img
                        src="assets/img/team-1.jpg"
                        className="img-fluid mx-auto"
                        alt=""
                      />
                    </a>
                  </div>

                  <div className="fr-grid-deatil">
                    <span>
                      <i className="ti-location-pin mr-1"></i>Montreal, USA
                    </span>
                    <h5 className="fr-can-name">
                      Adam K. Jollio
                    </h5>
                    <ul className="inline_social">
                      <li>
                        <a href="#" className="fb">
                          <i className="ti-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="ln">
                          <i className="ti-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="ins">
                          <i className="ti-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="tw">
                          <i className="ti-twitter"></i>
                        </a>
                      </li>
                    </ul>
                  </div>


                  <div className="fr-infos-deatil">
                  {localStorage.getItem('userDetail')? (<Link to='/agent-details'>
                   <button className="btn agent-btn theme-bg">
                      <i className="fa fa-phone"> Contact Us</i>
                    </button>

                    </Link>):(<button className="btn agent-btn theme-bg"  onClick={()=>errorMsg('Please Login Before')}>
                      <i className="fa fa-phone"> Contact Us</i>
                    </button>)}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="grid_agents">
                <div className="elio_mx_list theme-bg-2">102 Listings</div>
                <div className="grid_agents-wrap">
                  <div className="fr-grid-thumb">
                    <a>
                      <span className="verified">
                        <img
                          src="assets/img/verified.svg"
                          className="verify mx-auto"
                          alt=""
                        />
                      </span>
                      <img
                        src="assets/img/team-1.jpg"
                        className="img-fluid mx-auto"
                        alt=""
                      />
                    </a>
                  </div>

                  <div className="fr-grid-deatil">
                    <span>
                      <i className="ti-location-pin mr-1"></i>Montreal, USA
                    </span>
                    <h5 className="fr-can-name">
                      Adam K. Jollio
                    </h5>
                    <ul className="inline_social">
                      <li>
                        <a href="#" className="fb">
                          <i className="ti-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="ln">
                          <i className="ti-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="ins">
                          <i className="ti-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="tw">
                          <i className="ti-twitter"></i>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="fr-infos-deatil">
                   <Link to='/agent-details'>
                    <button className="btn agent-btn theme-bg">
                      <i className="fa fa-phone"> Contact Us</i>
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="grid_agents">
                <div className="elio_mx_list theme-bg-2">72 Listings</div>
                <div className="grid_agents-wrap">
                  <div className="fr-grid-thumb">
                    <a href="agent-page.html">
                      <span className="verified">
                        <img
                          src="assets/img/verified.svg"
                          className="verify mx-auto"
                          alt=""
                        />
                      </span>
                      <img
                        src="assets/img/team-2.jpg"
                        className="img-fluid mx-auto"
                        alt=""
                      />
                    </a>
                  </div>

                  <div className="fr-grid-deatil">
                    <span>
                      <i className="ti-location-pin mr-1"></i>Liverpool, Canada
                    </span>
                    <h5 className="fr-can-name">
                      Sargam S. Singh
                    </h5>
                    <ul className="inline_social">
                      <li>
                        <a href="#" className="fb">
                          <i className="ti-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="ln">
                          <i className="ti-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="ins">
                          <i className="ti-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="tw">
                          <i className="ti-twitter"></i>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="fr-infos-deatil">
                  {/* <Link to='/agent-details'> */}
                    <button className="btn agent-btn theme-bg">
                      <i className="fa fa-phone"> Contact Us</i>
                    </button>
                    {/* </Link> */}
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

export default ExploreMoreAgent;