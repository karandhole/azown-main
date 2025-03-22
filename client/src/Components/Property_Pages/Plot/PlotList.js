import React, { useContext, useEffect, useState } from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
import propertyContext from '../../../context/PropertyContext'
import Alert from '../../Alert'
import Navbar from '../../Header/Navbar'
import Plot from './Plot'
import PlotFilter from './PlotFilter'
import Footer from '../../Footer/Footer'
import Loader from '../../loader'

const PlotList = () => {
  let history = useNavigate();
  const mylocation = useLocation()
  const context = useContext(propertyContext);
  const { host } = context;

  const [PlotData, setData] = useState([]);
  const [rr,setrr] = useState([])
  const [showAlert, setShowAlert] = useState(false);
  const [showLoader , setShowLoader] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // const getCurrentPageData = () => {
  //   const startIndex = (currentPage - 1) * itemsPerPage;
  //   const endIndex = startIndex + itemsPerPage;
  //   const paginatedData = PlotData.slice(startIndex, endIndex);
  //   return {
  //     data: paginatedData,
  //     startIndex,
  //     endIndex
  //   };
  // };
  // const { data, startIndex, endIndex } = getCurrentPageData();
  
  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
  };

  const handleAlert = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };
  useEffect(  () => {
    setShowLoader(true)
    async function listrrprop(){
      const responce =await  fetch(`${host}/property/getplot`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // "auth-token": localStorage.getItem("token"),
        },
      });
      const resdata =await  responce.json();
      
      if(localStorage.getItem("userDetail")){
      const userId = JSON.parse(localStorage.getItem('userDetail')).user._id;
      const newData = resdata.filter((curEle)=>{
        return curEle.userid !== userId
      })
    
      setData(newData);
      setrr(newData)
      setShowLoader(false)
    }
    else{
      setData(resdata);
      setrr(resdata)
      setShowLoader(false)
    }
    } 
    listrrprop()
  }, []);
 

  function handleFilter(value){
    console.log(value)
    if (value.ownerShip.length === 0 && value.amenities.length === 0 && value.price === 10000 && value.area === 100){
      setData(rr)
    }
    else{

      const filterData = rr.filter((property)=>{
         if(value.price !== 10000 && value.ownerShip.length === 0 && value.area === 100 ){
          console.log("Only Price Change")
          return(parseInt(property.ps_sale_detail_price) < value.price)
       }
       else if(value.area !== 100 && value.ownerShip.length === 0 && value.price === 10000){
        console.log("Only Area Change")
           return(parseInt(property.ps_detail_plot_length) * parseInt(property.ps_detail_plot_width) < value.area)
       }
       else if(value.area !== 100 && value.ownerShip.length === 0 && value.price !== 10000){
        console.log("Area and Price Change")
         return(parseInt(property.ps_detail_plot_length) * parseInt(property.ps_detail_plot_width) < value.area && parseInt(property.ps_sale_detail_price) < value.price)
       }
        else{
          console.log("All filter working")
              return (value.ownerShip.includes(property.ps_info_ownership) || parseInt(property.ps_detail_plot_length) * parseInt(property.ps_detail_plot_width) < value.area   || parseInt(property.ps_sale_detail_price) < value.price )
        }
            })
        setData(filterData)

      console.log(filterData)
    }
  }
  return (
   <div id="main-wrapper">
 <Navbar/>
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
                    {/* <li className="list-inline-item"><a  className="active"><span className="ti-layout-grid2" />Grid</a></li>
                <li className="list-inline-item"><a ><span className="ti-view-list" />List</a></li> */}
                    <li className="list-inline-item"><a ><span className="ti-map-lt" />Residential Resale</a></li>
                  </ul>
                </div>
                <div className="col-lg-9 col-md-12 col-sm-12 order-lg-2 order-md-3 elco_bor col-sm-12">
                  <div className="shorting_pagination">
                    <div className="shorting_pagination_laft">
                    {/* <h5>Showing {startIndex+1}-{endIndex > PlotData.length ? PlotData.length : endIndex} of {PlotData.length} results</h5> */}
                    </div>
                    <div className="shorting_pagination_right">
                    {/* <ul style={{cursor:"pointer"}}>
                      {Array(Math.ceil(PlotData.length / itemsPerPage)).fill().map((_, i) => (
                        <li key={i}>
                          <a className={currentPage === i + 1 ? 'active' : ''} onClick={() => handlePageChange(i + 1)}>
                            {i + 1}
                          </a>
                        </li>
                      ))}
                    </ul> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      {/* <div className="row">
      {mylocation.state?.area && (<p className='short_wraping mb-2'>{mylocation.state?.area}</p>) } 

      <PlotFilter handleFilter={handleFilter} />
      <div className="col-lg-8 col-md-12 col-sm-12" style={{height:'60rem',overflowY:'auto', WebkitOverflowScrolling: 'touch', '-ms-overflow-style': 'none', scrollbarWidth: 'none'}}>{
            PlotData.map((property) => {
              return (
                <Plot property={property} key={property._id} onAlert={handleAlert} />
              )
            })
            }</div>
      
      </div> */}
      <div className="row">
      <PlotFilter handleFilter={handleFilter} />
      <div
        className="col-lg-8 col-md-12 col-sm-12"
        >
        {
          PlotData.map((property) => {
            return <Plot property={property} key={property._id} onAlert={handleAlert} />;
          })
        }
      
      </div>
    </div>
      <div className="row align-items-center">
                <div className="col-lg-3 col-md-6 col-sm-12  col-sm-6">
                  <ul className="shorting_grid">
                  </ul>
                </div>
                <div className="col-lg-9 col-md-12 col-sm-12 order-lg-2 order-md-3 elco_bor col-sm-12">
                  <div className="shorting_pagination">
                    <div className="shorting_pagination_laft">
                    </div>
                    <div className="shorting_pagination_right">
                    {/* <ul style={{cursor:"pointer"}}>
                      {Array(Math.ceil(PlotData.length / itemsPerPage)).fill().map((_, i) => (
                        <li key={i}>
                          <a className={currentPage === i + 1 ? 'active' : ''} onClick={() => handlePageChange(i + 1)}>
                            {i + 1}
                          </a>
                        </li>
                      ))}
                    </ul> */}
                    </div>
                  </div>
                </div>
              </div>
    </div>	
  </section>
 <Footer/>
</div>

  )
}

export default PlotList