import {React,useState} from 'react'
import Slider from 'react-slick'
import three from '../../images/user-3.png'
import two from '../../images/two.png'
import four from '../../images/four.png'
import one from '../../images/one.png'
import { Link } from 'react-router-dom'
import SigninPop from '../../Property_Pages/SigninPopUp'
import OwnerModal from '../../Dashboard/Myprofile/userForms/ownerModal'
import VenderModal from '../../Dashboard/Myprofile/userForms/venderModal'
import BuilderModal from '../../Dashboard/Myprofile/userForms/builderModal'
import BrokerModal from '../../Dashboard/Myprofile/userForms/brokerModal'

const TestimonialUsers = () => {
   
    const [showSignIn,setSignIn] = useState(false);
    const [tab,setTab] = useState(0);
    // {localStorage.getItem("userDetail") ?  JSON.parse(localStorage.getItem('userDetail')).user.usertype} 
    console.log()
    const hideForm = () =>{
        setTab(0);
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll:1,
        nextArrow: <button  className="slick-next slick-arrow">Next</button>,
        prevArrow:   <button  className="slick-prev slick-arrow" >Previous</button>,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1
              }
            }
          ]
      };
      const handleSignUpPopHide = () => {
        setSignIn(false);
      };
    
    return (
        <section className="image-cover min" style={{ background: '#122947 url(assets/img/pattern.png) no-repeat' }}>
            {showSignIn && <SigninPop onHide={handleSignUpPopHide} />}
            {tab === 1 && (
        <OwnerModal show={true} toHide={hideForm} />
      )}

      {tab === 2 && (
        <BuilderModal show={true} toHide={hideForm} />
      )}
      {tab===3 && (
        <VenderModal show={true} toHide={hideForm} />
      )}
 {tab === 4 && (
        <BrokerModal show={true} toHide={hideForm} />
      )}
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-8">
                        <div className="sec-heading center light">
                            <h2>Our Featured Agents</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="item-slide space slick-initialized">
                      
                          
                            <Slider {...settings}>
                          
                            <div className="single_items slick-slide slick-cloned" >
                                    <div className="grid_agents" style={{backgroundImage: "url(assets/img/auser-.jpeg)",objectFit:"cover"}}>
                                        <div className="elio_mx_list theme-bg-2">1 Owners</div>
                                        <div className="grid_agents-wrap">
                                            <div className="fr-grid-thumb">
                                                <a >
                                                    <span className="verified">
                                                    <img src="assets/img/verified.svg" className="verify mx-auto" alt="djdh" />
                                                    </span>
                                                    <img src={one} style={{objectFit:"cover"}} className="img-fluid mx-auto" alt="keje" />
                                                </a>
                                            </div>
                                            <div className="fr-grid-deatil">
                                                <span>Register as a</span>
                                                <h5 className="fr-can-name"><a  tabIndex={-1}>Azown Owner</a></h5>
                                             
                                            </div>
                                            <div className="fr-infos-deatil">
                                                {/* <a href className="btn agent-btn theme-bg"style={{color:"#fff"}} ><i className="fa fa-user-plus mr-2" />Register</a> */}
                                             {localStorage.getItem('userDetail')?<button onClick={()=>setTab(1)} disabled={parseInt(JSON.parse(localStorage.getItem('userDetail')).user.usertype)} className="btn agent-btn theme-bg"style={{color:"#fff"}} ><i className="fa fa-user-plus mr-2" />Register</button>:<button className="btn agent-btn theme-bg"style={{color:"#fff"}} onClick={()=>setSignIn(true)}><i className="fa fa-user-plus mr-2" />Register</button>}
                                              
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single_items slick-slide slick-cloned" >
                                    <div className="grid_agents">
                                        <div className="elio_mx_list theme-bg-2">42 Builders</div>
                                        <div className="grid_agents-wrap">
                                            <div className="fr-grid-thumb">
                                                <a  >
                                                    <span className="verified"><img src="assets/img/verified.svg" className="verify mx-auto" alt="djdh" /></span>
                                                    <img src={four} style={{objectFit:"cover"}} className="img-fluid mx-auto" alt="djd" />
                                                </a>
                                            </div>
                                            <div className="fr-grid-deatil">
                                                <span>Register as a</span>
                                                <h5 className="fr-can-name"><a  tabIndex={-1}>Builder</a></h5>
                                              
                                                
                                            </div>
                                            <div className="fr-infos-deatil">
                                            {/* <a href className="btn agent-btn theme-bg"style={{color:"#fff"}} ><i className="fa fa-user-plus mr-2" />Register</a> */}
                                            {localStorage.getItem('userDetail')?<button onClick={()=>setTab(2)} disabled={parseInt(JSON.parse(localStorage.getItem('userDetail')).user.usertype)} className="btn agent-btn theme-bg"style={{color:"#fff"}} ><i className="fa fa-user-plus mr-2" />Register</button>:<button className="btn agent-btn theme-bg"style={{color:"#fff"}} onClick={()=>setSignIn(true)}><i className="fa fa-user-plus mr-2" />Register</button>}

                                              
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single_items slick-slide" >
                                    <div className="grid_agents">
                                        <div className="elio_mx_list theme-bg-2">102 Venders</div>
                                        <div className="grid_agents-wrap">
                                            <div className="fr-grid-thumb">
                                                <a  tabIndex={0}>
                                                    <span className="verified"><img src="assets/img/verified.svg" className="verify mx-auto" alt="ekje" /></span>
                                                    <img src={three} style={{objectFit:"cover"}}  className="img-fluid mx-auto" alt='jie' />
                                                </a>
                                            </div>
                                            <div className="fr-grid-deatil">
                                                <span>Register as a</span>
                                                <h5 className="fr-can-name"><a  tabIndex={0}>Vender</a></h5>
                                            
                                            </div>
                                            <div className="fr-infos-deatil">
                                            {/* <a href className="btn agent-btn theme-bg"style={{color:"#fff"}} ><i className="fa fa-user-plus mr-2" />Register</a> */}
                                            {/* <button className="btn agent-btn theme-bg"style={{color:"#fff"}} onClick={()=>console.log("User Clicked")}><i className="fa fa-user-plus mr-2" />Register</button> */}
                                            {/* {localStorage.getItem('token')?<Link to="/more-services" >Open</Link>:<SigninPop/>} */}
                                             {localStorage.getItem('userDetail')?<button onClick={()=>setTab(3)} disabled={parseInt(JSON.parse(localStorage.getItem('userDetail')).user.usertype)} className="btn agent-btn theme-bg"style={{color:"#fff"}} ><i className="fa fa-user-plus mr-2" />Register</button>:<button className="btn agent-btn theme-bg"style={{color:"#fff"}} onClick={()=>setSignIn(true)}><i className="fa fa-user-plus mr-2" />Register</button>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single_items slick-slide slick-current slick-active" >
                                    <div className="grid_agents">
                                        <div className="elio_mx_list theme-bg-2">72 Brokers</div>
                                        <div className="grid_agents-wrap">
                                            <div className="fr-grid-thumb">
                                                <a  tabIndex={0}>
                                                    <span className="verified"><img src="assets/img/verified.svg" className="verify mx-auto" alt="dkkj" /></span>
                                                    <img src={two} style={{objectFit:"cover"}} className="img-fluid mx-auto" alt="dkkj" />
                                                </a>
                                            </div>
                                            <div className="fr-grid-deatil">
                                                <span>Register as a</span>
                                                <h5 className="fr-can-name"><a  tabIndex={0}>Broker</a></h5>
                                              
                                            </div>
                                            <div className="fr-infos-deatil">
                                            {/* <a href className="btn agent-btn theme-bg"style={{color:"#fff"}} ><i className="fa fa-user-plus mr-2" />Register</a> */}
                                             {localStorage.getItem('userDetail')?<button onClick={()=>setTab(4)} disabled={parseInt(JSON.parse(localStorage.getItem('userDetail')).user.usertype)} className="btn agent-btn theme-bg"style={{color:"#fff"}} ><i className="fa fa-user-plus mr-2" />Register</button>:<button className="btn agent-btn theme-bg"style={{color:"#fff"}} onClick={()=>setSignIn(true)}><i className="fa fa-user-plus mr-2" />Register</button>}
                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                                
                              
                            </Slider>
                              
                            {/* </div> */}
                            {/* </div> */}

                           
                            
                            </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default TestimonialUsers