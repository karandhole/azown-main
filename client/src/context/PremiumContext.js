import React, { createContext, useState } from "react";
import { defaultPropTemp } from "../Components/Constant/PropertyTempData";
import axios from "axios";
const PremiumContext = createContext();

const PremiumTempData = (props) => {
  // const host = "https://api.azown.com"
  const host = "http://localhost:5000"
const [propTempData,setPropTempData] = useState(null)
 
  const [propPremiumExp,setPropPremiumExp] = useState(false)
  const handleSetPropExp = (value) =>{
    setPropPremiumExp(value);
  }

  const getPropTemplate = async (id)=>{
    const res = await fetch(`${host}/api/property/get-primium-template/${id}`,{
      method:"GET",
      headers:{
        "content-type":'application/json',
        "auth-token":JSON.parse(localStorage.getItem("userDetail")).authtoken,
      }
     })
    if(res.ok){
      console.log("In Api")
      const json = await res.json();
setPropTempData(json)
    }else{
console.log("Some Error")
    }
  }

  const createPropertyTemplate = async (propId,propType) => {
    const tempData = defaultPropTemp;
		const myData = JSON.stringify(tempData);
		const res =  axios.post(`https://api.azown.com/api/property/create-primium-template`,{
		  property_id:propId,property_template_data:myData,property_type:propType
		},{
		  headers:{
			"content-type":'application/json',
			"auth-token":JSON.parse(localStorage.getItem("userDetail")).authtoken,
		  }}
		 ).then(()=>{console.log("Success");}).catch(()=>{console.log("Error Occured")})
		
		  }
		
  return (
    <PremiumContext.Provider
      value={{ handleSetPropExp,propPremiumExp,getPropTemplate,propTempData,createPropertyTemplate }}
    >
      {props.children}
    </PremiumContext.Provider>
  );
};

export { PremiumContext, PremiumTempData };
