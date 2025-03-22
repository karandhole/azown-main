import React, { useState } from 'react'
import ListCmr from './Properties/ListCmr'
import ListCms from './Properties/ListCms'
import ListPlot from './Properties/ListPlot'
import ListRfm from './Properties/ListRfm'
import ListRpg from './Properties/ListRpg'
import ListRrent from './Properties/ListRrent'
import ListRsale from './Properties/ListRsale'
import AllUsers from './Users/AllUsers'
import Broker from './Users/Broker'
import Builder from './Users/Builder'
import Owner from './Users/Owner'
import Vender from './Users/UserDetailPageAllVender'

const Admin = () => {
    const [drop1, setdrop1] = useState(false)
    const [drop2, setdrop2] = useState(false)
    const [tab, settab] = useState(0)

    return (
        <div id="main-wrapper">

            <div className="clearfix" />

            <section className="gray pt-5 pb-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-4">
                            <div className="property_dashboard_navbar">
                                <div className="dash_user_avater">

                                    <h4>Admin Dashboard</h4>
                                    <hr />
                                    {/* <span>Venketage</span> */}
                                </div>
                                <div className="dash_user_menues">
                                    <ul>
                                        <li  className={drop1 ? "active" : "text-dark"}  onClick={() => { setdrop1(!drop1) }}><a ><i className="fa fa-user" />Users<span className=" text-dark float-right"><i class={`fa fa-arrow-${drop1 ? "down" : "right"}`}></i></span></a></li>

                                        {drop1 &&
                                            <div> <li className={`px-4 my-0 py-0 ${(tab === 1) ? 'active': 'text-dark'}`}  onClick={() => { settab(1) }}><a  ><i className="fa fa-user" />All Users</a></li>
                                                <li className="px-4 my-0 py-0 text-dark" onClick={() => { settab(2) }}><a ><i className="fa fa-user" />Owner</a></li>
                                                <li className="px-4 my-0 py-0 text-dark" onClick={() => { settab(3) }}><a ><i className="fa fa-user" />Broker</a></li>

                                                <li className="px-4 my-0 py-0 text-dark" onClick={() => { settab(4) }}><a ><i className="fa fa-user" />Vender</a></li>
                                                <li className="px-4 my-0 py-0 text-dark" onClick={() => { settab(5) }}><a ><i className="fa fa-user" />Builder</a></li>


                                            </div>}

                                        <li className="text-dark" onClick={() => { setdrop2(!drop2) }}><a ><i className="fa fa-user" />Properties<span className=" text-dark float-right"><i class={`fa fa-arrow-${drop2 ? "down" : "right"}`}></i></span></a></li>
                                        {drop2 && <div>

                                            <li className="px-4 my-0 py-0 text-dark" onClick={() => { settab(11) }}><a >
                                                <i className="fa fa-file" />Residential Rent</a></li>
                                            <li className="px-4 my-0 py-0 text-dark" onClick={() => { settab(12) }}><a ><i className="fa fa-file" />Residential Sale</a></li>
                                            <li className="px-4 my-0 py-0 text-dark" onClick={() => { settab(13) }}><a ><i className="fa fa-file" />Residential PG</a></li>
                                            <li className="px-4 my-0 py-0 text-dark" onClick={() => { settab(14) }}><a ><i className="fa fa-file" />Residential Flatmate</a></li>
                                            <li className="px-4 my-0 py-0 text-dark" onClick={() => { settab(15) }}><a ><i className="fa fa-file" />Commercial Rent</a></li>
                                            <li className="px-4 my-0 py-0 text-dark" onClick={() => { settab(16) }}><a ><i className="fa fa-file" />Commercial Sale</a></li>
                                            <li className="px-4 my-0 py-0 text-dark" onClick={() => { settab(17) }}><a ><i className="fa fa-file" />Land / Plot</a></li>


                                        </div>}





                                    </ul>
                                </div>
                                <div className="dash_user_footer">
                                    <ul>
                                        <li><a ><i className="fa fa-power-off" /></a></li>
                                        <li><a ><i className="fa fa-comment" /></a></li>
                                        <li><a ><i className="fa fa-cog" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {tab === 1 && <AllUsers />}
                        {tab === 2 && <Owner />}
                        {tab === 3 && <Broker />}
                        {tab === 4 && <Vender />}
                        {tab === 5 && <Builder />}
                        
                        {tab === 11 && <ListRrent />}
                        {tab === 12 && <ListRsale />}
                        {tab === 13 && <ListRpg />}
                        {tab === 14 && <ListRfm />}
                        {tab === 15 && <ListCmr />}
                        {tab === 16 && <ListCms />}
                        {tab === 17 && <ListPlot />}
                        

                    </div>
                </div>
            </section>

        </div>

    )
}
export default Admin
