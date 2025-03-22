import {React,useEffect,useState} from 'react'

const CrentFilter = ({handleFilter}) => {

  const [filterVal,setFilterVal] = useState({
    pType:[],
    bType:[],
    price:2500,
    area:100,
    furnish:[],
    park:[]
  });
  const handlePriceAndArea = (e) => {
    setFilterVal({...filterVal ,[e.target.name]:e.target.value})
 }
const handlePtype = (e) =>{
  const isSelected = e.target.checked;
  const value = e.target.value;
  if(isSelected){
   setFilterVal({...filterVal , pType:[...filterVal.pType,value]})
  }
  else{
   setFilterVal({...filterVal, pType: filterVal.pType.filter(val => val !== value)});
  }
}
const handleBtype = (e) =>{
  const isSelected = e.target.checked;
  const value = e.target.value;
  if(isSelected){
   setFilterVal({...filterVal , bType:[...filterVal.bType,value]})
  }
  else{
   setFilterVal({...filterVal, bType: filterVal.bType.filter(val => val !== value)});
  }
}
const handleFurnish = (e) =>{
  const isSelected = e.target.checked;
  const value = e.target.value;
  if(isSelected){
   setFilterVal({...filterVal , furnish:[...filterVal.furnish,value]})
  }
  else{
   setFilterVal({...filterVal, furnish: filterVal.furnish.filter(val => val !== value)});
  }
}
const handlePark = (e) =>{
  const isSelected = e.target.checked;
  const value = e.target.value;
  if(isSelected){
   setFilterVal({...filterVal , park:[...filterVal.park,value]})
  }
  else{
   setFilterVal({...filterVal, park: filterVal.park.filter(val => val !== value)});
  }
}

useEffect(()=>{
  handleFilter(filterVal);
  },[filterVal]);
  
const myFun = () =>{
  console.log(filterVal);
}
const [isCollapsed, setIsCollapsed] = useState(true);

const handleToggleCollapse = () => {
  setIsCollapsed(!isCollapsed);
};
  return (
    <div className="col-lg-4 col-md-12 col-sm-12">
    <div className="page-sidebar p-0">
      {/* <a className="filter_links" data-toggle="collapse"  role="button" aria-expanded="false" aria-controls="fltbox">Open Advance Filter<i className="fa fa-sliders-h ml-2" /></a>							 */}
      <a className="filter_links" onClick={handleToggleCollapse}>
      {isCollapsed ? 'Open Advance Filter' : 'Close Advance Filter'}
                <i className={`fa fa-sliders-h ml-2 ${isCollapsed ? 'fa-rotate-180' : ''}`}></i>
            </a>
      {/* <div className="collapse" id="fltbox"> */}
      <div className={`collapse ${!isCollapsed ? 'show' : ''}`} id="fltbox">
        {/* Find New Property */}
        <div className="sidebar-widgets p-4">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 pt-4">
              <h6>Property Type</h6>
              <ul className="row p-0 m-0">
                <li className="col-l6 col-md-6 p-0">
                  <input id="a-1" className="checkbox-custom" name="Office Space" checked={filterVal.pType.includes("Office Space")} onChange={handlePtype} value="Office Space" type="checkbox" />
                  <label htmlFor="a-1" className="checkbox-custom-label">Office Space</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-2" className="checkbox-custom" name="Co-Working" checked={filterVal.pType.includes("Co-Working")} onChange={handlePtype} value="Co-Working" type="checkbox" />
                  <label htmlFor="a-2" className="checkbox-custom-label">Co-Working</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-3" className="checkbox-custom" name="Shop" checked={filterVal.pType.includes("Shop")} onChange={handlePtype} value="Shop" type="checkbox" />
                  <label htmlFor="a-3" className="checkbox-custom-label">Shop</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-4" className="checkbox-custom" name="Showroom" checked={filterVal.pType.includes("Showroom")} onChange={handlePtype} value="Showroom" type="checkbox" />
                  <label htmlFor="a-4" className="checkbox-custom-label">Showroom</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-5" className="checkbox-custom" name="Warehouse" checked={filterVal.pType.includes("Warehouse")} onChange={handlePtype} value="Warehouse" type="checkbox" />
                  <label htmlFor="a-5" className="checkbox-custom-label">Warehouse</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-6" className="checkbox-custom" name="Industrial Shed" checked={filterVal.pType.includes("Industrial Shed")} onChange={handlePtype} value="Industrial Shed" type="checkbox" />
                  <label htmlFor="a-6" className="checkbox-custom-label">Industrial Shed</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-7" className="checkbox-custom" name="Industrial Building" checked={filterVal.pType.includes("Industrial Building")} onChange={handlePtype} value="Industrial Building" type="checkbox" />
                  <label htmlFor="a-7" className="checkbox-custom-label">Industrial Building</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-8" className="checkbox-custom" name="Restaurant" checked={filterVal.pType.includes("Restaurant")} onChange={handlePtype} value="Restaurant" type="checkbox" />
                  <label htmlFor="a-8" className="checkbox-custom-label">Restaurant</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-9" className="checkbox-custom" name="Cafe" checked={filterVal.pType.includes("Cafe")} onChange={handlePtype} value="Cafe" type="checkbox" />
                  <label htmlFor="a-9" className="checkbox-custom-label">Cafe</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-10" className="checkbox-custom" name="Other Business" checked={filterVal.pType.includes("Other Business")} onChange={handlePtype} value="Other Business" type="checkbox" />
                  <label htmlFor="a-10" className="checkbox-custom-label">Other Business</label>
                </li>
                <li className="col-lg-12 col-md-12 p-0">
                  <input id="a-11" className="checkbox-custom" name="Gated Community Villa" checked={filterVal.pType.includes("Gated Community Villa")} onChange={handlePtype} value="Gated Community Villa" type="checkbox" />
                  <label htmlFor="a-11" className="checkbox-custom-label">Gated Community Villa</label>
                </li>
             
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 pt-4">
              <h6>Building Type</h6>
              <ul className="row p-0 m-0">
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-13" className="checkbox-custom" name="Business Park" checked={filterVal.bType.includes("Business Park")} onChange={handleBtype} value="Business Park" type="checkbox" />
                  <label htmlFor="a-13" className="checkbox-custom-label">Business Park</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-14" className="checkbox-custom" name="Mall" checked={filterVal.bType.includes("Mall")} onChange={handleBtype} value="Mall" type="checkbox" />
                  <label htmlFor="a-14" className="checkbox-custom-label">Mall</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-15" className="checkbox-custom" name="Independent House" checked={filterVal.bType.includes("Independent House")} onChange={handleBtype} value="Independent House" type="checkbox" />
                  <label htmlFor="a-15" className="checkbox-custom-label">Independent House</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-16" className="checkbox-custom" name="Standalone Building" checked={filterVal.bType.includes("Standalone Building")} onChange={handleBtype} value="Standalone Building" type="checkbox" />
                  <label htmlFor="a-16" className="checkbox-custom-label">Standalone Building</label>
                </li>	
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-17" className="checkbox-custom" name="Independent Shop" checked={filterVal.bType.includes("Independent Shop")} onChange={handleBtype} value="Independent Shop" type="checkbox" />
                  <label htmlFor="a-17" className="checkbox-custom-label">Independent Shop</label>
                </li>													
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 pt-4 pb-4">
              <h6>Choose Price</h6>
              <div className="rg-slider">
              <input type="range" className="w-100" min="1000" max="50000" defaultValue={filterVal.price} onChange={handlePriceAndArea} name="price"  />
                <span className='d-block text-bold'>₹ {filterVal.price}</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 pt-4 pb-4">
              <h6>Built Up Area(sq. ft.): 0 sq. ft. to 1,00,000 sq. ft.</h6>
              <div className="rg-slider">
              <input type="range" className="w-100" min='0' max='100000' name="area" defaultValue={filterVal.area} onChange={handlePriceAndArea}  />
                <span className='d-block text-bold'>{filterVal.area} Sq. Ft</span>
              </div>
            </div>
          </div>		
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 pt-4">
              <h6>Furnishing</h6>
              <ul className="row p-0 m-0">
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-21" className="checkbox-custom" name="Furnished" checked={filterVal.furnish.includes("Furnished")} onChange={handleFurnish} value="Furnished" type="checkbox" />
                  <label htmlFor="a-21" className="checkbox-custom-label">Furnished</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-22" className="checkbox-custom" name="Unfurnished" checked={filterVal.furnish.includes("Unfurnished")} onChange={handleFurnish} value="Unfurnished" type="checkbox" />
                  <label htmlFor="a-22" className="checkbox-custom-label">Unfurnished</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-23" className="checkbox-custom" name="Semi Furnished" checked={filterVal.furnish.includes("Semi Furnished")} onChange={handleFurnish} value="Semi Furnished" type="checkbox" />
                  <label htmlFor="a-23" className="checkbox-custom-label">Semi Furnished</label>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 pt-4">
              <h6>Parking</h6>
              <ul className="row p-0 m-0">
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-30" className="checkbox-custom" name="Car" checked={filterVal.park.includes("Car")} onChange={handlePark} value="Car" type="checkbox" />
                  <label htmlFor="a-30" className="checkbox-custom-label">Car</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-31" className="checkbox-custom" name="Bike" checked={filterVal.park.includes("Bike")} onChange={handlePark} value="Bike" type="checkbox" />
                  <label htmlFor="a-31" className="checkbox-custom-label">Bike</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-32" className="checkbox-custom" name="None" checked={filterVal.park.includes("None")} onChange={handlePark} value="None" type="checkbox" />
                  <label htmlFor="a-32" className="checkbox-custom-label">None</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-33" className="checkbox-custom" name="Both" checked={filterVal.park.includes("Both")} onChange={handlePark} value="Both" type="checkbox" />
                  <label htmlFor="a-33" className="checkbox-custom-label">Both</label>
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

export default CrentFilter