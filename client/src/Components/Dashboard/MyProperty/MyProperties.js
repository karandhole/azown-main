import React, { useContext, useEffect, useState } from 'react'
import { leadContext } from '../../../context/LeadContext';
import propertyContext from '../../../context/PropertyContext';
import LeadProfile from './LeadProfile';
import img from '../../images/p-1.png'
import { Link } from 'react-router-dom';
import { HandlerContext } from '../../../context/HandlerContext';
import HandlerProfile from './handlerProfile'
import { successMsg } from '../../notification';
import { ToastContainer } from 'react-toastify';
import Loader from '../../loader';

const MyProperties = () => {
  const context = useContext(propertyContext);
  const {ownerHandler,ownerHandlerData} = useContext(HandlerContext)
  const { dash ,host} = context;
    
  const leadcontext = useContext(leadContext)
  const { ownerlead, ownerleaddata } = leadcontext
  const [model, setmodel] = useState(false);
  const [tab,setTab] = useState({bool:0,handlerId:'default'});
  const [showLoader,setShowLoader] = useState(false)

  const handleClose = () => {setmodel(false); document.body.style.overflow = "auto";}
  const handleShow = () => {setmodel(true); document.body.style.overflow = "hidden";}
  const [rr, setrr] = useState([])
  const [rrs, setrrs] = useState([])
  const [rpg, setrpg] = useState([])
  const [rfm, setrfm] = useState([])
  const [cmr, setcmr] = useState([])
  const [cms, setcms] = useState([])
  const [plot, setplot] = useState([])
  

 const authToken = JSON.parse(localStorage.getItem("userDetail")).authtoken;
 const usertype = JSON.parse(localStorage.getItem("userDetail")).user.usertype;


 async function deleteRrent(id){
  const responce = await fetch(`${host}/property/delete-rr/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "auth-token": authToken,
    },
  });
  const data = await responce.json();
  console.log(data)
  let filterData =  rr.filter(item=>item._id!==id)
  setrr(filterData)

 }
 async function deleteRsale(id){
  const responce = await fetch(`${host}/property/delete-rrs/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "auth-token": authToken,
    },
  });
  const data = await responce.json();
  console.log(data)
  let filterData =  rrs.filter(item=>item._id!==id)
  setrrs(filterData)

 }
 async function deleteRpg(id){
  const responce = await fetch(`${host}/property/delete-rpg/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "auth-token": authToken,
    },
  });
  const data = await responce.json();
  console.log(data)
  let filterData =  rpg.filter(item=>item._id!==id)
  setrpg(filterData)

 }
 async function deleteRfm(id){
  const responce = await fetch(`${host}/property/delete-rfm/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "auth-token": authToken,
    },
  });
  const data = await responce.json();
  console.log(data)
  let filterData =  rfm.filter(item=>item._id!==id)
  setrfm(filterData)

 }
 async function deleteCmr(id){
  const responce = await fetch(`${host}/property/delete-cmr/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "auth-token": authToken,
    },
  });
  const data = await responce.json();
  console.log(data)
  let filterData =  cmr.filter(item=>item._id!==id)
  setcmr(filterData)

 }
 async function deleteCms(id){
  const responce = await fetch(`${host}/property/delete-cms/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "auth-token": authToken,
    },
  });
  const data = await responce.json();
  console.log(data)
  let filterData =  cms.filter(item=>item._id!==id)
  setcms(filterData)

 }
 async function deletePlot(id){
  const responce = await fetch(`${host}/property/delete-plot/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "auth-token": authToken,
    },
  });
  const data = await responce.json();
  console.log(data)
  let filterData =  plot.filter(item=>item._id!==id)
  setplot(filterData)

 }
 async function MyRent() {
  setShowLoader(true)
  const responce = await fetch(`${host}/property/myrr`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "auth-token": authToken,
    },
  });
  const data = await responce.json();
  setrr(data)
  console.log(data)
  setShowLoader(false)
};

async function MyRsale() {
  setShowLoader(true)
  const responce = await fetch(`${host}/property/myrrs`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "auth-token":authToken,
    },
  });
  const data = await responce.json();
  setrrs(data)
  setShowLoader(false)
  
};
async function MyRpg() {
  setShowLoader(true)
  const responce = await fetch(`${host}/property/myrpg`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "auth-token": authToken,
    },
  });
  const data = await responce.json();
  setrpg(data)
  setShowLoader(false)
  
};
async function MyRfm() {
  setShowLoader(true)
  const responce = await fetch(`${host}/property/myrfm`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "auth-token": authToken,
    },
  });
  const data = await responce.json();
  setrfm(data)
  setShowLoader(false)

};
async function MyCmr() {
  setShowLoader(true)
  const responce = await fetch(`${host}/property/mycmr`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "auth-token": authToken,
    },
  });
  const data = await responce.json();
  setcmr(data)
  setShowLoader(false)

};

async function MyCms() {
  setShowLoader(true)
  const responce = await fetch(`${host}/property/mycms`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "auth-token": authToken,
    },
  });
  const data = await responce.json();
  setcms(data)
  setShowLoader(false)

};
async function MyPlot() {
  setShowLoader(true)
  const responce = await fetch(`${host}/property/myplot`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "auth-token": authToken,
    },
  });
  const data = await responce.json();
  setplot(data)
  console.log(data)
  setShowLoader(false)

};


  useEffect(() => {
   
    MyRent()
    MyRsale()
    MyRpg()
    MyRfm()
    MyCms()
    MyCmr()
    MyPlot()
  }, [])

 
  const setActivationRR = async (id,state) =>{
    const formData = new FormData();
    formData.append("is_active",state);
    const res = await fetch(`${host}/property/update-rr/${id}/0`, {
      method: "PUT",
      headers: {
        "auth-token": authToken,
      },
      body:formData
    });
    if(res.ok){
      successMsg(`Property ${state ? "Activated" : "Deactivated"}`);
      MyRent();
    }else{
      console.log("Not Updated")
    }
  }
  const setActivationRS = async (id,state) =>{
    const formData = new FormData();
    formData.append("is_active",state);
    const res = await fetch(`${host}/property/update-rrs/${id}/0`, {
      method: "PUT",
      headers: {
        "auth-token": authToken,
      },
      body:formData
    });
    if(res.ok){
      successMsg(`Property ${state ? "Activated" : "Deactivated"}`);
      MyRsale();
    }else{
      console.log("Not Updated")
    }
  }
  const setActivationPG = async (id,state) =>{
    const formData = new FormData();
    formData.append("is_active",state);
    const res = await fetch(`${host}/property/update-rpg/${id}/0`, {
      method: "PUT",
      headers: {
        "auth-token": authToken,
      },
      body:formData
    });
    if(res.ok){
      successMsg(`Property ${state ? "Activated" : "Deactivated"}`);
      MyRpg();
    }else{
      console.log("Not Updated")
    }
  }
  const setActivationFM = async (id,state) =>{
    const formData = new FormData();
    formData.append("is_active",state);
    const res = await fetch(`${host}/property/update-rfm/${id}/0`, {
      method: "PUT",
      headers: {
        "auth-token": authToken,
      },
      body:formData
    });
    if(res.ok){
      successMsg(`Property ${state ? "Activated" : "Deactivated"}`);
      MyRfm();
    }else{
      console.log("Not Updated")
    }
  }
  const setActivationCR = async (id,state) =>{
    const formData = new FormData();
    formData.append("is_active",state);
    const res = await fetch(`${host}/property/update-cmr/${id}/0`, {
      method: "PUT",
      headers: {
        "auth-token": authToken,
      },
      body:formData
    });
    if(res.ok){
      successMsg(`Property ${state ? "Activated" : "Deactivated"}`);
      MyCmr();
    }else{
      console.log("Not Updated")
    }
  }
  const setActivationCS = async (id,state) =>{
    const formData = new FormData();
    formData.append("is_active",state);
    const res = await fetch(`${host}/property/update-cms/${id}/0`, {
      method: "PUT",
      headers: {
        "auth-token": authToken,
      },
      body:formData
    });
    if(res.ok){
      successMsg(`Property ${state ? "Activated" : "Deactivated"}`);
      MyCms();
    }else{
      console.log("Not Updated")
    }
  }

  const setActivationPlot = async (id,state) =>{
    const formData = new FormData();
    formData.append("is_active",state);
    const res = await fetch(`${host}/property/update-plot/${id}/0`, {
      method: "PUT",
      headers: {
        "auth-token": authToken,
      },
      body:formData
    });
    if(res.ok){
      successMsg(`Property ${state ? "Activated" : "Deactivated"}`);
      MyPlot();
    }else{
      console.log("Not Updated")
    }
  }
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 " >
{showLoader && <Loader />}
      <div className="dashboard-body mb-3">

        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="dashboard_property">
              <div className="table-responsive">
                <table className="table" style={{fontSize:'.8rem'}}>
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Residential Rent</th>
                      <th scope="col" className="m2_hide">Leads</th>
                      <th scope="col" className="m2_hide">Likes</th>
                    {usertype !== '2' && <th scope="col" className="m2_hide">Broker Req.</th> }  
                      <th scope="col" className="m2_hide">Posted On</th>
                    {usertype !== '2' &&   <th scope="col">Status</th> }  
                      <th scope="col">Action</th>

                    </tr>
                  </thead>
                  <tbody>
                    {rr && rr.map(item => {
                      return <>
                        <tr>
                          <td>
                            <div className="dash_prt_wrap">
                              <div className="dash_prt_thumb">
                                <img src={item.images && item.images.length===0 ?img:item.images[0]} className="img-fluid" alt="jfh" />
                              </div>
                              <div className="dash_prt_caption">
                                {/* <h6>{`${item.rr_detail_title && item.rr_detail_title.slice(0,40)}...`}</h6> */}
                                <Link to={`/rrent-detail/${item._id}`} style={{fontWeight:'bold'}} >{`${item.rr_detail_title && item.rr_detail_title.slice(0,40)}...`}</Link>

                                <div className="prt_dashb_lot">{`${item.rr_location_city && item.rr_location_city.slice(0, 40)}...`}</div>
                                <div className="prt_dash_rate"><span>Rs.{item.rr_rental_detail_exp_deposit}</span></div>
                              </div>
                            </div>
                          </td>
                          <td className="m2_hide">
                            
                            <div className="prt_leads"><span><button onClick={() => { setmodel(true); ownerlead(item.userid,item._id,usertype);setTab({...tab,bool:1}) }} className='btn btn-light p-2 btn-success' style={{fontSize:'.8rem'}}>{item.lead && item.lead.length} till now</button></span></div>
                            
                          </td>
                          <td className="m2_hide">
                            <div className="_leads_view"><h6 className="up">{item.like && item.like.length}</h6></div>
                            <div className="_leads_view_title"><span>Likes</span></div>
                          </td>
                         {usertype !== '2' && <td className="m2_hide">
                            <div className="prt_leads"><span><button onClick={() => { setmodel(true); ownerHandler(item._id);console.log(item.handlerid);setTab({bool:2,handlerId:item.handlerid}); }} className='btn btn-light p-2 btn-success' style={{fontSize:'.8rem'}}>{item.handlerIds && item.handlerIds.length} till now</button></span></div>
                            
                          </td> } 
                          <td className="m2_hide">
                            <div className="_leads_posted"><h6 style={{fontSize:'.8rem'}}>{item.date && item.date.slice(0, 10)}</h6></div>
                            <div className="_leads_view_title"><span>On Date</span></div>
                          </td>
                          {usertype !== '2' &&                           <td>
                             <div className="_leads_status">{item.is_active ? <button className="active"  onClick={()=>setActivationRR(item._id,false)} style={{outline:'none'}}>Active</button> : <button className="active"  onClick={()=>setActivationRR(item._id,true)} style={{outline:'none'}}>Deactivate</button> }</div> 
                            {/* <div className="_leads_view_title"><span>Till 12 Oct</span></div> */}
      
                          </td>
                          }
                          <td>
                            <div className="_leads_action">
                              <Link to={`/edit-rrent/${item._id}`}><i className="fas fa-edit" /></Link>
                              {/* <a  onClick={()=>{deleteRrent(item._id)}}><i className="fas fa-trash" /></a> */}
                            </div>
                          </td>
                        </tr>
                      </>
                    })}



                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* row */}
      </div>

      <div className="dashboard-body mb-3">

        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="dashboard_property">
              <div className="table-responsive">
                <table className="table" style={{fontSize:'.8rem'}}>
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Residential Sale</th>
                      <th scope="col" className="m2_hide">Leads</th>
                      <th scope="col" className="m2_hide">Likes</th>
                      {/* <th scope="col" className="m2_hide">Broker Req.</th> */}
                    {usertype !== '2'&& <th scope="col" className="m2_hide">Broker Req.</th> }  

                      <th scope="col" className="m2_hide">Posted On</th>
                    {usertype !== '2'&& <th scope="col">Status</th>}
                      <th scope="col">Action</th>

                    </tr>
                  </thead>
                  <tbody>
                    {rrs && rrs.map(item => {
                      return <>
                        <tr>
                          <td>
                            <div className="dash_prt_wrap" >
                              <div className="dash_prt_thumb">
                              <img src={item.images && item.images.length===0 ?img:item.images[0]} className="img-fluid" alt="jfh" />
                              </div>
                              <div className="dash_prt_caption">
                                <Link to={`/rsale-detail/${item._id}`} style={{fontWeight:'bold'}} >{`${item.rrs_detail_title && item.rrs_detail_title.slice(0,40)}...`}</Link>
                                <div className="prt_dashb_lot">{`${item.rrs_location_city && item.rrs_location_city.slice(0, 40)}...`}</div>
                                <div className="prt_dash_rate"><span>Rs.{item.rrs_resale_detail_exp_price}</span></div>
                              </div>
                            </div>
                          </td>
                          <td className="m2_hide">
                            <div className="prt_leads"><button onClick={() => { setmodel(true); ownerlead(item.userid,item._id,usertype);setTab({...tab,bool:1}) }} className='btn btn-success p-2' style={{fontSize:'.8rem'}}>{item.lead && item.lead.length} till now</button></div>
                           
                          </td>
                          <td className="m2_hide">
                            <div className="_leads_view"><h5 className="up">{item.like && item.like.length}</h5></div>
                            <div className="_leads_view_title"><span>Likes</span></div>
                          </td>
                          {usertype !== '2' && <td className="m2_hide">
                            <div className="prt_leads"><span><button onClick={() => { setmodel(true); ownerHandler(item._id);console.log(item._id);setTab({bool:2,handlerId:item.handlerid}) }} className='btn btn-light p-2 btn-success' style={{fontSize:'.8rem'}}>{item.handlerIds && item.handlerIds.length} till now</button></span></div>
                            
                          </td> } 
                          <td className="m2_hide">
                            <div className="_leads_posted"><h5 style={{fontSize:'.8rem'}}>{item.date && item.date.slice(0, 10)}</h5></div>
                            <div className="_leads_view_title"><span>On Date</span></div>
                          </td>
                          {usertype !== '2'&& <td>
                            <div className="_leads_status">{item.is_active ? <button className="active"  onClick={()=>setActivationRS(item._id,false)} style={{outline:'none'}}>Active</button> : <button className="active"  onClick={()=>setActivationRS(item._id,true)} style={{outline:'none'}}>Deactivate</button> }</div> 


                            {/* <div className="_leads_view_title"><span>Till 12 Oct</span></div> */}
                          </td>
                          }
                          <td>
                            <div className="_leads_action">
                            <Link to={`/edit-rsale/${item._id}`}><i className="fas fa-edit" /></Link>
                            {/* <a  onClick={()=>{deleteRsale(item._id)}}><i className="fas fa-trash" /></a> */}
                            </div>
                          </td>
                        </tr>
                      </>
                    })}



                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* row */}
      </div>

      <div className="dashboard-body mb-3">

        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="dashboard_property">
              <div className="table-responsive">
                <table className="table" style={{fontSize:'.8rem'}}>
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Paying Guest</th>
                      <th scope="col" className="m2_hide">Leads</th>
                      <th scope="col" className="m2_hide">Likes</th>
                      {/* <th scope="col" className="m2_hide">Broker Req.</th> */}
                    {usertype !== '2'&& <th scope="col" className="m2_hide">Broker Req.</th> }  

                      <th scope="col" className="m2_hide">Posted On</th>
                      {usertype !== '2'&&  <th scope="col">Status</th>}
                      <th scope="col">Action</th>

                    </tr>
                  </thead>
                  <tbody>
                    {rpg && rpg.map(item => {
                      return <>
                        <tr>
                          <td>
                            <div className="dash_prt_wrap" >
                              <div className="dash_prt_thumb">
                              <img src={item.images && item.images.length===0 ?img:item.images[0]} className="img-fluid" alt="jfh" />
                              </div>
                              <div className="dash_prt_caption">
                                <Link to={`/rpg-detail/${item._id}`} style={{fontWeight:'bold'}}>{`${item.rpg_detail_title && item.rpg_detail_title.slice(0,40)}...`}</Link>
                                <div className="prt_dashb_lot">{`${item.rpg_location_city && item.rpg_location_city.slice(0, 40)}...`}</div>
                                <div className="prt_dash_rate"><span>Rs.{item.rpg_detail_room_deposit}</span></div>
                              </div>
                            </div>
                          </td>
                          <td className="m2_hide">
                            <div className="prt_leads"><button onClick={() => { setmodel(true); ownerlead(item.userid,item._id,usertype);setTab({...tab,bool:1}) }} className='btn btn-success p-2' style={{fontSize:'.8rem'}}>{item.lead && item.lead.length} till now</button></div>
                            <div className="prt_leads_list">
                              <ul>

                              </ul>
                            </div>
                          </td>
                          <td className="m2_hide">
                            <div className="_leads_view"><h5 className="up">{item.like && item.like.length}</h5></div>
                            <div className="_leads_view_title"><span>Likes</span></div>
                          </td>
                          {usertype !== '2' && <td className="m2_hide">
                            <div className="prt_leads"><span><button onClick={() => { setmodel(true); ownerHandler(item._id);console.log(item._id);setTab({bool:2,handlerId:item.handlerid}) }} className='btn btn-light p-2 btn-success' style={{fontSize:'.8rem'}}>{item.handlerIds && item.handlerIds.length} till now</button></span></div>
                            
                          </td> } 
                          <td className="m2_hide">
                            <div className="_leads_posted"><h5 style={{fontSize:'.8rem'}}>{item.date && item.date.slice(0, 10)}</h5></div>
                            <div className="_leads_view_title"><span>On Date</span></div>
                          </td>
                          {usertype !== '2'&& <td>
                         
                            <div className="_leads_status">{item.is_active ? <button className="active"  onClick={()=>setActivationPG(item._id,false)} style={{outline:'none'}}>Active</button> : <button className="active"  onClick={()=>setActivationPG(item._id,true)} style={{outline:'none'}}>Deactivate</button> }</div> 



                            {/* <div className="_leads_view_title"><span>Till 12 Oct</span></div> */}
                          </td>}
                          <td>
                            <div className="_leads_action">
                            <Link to={`/edit-rpg/${item._id}`}><i className="fas fa-edit" /></Link>
                            {/* <a  onClick={()=>{deleteRpg(item._id)}}><i className="fas fa-trash" /></a> */}
                            </div>
                          </td>
                        </tr>
                      </>
                    })}



                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* row */}
      </div>
      <div className="dashboard-body mb-3">

        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="dashboard_property">
              <div className="table-responsive">
                <table className="table" style={{fontSize:'.8rem'}}>
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Flatmates</th>
                      <th scope="col" className="m2_hide">Leads</th>
                      <th scope="col" className="m2_hide">Likes</th>
                      {/* <th scope="col" className="m2_hide">Broker Req.</th> */}
                    {usertype !== '2'&& <th scope="col" className="m2_hide">Broker Req.</th> }  

                      <th scope="col" className="m2_hide">Posted On</th>
                      {usertype !== '2'&&    <th scope="col">Status</th>}
                      <th scope="col">Action</th>

                    </tr>
                  </thead>
                  <tbody>
                    {rfm && rfm.map(item => {
                      return <>
                        <tr>
                          <td>
                            <div className="dash_prt_wrap" > 
                              <div className="dash_prt_thumb">
                              <img src={item.images && item.images.length===0 ?img:item.images[0]} className="img-fluid" alt="jfh" />
                              </div>
                              <div className="dash_prt_caption">
                                <Link to={`/rfm-detail/${item._id}`} style={{fontWeight:'bold'}}>{`${item.rfm_detail_title && item.rfm_detail_title.slice(0,40)}...`}</Link>
                                <div className="prt_dashb_lot">{`${item.rfm_location_city && item.rfm_location_city.slice(0, 40)}...`}</div>
                                <div className="prt_dash_rate"><span>Rs.{item.rfm_rental_detail_exp_deposit}</span></div>
                              </div>
                            </div>
                          </td>
                          <td className="m2_hide">
                            <div className="prt_leads"><button onClick={() => { setmodel(true); ownerlead(item.userid,item._id,usertype);setTab({...tab,bool:1}) }} className='btn btn-success p-2' style={{fontSize:'.8rem'}}>{item.lead && item.lead.length} till now</button></div>
                            <div className="prt_leads_list">
                              <ul>

                              </ul>
                            </div>
                          </td>
                          <td className="m2_hide">
                            <div className="_leads_view"><h5 className="up">{item.like && item.like.length}</h5></div>
                            <div className="_leads_view_title"><span>Likes</span></div>
                          </td>
                          {usertype !== '2' && <td className="m2_hide">
                            <div className="prt_leads"><span><button onClick={() => { setmodel(true); ownerHandler(item._id);console.log(item._id);setTab({bool:2,handlerId:item.handlerid}) }} className='btn btn-light p-2 btn-success' style={{fontSize:'.8rem'}}>{item.handlerIds && item.handlerIds.length} till now</button></span></div>
                            
                          </td> } 
                          <td className="m2_hide">
                            <div className="_leads_posted"><h5 style={{fontSize:'.8rem'}}>{item.date && item.date.slice(0, 10)}</h5></div>
                            <div className="_leads_view_title"><span>On Date</span></div>
                          </td>
                          {usertype !== '2'&&   <td>
                         
                            <div className="_leads_status">{item.is_active ? <button className="active"  onClick={()=>setActivationFM(item._id,false)} style={{outline:'none'}}>Active</button> : <button className="active"  onClick={()=>setActivationFM(item._id,true)} style={{outline:'none'}}>Deactivate</button> }</div> 



                            {/* <div className="_leads_view_title"><span>Till 12 Oct</span></div> */}
                          </td>}
                          <td>
                            <div className="_leads_action">
                            <Link to={`/edit-rfm/${item._id}`}><i className="fas fa-edit" /></Link>
                            {/* <a  onClick={()=>{deleteRfm(item._id)}}><i className="fas fa-trash" /></a> */}
                            </div>
                          </td>
                        </tr>
                      </>
                    })}



                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* row */}
      </div>
      <div className="dashboard-body mb-3">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="dashboard_property">
              <div className="table-responsive">
                <table className="table" style={{fontSize:'.8rem'}}>
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Commercial Rent</th>
                      <th scope="col" className="m2_hide">Leads</th>
                      <th scope="col" className="m2_hide">Likes</th>
                      {/* <th scope="col" className="m2_hide">Broker Req.</th> */}
                    {usertype !== '2'&& <th scope="col" className="m2_hide">Broker Req.</th> }  

                      <th scope="col" className="m2_hide">Posted On</th>
                      {usertype !== '2'&& <th scope="col">Status</th>}
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cmr && cmr.map(item => {
                      return <>
                        <tr>
                          <td>
                            <div className="dash_prt_wrap" >
                              <div className="dash_prt_thumb">
                              <img src={item.images && item.images.length===0 ?img:item.images[0]} className="img-fluid" alt="jfh" />
                              </div>
                              <div className="dash_prt_caption">
                                <Link to={`/cmr-detail/${item._id}`} style={{fontWeight:'bold'}}>{`${item.cr_detail_title && item.cr_detail_title.slice(0,40)}...`}</Link>
                                <div className="prt_dashb_lot">{`${item.cr_location_city && item.cr_location_city.slice(0,40)}....`}</div>
                                <div className="prt_dash_rate"><span>Rs.{item.cr_rental_detail_exp_deposit}</span></div>
                              </div>
                            </div>
                          </td>
                          <td className="m2_hide">
                            <div className="prt_leads"><button onClick={() => { setmodel(true); ownerlead(item.userid,item._id,usertype);setTab({...tab,bool:1}) }} className='btn btn-success p-2' style={{fontSize:'.8rem'}}>{item.lead && item.lead.length} till now</button></div>
                            <div className="prt_leads_list">
                              <ul>

                              </ul>
                            </div>
                          </td>
                          <td className="m2_hide">
                            <div className="_leads_view"><h5 className="up">{item.like && item.like.length}</h5></div>
                            <div className="_leads_view_title"><span>Likes</span></div>
                          </td>
                          {usertype !== '2' && <td className="m2_hide">
                            <div className="prt_leads"><span><button onClick={() => { setmodel(true); ownerHandler(item._id);console.log(item._id);setTab({bool:2,handlerId:item.handlerid}) }} className='btn btn-light p-2 btn-success' style={{fontSize:'.8rem'}}>{item.handlerIds && item.handlerIds.length} till now</button></span></div>
                            
                          </td> } 
                          <td className="m2_hide">
                            <div className="_leads_posted"><h5 style={{fontSize:'.8rem'}}>{item.date && item.date.slice(0, 10)}</h5></div>
                            <div className="_leads_view_title"><span>On Date</span></div>
                          </td>
                          {usertype !== '2' &&               <td>
                           
                            <div className="_leads_status">{item.is_active ? <button className="active"  onClick={()=>setActivationCR(item._id,false)} style={{outline:'none'}}>Active</button> : <button className="active"  onClick={()=>setActivationCR(item._id,true)} style={{outline:'none'}}>Deactivate</button> }</div> 



                            {/* <div className="_leads_view_title"><span>Till 12 Oct</span></div> */}
                          </td>
                          }
                          <td>
                            <div className="_leads_action">
                            <Link to={`/edit-cmr/${item._id}`}><i className="fas fa-edit" /></Link>
                            {/* <a  onClick={()=>{deleteCmr(item._id)}}><i className="fas fa-trash" /></a> */}
                            </div>
                          </td>
                        </tr>
                      </>
                    })}



                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* row */}
      </div>
      <div className="dashboard-body mb-3">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="dashboard_property">
              <div className="table-responsive">
                <table className="table" style={{fontSize:'.8rem'}}>
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Commercial Sale</th>
                      <th scope="col" className="m2_hide">Leads</th>
                      <th scope="col" className="m2_hide">Likes</th>
                      {/* <th scope="col" className="m2_hide">Broker Req.</th> */}
                    {usertype !== '2'&& <th scope="col" className="m2_hide">Broker Req.</th> }  

                      <th scope="col" className="m2_hide">Posted On</th>
                      {usertype !== '2'&&  <th scope="col">Status</th>}
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cms && cms.map(item => {
                      return <>
                        <tr>
                          <td>
                            <div className="dash_prt_wrap" >
                              <div className="dash_prt_thumb">
                              <img src={item.images && item.images.length===0 ?img:item.images[0]} className="img-fluid" alt="jfh" />
                              </div>
                              <div className="dash_prt_caption">
                                <Link to={`/cms-detail/${item._id}`} style={{fontWeight:'bold'}}>{`${item.cs_detail_title && item.cs_detail_title.slice(0,40)}...`}</Link>
                                <div className="prt_dashb_lot">{`${item.cs_location_city && item.cs_location_city.slice(0,40)}...`}</div>
                                <div className="prt_dash_rate"><span>Rs.{item.cs_resale_details_exp_price}</span></div>
                              </div>
                            </div>
                          </td>
                          <td className="m2_hide">
                            <div className="prt_leads"><button onClick={() => { setmodel(true); ownerlead(item.userid,item._id,usertype);setTab({...tab,bool:1}) }} className='btn btn-success p-2' style={{fontSize:'.8rem'}}>{item.lead && item.lead.length} till now</button></div>
                            <div className="prt_leads_list">
                              <ul>

                              </ul>
                            </div>
                          </td>
                          <td className="m2_hide">
                            <div className="_leads_view"><h5 className="up">{item.like && item.like.length}</h5></div>
                            <div className="_leads_view_title"><span>Likes</span></div>
                          </td>
                          {usertype !== '2' && <td className="m2_hide">
                            <div className="prt_leads"><span><button onClick={() => { setmodel(true); ownerHandler(item._id);console.log(item._id);setTab({bool:2,handlerId:item.handlerid}) }} className='btn btn-light p-2 btn-success' style={{fontSize:'.8rem'}}>{item.handlerIds && item.handlerIds.length} till now</button></span></div>
                            
                          </td> } 
                          <td className="m2_hide">
                            <div className="_leads_posted"><h5 style={{fontSize:'.8rem'}}>{item.date && item.date.slice(0, 10)}</h5></div>
                            <div className="_leads_view_title"><span>On Date</span></div>
                          </td>
                          {usertype !== '2'&&                     <td>

                            <div className="_leads_status">{item.is_active ? <button className="active"  onClick={()=>setActivationCS(item._id,false)} style={{outline:'none'}}>Active</button> : <button className="active"  onClick={()=>setActivationCS(item._id,true)} style={{outline:'none'}}>Deactivate</button> }</div> 



                            {/* <div className="_leads_view_title"><span>Till 12 Oct</span></div> */}
                          </td>}
                          <td>
                            <div className="_leads_action">
                            <Link to={`/edit-cms/${item._id}`}><i className="fas fa-edit" /></Link>
                            {/* <a  onClick={()=>{deleteCms(item._id)}}><i className="fas fa-trash" /></a> */}
                            </div>
                          </td>
                        </tr>
                      </>
                    })}



                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* row */}
      </div>
      <div className="dashboard-body mb-3">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="dashboard_property">
              <div className="table-responsive">
                <table className="table" style={{fontSize:'.8rem'}}>
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Lands / Plot</th>
                      <th scope="col" className="m2_hide">Leads</th>
                      <th scope="col" className="m2_hide">Likes</th>
                      {/* <th scope="col" className="m2_hide">Broker Req.</th> */}
                    {usertype !== '2'&& <th scope="col" className="m2_hide">Broker Req.</th> }  

                      <th scope="col" className="m2_hide">Posted On</th>
                      {usertype !== '2'&& <th scope="col">Status</th>}
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {plot && plot.map(item => {
                      return <>
                        <tr>
                          <td>
                            <div className="dash_prt_wrap">
                              <div className="dash_prt_thumb">
                              <img src={item.images && item.images.length===0 ?img:item.images[0]} className="img-fluid" alt="jfh" />
                              </div>
                              <div className="dash_prt_caption" style={{width:'15rem'}}>
                                <Link to={`/plot-detail/${item._id}`} style={{fontWeight:'bold'}}>{`${item.ps_detail_title && item.ps_detail_title.slice(0,40)}...`}</Link>
                                <div className="prt_dashb_lot">{`${item.ps_location_city && item.ps_location_city.slice(0, 40)}....`}</div>
                                <div className="prt_dash_rate"><span>Rs.{item.ps_sale_detail_price}</span></div>
                              </div>
                            </div>
                          </td>
                          <td className="m2_hide">
                            <div className="prt_leads"><button onClick={() => { setmodel(true); ownerlead(item.userid,item._id,usertype);setTab({...tab,bool:1}) }} className='btn btn-success p-2' style={{fontSize:'.8rem'}}>{item.lead && item.lead.length} till now</button></div>
                            <div className="prt_leads_list">
                              <ul>

                              </ul>
                            </div>
                          </td>
                          <td className="m2_hide">
                            <div className="_leads_view"><h5 className="up">{item.like && item.like.length}</h5></div>
                            <div className="_leads_view_title"><span>Likes</span></div>
                          </td>
                          {usertype !== '2' && <td className="m2_hide">
                            <div className="prt_leads"><span><button onClick={() => { setmodel(true); ownerHandler(item._id);console.log(item._id);setTab({bool:2,handlerId:item.handlerid}) }} className='btn btn-light p-2 btn-success' style={{fontSize:'.8rem'}}>{item.handlerIds && item.handlerIds.length} till now</button></span></div>
                            
                          </td> } 
                          <td className="m2_hide">
                            <div className="_leads_posted"><h5 style={{fontSize:'.8rem'}}>{item.date && item.date.slice(0, 10)}</h5></div>
                            <div className="_leads_view_title"><span>On Date</span></div>
                          </td>
                          {usertype !== '2'&&  <td>
                          
                            <div className="_leads_status">{item.is_active ? <button className="active"  onClick={()=>setActivationPlot(item._id,false)} style={{outline:'none'}}>Active</button> : <button className="active"  onClick={()=>setActivationPlot(item._id,true)} style={{outline:'none'}}>Deactivate</button> }</div> 



                            {/* <div className="_leads_view_title"><span>Till 12 Oct</span></div> */}
                          </td>}
                          <td>
                            <div className="_leads_action">
                            <Link to={`/edit-plot/${item._id}`}><i className="fas fa-edit" /></Link>
                            {/* <a  onClick={()=>{deletePlot(item._id)}}><i className="fas fa-trash" /></a> */}
                            </div>
                          </td>
                        </tr>
                      </>
                    })}



                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* row */}
      </div>
      <div className={model ? "modal fade show" : "modal fade"} tabIndex={-1} role="dialog" aria-labelledby="authomessage" style={{ display: model ? 'block' : 'none',backgroundColor:"rgba(0, 0, 0, 0.5)"  }}  >
        <div className="modal-dialog modal-dialog-centered login-pop-form" role="document">
          <div className="modal-content" id="authomessage">
            <span className="mod-close" data-dismiss="modal" onClick={() => { setmodel(false) }} aria-hidden="true"><i className="ti-close" /></span>
            <div className="modal-body">
              <h4 className="modal-header-title">Total Lead</h4>
              <hr />
              <div className="login-form custom-scroll" style= {{height:'30rem', padding:'0 2rem 5rem 0',overflowY:"auto",scrollbarWidth:'5px'}}>
                {tab.bool === 1 && ownerleaddata && ownerleaddata.map((lead) => {
                  return <div>
                    < LeadProfile key={lead._id} lead={lead}  />
                  </div>
                })}
{tab.bool === 2 && ownerHandlerData && ownerHandlerData.map((lead) => {
                  return <div>
                    < HandlerProfile propHandlerId={tab.handlerId} key={lead._id} lead={lead} />
                    
                  </div>
                })}

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default MyProperties