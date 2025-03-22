import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AdminContext } from './AdminContext'
import { ServiceData } from '../Constant/ServiceData'
import AdminLogin from './adminlogin'
import { useNavigate } from 'react-router-dom';

const Layout = ({children}) => {
    const {tab,setTab,dropdownState, setDropdownState} = useContext(AdminContext)
    const [drop1, setdrop1] = useState(false)
    const [drop2, setdrop2] = useState(false)
    const [drop3, setdrop3] = useState(false)
    const [isLogin,setIsLogin] = useState(false)
    const [adminLogin , setAdminLogin] = useState(localStorage.getItem("adminToken") ? true : false)
    const history = useNavigate();
    

    const handleLogin = (x) =>{
        console.log("set",x);
   setIsLogin(x)
   setAdminLogin(x)
    }
    return (
    <>{adminLogin ? 
        <div id="main-wrapper">
            <div className="clearfix" />
            <section className="gray pt-5 pb-5 ml-2">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-4">
                            <div className="property_dashboard_navbar">
                                <div className="dash_user_avater">
                                    <Link to="/admin"><h4 style={{cursor:"pointer"}}>Admin Dashboard</h4></Link>
                                    <hr />
                                </div>
                                <div className="dash_user_menues">
                                    <ul style={{cursor:"pointer"}}>
                                        <li className="text-dark" onClick={() => { setdrop1(!drop1);setDropdownState(1) }}><a ><i className="fa fa-user" />Users<span className=" text-dark float-right"><i className={`fa fa-arrow-${dropdownState===1 ? "down" : "right"}`}></i></span></a></li>
                                        {(dropdownState === 1) &&
                                            <div>
                                                <li className={`px-4 my-0 py-0 ${(tab === 1) ? 'active': 'text-dark'}`} onClick={()=>setTab(1)} ><Link to="/alluser-page"><i className="fa fa-user" />All Users</Link></li>
                                                <li className={`px-4 my-0 py-0 ${(tab === 2) ? 'active': 'text-dark'}`} onClick={()=>setTab(2)}><Link to="/owner-page"><i className="fa fa-user-tie" />Owner</Link></li>
                                                <li className={`px-4 my-0 py-0 ${(tab === 3) ? 'active': 'text-dark'}`} onClick={()=>setTab(3)}><Link to="/broker-page"><i className="fa fa-user-secret" />Broker</Link></li>
                                                <li className={`px-4 my-0 py-0 ${(tab === 4) ? 'active': 'text-dark'}`} onClick={()=>setTab(4)}><Link to="/builder-page"><i className="fa fa-user-tie" />Builder</Link></li>

                                            </div>
                                            }

                                        <li className="text-dark" onClick={() => { setdrop2(!drop2);setDropdownState(2) }}><a ><i className="fa fa-building" />Properties<span className=" text-dark float-right"><i className={`fa fa-arrow-${dropdownState===2 ? "down" : "right"}`}></i></span></a></li>
                                        {dropdownState === 2 && 
                                            <div>

                                                <li className={`px-4 my-0 py-0 ${(tab === 5) ? 'active': 'text-dark'}`} onClick={()=>setTab(5)}><Link to ="/rrproperty-page"><i className="fa fa-building" />Residential Rent</Link></li>
                                                <li className={`px-4 my-0 py-0 ${(tab === 6) ? 'active': 'text-dark'}`} onClick={()=>setTab(6)} ><Link to ="/rsproperty-page"><i className="fa fa-building" />Residential Sale</Link></li>
                                                <li className={`px-4 my-0 py-0 ${(tab === 7) ? 'active': 'text-dark'}`} onClick={()=>setTab(7)}><Link to ="/rpgproperty-page"><i className="fa fa-building" />Residential Paying Guest</Link></li>
                                                <li className={`px-4 my-0 py-0 ${(tab === 8) ? 'active': 'text-dark'}`} onClick={()=>setTab(8)} ><Link to ="/rfmproperty-page"><i className="fa fa-building" />Residential Flatmate</Link></li>
                                                <li className={`px-4 my-0 py-0 ${(tab === 9) ? 'active': 'text-dark'}`} onClick={()=>setTab(9)} ><Link to ="/cmrproperty-page"><i className="fa fa-building" />Commercial Rent</Link></li>
                                                <li className={`px-4 my-0 py-0 ${(tab === 10) ? 'active': 'text-dark'}`} onClick={()=>setTab(10)}><Link to ="/cmsproperty-page"><i className="fa fa-building" />Commercial Sale</Link></li>
                                                <li className={`px-4 my-0 py-0 ${(tab === 11) ? 'active': 'text-dark'}`} onClick={()=>setTab(11)} ><Link to ="/pproperty-page"><i className="fa fa-building" />Land/Plot</Link></li>

                                            </div>
                                            }

                                            <li className="text-dark" onClick={() => { setdrop3(!drop3);setDropdownState(3) }}><a ><i className="fa fa-user-cog" />Vendors Service<span className=" text-dark float-right"><i className={`fa fa-arrow-${dropdownState=== 3 ? "down" : "right"}`}></i></span></a></li>
                                        {dropdownState === 3 && 
                                        <div>
                                       {ServiceData.map((curEle)=>{
                                        return(<li key={curEle.service_id} className={`px-4 my-0 py-0 ${(tab === curEle.service_id + 11) ? 'active': 'text-dark'}`} onClick={()=>setTab(curEle.service_id + 11)} ><Link to={`/service-vendor-page/${curEle.service_id}/${curEle.service_name}`}><i className="fa fa-cog" />{curEle.service_name}</Link></li>)
                                       })}
                                            {/* <li className={`px-4 my-0 py-0 ${(tab === 12) ? 'active': 'text-dark'}`} onClick={()=>setTab(12)} ><Link to ="/service-vendor-page"><i className="fa fa-cog" />Mover & Packers </Link></li>
                                            <li className={`px-4 my-0 py-0 ${(tab === 13) ? 'active': 'text-dark'}`} onClick={()=>setTab(13)} ><Link to ="/service-vendor-page"><i className="fa fa-cog" />Sale/Rent Agreement </Link></li>
                                            <li className={`px-4 my-0 py-0 ${(tab === 14) ? 'active': 'text-dark'}`} onClick={()=>setTab(14)} ><Link to ="/service-vendor-page"><i className="fa fa-cog" />Home Loan </Link></li>
                                            <li className={`px-4 my-0 py-0 ${(tab === 15) ? 'active': 'text-dark'}`} onClick={()=>setTab(15)} ><Link to ="/service-vendor-page"><i className="fa fa-cog" />Painters </Link></li>
                                            <li className={`px-4 my-0 py-0 ${(tab === 16) ? 'active': 'text-dark'}`} onClick={()=>setTab(16)} ><Link to ="/service-vendor-page"><i className="fa fa-cog" />AC Repaires </Link></li>
                                            <li className={`px-4 my-0 py-0 ${(tab === 17) ? 'active': 'text-dark'}`} onClick={()=>setTab(17)} ><Link to ="/service-vendor-page"><i className="fa fa-cog" />Carpenters </Link></li>
                                            <li className={`px-4 my-0 py-0 ${(tab === 18) ? 'active': 'text-dark'}`} onClick={()=>setTab(18)} ><Link to ="/service-vendor-page"><i className="fa fa-cog" />Electricians </Link></li>
                                            <li className={`px-4 my-0 py-0 ${(tab === 19) ? 'active': 'text-dark'}`} onClick={()=>setTab(19)} ><Link to ="/service-vendor-page"><i className="fa fa-cog" /> Pest Control  </Link></li>
                                            <li className={`px-4 my-0 py-0 ${(tab === 20) ? 'active': 'text-dark'}`} onClick={()=>setTab(20)} ><Link to ="/service-vendor-page"><i className="fa fa-cog" />Plumber </Link></li>
                                            <li className={`px-4 my-0 py-0 ${(tab === 21) ? 'active': 'text-dark'}`} onClick={()=>setTab(21)} ><Link to ="/service-vendor-page"><i className="fa fa-cog" />Salon at Home  </Link></li>
                                            <li className={`px-4 my-0 py-0 ${(tab === 22) ? 'active': 'text-dark'}`} onClick={()=>setTab(22)} ><Link to ="/service-vendor-page"><i className="fa fa-cog" />TV Repaire  </Link></li>
                                            <li className={`px-4 my-0 py-0 ${(tab === 23) ? 'active': 'text-dark'}`} onClick={()=>setTab(23)} ><Link to ="/service-vendor-page"><i className="fa fa-cog" />Housekeeping  </Link></li>
                                            <li className={`px-4 my-0 py-0 ${(tab === 24) ? 'active': 'text-dark'}`} onClick={()=>setTab(24)} ><Link to ="/service-vendor-page"><i className="fa fa-cog" />Milk Man  </Link></li>
                                            <li className={`px-4 my-0 py-0 ${(tab === 25) ? 'active': 'text-dark'}`} onClick={()=>setTab(25)} ><Link to ="/service-vendor-page"><i className="fa fa-cog" />Shopkeepers </Link></li>
                                            <li className={`px-4 my-0 py-0 ${(tab === 26) ? 'active': 'text-dark'}`} onClick={()=>setTab(26)} ><Link to ="/service-vendor-page"><i className="fa fa-cog" /> Medical Store </Link></li>
                                            <li className={`px-4 my-0 py-0 ${(tab === 27) ? 'active': 'text-dark'}`} onClick={()=>setTab(27)} ><Link to ="/service-vendor-page"><i className="fa fa-cog" />Furniture Shop </Link></li>
                                            <li className={`px-4 my-0 py-0 ${(tab === 28) ? 'active': 'text-dark'}`} onClick={()=>setTab(28)} ><Link to ="/service-vendor-page"><i className="fa fa-cog" />Mobile Shop </Link></li>
                                            <li className={`px-4 my-0 py-0 ${(tab === 29) ? 'active': 'text-dark'}`} onClick={()=>setTab(29)} ><Link to ="/service-vendor-page"><i className="fa fa-cog" />Water Purifier  </Link></li> */}
                                        

                                        </div>
                                        }

                                            <Link to ="/broker-detail-page"><li className={dropdownState === 4 ? "active" : "text-dark"} onClick={()=>{setDropdownState(4);setTab(0)}}><a ><i className="fa fa-user-secret" />Brokers<span className=" text-dark float-right"></span></a></li></Link>
                                            <Link to ="/all-vendor-profile"><li className={dropdownState === 5 ? "active" : "text-dark"} onClick={()=>{setDropdownState(5);setTab(0)}}><a ><i className="fa fa-user-cog" />Vendors<span className=" text-dark float-right"></span></a></li></Link>
                                    </ul>
                                </div>
                                    <div className="dash_user_footer">
                                        <ul  style={{color:"white",cursor:"pointer"}}>
                                            <li  onClick={()=>{localStorage.removeItem("adminToken") ; history("/")}} ><a ><i className="fa fa-power-off" /></a></li>
                                            <li><a ><i className="fa fa-comment" /></a></li>
                                            <li><a ><i className="fa fa-cog" /></a></li>
                                        </ul>
                                    </div>
                            </div>
                        </div>


                        <div className='col-lg-9 col-md-8'>
                            <div>{children}</div>
                        </div>
                         
                    </div>
                </div>
            </section>
         </div>:
         <AdminLogin isAdminLogin={handleLogin}/>}
    </>

    )
}
export default Layout
