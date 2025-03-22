import {React,useState,useEffect} from 'react'

const PlotFilter = ({handleFilter}) => {
  const [filterVal,setFilterVal] = useState({
    price:10000,
    area:100,
    ownerShip:[],
    amenities:[],
  })

  const handlePriceAndArea = (e) => {
     setFilterVal({...filterVal ,[e.target.name]:e.target.value})
  }
const handleOwnerShip = (e) =>{
   const isSelected = e.target.checked;
   const value = e.target.value;
   if(isSelected){
    setFilterVal({...filterVal , ownerShip:[...filterVal.ownerShip,value]})
   }
   else{
    setFilterVal({...filterVal, ownerShip: filterVal.ownerShip.filter(val => val !== value)});
   }
}
const handleAmenities = (e) =>{
  const isChecked = e.target.checked;
  const value = e.target.value;
  if(isChecked){
  setFilterVal({...filterVal,amenities:[...filterVal.amenities,value]});
  }
  else{
    setFilterVal({...filterVal,amenities:filterVal.amenities.filter(val => val !== value)});
  }
}
useEffect(()=>{
  handleFilter(filterVal);
},[filterVal])
  const myFun = () => {
    handleFilter(filterVal);
  }
  const [isCollapsed, setIsCollapsed] = useState(true);

const handleToggleCollapse = () => {
  setIsCollapsed(!isCollapsed);
};
  return (
    <div className="col-lg-4 col-md-12 col-sm-12">
    <div className="page-sidebar p-0">
      {/* <a className="filter_links" data-toggle="collapse" href="#fltbox" role="button" aria-expanded="false" aria-controls="fltbox">Open Advance Filter<i className="fa fa-sliders-h ml-2" /></a>							 */}
      <a className="filter_links" onClick={handleToggleCollapse}>
              {isCollapsed ? 'Open Advance Filter' : 'Close Advance Filter'}
                <i className={`fa fa-sliders-h ml-2 ${isCollapsed ? 'fa-rotate-180' : ''}`}></i>
            </a>
      {/* <div className="collapse" id="fltbox"> */}
      <div className={`collapse ${!isCollapsed ? 'show' : ''}`} id="fltbox">
        {/* Find New Property */}
        <div className="sidebar-widgets p-4">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 pt-4 pb-4">
              <h6>Price Range: ₹ 0 to ₹ 10 Crores</h6>
              <div className="rg-slider">
              <input type="range" className="w-100" min="1000" max="50000" defaultValue={filterVal.price} onChange={handlePriceAndArea} name="price"  />
                <span className='d-block text-bold'>₹ {filterVal.price}</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 pt-4 pb-4">
              <h6>Plot Area (sq. ft.): 0 to 1,00,000 sq.ft.</h6>
              <div className="rg-slider">
                <input type="range" className="w-100" min='0' max='100000' name="area" defaultValue={filterVal.area} onChange={handlePriceAndArea}  />
                <span className='d-block text-bold'>{filterVal.area} Sq. Ft</span>
              </div>
            </div>
          </div>		
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 pt-4">
              <h6>Onwnership</h6>
              <ul className="row p-0 m-0">
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-21" className="checkbox-custom" name="Freehold" checked={filterVal.ownerShip.includes("Freehold")} onChange={handleOwnerShip} value="Freehold" type="checkbox" />
                  <label htmlFor="a-21" className="checkbox-custom-label">Freehold</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-22" className="checkbox-custom" name="Leasehold" checked={filterVal.ownerShip.includes("Leasehold")} onChange={handleOwnerShip} value="Leasehold" type="checkbox" />
                  <label htmlFor="a-22" className="checkbox-custom-label">Leasehold</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-23" className="checkbox-custom" name="Co-Operative Society" checked={filterVal.ownerShip.includes("Co-Operative Society")} onChange={handleOwnerShip} value="Co-Operative Society" type="checkbox" />
                  <label htmlFor="a-23" className="checkbox-custom-label">Co-Operative Society</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-24" className="checkbox-custom" name="Power of Attorney" checked={filterVal.ownerShip.includes("Power of Attorney")} onChange={handleOwnerShip} value="Power of Attorney" type="checkbox" />
                  <label htmlFor="a-24" className="checkbox-custom-label">Power of Attorney</label>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 pt-4">
              <h6>Amenities</h6>
              <ul className="row p-0 m-0">
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-25" className="checkbox-custom" name="Water" checked={filterVal.amenities.includes("Water")} onChange={handleAmenities} value="Water" type="checkbox" />
                  <label htmlFor="a-25" className="checkbox-custom-label">Water</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-26" className="checkbox-custom" name="Sewage Connection" checked={filterVal.amenities.includes("Sewage Connection")} onChange={handleAmenities} value="Sewage Connection" type="checkbox" />
                  <label htmlFor="a-26" className="checkbox-custom-label">Sewage Connection</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-27" className="checkbox-custom" name="Gated Security" checked={filterVal.amenities.includes("Gated Security")} onChange={handleAmenities} value="Gated Security" type="checkbox" />
                  <label htmlFor="a-27" className="checkbox-custom-label">Gated Security</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-28" className="checkbox-custom" name="Electricity Connection" checked={filterVal.amenities.includes("Electricity Connection")} onChange={handleAmenities} value="Electricity Connection" type="checkbox" />
                  <label htmlFor="a-28" className="checkbox-custom-label">Electricity Connection</label>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 pt-4">
              <button className="btn theme-bg rounded full-width" onClick={()=>myFun()}>Find New Home</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Sidebar End */}						
  </div>
  )
}

export default PlotFilter