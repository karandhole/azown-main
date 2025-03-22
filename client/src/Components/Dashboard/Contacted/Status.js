import React, { useContext, useState } from 'react'
import { leadContext } from '../../../context/LeadContext';

const Status = ({item}) => {
    const leadcontext = useContext(leadContext);
    const { updateleadstage} = leadcontext;
    const [tenclicked,setten] = useState(false)
    const [payed,setpay] = useState(false)
    if(JSON.parse(localStorage.getItem('userDetail')).user.usertype === '2'){
      return(
        <div>
          {/* {item.stage===(-10)  ?  <button className="btn btn-danger disabled  p-2 ">Rejected</button> :item.stage===(30)  ?  <button className="btn btn-dark disabled m-2">Completed</button> : item.property_lead_stage===(0)  ?  <button className="btn btn-dark p-2"  onClick={()=>{updateleadstage(item._id,10); setten(true) }}  >{ tenclicked? "Pending Closure" :"Closure Req"  }</button> : item.property_lead_stage===(10)  ?  <button className="btn btn-dark disabled p-2">Closure Pending</button> : <button className="btn btn-dark p-2" onClick={()=>{updateleadstage(item._id,30); setpay(true)}} >{payed?"Completed":"Pay Now"}</button>} */}
          {item.stage===(-10)? <button className="btn btn-danger rounded m-2 ">Rejected</button> :item.stage===(10)? <button className="btn theme-bg rounded rounded m-1">Accepted</button>:<button className="btn btn-info  m-2 rounded">Pending</button>}
    </div>
      )
    }
    else{
  return (

    <div>
          {item.property_lead_stage===(-10)  ?  <button className="btn btn-danger disabled  p-2 ">Rejected</button> :item.property_lead_stage===(30)  ?  <button className="btn btn-dark disabled m-2">Completed</button> : item.property_lead_stage===(0)  ?  <button className="btn btn-dark p-2"  onClick={()=>{updateleadstage(item._id,10); setten(true) }}  >{ tenclicked? "Pending Closure" :"Closure Req"  }</button> : item.property_lead_stage===(10)  ?  <button className="btn btn-dark disabled p-2">Closure Pending</button> : <button className="btn btn-dark p-2" onClick={()=>{updateleadstage(item._id,30); setpay(true)}} >{payed?"Completed":"Pay Now"}</button>}
    </div>
  )
    }
}

export default Status