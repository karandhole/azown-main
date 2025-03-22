import { React, useState} from "react";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { errorMsg, successMsg } from "../../../notification";
import { Modal } from "react-bootstrap";
import ProfilePricing from "./ProfilePricing";

const Templates = ({ data }) => {
  const [copyIconProp, setcopyIconProp] = useState(<i className="fas fa-clipboard border p-2 cursor-pointer" aria-hidden="true"></i>);
  const [view,setView] = useState(false)
  const userd=JSON.parse(localStorage.getItem("userDetail")).user._id;
  const userid=userd;
  const user = JSON.parse(localStorage.getItem("userDetail")).user;
  const [priceVeiw,setPriceView] = useState(false)

  function calcExpiry(exp){
    var today = new Date();
    var expDate = new Date(exp);
    var timeDiff = expDate.getTime() - today.getTime();
    var daysDiff = timeDiff / (1000 * 3600 * 24);
    return Math.floor(daysDiff)
   }

  function handleCopyProp() {
    if(new Date(user.primium_expiry_date) > new Date())
    {
            navigator.clipboard.writeText(`https://api.azown.com/#/premium-profile/${userid}`);
      // navigator.clipboard.writeText(`http://localhost:3000/#/premium-profile/${userid}`);
      setcopyIconProp(<i className="fas fa-clone border p-2 cursor-pointer" aria-hidden="true"></i>);
      successMsg("Link Copied")
      setTimeout(() => setcopyIconProp(<i className="fas fa-clipboard border p-2 cursor-pointer" aria-hidden="true"></i>), 2000);
    }else{
      errorMsg("Kindly Active Your Premium")
  
    }
  }

  function viewPremiuimExpiry() {
    if(new Date(user.primium_expiry_date) > new Date())
    {
      setPriceView(true)
    }else{
      errorMsg("Kindly Active Your Premium")
  
    }
  }

  const closeModal = (x) => {
setView(false)
  }

  return (
    <div className="col-lg-9 col-md-8 col-sm-12">
     {  (new Date(user.primium_expiry_date) < new Date()) ? <div className="py-4 bg-white rounded mb-4">

      <h4 className=" text-justify px-4">
        Upgrade to our premium package and get access to unlimited customization
        options. 
      So if you're ready to take your profile to the next level, then it's time to
       upgrade to our premium package. With its powerful features and intuitive design, you'll be
       able to create your landing page and generate a Shareable link that stand out from the competition and generate more leads than ever before.
      </h4>
      <Button className="theme-bg mx-auto mt-3 d-block mx-auto rounded border-0" onClick={()=>setView(true)}>Activate Premium</Button>
      </div>:null}
      <div className="col-12 col-md-6 mb-3">
<h3 className="py-2">Manage Your Premium</h3>

  <table className='table bg-white rounded border'>
<tbody>
  <tr>
    <td className='py-3'><p style={{color:'#2d3954',fontSize:'1.1rem'}} className='m-0 '>Preview Premium Landing Page</p></td>
    <td className='px-0' > <Link to={`/preview-active-template/${userid}`}> <i className='fas fa-share border p-2'/></Link></td>
  </tr>
  <tr >
    <td className='py-3'><p style={{color:'#2d3954',fontSize:'1.1rem'}} className='m-0 '>Edit Premium Landing Page</p></td>
    <td className='px-0'> <Link to={`/preview-edited-template/${userid}`}> <i className='fas fa-share border p-2'/></Link> </td>
  </tr>
  <tr>
    <td className='py-3'><p style={{color:'#2d3954',fontSize:'1.1rem'}} className='m-0 '>View Premium Expiry</p></td>
    <td className='px-0 cursor-pointer' style={{color:'#30384e'}} onClick={viewPremiuimExpiry}><i className='fas fa-share border p-2'/></td>
  </tr>
  <tr >
    <td className='py-3'><p style={{color:'#2d3954',fontSize:'1.1rem'}} className='m-0 '>Copy Shareable Link</p></td>
    <td className='px-0' onClick={handleCopyProp} style={{color:'#30384e'}}>{copyIconProp}</td>
  </tr>
</tbody>
  </table>
  </div>
      <div>

      <h3 className="py-2">Your Landing Pages </h3>
        <div className="mx-auto">
          <Row className=" justify-content-center align-items-center">
            {data.map((curEle) => {
              return (
                <Col xs={8} md={3}  key={curEle.id}>
                  <Card style={{ width: "15rem" }}>
                    <Card.Img
                      variant="top"
                      className="p-2"
                      style={{ height: "20rem", objectFit: "fill" }}
                      src={curEle.img}
                    />
                    <Card.Body className="p-1">
                      {/* <Card.Title>Template 1</Card.Title> */}
                      <div className="d-flex justify-content-between   py-2 w-100">
                        <Link to={`/edit-template/${curEle.id}`}>
                          <Button
                            style={{ width: "6.5rem", border: "none" }}
                            className="theme-bg p-1 mx-1 rounded"
                                                      >
                            {" "}
                            Edit
                          </Button>
                        </Link>
                        <Link to={`/preview-template/${curEle.id}`}>
                          <Button
                            className="theme-bg p-1  rounded"
                            style={{ width: "6.5rem", border: "none" }}
                            
                          >
                            View
                            <i className="fa fa-eye ml-2" />
                          </Button>
                        </Link>
                      </div>
                    </Card.Body>
                  </Card>{" "}
                </Col>
              );
            })}
          </Row>
        </div>
        <div className="d-flex justify-content-center align-items-center">
        <Link to={`/preview-edited-template/${userid}`}>
          <button
            className="btn theme-bg rounded my-1"
            type="button"
          >
            View & Edit Your Active Landing Page
          </button>
        </Link>
        </div>
      </div>
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
               <ProfilePricing toHide={closeModal}/>
                 </Modal.Body>
      <Modal.Footer>
          <button className='theme-bg text-white border-0 px-4 py-2 rounded' style={{outline:'none'}} onClick={()=>setView(false)}>
            Close
          </button>
        </Modal.Footer>

    </Modal> }
    {priceVeiw && <Modal show={priceVeiw} >
        <Modal.Header >
          <Modal.Title><h3>Premium Membership Expiration</h3></Modal.Title>
          <i className="fa fa-times cursor-pointer" style={{fontSize:'1.2rem'}} onClick={()=>setPriceView(false)}/>
        </Modal.Header>
        <Modal.Body> <p className='text-dark' style={{fontSize:'1.2rem'}}>Your access to premium benefits ends in <span className='font-weight-bold'>{calcExpiry(new Date(user.primium_expiry_date))} days.</span></p> </Modal.Body>
        <Modal.Footer>  
          <button className='theme-bg rounded text-white px-4 py-2' style={{outline:'none'}} onClick={()=>setPriceView(false)}>
            Close
          </button>
        </Modal.Footer>
      </Modal>}
    </div>
  );
};

export default Templates;
