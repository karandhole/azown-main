import {React,useEffect,useState} from 'react'

const CsaleFilter = ({handleFilter}) => {
  
    const [filterVal,setFilterVal] = useState({
      pType:[],
      bType:[],
      price:2500,
      area:100,
      furnish:[],
    })
  
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
const handlePriceAndArea = (e) => {
  setFilterVal({...filterVal ,[e.target.name]:e.target.value})
}

useEffect(()=>{
handleFilter(filterVal);
},[filterVal]);
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
                        <input id="a-12" className="checkbox-custom" name="Business Park" checked={filterVal.bType.includes("Business Park")} onChange={handleBtype} value="Business Park" type="checkbox" />
                        <label htmlFor="a-12" className="checkbox-custom-label">Business Park</label>
                      </li>
                      <li className="col-lg-6 col-md-6 p-0">
                        <input id="a-13" className="checkbox-custom" name="Mall" checked={filterVal.bType.includes("Mall")} onChange={handleBtype} value="Mall" type="checkbox" />
                        <label htmlFor="a-13" className="checkbox-custom-label">Mall</label>
                      </li>
                      <li className="col-lg-6 col-md-6 p-0">
                        <input id="a-14" className="checkbox-custom" name="Independent House" checked={filterVal.bType.includes("Independent House")} onChange={handleBtype} value="Independent House" type="checkbox" />
                        <label htmlFor="a-14" className="checkbox-custom-label">Independent House</label>
                      </li>
                      <li className="col-lg-6 col-md-6 p-0">
                        <input id="a-15" className="checkbox-custom" name="Standalone Building" checked={filterVal.bType.includes("Standalone Building")} onChange={handleBtype} value="Standalone Building" type="checkbox" />
                        <label htmlFor="a-15" className="checkbox-custom-label">Standalone Building</label>
                      </li>	
                      <li className="col-lg-6 col-md-6 p-0">
                        <input id="a-16" className="checkbox-custom" name="Independent Shop" checked={filterVal.bType.includes("Independent Shop")} onChange={handleBtype} value="Independent Shop" type="checkbox" />
                        <label htmlFor="a-16" className="checkbox-custom-label">Independent Shop</label>
                      </li>													
                    </ul>
                  </div>
                </div>
                {/*  <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 pt-4">
          <h6>Floor</h6>
          <ul class="row p-0 m-0">
            <li class="col-lg-6 col-md-6 p-0">
              <input id="a-9" class="checkbox-custom" name="0-10 Floor" type="checkbox">
              <label for="a-9" class="checkbox-custom-label">0-10 Floor</label>
            </li>
            <li class="col-lg-6 col-md-6 p-0">
              <input id="a-10" class="checkbox-custom" name="10-20 Floor" type="checkbox">
              <label for="a-10" class="checkbox-custom-label">10-20 Floor</label>
            </li>
            <li class="col-lg-6 col-md-6 p-0">
              <input id="a-11" class="checkbox-custom" name="20-30 Floor" type="checkbox">
              <label for="a-11" class="checkbox-custom-label">20-30 Floor</label>
            </li>
            <li class="col-lg-6 col-md-6 p-0">
              <input id="a-12" class="checkbox-custom" name="30-40 Floor" type="checkbox">
              <label for="a-12" class="checkbox-custom-label">30-40 Floor</label>
            </li>
            <li class="col-lg-6 col-md-6 p-0">
              <input id="a-13" class="checkbox-custom" name="40-50 Floor" type="checkbox">
              <label for="a-13" class="checkbox-custom-label">40-50 Floor</label>
            </li>
            <li class="col-lg-6 col-md-6 p-0">
              <input id="a-14" class="checkbox-custom" name="50+ Floor" type="checkbox">
              <label for="a-14" class="checkbox-custom-label">50+ Floor</label>
            </li>													
          </ul>
        </div>
      </div> */}
                {/* <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 pt-4">
          <h6>Floor Type</h6>
          <ul class="row p-0 m-0">
            <li class="col-lg-6 col-md-6 p-0">
              <input id="a-15" class="checkbox-custom" name="Vitrified Tiles" type="checkbox">
              <label for="a-15" class="checkbox-custom-label">Vitrified Tiles</label>
            </li>
            <li class="col-lg-6 col-md-6 p-0">
              <input id="a-16" class="checkbox-custom" name="Mossaic" type="checkbox">
              <label for="a-16" class="checkbox-custom-label">Mossaic</label>
            </li>
            <li class="col-lg-6 col-md-6 p-0">
              <input id="a-17" class="checkbox-custom" name="Marble" type="checkbox">
              <label for="a-17" class="checkbox-custom-label">Marble</label>
            </li>
            <li class="col-lg-6 col-md-6 p-0">
              <input id="a-18" class="checkbox-custom" name="Granite" type="checkbox">
              <label for="a-18" class="checkbox-custom-label">Granite</label>
            </li>
            <li class="col-lg-6 col-md-6 p-0">
              <input id="a-19" class="checkbox-custom" name="Wooden" type="checkbox">
              <label for="a-19" class="checkbox-custom-label">Wooden</label>
            </li>
            <li class="col-lg-6 col-md-6 p-0">
              <input id="a-20" class="checkbox-custom" name="Cement" type="checkbox">
              <label for="a-20" class="checkbox-custom-label">Cement</label>
            </li>
            
          </ul>
        </div>
      </div> */}
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
                        <input id="a-18" className="checkbox-custom" name="Furnished" checked={filterVal.furnish.includes("Furnished")} onChange={handleFurnish} value="Furnished" type="checkbox" />
                        <label htmlFor="a-18" className="checkbox-custom-label">Furnished</label>
                      </li>
                      <li className="col-lg-6 col-md-6 p-0">
                        <input id="a-19" className="checkbox-custom" name="Unfurnished" checked={filterVal.furnish.includes("Unfurnished")} onChange={handleFurnish} value="Unfurnished" type="checkbox" />
                        <label htmlFor="a-19" className="checkbox-custom-label">Unfurnished</label>
                      </li>
                      <li className="col-lg-6 col-md-6 p-0">
                        <input id="a-20" className="checkbox-custom" name="Semi Furnished" checked={filterVal.furnish.includes("Semi Furnished")} onChange={handleFurnish} value="Semi Furnished" type="checkbox" />
                        <label htmlFor="a-20" className="checkbox-custom-label">Semi Furnished</label>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 pt-4">
          <h6>Show Only </h6>
          <ul class="row p-0 m-0">
            <li class="col-lg-6 col-md-6 p-0">
              <input id="a-29" class="checkbox-custom" name="Non-Veg Allowed" type="checkbox">
              <label for="a-29" class="checkbox-custom-label">Non-Veg Allowed</label>
            </li>
             <li class="col-lg-6 col-md-6 p-0">
              <input id="a-22" class="checkbox-custom" name="Student" type="checkbox">
              <label for="a-22" class="checkbox-custom-label">Student</label>
            </li>
            <li class="col-lg-6 col-md-6 p-0">
              <input id="a-23" class="checkbox-custom" name="Both" type="checkbox">
              <label for="a-23" class="checkbox-custom-label">Both</label>
            </li> 
          </ul>
        </div>
      </div> */}
                {/* <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 pt-4">
          <h6>Parking</h6>
          <ul class="row p-0 m-0">
            <li class="col-lg-6 col-md-6 p-0">
              <input id="a-30" class="checkbox-custom" name="Car" type="checkbox">
              <label for="a-30" class="checkbox-custom-label">Car</label>
            </li>
            <li class="col-lg-6 col-md-6 p-0">
              <input id="a-31" class="checkbox-custom" name="Bike" type="checkbox">
              <label for="a-31" class="checkbox-custom-label">Bike</label>
            </li>
            <li class="col-lg-6 col-md-6 p-0">
              <input id="a-32" class="checkbox-custom" name="None" type="checkbox">
              <label for="a-32" class="checkbox-custom-label">None</label>
            </li>
            <li class="col-lg-6 col-md-6 p-0">
              <input id="a-33" class="checkbox-custom" name="Both" type="checkbox">
              <label for="a-33" class="checkbox-custom-label">Both</label>
            </li>
          </ul>
        </div>
      </div> */}
                {/* <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 pt-4">
          <h6>Bathroom</h6>
          <ul class="row p-0 m-0">
            <li class="col-lg-6 col-md-6 p-0">
              <input id="a-34" class="checkbox-custom" name="1" type="checkbox">
              <label for="a-34" class="checkbox-custom-label">1</label>
            </li>
            <li class="col-lg-6 col-md-6 p-0">
              <input id="a-35" class="checkbox-custom" name="2" type="checkbox">
              <label for="a-35" class="checkbox-custom-label">2</label>
            </li>
            <li class="col-lg-6 col-md-6 p-0">
              <input id="a-36" class="checkbox-custom" name="3" type="checkbox">
              <label for="a-36" class="checkbox-custom-label">3</label>
            </li>
            <li class="col-lg-6 col-md-6 p-0">
              <input id="a-37" class="checkbox-custom" name="3+" type="checkbox">
              <label for="a-37" class="checkbox-custom-label">3+</label>
            </li>
          </ul>
        </div>
      </div> */}
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

export default CsaleFilter