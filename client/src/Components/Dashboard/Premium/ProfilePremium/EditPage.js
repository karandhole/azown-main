import React from 'react'
import { useState, useEffect,useContext } from "react";
import grapesjs from 'grapesjs';
import Navbar from '../../../Header/Navbar';
import { useNavigate } from 'react-router-dom'
import "grapesjs/dist/css/grapes.min.css";
import Contacted from '../../Contacted/Contacted';
import MyProfile from '../../Myprofile/MyProfile';
import MyProperties from '../../MyProperty/MyProperties';
import ShortList from '../../ShortList/ShortList';
import propertyContext from '../../../../context/PropertyContext';
// import Premiumpage from './Premiumpage';
import Grapesjs from './GrapesJs';
import user from "../../../images/user.jpeg"
import AddNewService from '../../Services/AddNewService';
import MyProvidedServices from '../../Services/MyProvidedServices';
import Showns from '../../Services/Showns';
import ServiceRequest from '../../Services/ServiceRequest';


const EditBuilder = () => {
    const [editor, seteditor] = useState(null);
    const [htmlCode, setHtmlCode] = useState('');
    const [cssCode, setCssCode] = useState('');
    const [tab, settab] = useState(5)
    const history = useNavigate()
    const context = useContext(propertyContext);
    const { userdetail,getuserdetail,} = context
    const userDetail = JSON.parse(localStorage.getItem("userDetail"));
  
    useEffect(() => {
        getuserdetail();
      }, []);
  return (
    <>
    <Navbar />
    <div className="page-title" style={{ background: '#f4f4f4 url(assets/img/slider-5.jpg)' }} data-overlay={5}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="breadcrumbs-wrap">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                                </ol>
                                <h2 className="breadcrumb-title">Hello {userdetail.name}, Welcome</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="gray pt-5 pb-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-4">
              <div className="property_dashboard_navbar">
                <div className="dash_user_avater">
                  <img src={user} className="img-fluid avater" alt="udu" />
                  {/* "assets/img/user-3.jpg" */}
                  <h4>{userdetail.name}</h4>
                  {/* <span>Canada USA</span> */}
                  <hr />
                </div>

                <div className="dash_user_menues">
                  <ul>
                    <li
                      className={tab === 1 ? "active" : "text-dark"}
                      onClick={() => {
                        settab(1);
                      }}
                    >
                      <a>
                        <i className="fa fa-user-tie" />
                        My Profile
                      </a>
                    </li>
                    <li
                      className={tab === 2 ? "active" : "text-dark"}
                      onClick={() => {
                        settab(2);
                      }}
                    >
                      <a>
                        <i className="fa fa-bookmark" />
                        Saved Property
                      </a>
                    </li>
                    {parseInt(userDetail.user.usertype) === 0 && (
                      <>
                        <li
                          className={tab === 3 ? "active" : "text-dark"}
                          onClick={() => {
                            settab(3);
                          }}
                        >
                          <a>
                            <i className="fa fa-tasks" />
                            My Properties
                          </a>
                        </li>
                        <li
                          className={tab === 4 ? "active" : "text-dark"}
                          onClick={() => {
                            settab(4);
                          }}
                        >
                          <a>
                            <i className="fa fa-envelope" />
                            Owner You Contacted
                          </a>
                        </li>
                      </>
                    )}

                    {parseInt(userDetail.user.usertype) === 1 && (
                      <>
                        <li
                          className={tab === 3 ? "active" : "text-dark"}
                          onClick={() => {
                            settab(3);
                          }}
                        >
                          <a>
                            <i className="fa fa-tasks" />
                            My Properties
                          </a>
                        </li>
                        <li
                          className={tab === 4 ? "active" : "text-dark"}
                          onClick={() => {
                            settab(4);
                          }}
                        >
                          <a>
                            <i className="fa fa-envelope" />
                            Owner You Contacted
                          </a>
                        </li>

                        <div>
                          {" "}
                          <li
                            className={tab === 6 ? "active" : "text-dark"}
                            onClick={() => {
                              settab(6);
                            }}
                          >
                            <a>
                              <i className="fa fa-user" />
                              Add New Services
                            </a>
                          </li>
                          <li
                            className={tab === 7 ? "active" : "text-dark"}
                            onClick={() => {
                              settab(7);
                            }}
                          >
                            <a>
                              <i className="fa fa-user" />
                              Show Existing Services
                            </a>
                          </li>
                        </div>
                      </>
                    )}
                    {parseInt(userDetail.user.usertype) === 2 && (
                      <>
                        <li
                          className={tab === 10 ? "active" : "text-dark"}
                          onClick={() => {
                            settab(10);
                          }}
                        >
                          <a>
                            <i className="fa fa-tasks" />
                            Handover Properties
                          </a>
                        </li>
                        <li
                          className={tab === 11 ? "active" : "text-dark"}
                          onClick={() => {
                            settab(11);
                          }}
                        >
                          <a>
                            <i className="fa fa-envelope" />
                            Requested to Owner
                          </a>
                        </li>
                      </>
                    )}
                    {parseInt(userDetail.user.usertype) === 3 && (
                      <>
                        <li
                          className={tab === 3 ? "active" : "text-dark"}
                          onClick={() => {
                            settab(3);
                          }}
                        >
                          <a>
                            <i className="fa fa-tasks" />
                            My Properties
                          </a>
                        </li>
                        <li
                          className={tab === 4 ? "active" : "text-dark"}
                          onClick={() => {
                            settab(4);
                          }}
                        >
                          <a>
                            <i className="fa fa-envelope" />
                            Owner You Contacted
                          </a>
                        </li>
                      </>
                    )}
                    {parseInt(userDetail.user.usertype) === 4 && (
                      <>
                        <li
                          className={tab === 3 ? "active" : "text-dark"}
                          onClick={() => {
                            settab(3);
                          }}
                        >
                          <a>
                            <i className="fa fa-tasks" />
                            My Properties
                          </a>
                        </li>
                        <li
                          className={tab === 4 ? "active" : "text-dark"}
                          onClick={() => {
                            settab(4);
                          }}
                        >
                          <a>
                            <i className="fa fa-envelope" />
                            Owner You Contacted
                          </a>
                        </li>
                      </>
                    )}
                    <li
                      className={tab === 9 ? "active" : "text-dark"}
                      onClick={() => {
                        settab(9);
                      }}
                    >
                      <a>
                        <i className="fa fa-tasks" />
                        Service Request
                      </a>
                    </li>
                    <li
                      className={tab === 5 ? "active" : "text-dark"}
                      onClick={() => {
                        settab(5);
                      }}
                    >
                      <a>
                        <i className="fa fa-certificate" />
                        Premium Profile
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="dash_user_footer">
                  <ul>
                    <li
                      onClick={() => {
                        localStorage.removeItem("userDetail");
                        history("/");
                      }}
                    >
                      <a>
                        <i className="fa fa-power-off text-light" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-comment" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-cog" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {tab === 1 && <MyProfile />}
            {tab === 2 && <ShortList />}
            {tab === 3 && <MyProperties />}
            {tab === 4 && <Contacted />}
            {tab === 5 && <Grapesjs />}
            {tab === 6 && <AddNewService />}
            {/* {tab === 7 && <ShowServices />} */}
            {tab === 7 && <MyProvidedServices />}
            {tab === 8 && <Showns />}
            {tab === 9 && <ServiceRequest />}
            {tab === 10 && <MyProperties />} {/* for Broker */}
            {tab === 11 && <Contacted />} {/* for Broker */}
          </div>
        </div>
      </section>
    <div  className="col-lg-9 col-md-8 col-sm-12">
      <div id='editor'></div>
    </div>
    </>
  )
}

export default EditBuilder;