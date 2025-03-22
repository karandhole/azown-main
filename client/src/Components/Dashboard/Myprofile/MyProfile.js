import React, { useContext, useState, useEffect } from "react";
import propertyContext from "../../../context/PropertyContext";
import Slider from "react-slick";
import three from "../../images/user-3.png";
import two from "../../images/two.png";
import four from "../../images/four.png";
import one from "../../images/one.png";
import { Link } from "react-router-dom";
import SigninPop from "../../Property_Pages/SigninPopUp";
import OwnerModal from "./userForms/ownerModal";
import BrokerModal from "./userForms/brokerModal";
import VenderModal from "./userForms/venderModal";
import BuilderModal from "./userForms/builderModal";
import { UserContext } from "../../../context/UserContext";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { errorMsg, successMsg } from "../../notification";

const MyProfile = () => {
   

  
  const context = useContext(propertyContext);
  const { userdetail, getuserdetail,host } = context;
  const [showOwnerFrm, setShowOwnerFrm] = useState(false);
  const [showVendorFrm, setShowVendorFrm] = useState(false);
  const [showBrokerFrm, setShowBrokerFrm] = useState(false);
  const [showBuilderFrm, setShowBuilderFrm] = useState(false);
  const { kycData } = useContext(UserContext);
  const [userCategory, setUserCategory] = useState(kycData);
  const [show,setShow] = useState(false);
  const [editTab,setEditTab] = useState(null);
  const [editValue,setEditValue] = useState({name:userdetail.name,email:userdetail.email,phone:userdetail.phone,})
  const [userEditedVal,setUserEditedVal] = useState({name:editValue.name,email:editValue.email,phone:editValue.phone,})
  const [userImg,setUserImg] = useState();
  const [editSocial,setEditSocial] = useState({linkedin_link:'https://linkedin.com',facebook_link:'https://facebook.com',twitter_link:'https://twitter.com',insta_link:'https://instagram.com'}) ;
  const [editedSocial,setEditedSocial] = useState({linkedin_link:editSocial.linkedin_link,facebook_link:editSocial.facebook_link,twitter_link:editSocial.twitter_link,insta_link:editSocial.insta_link});
  const [userType,setUserType] = useState('Visiter')
  const expDate = JSON.parse(localStorage.getItem("userDetail")).user.primium_expiry_date;
  useEffect(()=>{
    if(userdetail.usertype == 1){
      setUserType("Vender")
    }
    else if(userdetail.usertype == 2)
    {setUserType("Broker")}
    else if(userdetail.usertype == 3)
    {setUserType("Builder")}
    else if(userdetail.usertype == 4)
    {setUserType("Owner")}
    else {
      setUserType("Visiter")
    }
  },[userdetail.usertype]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <button className="slick-next slick-arrow">Next</button>,
    prevArrow: <button className="slick-prev slick-arrow">Previous</button>,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
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

  
  const hideVendorModal = (data) => {
    setShowVendorFrm(data);
  };

  const hideBuilderModal = (data) => {
    setShowBuilderFrm(data);
  };

  const hideOwnerModal = (data) => {
    setShowOwnerFrm(data);
  };

  const hideBrokerModal = (data) => {
    setShowBrokerFrm(data);
  };

  const handleClose = () => setShow(false);

  useEffect(() => {
    getuserdetail();
  }, []);


const updateUserData = async (formData)=>{
  const response = await fetch(`${host}/user/update-user`,{
    method:"PUT",
    headers:{
      "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,
    },
    body:formData
  })
  console.log(response)
  if(response.ok){
    console.log("updated Succesfull")
    getuserdetail()
    
  }
  else{
    console.log("error");
  }
}
  const handleSubmit1 = (e) => {
     e.preventDefault();
    handleClose();
    const formData = new FormData();
    {userEditedVal.name && formData.append('name',userEditedVal.name)};
    {userEditedVal.phone &&  formData.append('phone',userEditedVal.phone)};
    {userImg && formData.append('profile-image',userImg)}
    // console.log(formData.get('phone'))
    updateUserData(formData)
  }

  const handleSubmit2 = (e) =>{
  e.preventDefault();
  handleClose();
  const formData = new FormData();
  formData.append('facebook_link',editedSocial.facebook_link)
  formData.append('linkedin_link',editedSocial.linkedin_link)
  formData.append('instagram_link',editedSocial.insta_link)
  formData.append('twitter_link',editedSocial.twitter_link)
  updateUserData(formData)
  }
  
  const handleSaveChanges1 = ()=>{
    setEditValue(userEditedVal);
  
  }

  const handleSaveChanges2 = () =>{
    setEditSocial(editedSocial)
    // handleClose();
  }


  const handleImage = (e) =>{
  const file = e.target.files[0];
  // console.log(file)
  const reader = new FileReader();
  reader.onload = (event) =>{
const base64Data = event.target.result;
   setUserImg(base64Data);
  }
  reader.readAsText(file)
  }


  const setUserDetail = () =>{
    setEditedSocial({linkedin_link:editSocial.linkedin_link,facebook_link:editSocial.facebook_link,twitter_link:editSocial.twitter_link,insta_link:editSocial.insta_link});
  }

  const [copyIcon, setcopyIcon] = useState(<i className="fas fa-clipboard" aria-hidden="true"></i>);
  const userId=JSON.parse(localStorage.getItem("userDetail")).user._id


  function handleCopy() {
    if(new Date(expDate) > new Date()){

    
    navigator.clipboard.writeText(`https://api.azown.com/#/premium-profile/${userId}`);
   
    setcopyIcon(<i className="fas fa-clone" aria-hidden="true"></i>);
    setTimeout(() => setcopyIcon(<i className="fas fa-clipboard" aria-hidden="true"></i>), 2000);
    successMsg("Link Copied")
    }else{
      errorMsg("Kindly Activate Your Premium")
    }
  }

  const [copyIconProp, setcopyIconProp] = useState(<i className="fas fa-clipboard" aria-hidden="true"></i>);
  const userIdProp=JSON.parse(localStorage.getItem("userDetail")).user._id


  function handleCopyProp() {
    navigator.clipboard.writeText(`https://api.azown.com/#/property-preview-page/${userIdProp}`);
    setcopyIconProp(<i className="fas fa-clone" aria-hidden="true"></i>);
    setTimeout(() => setcopyIconProp(<i className="fas fa-clipboard" aria-hidden="true"></i>), 2000);
  }
  
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 ">
      <div className="dashboard-body mb-3">
        <div className="dashboard-wraper">
          <div className="row">
            <div className="col-11">
                 <h3>My Profile Landing Page</h3>
            </div>
            <div className="col-1">
              <button style={{color:"black",outline:"none",border:"none"}} onClick={handleCopy}>{copyIcon}</button>
            </div>
          </div>
          {/* <div className="row mt-3">
            <div className="col-11">
                 <h3>My Property Landing Page</h3>
            </div>
            <div className="col-1">
              <button style={{color:"black",outline:"none",border:"none"}} onClick={handleCopyProp}>{copyIconProp}</button>
            </div>
          </div> */}
        </div>
      </div>
  {/* Modal For Edit */}

  <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header>
          <Modal.Title>Edit Your Details</Modal.Title>
          <i className="fa fa-times" style={{fontSize:'1.2rem',cursor:'pointer'}} onClick={()=>handleClose()} />
        </Modal.Header>
          {editTab === 1 && 
       ( <>
       <form onSubmit={handleSubmit1}>
        <Modal.Body className="pl-4"> 
          <div className="row align-items-center pb-2"> 
            <label className="col-4 font-weight-bold text-dark ">Name</label>
            <input type='text' value={userEditedVal.name} onChange={(e) => setUserEditedVal({...userEditedVal,name:e.target.value})} className="col-8 form-control" />
          </div> 
          <div className="row align-items-center pb-2"> 
            <label className="col-4 font-weight-bold text-dark ">Email</label>
            {/* <input  required type='email' value={userEditedVal.email} style={{cursor:'not-allowed'}} className="col-9 form-control" /> */}
            <p  style={{cursor:'not-allowed',paddingTop:'1rem'}} className="col-8 form-control" >{userEditedVal.email}</p>
            
          </div>
          <div className="row align-items-center pb-2"> 
            <label className="col-4 font-weight-bold text-dark ">Phone No</label>
            <input type='num'  value={userEditedVal.phone} onChange={(e) => setUserEditedVal({...userEditedVal,phone:e.target.value})} className="col-8 form-control" />
          </div>
          <div className="row align-items-center pb-2"> 
            <label className="col-4 font-weight-bold text-dark ">Profile Picture</label>
            <input  type='file' name='userprofile' onChange={handleImage} className="col-8 form-control pt-3" />
          </div>
          </Modal.Body>
          <Modal.Footer>
          <Button className="btn bg-danger" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" className="btn bg-dark" onClick={()=>{handleSaveChanges1()}}>
            Save Changes
          </Button>

        </Modal.Footer>
          </form>
          </>)
}
{editTab === 2 && 
       ( <>
       <form onSubmit={handleSubmit2}>
        <Modal.Body className="pl-4"> 

          <div className="row align-items-center pb-2"> 
            <label className="col-3 font-weight-bold text-dark ">Linked In</label>
            <input required type='text' value={editedSocial.linkedin_link} onChange={(e) => setEditedSocial({...editedSocial,linkedin_link:e.target.value})} className="col-9 form-control" />
          </div> 
          <div className="row align-items-center pb-2"> 
            <label className="col-3 font-weight-bold text-dark ">FaceBook</label>
            <input  required type='text' value={editedSocial.facebook_link} onChange={(e) => setEditedSocial({...editedSocial,facebook_link:e.target.value})} className="col-9 form-control" />
          </div>
          <div className="row align-items-center pb-2"> 
            <label className="col-3 font-weight-bold text-dark ">Twitter</label>
            <input required type='text' value={editedSocial.twitter_link} onChange={(e) => setEditedSocial({...editedSocial,twitter_link:e.target.value})} className="col-9 form-control" />
          </div>
          <div className="row align-items-center pb-2"> 
            <label className="col-3 font-weight-bold text-dark ">Instagram</label>
            <input required type='text' value={editedSocial.insta_link} onChange={(e) => setEditedSocial({...editedSocial,insta_link:e.target.value})} className="col-9 form-control" />
          </div>
          </Modal.Body>
        <Modal.Footer>
        <Button className="btn bg-danger" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" className="btn bg-dark" onClick={()=>{handleSaveChanges2()}}>
            Save Changes
          </Button>
        </Modal.Footer>
        </form>
          </>)
}

      </Modal>

         
      <div className="dashboard-body mb-3">
        <div className="dashboard-wraper">
          {/* Basic Information */}
          <div className="frm_submit_block">
            <h4>
              Basic Information <i className="fas fa-plus-circle m-0" style={{cursor:'pointer'}} onClick={()=>{setShow(true);setEditTab(1);setUserDetail();}} />
            </h4>
            <hr></hr>
          </div>
          <div className="row">
            <div className="col-3">
              <h6>Name</h6>
            </div>
            <div className="col-9">
              <p>{editValue.name || userdetail.name}</p> 
            </div>
            <div className="col-3">
              <h6>Email</h6>
            </div>
            <div className="col-9">
            <p>{(editValue.email || userdetail.email) && ((editValue.email || userdetail.email).length > 23 ? `${(editValue.email || userdetail.email).slice(0, 23)}...` : (editValue.email || userdetail.email))}</p>
            </div>
            <div className="col-3">
              <h6>Phone No.</h6>
            </div>
            <div className="col-9">
              <p>{editValue.phone || userdetail.phone}</p>
            </div>
            <div className="col-3">
              <h6>User Type</h6>
            </div>
            <div className="col-9">
              <p>{userType}</p>
            </div>
          </div>
          {/* <button className='btn  btn-dark py-2 px-4 '>Edit</button> */}
        </div>
      </div>
      <div className="dashboard-body my-3">
  <div className="dashboard-wraper">
    {/* Basic Information */}
    <div className="frm_submit_block">
      <h4>
        Add Social Media
        <i className="fas fa-plus-circle m-2" style={{cursor:'pointer'}} onClick={()=>{setShow(true);setEditTab(2)}} />
      </h4>
      <hr />
    </div>
    <div className="row">
      <div className="col-md-3">
        <h6>Linked In</h6>
        <p>{userdetail.hasOwnProperty("linkedin_link") ? userdetail.linkedin_link: editSocial.linkedin_link}</p>
      </div>
      <div className="col-md-3">
        <h6>FaceBook</h6>
        <p>{userdetail.hasOwnProperty("facebook_link") ? userdetail.facebook_link: editSocial.facebook_link}</p>
      </div>
      <div className="col-md-3">
        <h6>Twitter</h6>
        <p>{userdetail.hasOwnProperty("twitter_link") ? userdetail.twitter_link: editSocial.twitter_link}</p>
      </div>
      <div className="col-md-3">
        <h6>Instagram</h6>
        <p>{userdetail.hasOwnProperty("instagram_link") ? userdetail.instagram_link: editSocial.insta_link}</p>
      </div>
    </div>
  </div>
</div>

      {/* {showBuilderFrm && console.log("In builder")} */}
      {/* {showOwnerFrm && </>}
  {showVendorFrm && <Ve show={showVendorFrm}
        onHide={() => showVendorFrm(false)}/>} */}
      {showOwnerFrm && (
        <OwnerModal show={showOwnerFrm} toHide={hideOwnerModal} />
      )}

      {showVendorFrm && (
        <VenderModal show={showVendorFrm} toHide={hideVendorModal} />
      )}
      {showBuilderFrm && (
        <BuilderModal show={showBuilderFrm} toHide={hideBuilderModal} />
      )}
 {showBrokerFrm && (
        <BrokerModal show={showBrokerFrm} toHide={hideBrokerModal} />
      )}
      <div className="row mr-1">
        <div className="col-lg-12 col-md-12">
          <div className="item-slide space slick-initialized">
            <Slider {...settings}>
              <div className="single_items slick-slide slick-cloned">
                <div
                  className="grid_agents"
                  style={{
                    backgroundImage: "url(assets/img/auser-.jpeg)",
                    objectFit: "cover",
                  }}
                >
                  <div className="elio_mx_list theme-bg-2">1 Owners</div>
                  <div className="grid_agents-wrap">
                    <div className="fr-grid-thumb">
                      <a>
                        <span className="verified">
                          <img
                            src="assets/img/verified.svg"
                            className="verify mx-auto"
                            alt="djdh"
                          />
                        </span>
                        <img
                          src={one}
                          style={{ objectFit: "cover" }}
                          className="img-fluid mx-auto"
                          alt="keje"
                        />
                      </a>
                    </div>
                    <div className="fr-grid-deatil">
                      <span>Register as a</span>
                      <h5 className="fr-can-name">
                        <a tabIndex={-1}>
                          Azown Owner
                        </a>
                      </h5>
                    </div>
                    <div className="fr-infos-deatil">
                      {/* <a href className="btn agent-btn theme-bg"style={{color:"#fff"}} ><i className="fa fa-user-plus mr-2" />Register</a> */}
                      <button
                        className="btn agent-btn theme-bg"
                        style={{ color: "#fff" }}
                        disabled={parseInt(userdetail.usertype)}
                        onClick={() => setShowOwnerFrm(true)}
                      >
                        <i className="fa fa-user-plus mr-2" />
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single_items slick-slide slick-cloned">
                <div className="grid_agents">
                  <div className="elio_mx_list theme-bg-2">42 Builders</div>
                  <div className="grid_agents-wrap">
                    <div className="fr-grid-thumb">
                      <a>
                        <span className="verified">
                          <img
                            src="assets/img/verified.svg"
                            className="verify mx-auto"
                            alt="djdh"
                          />
                        </span>
                        <img
                          src={four}
                          style={{ objectFit: "cover" }}
                          className="img-fluid mx-auto"
                          alt="djd"
                        />
                      </a>
                    </div>
                    <div className="fr-grid-deatil">
                      <span>Register as a</span>
                      <h5 className="fr-can-name">
                        <a tabIndex={-1}>
                          Builder
                        </a>
                      </h5>
                    </div>
                    <div className="fr-infos-deatil">
                      {/* <a href className="btn agent-btn theme-bg"style={{color:"#fff"}} ><i className="fa fa-user-plus mr-2" />Register</a> */}
                      <button
                        className="btn agent-btn theme-bg"
                        style={{ color: "#fff" }}
                        disabled={parseInt(userdetail.usertype)}
                        onClick={() => 
                          setShowBuilderFrm(true)
                        }
                      >
                        <i className="fa fa-user-plus mr-2" />
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single_items slick-slide">
                <div className="grid_agents">
                  <div className="elio_mx_list theme-bg-2">102 Venders</div>
                  <div className="grid_agents-wrap">
                    <div className="fr-grid-thumb">
                      <a tabIndex={0}>
                        <span className="verified">
                          <img
                            src="assets/img/verified.svg"
                            className="verify mx-auto"
                            alt="ekje"
                          />
                        </span>
                        <img
                          src={three}
                          style={{ objectFit: "cover" }}
                          className="img-fluid mx-auto"
                          alt="jie"
                        />
                      </a>
                    </div>
                    <div className="fr-grid-deatil">
                      <span>Register as a</span>
                      <h5 className="fr-can-name">
                        <a tabIndex={0}>
                          Vender
                        </a>
                      </h5>
                    </div>
                    <div className="fr-infos-deatil">
                      {/* <a href className="btn agent-btn theme-bg"style={{color:"#fff"}} ><i className="fa fa-user-plus mr-2" />Register</a> */}
                      <button
                        className="btn agent-btn theme-bg"
                        style={{ color: "#fff" }}
                        disabled={parseInt(userdetail.usertype)}
                        onClick={() => {
                          setShowVendorFrm(true);
                        }}
                      >
                        <i className="fa fa-user-plus mr-2" />
                        Register
                      </button>
                      {/* <button className="btn agent-btn theme-bg"style={{color:"#fff"}} onClick={()=>console.log("User Clicked")}><i className="fa fa-user-plus mr-2" />Register</button> */}
                      {/* {localStorage.getItem('token')?<Link to="/more-services" >Open</Link>:<SigninPop/>} */}
                      {/* {localStorage.getItem('token')?<Link to="/dashboard" className="btn agent-btn theme-bg"style={{color:"#fff"}} ><i className="fa fa-user-plus mr-2" />Register</Link>:<button className="btn agent-btn theme-bg"style={{color:"#fff"}} onClick={()=>setSignIn(true)}><i className="fa fa-user-plus mr-2" />Register</button>} */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="single_items slick-slide slick-current slick-active">
                <div className="grid_agents">
                  <div className="elio_mx_list theme-bg-2">72 Brokers</div>
                  <div className="grid_agents-wrap">
                    <div className="fr-grid-thumb">
                      <a tabIndex={0}>
                        <span className="verified">
                          <img
                            src="assets/img/verified.svg"
                            className="verify mx-auto"
                            alt="dkkj"
                          />
                        </span>
                        <img
                          src={two}
                          style={{ objectFit: "cover" }}
                          className="img-fluid mx-auto"
                          alt="dkkj"
                        />
                      </a>
                    </div>
                    <div className="fr-grid-deatil">
                      <span>Register as a</span>
                      <h5 className="fr-can-name">
                        <a tabIndex={0}>
                          Broker
                        </a>
                      </h5>
                    </div>
                    <div className="fr-infos-deatil">
                      {/* <a
                        href
                        className="btn agent-btn theme-bg"
                        style={{ color: "#fff" }}
                      >
                        <i className="fa fa-user-plus mr-2" />
                        Register
                      </a> */}
                       <button
                        className="btn agent-btn theme-bg"
                        style={{ color: "#fff" }}
                        disabled={parseInt(userdetail.usertype)}
                        onClick={() => {
                          setShowBrokerFrm(true);
                          
                        }}
                      >
                        <i className="fa fa-user-plus mr-2" />
                        Register
                      </button>
                      {/* {localStorage.getItem('token')?<Link to="/dashboard" className="btn agent-btn theme-bg"style={{color:"#fff"}} ><i className="fa fa-user-plus mr-2" />Register</Link>:<button className="btn agent-btn theme-bg"style={{color:"#fff"}} onClick={()=>setSignIn(true)}><i className="fa fa-user-plus mr-2" />Register</button>} */}
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
      <div className="dashboard-body my-3">
        <div className="dashboard-wraper">
          {/* Basic Information */}
          <div className="frm_submit_block">
            <h4>
              KYC Update
              <i className="fas fa-plus-circle m-2" />
            </h4>
            <hr></hr>
          </div>
          <div className="row">
            <div className="col-3">
              <h6>User Name</h6>
            </div>
            <div className="col-9">
              <p>{userdetail.name}</p>
            </div>
            <div className="col-3">
              <h6>Email</h6>
            </div>
            <div className="col-9">
            <p>{(editValue.email || userdetail.email) && ((editValue.email || userdetail.email).length > 23 ? `${(editValue.email || userdetail.email).slice(0, 23)}...` : (editValue.email || userdetail.email))}</p>
            </div>
            <div className="col-3">
              <h6>Phone Number</h6>
            </div>
            <div className="col-9">
              <p>{userdetail.phone}</p>
            </div>
            <div className="col-3">
              <h6>UserType</h6>
            </div>
            <div className="col-9">
              <p>{userdetail.usertype}</p>
            </div>
            <div className="col-3">
              <h6>Landmark</h6>
            </div>
            <div className="col-9">
              <p>234567890</p>
            </div>
            <div className="col-3">
              <h6> City</h6>
            </div>
            <div className="col-9">
              <p>234567890</p>
            </div>
            <div className="col-3">
              <h6>State</h6>
            </div>
            <div className="col-9">
              <p>234567890</p>
            </div>
            <div className="col-3">
              <h6>GST No</h6>
            </div>
            <div className="col-9">
              <p>234567890</p>
            </div>
            <div className="col-3">
              <h6>Rera No.</h6>
            </div>
            <div className="col-9">
              <p>234567890</p>
            </div>
            <div className="col-3">
              <h6>Work Exp.</h6>
            </div>
            <div className="col-9">
              <p>234567890</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
