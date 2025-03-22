import React, { createContext, useState } from "react";
const HandlerContext = createContext()

const HandlerState =(props)=>{
    // const host = "https://api.azown.com/api"
    const host = "http://localhost:5000"
    const [handpropsdata , sethandpropsdata ] = useState([])
    const [ownerHandlerData , setOwnerHandlerData ] = useState([])

    const handprops = async ()=>{
        const responce = await fetch(`${host}/handler/handledprops`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,
            },
          
          });
          const resdata = await responce.json();
       sethandpropsdata(resdata)
     }
     const [handleaddata , sethandleaddata] = useState([])
     const handleads = async (pid) => {
        const responce = await fetch(`${host}/handler/handlerleads`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,
          },
          body: JSON.stringify({ property_id:pid }),
        });
        const resdata = await responce.json();
        sethandleaddata(resdata);
      };
const [handcondata,sethandcondata] = useState([])
      const handcontact = async () => {
        const responce = await fetch(`${host}/handler/handcontact`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,
          },
        });
        const resdata = await responce.json();
        console.log(resdata)
        sethandcondata(resdata);
      };
      const [handlerowner, sethandlerowner] = useState([]);
  const handreq = async (id) => {
    const responce = await fetch(`${host}/handler/handreqwithid/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,
      },
    });
    const resdata = await responce.json();
    console.log(resdata);
    sethandlerowner(resdata);
  };
  const accepthandler = async (bid,pid,stage) => {
    const responce = await fetch(`${host}/handler/accepthandler`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,
      },
      body: JSON.stringify({ broker_id:bid,property_id:pid,stage:stage }),
    });
    const res = await responce.json();
    console.log(res);
  };

  const brokerRequest = async (proptId,type,ownerId) =>{
 const responce = await fetch(`${host}/handler/create-handler-req`,{
  method:"POST",
  headers:{
    "Content-Type": "application/json",
    "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,
  },
body: JSON.stringify({property_id:proptId,property_type:type,owner_id:ownerId})
 })
 if(responce.ok){
  console.log(responce)
 }
  }
  const ownerHandler = async (id) =>{
  const responce = await fetch(`${host}/handler/handler-req/${id}`,{
    method:"GET",
    headers:{
      "Content-Type": "application/json",
    "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,
    },
  })
  if(responce.ok){
    const json = await responce.json();
    setOwnerHandlerData(json)
  }else{
    console.log(responce)
  }
  }

  const updateHandlerStage = async (id,stage) =>{
    const responce = await fetch(`${host}/handler/update-handler-stage/${id}/${stage}`,{
     method:"PUT",
     headers:{
       "Content-Type": "application/json",
       "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,
     },
    })
    if(responce.ok){
     console.log(responce)
    }
     }
    return (
        <HandlerContext.Provider value={{handreq,handlerowner,accepthandler,handprops,handpropsdata,handleads,handleaddata,handcondata,handcontact,brokerRequest,ownerHandler,ownerHandlerData,updateHandlerStage}}>
            {props.children}
        </HandlerContext.Provider>
    )

}
export {HandlerContext, HandlerState} 