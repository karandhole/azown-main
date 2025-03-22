import React, { useContext, useEffect, useState } from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
import propertyContext from '../../../context/PropertyContext'
import Alert from '../../Alert'
import Navbar from '../../Header/Navbar'
import Crent from './Crent'
import CrentFilter from './CrentFilter'
import Footer from '../../Footer/Footer'
import Loader from '../../loader'

const CrentList = () => {
  let history = useNavigate();
  const mylocation = useLocation()
  const context = useContext(propertyContext);
  const { host } = context;
  const [showLoader,setLoader] = useState(false)
  const [CmrData, setData] = useState([]);
  const [rr, setrr] = useState([])
  const [showAlert, setShowAlert] = useState(false);
  

  console.log(mylocation.state)

  const handleAlert = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };
  useEffect(() => {
    async function listrrprop() {
      setLoader(true)
      const responce = await fetch(`${host}/property/getcmr`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // "auth-token": localStorage.getItem("token"),
        },
      });
      const resdata = await responce.json();
     if(localStorage.getItem("userDetail")){
        const userId = JSON.parse(localStorage.getItem('userDetail')).user._id;
        const newData = resdata.filter((curEle)=>{
          return curEle.userid !== userId
        })
        setData(newData);
      setrr(newData)
      setLoader(false)
      }else{
        setData(resdata);
      setrr(resdata)
      setLoader(false)
      }
    }
    listrrprop()
  }, []);

  function handleFilter(value) {
    console.log(value)
    if (value.pType.length === 0 && value.bType.length === 0 && value.park.length === 0 && value.furnish.length === 0 && value.price === 2500 && value.area === 100) {
      setData(rr)
    }  else{

      const filterData = rr.filter((property)=>{
         if(value.price !== 2500 && value.pType.length === 0 && value.bType.length === 0 && value.area === 100 && value.park.length === 0 ){

          return(parseInt(property.cr_rental_detail_rent) < value.price)
       }
       else if(value.area !== 100 && value.pType.length === 0 && value.bType.length === 0 && value.price === 2500 && value.park.length === 0 ){

           return( parseInt(property.cr_detail_builtup_area) < value.area)
       }
       else if(value.area !== 100 && value.bType.length === 0 && value.pType.length === 0 && value.furnish.length === 0  && value.price !== 2500){
        
         return(parseInt(property.cr_detail_builtup_area)  < value.area && parseInt(property.cr_rental_detail_rent) < value.price)
       }
        else{

              return (value.pType.includes(property.cr_detail_property_type) ||value.bType.includes(property.cr_detail_building_type) || value.furnish.includes(property.cr_detail_furnishing) ||  parseInt(property.cr_detail_builtup_area)  < value.area || parseInt(property.cr_rental_detail_rent) < value.price )
        }
            })
        setData(filterData)

      console.log(filterData)
    }
  }
  return (
    <div id="main-wrapper">
      <Navbar />
      {showAlert && <Alert msg="Please Login Before!!" />}
      {showLoader && <Loader />}
      <div className="clearfix" />

      <section className="gray pt-4">
  
        <div className="container">
          <div className="row m-0">
            <div className="short_wraping mb-2">
              <div className="row align-items-center">
                <div className="col-lg-3 col-md-6 col-sm-12  col-sm-6">
                  <ul className="shorting_grid">
       
                    <li className="list-inline-item"><a><span className="ti-map-lt" />Commercial Rent </a></li>
                  </ul>
                </div>
                <div className="col-lg-9 col-md-12 col-sm-12 order-lg-2 order-md-3 elco_bor col-sm-12">
                  <div className="shorting_pagination">
                    <div className="shorting_pagination_laft">
                  
                    </div>
                    <div className="shorting_pagination_right">
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
          <div className="row">
      <CrentFilter handleFilter={handleFilter} />
      <div
        className="col-lg-8 col-md-12 col-sm-12"
      >
        {
          CmrData.map((property) => {
            return <Crent property={property} key={property._id} onAlert={handleAlert} />;
          })
        }
       
      </div>
    
    </div>
          <div className="row align-items-center">
                <div className="col-lg-3 col-md-6 col-sm-12  col-sm-6">
                  <ul className="shorting_grid">
                    {/* <li className="list-inline-item"><a className="active"><span className="ti-layout-grid2" />Grid</a></li>
                <li className="list-inline-item"><a ><span className="ti-view-list" />List</a></li> */}
                  </ul>
                </div>
                <div className="col-lg-9 col-md-12 col-sm-12 order-lg-2 order-md-3 elco_bor col-sm-12">
                  <div className="shorting_pagination">
                    <div className="shorting_pagination_laft">
                    </div>
                    <div className="shorting_pagination_right">
                      
                    {/* <ul style={{cursor:"pointer"}} > 
                      {Array(Math.ceil(CmrData.length / itemsPerPage)).fill().map((_, i) => (
                        <li key={i}>
                          <a className={currentPage === i + 1 ? 'active' : ''} onClick={() => handlePageChange(i + 1)}>
                            {i + 1} 
                          </a>
                        </li>
                      ))}
                    </ul>  */}
                    </div>
                  </div>
                </div>
              </div>
          
        </div>
      </section>
<Footer />

    </div>

  )
}

export default CrentList