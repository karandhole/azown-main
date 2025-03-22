import React, { useContext, useState } from 'react'
import { HandlerContext } from '../../../context/HandlerContext'
import { errorMsg, successMsg } from '../../notification';
import propertyContext from '../../../context/PropertyContext';

const HandlerProfile = (props) => {
    const {updateHandlerStage} = useContext(HandlerContext);
    const {host} = useContext(propertyContext)
    const { lead,propHandlerId } = props
    const authToken = JSON.parse(localStorage.getItem("userDetail")).authtoken;
    const [accepted, setaccepted] = useState(false)
    const [rejected, setrejected] = useState(false)
    const [handOverSuccess,setHandOverSuccess] = useState(true)
    
  
      const handleTakeHandover = async (ownerId,property_id,pType) => {
        console.log(pType)

        if(pType === 1){
            const formData = new FormData();
            formData.append("handlerid",ownerId);
        const res = await fetch(`${host}/property/update-rr/${property_id}/0`
        , {
          method: "PUT",
          headers: {
            "auth-token": authToken,
          },
          body:formData
        });
        if(res.ok){
            console.log("Ok")
            setHandOverSuccess(false)
            successMsg("Succesfully Handover Taken")
           }else{
             console.log("Not Updated")
             errorMsg("Please Try After Some Time")
           }
    }else if(pType === 2){
        const formData = new FormData();
            formData.append("handlerid",ownerId);
        const res = await fetch(`${host}/property/update-rrs/${property_id}/0`
        , {
          method: "PUT",
          headers: {
            "auth-token": authToken,
          },
          body:formData
        });
        if(res.ok){
            console.log("Ok")
            setHandOverSuccess(false)
            successMsg("Succesfully Handover Taken")
           }else{
             console.log("Not Updated")
             errorMsg("Please Try After Some Time")
           }
    }else if(pType === 3){
        const formData = new FormData();
            formData.append("handlerid",ownerId);
        const res = await fetch(`${host}/property/update-rpg/${property_id}/0`
        , {
          method: "PUT",
          headers: {
            "auth-token": authToken,
          },
          body:formData
        });
        if(res.ok){
            console.log("Ok")
            setHandOverSuccess(false)
            successMsg("Succesfully Handover Taken")
           }else{
             console.log("Not Updated")
             errorMsg("Please Try After Some Time")
           }
    }else if(pType === 4){
        const formData = new FormData();
            formData.append("handlerid",ownerId);
        const res = await fetch(`${host}/property/update-rfm/${property_id}/0`
        , {
          method: "PUT",
          headers: {
            "auth-token": authToken,
          },
          body:formData
        });
        if(res.ok){
            console.log("Ok")
            setHandOverSuccess(false)
            successMsg("Succesfully Handover Taken")
           }else{
             console.log("Not Updated")
             errorMsg("Please Try After Some Time")
           }
    }else if(pType === 5){
        const formData = new FormData();
            formData.append("handlerid",ownerId);
        const res = await fetch(`${host}/property/update-cmr/${property_id}/0`
        , {
          method: "PUT",
          headers: {
            "auth-token": authToken,
          },
          body:formData
        });
        if(res.ok){
            console.log("Ok")
            setHandOverSuccess(false)
            successMsg("Succesfully Handover Taken")
           }else{
             console.log("Not Updated")
             errorMsg("Please Try After Some Time")
           }
    }else if(pType === 6){
        const formData = new FormData();
            formData.append("handlerid",ownerId);
        const res = await fetch(`${host}/property/update-cms/${property_id}/0`
        , {
          method: "PUT",
          headers: {
            "auth-token": authToken,
          },
          body:formData
        });
        if(res.ok){
            console.log("Ok")
            setHandOverSuccess(false)
            successMsg("Succesfully Handover Taken")
           }else{
             console.log("Not Updated")
             errorMsg("Please Try After Some Time")
           }
       
    }else if(pType === 7){
        const formData = new FormData();
            formData.append("handlerid",ownerId);
        const res = await fetch(`${host}/property/update-plot/${property_id}/0`
        , {
          method: "PUT",
          headers: {
            "auth-token": authToken,
          },
          body:formData
        });
        console.log(pType)
        if(res.ok){
            console.log("Ok")
            setHandOverSuccess(false)
            successMsg("Succesfully Handover Taken")
           }else{
             console.log("Not Updated")
             errorMsg("Please Try After Some Time")
           }
    }
    }
    return (
        <div>
            <div>
                <p> <b>Broker Name : </b> {lead.name}{(lead.broker_id  === propHandlerId && handOverSuccess) ?<span className='float-right text-warning'>Active Broker</span> : null}</p>
                {lead.hasOwnProperty('phone')? <p> <b>Phone No. : </b> {lead.phone} {(lead.broker_id  === propHandlerId && handOverSuccess)  ? <button style={{outline:'none'}} onClick={()=>handleTakeHandover(lead.owner_id,lead.property_id,lead.property_type)} className='float-right outline-none border-0 theme-bg px-2 py-1 rounded text-white' >Take Handover</button> : null}</p>: <p> Not Updated {lead.broker_id === propHandlerId ? <button style={{outline:'none'}} onClick={handleTakeHandover(lead.owner_id,lead.property_id,lead.property_type)} className='float-right outline-none border-0 theme-bg px-2 py-1 rounded text-white'>Take Handover</button> : null}</p>}
               
                {lead.stage === (10) ? <button className='btn btn-dark py-2 px-3 rounded disabled'>Accepted</button>:lead.stage === (-10)?
                 <button className='btn btn-dark py-2 px-3 rounded disabled' >Rejected</button> : accepted ? <button className='btn btn-dark py-2 px-3 rounded disabled'>Accepted</button>: rejected ? <button className='btn btn-dark py-2 px-3 rounded disabled'>Rejected</button>:  <><button className='btn btn-dark py-2 px-3 rounded disabled' onClick={()=>{setaccepted(true);updateHandlerStage(lead._id,10)}}>Accept</button>
                 <button className='btn btn-dark py-2 px-3 ml-2 rounded disabled'onClick={()=>{setrejected(true);updateHandlerStage(lead._id,-10)}}>Reject</button> </> }
                 <hr />
            </div>
        </div>
    )
}

export default HandlerProfile