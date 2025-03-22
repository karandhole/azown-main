import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Header/Navbar'

const CreateProperty = () => {
  const [tab, settab] = useState(1)
  return (
    <div>

      <div id="main-wrapper">
<Navbar/>
   

        <div className="clearfix" />
       
        <div className="page-title" style={{ background: '#f4f4f4 url(assets/img/slider-5.jpg)' }} data-overlay={5}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="breadcrumbs-wrap">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a >Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Create Property</li>
                  </ol>
                  <h2 className="breadcrumb-title">Choose Property Type</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ============================ Page Title End ================================== */}
        {/* ============================ Agency List Start ================================== */}
        <section className="gray">
          <div className="container">
            {/* row Start */}
            <div className="row">
              <div className="col-lg-4 col-md-12">
                <div className="property_block_wrap">
                  <div className="property_block_wrap_header">
                    <h4 className="property_block_title">Our Terms &amp; Conditions</h4>
                  </div>
                  <div className="block-body">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since th been the industry's standard dummy text ever since th been the industry's standard dummy text ever since th been the industry's standard dummy text ever since the 1500s, when an unknown printer took a type specimen book.</p>
                    {/* <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus</p> */}

                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-12 " >
                <div className="property_block_wrap " style={{ backgroundColor: "#71d171" }}>
                  <div className="property_block_wrap_header">
                    <h4 className="property_block_title" style={{ color: "black" }}>Select Property Ad Type</h4>
                  </div>
                  <div className="block-body">
                    <div className="col-xl-12 col-lg-12 col-md-12">
                      <div className="simple_tab_search center">
                        <ul className="nav nav-tabs">
                          <li className="nav-item" onClick={() => { settab(1); console.log(tab) }}>
                            <div className={tab===1? "nav-link active": "nav-link"}  data-toggle="tab" role="tab" aria-controls="buy" aria-selected="true">Residential</div>
                          </li>
                          <li className="nav-item" onClick={() => { settab(2); console.log(tab) }}>
                            <div className={tab===2? "nav-link active": "nav-link"}  data-toggle="tab" role="tab" aria-controls="sell" aria-selected="false">Commercial</div>
                          </li>
                          <li className="nav-item" onClick={() => { settab(3); console.log(tab) }}>
                            <div className={tab===3? "nav-link active": "nav-link"} id="rent-tab" data-toggle="tab" role="tab" aria-controls="rent" aria-selected="false">Land/Plot</div>
                          </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">

                          <div className="tab-pane fade show active" id="buy" role="tabpanel" aria-labelledby="buy-tab">
                            <div className="full_search_box nexio_search lightanic_search hero_search-radius modern">
                              <div className="search_hero_wrapping">
                                {tab === 1 && <div className="row justify-content-center">



                                  <div className="col-lg-3 col-md-3 col-sm-12 small-padd">
                                    <div className="form-group none">
                                      <Link to='/residential-rent' className="btn search-btn">Rent</Link>
                                    </div>
                                  </div>
                                  <div className="col-lg-3 col-md-3 col-sm-12 small-padd">
                                    <div className="form-group none">
                                      <Link to='/residential-resale' className="btn search-btn">Resale</Link>
                                    </div>
                                  </div>
                                  <div className="col-lg-3 col-md-3 col-sm-12 small-padd">
                                    <div className="form-group none">
                                      <Link to='/residential-pg' className="btn search-btn">PG/Hostel</Link>
                                    </div>
                                  </div>
                                  <div className="col-lg-3 col-md-3 col-sm-12 small-padd">
                                    <div className="form-group none">
                                      <Link to='/residential-flatmate' className="btn search-btn">Flatmates</Link>
                                    </div>
                                  </div>
                                </div>}
                                {tab === 2 && <><div className="row justify-content-center">



<div className="col-lg-3 col-md-3 col-sm-12 small-padd">
  <div className="form-group none">
    <Link to='/commercial-rent' className="btn search-btn">Rent</Link>
  </div>
</div>
<div className="col-lg-3 col-md-3 col-sm-12 small-padd">
  <div className="form-group none">
    <Link to='/commercial-sale' className="btn search-btn">Sale</Link>
  </div>
</div>

</div></>}
 {tab === 3 && <div className="row justify-content-center">




<div className="col-lg-3 col-md-3 col-sm-12 small-padd">
  <div className="form-group none">
    <Link to='/plot-resale' className="btn search-btn">Resale</Link>
  </div>
</div>

</div>}


                              </div>
                            </div>
                          </div>
                          {/* Tab for Sell */}
                          {/* <div className="tab-pane fade" id="sell" role="tabpanel" aria-labelledby="sell-tab">
                            <div className="full_search_box nexio_search lightanic_search hero_search-radius modern">
                              <div className="search_hero_wrapping">
                               



                              </div>
                            </div>
                          </div> */}
                          {/* Tab for Rent */}
                          {/* <div className="tab-pane fade" id="rent" role="tabpanel" aria-labelledby="rent-tab">
                            <div className="full_search_box nexio_search lightanic_search hero_search-radius modern">
                              <div className="search_hero_wrapping">
                               

                              </div>
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /row */}
          </div>
        </section>
        {/* ============================ Agency List End ================================== */}
        {/* ============================ Call To Action ================================== */}
        <section className="theme-bg call_action_wrap-wrap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* <div className="call_action_wrap">
                  <div className="call_action_wrap-head">
                    <h3>Do You Have Questions ?</h3>
                    <span>We'll help you to grow your career and growth.</span>
                  </div>
                  <a  className="btn btn-call_action_wrap">Contact Us Today</a>
                </div> */}
              </div>
            </div>
          </div>
        </section>
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
                    <div className="foot-news-last">
                      {/* <div className="input-group">
                        <input type="text" className="form-control" placeholder="Email Address" />
                        <div className="input-group-append">
                          <button type="button" className="input-group-text theme-bg b-0 text-light">Subscribe</button>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-7 ml-auto">
                  <div className="row">
                    <div className="col-lg-4 col-md-4">
                      <div className="footer_widget">
                        <h4 className="widget_title">Layouts</h4>
                        <ul className="footer-menu">
                          <li><a >Home Page</a></li>
                          <li><a >About Page</a></li>
                          <li><a >Service Page</a></li>
                          <li><a >Property Page</a></li>
                          <li><a >Contact Page</a></li>
                          <li><a >Single Blog</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div className="footer_widget">
                        <h4 className="widget_title">All Sections</h4>
                        <ul className="footer-menu">
                          <li><a >Headers<span className="new">New</span></a></li>
                          <li><a >Features</a></li>
                          <li><a >Attractive<span className="new">New</span></a></li>
                          <li><a >Testimonials</a></li>
                          <li><a >Videos</a></li>
                          <li><a >Footers</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div className="footer_widget">
                        <h4 className="widget_title">Company</h4>
                        <ul className="footer-menu">
                          <li><a >About</a></li>
                          <li><a >Blog</a></li>
                          <li><a >Pricing</a></li>
                          <li><a >Affiliate</a></li>
                          <li><a >Login</a></li>
                          <li><a >Changelog<span className="update">Update</span></a></li>
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
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* ============================ Footer End ================================== */}
        {/* Log In Modal */}
        <div className="modal fade" id="login" tabIndex={-1} role="dialog" aria-labelledby="registermodal" aria-hidden="true">
          <div className="modal-dialog modal-xl login-pop-form" role="document">
            <div className="modal-content overli" id="registermodal">
              <div className="modal-body p-0">
                <div className="resp_log_wrap">
                  <div className="resp_log_thumb" style={{ background: 'url(assets/img/log.jpg)no-repeat' }} />
                  <div className="resp_log_caption">
                    <span className="mod-close" data-dismiss="modal" aria-hidden="true"><i className="ti-close" /></span>
                    <div className="edlio_152">
                      <ul className="nav nav-pills tabs_system center" id="pills-tab" role="tablist">
                        <li className="nav-item">
                          <a className="nav-link active" id="pills-login-tab" data-toggle="pill" href="#pills-login" role="tab" aria-controls="pills-login" aria-selected="true"><i className="fas fa-sign-in-alt mr-2" />Login</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" id="pills-signup-tab" data-toggle="pill" href="#pills-signup" role="tab" aria-controls="pills-signup" aria-selected="false"><i className="fas fa-user-plus mr-2" />Register</a>
                        </li>
                      </ul>
                    </div>
                    <div className="tab-content" id="pills-tabContent">
                      <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="pills-login-tab">
                        <div className="login-form">
                          <form>
                            <div className="form-group">
                              <label>User Name</label>
                              <div className="input-with-icon">
                                <input type="text" className="form-control" />
                                <i className="ti-user" />
                              </div>
                            </div>
                            <div className="form-group">
                              <label>Password</label>
                              <div className="input-with-icon">
                                <input type="password" className="form-control" />
                                <i className="ti-unlock" />
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="eltio_ol9">
                                <div className="eltio_k1">
                                  <input id="dd" className="checkbox-custom" name="dd" type="checkbox" />
                                  <label htmlFor="dd" className="checkbox-custom-label">Remember Me</label>
                                </div>
                                <div className="eltio_k2">
                                  <a >Lost Your Password?</a>
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <button type="submit" className="btn btn-md full-width pop-login">Login</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Modal */}
        <a id="back2Top" className="top-scroll" title="Back to top" ><i className="ti-arrow-up" /></a>
      </div>
    </div>

  )
}

export default CreateProperty