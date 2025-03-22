import React, { createContext, useState } from "react";
const leadContext = createContext()

const LeadState =(props)=>{
    const [userleadsdata, setuserleadsdata] = useState([]);
    const [ownerleaddata, setownerleaddata] = useState([])
    // const host = "https://api.azown.com"
    const host = "http://localhost:5000"
    
    const leadcreate = async (id,type) => {
        const responce = await fetch(`${host}/api/leadprop/leadcreate`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,
          },
          body: JSON.stringify({ property_id: id, property_type: type }),
        });
        const res = await responce.json();
        console.log(res);
      };
   
     
      const userlead = async (ptype) => {
        const responce = await fetch(`${host}/api/leadprop/userleaddata`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,
          },
        });
        const resdata = await responce.json();
        setuserleadsdata(resdata);
      };
      const ownerlead = async (uid,pid,uType) => {
        const responce = await fetch(`${host}/api/leadprop/ownerlead/${uid}/${pid}/${uType}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
           
          },
         
        });
        const resdata = await responce.json();
        setownerleaddata(resdata);
      };
     const updateleadstage = async (lid,stage)=>{
        const responce = await fetch(`${host}/api/leadprop/updateleadstage`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,
            },
            body: JSON.stringify({ _id:lid,property_lead_stage:stage }),
          });
          const resdata = await responce.json();
       console.log(resdata);
     }
     const likeprop = async (id,type) => {
      
      const responce = await fetch(`${host}/api/likes/like-property`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,
        },
        body: JSON.stringify({ property_id: id, property_type: type }),
      });
      const res = await responce.json();
      console.log(res);
    };
    return (
        <leadContext.Provider value={{leadcreate,userlead,userleadsdata,updateleadstage,ownerlead, host,likeprop,ownerleaddata}}>
            {props.children}
        </leadContext.Provider>
    )

}
export {leadContext, LeadState} 