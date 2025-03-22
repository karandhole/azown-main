import {React,useState,useContext, useEffect} from 'react'
import { Link } from 'react-router-dom'
import PricingTable from './pricing';
import Modal from 'react-bootstrap/Modal';
import { errorMsg, successMsg } from '../../../notification';
import { PremiumContext } from '../../../../context/PremiumContext';
import propertyContext from '../../../../context/PropertyContext';


const IsPremium = ({propId,expDate,propType,ownerId}) => {
  const {handleSetPropExp,propPremiumExp} = useContext(PremiumContext);
  const {host} = useContext(propertyContext)
  const [copyIconProp, setcopyIconProp] = useState(<i className="fas fa-clipboard border p-2 cursor-pointer" aria-hidden="true"></i>);
  const [view,setView] = useState(false);
  const [priceVeiw,setPriceView] = useState(false)

  function calcExpiry(exp){
    var today = new Date();
    var expDate = new Date(propPremiumExp);
    var timeDiff = expDate.getTime() - today.getTime();
    var daysDiff = timeDiff / (1000 * 3600 * 24);
    return Math.floor(daysDiff)
   }
  function handleCopyProp() {
    if(new Date(propPremiumExp) > new Date()){
    // navigator.clipboard.writeText(`${host}/#/premium-property/${propId}/${propType}`);
    navigator.clipboard.writeText(`https://api.azown.com/#/premium-property/${propId}/${propType}`);

    setcopyIconProp(<i className="fas fa-clone border p-2 cursor-pointer" aria-hidden="true"></i>);
    successMsg("Link Copied")
    setTimeout(() => setcopyIconProp(<i className="fas fa-clipboard border p-2 cursor-pointer" aria-hidden="true"></i>), 2000);
    }
    else{
      errorMsg("Kindly Activate Property Premium")
    }
  }

  useEffect(()=>{
    handleSetPropExp(expDate)
    console.log(expDate)
  },[expDate])

  const handleShowExpiry = () => {
    if(new Date(propPremiumExp) > new Date()){
    setPriceView(true)
      }
      else{
        errorMsg("Kindly Activate Property Premium")
      }
  }
  const closeModal = (x) =>{
    setView(x);
    
    }
    
  
  return (
    <>
{priceVeiw && <Modal show={priceVeiw} >
        <Modal.Header >
          <Modal.Title><h3>Premium Membership Expiration</h3></Modal.Title>
          <i className="fa fa-times cursor-pointer" style={{fontSize:'1.2rem'}} onClick={()=>setPriceView(false)}/>
        </Modal.Header>
        <Modal.Body> <p className='text-dark' style={{fontSize:'1.2rem'}}>Your access to premium benefits ends in <span className='font-weight-bold'>{calcExpiry(propPremiumExp)} days.</span></p> </Modal.Body>
        <Modal.Footer>  
          <button className='theme-bg rounded text-white px-4 py-2' style={{outline:'none'}} onClick={()=>setPriceView(false)}>
            Close
          </button>
        </Modal.Footer>
      </Modal>}

    {view &&   <Modal
      show={true}
	  size='xl'
      onHide={() => setView(false)}
    >
      <Modal.Header >
        <Modal.Title id="example-modal-sizes-title-xl">
          <h3>Choose Your Plan</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>  
                 <PricingTable propId = {propId} ownerId={ownerId} toHide={closeModal} propType={propType} />
                 </Modal.Body>
      <Modal.Footer>
          <button className='theme-bg text-white border-0 px-4 py-2 rounded' style={{outline:'none'}} onClick={()=>setView(false)}>
            Close
          </button>
        </Modal.Footer>

    </Modal> }

    {/* { !isPropPremium ? <div className=" rounded ">

    <p className="mx-2 text-justify text-dark" style={{fontSize:'1.2rem'}}>
      Upgrade to our premium package and get access to unlimited customization
      options. Create a Landing Page that truly reflects your brand and vision <br/><span>
      So if you're ready to take your property to the next level, then it's time to
       upgrade to our premium package. With its powerful features and intuitive design, you'll be
       able to create property landing page and generate a Shareable link that stand out from the competition and generate more leads than ever before.</span>
    </p>
    <button className="theme-bg d-block mx-auto w-75 rounded border-0 my-4 px-4 py-2 text-white" style={{outline:'none'}} onClick={()=>setView(true)}>Switch To Premium</button>
    </div>:  */}
    <div>
    <h3 className="pb-2">Manage Your Premium</h3>
    
      <table className='table mt-4 border'>
    <tbody>
      <tr>
        <td className='py-3'><p style={{color:'#2d3954',fontSize:'1.1rem'}} className='m-0 '>Edit Property Landing Page</p></td>
        <td className='px-0'><Link to={`/property-edit-page/${propId}`}><i className='fas fa-share border p-2 cursor-pointer'/></Link></td>
      </tr>
      <tr >
        <td className='py-3'><p style={{color:'#2d3954',fontSize:'1.1rem'}} className='m-0 '>Preview Your Landing Page</p></td>
        <td className='px-0'> <Link to={`/property-active-page/${propId}`}> <i className='fas fa-share border p-2 cursor-pointer' /></Link></td>
      </tr>
      <tr>
        <td className='py-3'><p style={{color:'#2d3954',fontSize:'1.1rem'}} className='m-0 '>View Your Premium Expiry</p></td>
        <td className='px-0' onClick={()=>handleShowExpiry()} style={{color:'#30384e'}}><i className='fas fa-share border p-2 cursor-pointer'/></td>
      </tr>
      <tr >
        <td className='py-3'><p style={{color:'#2d3954',fontSize:'1.1rem'}} className='m-0 '>Copy Shareable Link</p></td>
        <td className='px-0' onClick={handleCopyProp} style={{color:'#30384e'}}>{copyIconProp}</td>
      </tr>
    </tbody>
      </table>
      </div>
      {new Date(propPremiumExp) > new Date() ? null : <button className="theme-bg d-block mx-auto w-75 rounded border-0 my-4 px-4 py-2 text-white" style={{outline:'none'}} onClick={()=>setView(true)}>Switch To Premium</button>}
      </>

  )
}

export default IsPremium
