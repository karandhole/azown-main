import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { errorMsg } from '../../../notification';
import { PremiumContext } from '../../../../context/PremiumContext';
import Loader from '../../../loader';

const PropertyTemplates = ({id}) => {
  const {isPropPremium} = useContext(PremiumContext);
  const [showLoader,setShowLoader] = useState(false)
const propId = id;

    const data = [
        {
          id: '1',
          img: 'assets/img/vendorTemp1.png' 
        },
        {
          id: '2',
          img: 'assets/img/vendorTemp2.png' 
        },
        {
          id: '3',
          img: 'assets/img/vendorTemp3.png' 
        },
        {
          id: '4',
          img: 'assets/img/vendorTemp4.png' 
        },
      ];
  return (
    <div className='container pt-5'>
      {showLoader && <Loader />}
      <h3 className="pb-2">Your Property Landing Pages </h3>

      <div className='row justify-content-center align-items-center'>
        {data.map((curEle)=>{
            return(
                <div className='col-8 col-sm-3' key={curEle.id}> 
                <div className="card" style={{width: '16rem'}}>
        <img className="card-img-top" style={{ height: "20rem", objectFit: "fill" }} src={curEle.img} alt="Card image cap" />
        <div className="card-body p-2">
          <div className='d-flex'>
         <Link to={`/property-landing-page/${propId}/${curEle.id}`}>  <button className="theme-bg  rounded py-2  px-4 text-white border-0" onClick={()=>setShowLoader(true)} style={{outline:'none',width:'7rem'}}>Edit</button> </Link>
        <Link to={`/property-template-view/${curEle.id}`} >  <button className="theme-bg  rounded py-2  px-4 text-white border-0" onClick={()=>setShowLoader(true)} style={{outline:'none',width:'7rem'}}>Preview</button> </Link>
        </div>
        </div>
      </div>
                </div> 
            )
        })}
                 
      </div>
    </div>
  )
}

export default PropertyTemplates
