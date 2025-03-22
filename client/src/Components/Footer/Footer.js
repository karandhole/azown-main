import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>

{/* <section className="theme-bg call_action_wrap-wrap">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="call_action_wrap">
            <div className="call_action_wrap-head">
              <h3>Do You Have Questions ?</h3>
              <span>We'll help you to grow your career and growth.</span>
            </div>
            <a className="btn btn-call_action_wrap">Contact Us Today</a>
          </div>
        </div>
      </div>
    </div>
  </section> */}
  {/* ============================ Call To Action End ================================== */}
  {/* ============================ Footer Start ================================== */}
  <footer className="dark-footer skin-dark-footer style-2">
    <div className="footer-middle">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-5">
            <div className="footer_widget">
              <img src="assets/img/logo-light.png" className="img-footer small mb-2" alt />
              <h4 className="extream mb-3">Do you need help with<br />anything?</h4>
              <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>
              {/* <div className="foot-news-last">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Email Address" />
                  <div className="input-group-append">
                    <button type="button" className="input-group-text theme-bg b-0 text-light">Subscribe</button>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="col-lg-6 col-md-7 ml-auto">
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <div className="footer_widget">
                  <h4 className="widget_title">Layouts</h4>
                  <ul className="footer-menu">
                    <li><a>Home Page</a></li>
                    <li><a>About Page</a></li>
                    <li><a>Service Page</a></li>
                    <li><a>Property Page</a></li>
                    <li><a>Contact Page</a></li>
                    <li><a>Single Blog</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="footer_widget">
                  <h4 className="widget_title">All Sections</h4>
                  <ul className="footer-menu">
                    <li><a>Headers<span className="new">New</span></a></li>
                    <li><a>Features</a></li>
                    <li><a>Attractive<span className="new">New</span></a></li>
                    <li><a>Testimonials</a></li>
                    <li><a>Videos</a></li>
                    <li><a>Footers</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="footer_widget">
                  <h4 className="widget_title">Company</h4>
                  <ul className="footer-menu">
                    <li><a>About</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Pricing</a></li>
                    <li><a>Affiliate</a></li>
                    <li><a>Login</a></li>
                    <li><a>Changelog<span className="update">Update</span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 col-md-12 text-center">
            <p className="mb-0">© 2023 Azown. Developed By <a href="https://androcoders.com/">AndroCoders</a>.</p>
            <p><Link to ="/theme">For Theme </Link></p>
          </div>
        </div>
      </div>
    </div>
  </footer>
    </div>
  )
}

export default Footer