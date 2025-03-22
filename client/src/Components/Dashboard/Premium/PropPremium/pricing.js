import {React, useContext, useEffect, useState} from 'react';
import axios from 'axios';
import Loader from '../../../loader';
import { successMsg,errorMsg } from '../../../notification';
import { PremiumContext } from '../../../../context/PremiumContext';
import propertyContext from '../../../../context/PropertyContext';

const PricingTable = ({propId,propType,toHide,ownerId}) => {

	const [showLoader,setShowLoader] = useState(false)
	const {handleSetPropExp} = useContext(PremiumContext);
	const {host} = useContext(propertyContext)
	const authToken = JSON.parse(localStorage.getItem("userDetail")).authtoken;
	
	function calculateExpirationDate(days) {
		const today = new Date();
		const nextDate = new Date(today.getTime() + (days * 24 * 60 * 60 * 1000));
		const nextYear = nextDate.getFullYear();
		const nextMonth = nextDate.getMonth();
		const lastDayOfMonth = new Date(nextYear, nextMonth + 1, 0).getDate();
		const expirationDate = new Date(nextYear, nextMonth, Math.min(nextDate.getDate(), lastDayOfMonth));
		return expirationDate;
	  }

	 
	//   const handleSwitchPremium = async (days) => {
	// 	const expDate = calculateExpirationDate(days); 
	// 	const tempData = templateDataArr[0];
	// 	const myData = JSON.stringify(tempData.projectData);
	// 	const res =  axios.post(`https://api.azown.com/api/property/create-primium-template`,{
	// 	  property_id:propId,property_template_data:myData,property_type:propType,primium_expire_date:expDate
	// 	},{
	// 	  headers:{
	// 		"content-type":'application/json',
	// 		"auth-token":JSON.parse(localStorage.getItem("userDetail")).authtoken,
	// 	  }}
	// 	 ).then(()=>{console.log("Success");toHide(false);handleIsPropertyPremium(true);setShowLoader(false)}).catch(()=>{console.log("Error Occured");setShowLoader(false)})
		
	// 	  }
	const updatePropPremiumExpiry = async (days,owner,property_id,pType) => {
        var expDate = calculateExpirationDate(days); 
         
        if(pType === 1){
            const formData = new FormData();
            formData.append("primium_expiry_date",expDate);
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
             successMsg(`Premium Extended for ${expDate}`)
			 handleSetPropExp(expDate)
			 setShowLoader(false)
			 toHide(false)
           }else{
             console.log("Not Updated")
             errorMsg("Please Try After Some Time")
			 setShowLoader(false)
			 toHide(false)
           }
    }else if(pType === 2){
        const formData = new FormData();
            formData.append("primium_expiry_date",expDate);
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
             successMsg(`Premium Extended for ${expDate}`)
			 handleSetPropExp(expDate)
			 setShowLoader(false)
			 toHide(false)
           }else{
             console.log("Not Updated")
             errorMsg("Please Try After Some Time")
			 setShowLoader(false)
			 toHide(false)
           }
    }else if(pType === 3){
        const formData = new FormData();
            formData.append("primium_expiry_date",expDate);
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
             successMsg(`Premium Extended for ${expDate}`)
			 handleSetPropExp(expDate)
			 setShowLoader(false)
			 toHide(false)
           }else{
             console.log("Not Updated")
             errorMsg("Please Try After Some Time")
			 setShowLoader(false)
			 toHide(false)
           }
    }else if(pType === 4){
        const formData = new FormData();
            formData.append("primium_expiry_date",expDate);
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
             successMsg(`Premium Extended for ${expDate}`)
			 handleSetPropExp(expDate)
			 setShowLoader(false)
			 toHide(false)
           }else{
             console.log("Not Updated")
             errorMsg("Please Try After Some Time")
			 setShowLoader(false)
			 toHide(false)
           }
    }else if(pType === 5){
        const formData = new FormData();
            formData.append("primium_expiry_date",expDate);
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
             successMsg(`Premium Extended for ${expDate}`)
			 handleSetPropExp(expDate)
			 setShowLoader(false)
			 toHide(false)
           }else{
             console.log("Not Updated")
             errorMsg("Please Try After Some Time")
			 setShowLoader(false)
			 toHide(false)
           }
    }else if(pType === 6){
        const formData = new FormData();
            formData.append("primium_expiry_date",expDate);
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
             successMsg(`Premium Extended for ${expDate}`)
			 handleSetPropExp(expDate)
			 setShowLoader(false)
			 toHide(false)
           }else{
             console.log("Not Updated")
             errorMsg("Please Try After Some Time")
			 setShowLoader(false)
			 toHide(false)
           }
       
    }else if(pType === 7){
        const formData = new FormData();
            formData.append("primium_expiry_date",expDate);
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
             successMsg(`Premium Extended for ${expDate}`)
			 handleSetPropExp(expDate)
			 setShowLoader(false)
			 toHide(false)
           }else{
             console.log("Not Updated")
             errorMsg("Please Try After Some Time")
			 setShowLoader(false)
			 toHide(false)
           }
    }
    }

    
  return (
    <>    
	{showLoader && <Loader /> }
   
      <section className="py-0">
				<div className="container">
					
					<div className="row align-items-center pretio_top">
					
						
						<div className="col-lg-4 col-md-4">
							<div className="pricing_wrap">
								<div className="prt_head">
									<h4>Basic</h4>
								</div>
								<div className="prt_price">
									<h2 style={{fontSize:'3rem'}}><span>$</span>699</h2>
									<span>For 3 Months</span>
								</div>
								<div className="prt_body">
									<ul>
										<li>99.5% Uptime Guarantee</li>
										<li className="none">120GB CDN Bandwidth</li>
										<li className="none">5GB Cloud Storage</li>
										{/* <li className="none">Personal Help Support</li>
										<li className="none">Enterprise SLA</li> */}
									</ul>
								</div>
								<div className="prt_footer">
									<a onClick={()=>{updatePropPremiumExpiry(90,ownerId,propId,propType);setShowLoader(true)}} className="btn choose_package">Start Basic</a>
								</div>
							</div>
						</div>
						
					
						<div className="col-lg-4 col-md-4">
							<div className="pricing_wrap">
								<div className="prt_head">
									<div className="recommended">Best Value</div>
									<h4>Standard</h4>
								</div>
								<div className="prt_price">
									<h2 style={{fontSize:'3rem'}}><span>$</span>999</h2>
									<span>For 6 Months</span>
								</div>
								<div className="prt_body">
									<ul>
										<li>99.5% Uptime Guarantee</li>
										<li>150GB CDN Bandwidth</li>
										<li className="none">10GB Cloud Storage</li>
										{/* <li>Personal Help Support</li>
										<li className="none">Enterprise SLA</li> */}
									</ul>
								</div>
								<div className="prt_footer">
									<a onClick={()=>{updatePropPremiumExpiry(180,ownerId,propId,propType);setShowLoader(true)}} className="btn choose_package active">Start Standard</a>
								</div>
							</div>
						</div>
						
						
						<div className="col-lg-4 col-md-4">
							<div className="pricing_wrap">
								<div className="prt_head">
									<h4>Platinum</h4>
								</div>
								<div className="prt_price">
									<h2 style={{fontSize:'3rem'}}><span>$</span>1999</h2>
									<span>For 9 Months</span>
								</div>
								<div className="prt_body">
									<ul>
										<li>100% Uptime Guarantee</li>
										<li>200GB CDN Bandwidth</li>
										<li>20GB Cloud Storage</li>
										{/* <li>Personal Help Support</li>
										<li>Enterprise SLA</li> */}
									</ul>
								</div>
								<div className="prt_footer">
									<a onClick={()=>{updatePropPremiumExpiry(270,ownerId,propId,propType);setShowLoader(true)}} className="btn choose_package">Start Platinum</a>
								</div>
							</div>
						</div>
						
					</div>
					
				</div>
						
			</section>
    </>
  )
}

export default PricingTable
