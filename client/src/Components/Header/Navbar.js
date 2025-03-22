import React, { useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Login from './Login'
import SignUp from './SignUp'
import { errorMsg } from '../notification'
import { ToastContainer } from 'react-toastify'
import { warningMsg } from '../notification'

const Navbar = () => {
  const [hover, sethover] = useState(false)
  const [off, setoff] = useState(false)
  const [fix, setfix] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [log, setlog] = useState(false);
  const history = useNavigate()


  // const toggleMenu = () => {
  //   setMenuOpen(!menuOpen);
  // }
{show && (document.body.style.overflowY = 'hidden')}
{!show && (document.body.style.overflowY = 'auto')}

  useEffect(() => {
    if (show) {

    } else {

    }
    function handleResize() {
      if (window.innerWidth < 992) {
        setoff(true);
      } else {
        setoff(false);
      }
    }
   
    window.addEventListener('resize', handleResize);
    handleResize();
    // return () =>  {
    // 	window.removeEventListener('resize', handleResize);
    // };

    const handleScroll = event => {
      //   console.log('window.scrollY', window.scrollY);
      let val = window.scrollY

      if (val > 50) {
        setfix(true)
        // console.log(fix)

      } else {
        setfix(false)
        // console.log(fix)
      }

    };
    window.addEventListener('scroll', handleScroll);
    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    // };
  }, []);
  
  
  function handleClose(){
    setShow(!show)
  }

  // const disableNotify

  const closeModal = ()=>{
    setShow(false)
  }
  const handleBroker = () =>{
    warningMsg("Unfortunately, Brokers are not authorized to post properties");
    }
  return (
    <div className={fix ? "header-fixed header header-light " : "header header-light"} >
      <div className={off? "container pl-0" : "container"} >
        <nav id="navigation" className={off ? "navigation navigation-portrait" : "navigation navigation-landscape"} >

          <div className="nav-header">
{/* sdfsbdfhbsdfjksdfbjh */}
            <a className={off ?"ml-0 pl-0 nav-brand" : "nav-brand"} style={{cursor:'pointer'}}>
              <img src="assets/img/logo.png" className="logo" onClick={()=>history('/')} alt="img" />
              
            </a>
            {/* <div className="nav-toggle" onClick={() => { setMenuOpen(!menuOpen); }}></div> */}
            <div className="mobile_nav">
              <ul className='d-flex justify-content-center align-items-center'>
                {/* <li onClick={() => { setShow(!show) }}><a data-toggle="modal" ><i className="fas fa-user-plus fa-lg" /></a></li> */}
                {localStorage.getItem('userDetail')?<li >
            <Link to="/dashboard"  >
            <div className="btn-group account-drop p-0">
              <a >
                  <button type="button" className="btn  btn-order-by-filt" >
                    <img src="assets/img/user-5.jpg" className="avater-img" alt="img" />
                  </button>
                  </a>
                  </div>
            </Link>
              </li> :  <li onClick={() => { setShow(!show) }}>
                <a className="alio_green"  >
                  <i className="fas fa-user-plus fa-lg" />
                </a>
              </li>}
                <span style={{ borderRight: "2px solid grey",  padding: "5px" }}></span>
                
                {localStorage.getItem('userDetail')? (JSON.parse(localStorage.getItem('userDetail')).user.usertype === '2' ? <li><a className='add_prt' onClick={()=>handleBroker()}><i className="fas fa-plus-circle" /></a></li>: <li>
                <Link to="/create-property" >
                 <a className='add_prt'><i className="fas fa-plus-circle" /></a>
                </Link> 
              </li>):<li>
                <a className="add_prt" onClick={()=>errorMsg('Please Login Before')}>
                  <i className="fas fa-plus-circle" />
                </a> 
              </li>}
                
                  {/* <div class="btn-group account-drop p-0">
                  <button type="button" class="btn btn-order-by-filt" >
                    <img src="assets/img/user-5.jpg" class="avater-img" alt="" />
                  </button>

                </div> */}

              </ul>
            </div>
          </div>
<ToastContainer/>
          <div className={menuOpen ? "nav-menus-wrapper nav-menus-wrapper-open" : "nav-menus-wrapper"} style={{ transitionProperty: menuOpen ? 'left' : 'none' }}>
            <span className="nav-menus-wrapper-close-button" onClick={() => { setMenuOpen(!menuOpen) }}>✕</span>
            
            <ul className="nav-menu nav-menu-social align-to-right">
            {localStorage.getItem('userDetail')?<li >
            <Link to="/dashboard" className='p-0' >
            <div className="btn-group account-drop p-0">
                  <button type="button" className="btn btn-order-by-filt" >
                    <img src="assets/img/user-5.jpg" className="avater-img" alt="img" />
                  </button>
                  <span style={{ borderRight: "2px solid grey ", padding: "10px" }}></span>
                </div>
            </Link>
              </li> :  <li onClick={() => { setShow(!show) }}>
                <a className="alio_green"  >
                  <i className="fas fa-sign-in-alt mr-1" /><span className="dn-lg">Sign In</span>
                </a>
              </li>}
             
              {localStorage.getItem('userDetail')? (JSON.parse(localStorage.getItem('userDetail')).user.usertype === '2' ? <li className='add-listing'><a className='theme-c1' onClick={()=>handleBroker()}><i className="fas fa-plus-circle mr-1" />Post Free Property</a></li>: <li className="add-listing">
                <Link to="/create-property" className="theme-cl">
                  <i className="fas fa-plus-circle mr-1" />Post Free Property
                </Link> 
              </li>):<li className="add-listing">
                <a className="theme-cl" onClick={()=>errorMsg('Please Login Before')}>
                  <i className="fas fa-plus-circle mr-1" />Post Free Property
                </a> 
              </li>}
            </ul>
          </div>
          {menuOpen && <div className="nav-overlay-panel" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", display: "block" }}></div>}
          {/* modal */}
          {show && <> <div className={show ? "modal fade show" : "modal fade"}  id='login' aria-labelledby='resgistermodal' tabIndex={-1} role="dialog" style={{ display: show ? "block" : "none",backgroundColor: "rgba(0, 0, 0, 0.5)",overflow:'auto' }} aria-hidden="true">
            <div className="modal-dialog modal-xl login-pop-form" role="document">
              <div className="modal-content overli" >
                <div className="modal-body p-0">
                  <div className="resp_log_wrap">
                    <div className="resp_log_thumb" style={{ background: 'url(assets/img/p-2.png)no-repeat' }} />
                    <div className="resp_log_caption py-3">
                      <span className="mod-close" data-dismiss="modal" aria-hidden="true" onClick={() => { setShow(!show) }}><i className="ti-close" /></span>
                      <div className="edlio_152">
                        <ul className="nav nav-pills tabs_system center" role="tablist">
                          <li className="nav-item" onClick={() => { setlog(true) }}>
                            <a className={!log ? "nav-link" : "nav-link active"}  ><i className="fas fa-sign-in-alt mr-2" />Login</a>
                          </li>
                          <li className="nav-item" onClick={() => { setlog(false) }}>
                            <a className={log ? "nav-link" : "nav-link active"}  ><i className="fas fa-user-plus mr-2" />Register</a>
                          </li>
                        </ul>
                      </div>
                      <div className="tab-content" >
                        <div className="tab-pane fade show active" role="tabpanel" aria-labelledby="pills-login-tab">
                          <div className="login-form">
                            {log ?
                              <Login toHide={closeModal} />
                              :
                              <SignUp toHide={closeModal} />
                            }

                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div></>}
          {/* modal end */}
        </nav>
      </div>
    </div>
  )
}

export default Navbar