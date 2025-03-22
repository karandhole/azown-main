import {React,useContext,useState} from 'react'
import Loader from '../../../loader';
import { errorMsg, successMsg } from '../../../notification';
import { UserContext } from '../../../../context/UserContext';

const ProfilePricing = ({toHide}) => {

    const [showLoader,setShowLoader] = useState(false);
    const {host} = useContext(UserContext);

const updateToPremium = async (expDate)=>{
    setShowLoader(true)
    const formData = new FormData();
    formData.append('primium',true);
    formData.append('primium_expiry_date',expDate);
    const response = await fetch(`${host}/user/update-user`,{
      method:"PUT",
      headers:{
        "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,
      },
      body:formData
    })
    console.log(response)
    if(response.ok){
      const userData = JSON.parse(localStorage.getItem("userDetail"));
      setShowLoader(false)
      userData.user.primium = true;
      userData.user.primium_expiry_date = expDate;
      toHide(false);
      localStorage.setItem("userDetail", JSON.stringify(userData));
    successMsg("Premium Activated")
    }else{
        errorMsg("Try After Some Time");
        setShowLoader(false)
    }
}  

const calculateExpirationDate =  (days) => {
    const today = new Date();
    const nextDate = new Date(today.getTime() + (days * 24 * 60 * 60 * 1000));
    const nextYear = nextDate.getFullYear();
    const nextMonth = nextDate.getMonth();
    const lastDayOfMonth = new Date(nextYear, nextMonth + 1, 0).getDate();
    const expirationDate = new Date(nextYear, nextMonth, Math.min(nextDate.getDate(), lastDayOfMonth));
    updateToPremium(expirationDate)    
  }
    
  return (
    <section className="py-0">
        {showLoader && <Loader />}
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
                        <a onClick={()=>{calculateExpirationDate(90)}} className="btn choose_package">Start Basic</a>
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
                        <a onClick={()=>{calculateExpirationDate(180);}} className="btn choose_package active">Start Standard</a>
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
                        <a onClick={()=>{calculateExpirationDate(270)}} className="btn choose_package">Start Platinum</a>
                    </div>
                </div>
            </div>
            
        </div>
        
    </div>
            
</section>
  )
}

export default ProfilePricing
