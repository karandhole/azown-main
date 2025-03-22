import React, { useState,useEffect } from 'react'


const RrentFilter = ({handleFilter}) => {
  const [filterValues,setValue] = useState({
    prop:[],
    bhk:[],
    floor:[],
    floorType:[],
    park:[],
    furnish:[],
    range:1000,
  })
  

  const handlePropertyTypeChange =(e) =>{
   const isChecked = e.target.checked;
   const value = e.target.value;
   console.log("sdfhd")
   if(isChecked){
    setValue({...filterValues,prop:[...filterValues.prop,value]})
   }
   else{
    setValue({ ...filterValues, prop: filterValues.prop.filter((val) => val !== value) });
   }
  }
  const handleBHKTypeChange =(e) =>{
    const isChecked = e.target.checked;
    const value = e.target.value;
    console.log("sdf")
    if(isChecked){
     setValue({...filterValues,bhk:[...filterValues.bhk,value]})
    }
    else{
     setValue({ ...filterValues, bhk: filterValues.bhk.filter((val) => val !== value) });
    }
   }
   const handleFloorChange = (e) =>{
    const isChecked = e.target.checked;
    const value = e.target.value;
    console.log("Floor")
    if(isChecked){
     setValue({...filterValues,floor:[...filterValues.floor,value]})
    }
    else{
     setValue({ ...filterValues, floor: filterValues.floor.filter((val) => val !== value) });
    }
   }

   const handleFloorTypeChange = (e) =>{
    const isChecked = e.target.checked;
    const value = e.target.value;
    console.log("Floor")
    if(isChecked){
     setValue({...filterValues,floorType:[...filterValues.floorType,value]})
    }
    else{
     setValue({ ...filterValues, floorType: filterValues.floorType.filter((val) => val !== value) });
    }
   }

   const handleFurnishChange = (e) =>{
    const isChecked = e.target.checked;
    const value = e.target.value;
    console.log("Floor")
    if(isChecked){
     setValue({...filterValues,furnish:[...filterValues.furnish,value]})
    }
    else{
     setValue({ ...filterValues, furnish: filterValues.furnish.filter((val) => val !== value) });
    }
   }

   const handleParkChange = (e) =>{
    const isChecked = e.target.checked;
    const value = e.target.value;
    console.log("Floor")
    if(isChecked){
     setValue({...filterValues,park:[...filterValues.park,value]})
    }
    else{
     setValue({ ...filterValues, park: filterValues.park.filter((val) => val !== value) });
    }
   }
  const myFun = () =>{
    handleFilter(filterValues);
  }
  const handleSliderChange = (e) =>{
    setValue({...filterValues,range:e.target.value});
  }

  useEffect(()=>{
    handleFilter(filterValues)
  },[filterValues])

  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="col-lg-4 col-md-12 col-sm-12 ">
    <div className="page-sidebar p-0" >
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
              <h6>Apartment Type</h6>
              <ul className="row p-0 m-0">
                <li className="col-lg-12 col-md-12 p-0">
                  <input id="a-1" className="checkbox-custom" name="Appartment" checked={filterValues.prop.includes("Appartment")} onChange={handlePropertyTypeChange} value="Appartment" type="checkbox" />
                  <label htmlFor="a-1" className="checkbox-custom-label">Appartment</label>
                </li>
                <li className="col-lg-12 col-md-12 p-0">
                  <input id="a-2" className="checkbox-custom" name="Independent House Villa" checked={filterValues.prop.includes("Independent House Villa")} onChange={handlePropertyTypeChange} value="Independent House Villa"  type="checkbox" />
                  <label htmlFor="a-2" className="checkbox-custom-label">Independent House Villa</label>
                </li>
                <li className="col-lg-12 col-md-12 p-0">
                  <input id="a-3" className="checkbox-custom" name="Gated Community Villa" checked={filterValues.prop.includes("Gated Community Villa")} onChange={handlePropertyTypeChange} value="Gated Community Villa"  type="checkbox" />
                  <label htmlFor="a-3" className="checkbox-custom-label">Gated Community Villa</label>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 pt-4">
              <h6>BHK Type</h6>
              <ul className="row p-0 m-0">
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-4" className="checkbox-custom" name="1 RK" checked={filterValues.bhk.includes("1 RK")} onChange={handleBHKTypeChange} value="1 RK" type="checkbox" />
                  <label htmlFor="a-4" className="checkbox-custom-label">1 RK</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-5" className="checkbox-custom" name="1 BHK" checked={filterValues.bhk.includes("1 BHK")} onChange={handleBHKTypeChange} value="1 BHK" type="checkbox" />
                  <label htmlFor="a-5" className="checkbox-custom-label">1 BHK</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-6" className="checkbox-custom" name="2 BHK" checked={filterValues.bhk.includes("2 BHK")} onChange={handleBHKTypeChange} value="2 BHK" type="checkbox" />
                  <label htmlFor="a-6" className="checkbox-custom-label">2 BHK</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-7" className="checkbox-custom" name="3 BHK" checked={filterValues.bhk.includes("3 BHK")} onChange={handleBHKTypeChange} value="3 BHK" type="checkbox" />
                  <label htmlFor="a-7" className="checkbox-custom-label">3 BHK</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-8" className="checkbox-custom" name="4+ BHK" checked={filterValues.bhk.includes("4+ BHK")} onChange={handleBHKTypeChange} value="4+ BHK" type="checkbox" />
                  <label htmlFor="a-8" className="checkbox-custom-label">4+ BHK</label>
                </li>													
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 pt-4">
              <h6>Floor</h6>
              <ul className="row p-0 m-0">
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-9" className="checkbox-custom" name="0-10 Floor"  checked={filterValues.floor.includes("0-10")} onChange={handleFloorChange} value="0-10" type="checkbox" />
                  <label htmlFor="a-9" className="checkbox-custom-label">0-10 Floor</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-10" className="checkbox-custom" name="10-20 Floor"  checked={filterValues.floor.includes("10-20")} onChange={handleFloorChange} value="10-20" type="checkbox" />
                  <label htmlFor="a-10" className="checkbox-custom-label">10-20 Floor</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-11" className="checkbox-custom" name="20-30 Floor"  checked={filterValues.floor.includes("20-30")} onChange={handleFloorChange} value="20-30" type="checkbox" />
                  <label htmlFor="a-11" className="checkbox-custom-label">20-30 Floor</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-12" className="checkbox-custom" name="30-40 Floor"  checked={filterValues.floor.includes("30-40")} onChange={handleFloorChange} value="30-40" type="checkbox" /> 
                  <label htmlFor="a-12" className="checkbox-custom-label">30-40 Floor</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-13" className="checkbox-custom" name="40-50 Floor"  checked={filterValues.floor.includes("40-50")} onChange={handleFloorChange} value="40-50" type="checkbox" />
                  <label htmlFor="a-13" className="checkbox-custom-label">40-50 Floor</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-14" className="checkbox-custom" name="50+ Floor"  checked={filterValues.floor.includes("50+")} onChange={handleFloorChange} value="50+" type="checkbox" />
                  <label htmlFor="a-14" className="checkbox-custom-label">50+ Floor</label>
                </li>													
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 pt-4">
              <h6>Floor Type</h6>
              <ul className="row p-0 m-0">
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-15" className="checkbox-custom" checked={filterValues.floorType.includes("Vitrified Tiles")} onChange={handleFloorTypeChange} value="Vitrified Tiles" name="Vitrified Tiles" type="checkbox" />
                  <label htmlFor="a-15" className="checkbox-custom-label">Vitrified Tiles</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-16" className="checkbox-custom" checked={filterValues.floorType.includes("Mossaic")} onChange={handleFloorTypeChange} value="Mossaic" name="Mossaic" type="checkbox" />
                  <label htmlFor="a-16" className="checkbox-custom-label">Mossaic</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-17" className="checkbox-custom" checked={filterValues.floorType.includes("Marble")} onChange={handleFloorTypeChange} value="Marble" name="Marble" type="checkbox" />
                  <label htmlFor="a-17" className="checkbox-custom-label">Marble</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-18" className="checkbox-custom" checked={filterValues.floorType.includes("Granite")} onChange={handleFloorTypeChange} value="Granite" name="Granite" type="checkbox" />
                  <label htmlFor="a-18" className="checkbox-custom-label">Granite</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-19" className="checkbox-custom" checked={filterValues.floorType.includes("Wooden")} onChange={handleFloorTypeChange} value="Wooden" name="Wooden" type="checkbox" />
                  <label htmlFor="a-19" className="checkbox-custom-label">Wooden</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-20" className="checkbox-custom" checked={filterValues.floorType.includes("Cement")} onChange={handleFloorTypeChange} value="Cement" name="Cement" type="checkbox" />
                  <label htmlFor="a-20" className="checkbox-custom-label">Cement</label>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 pt-4 pb-4">
              <h6>Choose Price</h6>
              <div className="rg-slider">
                <input type="range" className="w-100" min="1000" max="50000" value={filterValues.range} onChange={handleSliderChange} name="my_range"  />
                <span className='d-block text-bold'>₹ {filterValues.range}</span>
              </div>
            </div>
          </div>		
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 pt-4">
              <h6>Furnishing</h6>
              <ul className="row p-0 m-0">
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-21" className="checkbox-custom" name="Furnished" checked={filterValues.furnish.includes("Furnished")} onChange={handleFurnishChange} value="Furnished" type="checkbox" />
                  <label htmlFor="a-21" className="checkbox-custom-label">Furnished</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-22" className="checkbox-custom" name="Unfurnished" checked={filterValues.furnish.includes("Unfurnished")} onChange={handleFurnishChange} value="Unfurnished" type="checkbox" />
                  <label htmlFor="a-22" className="checkbox-custom-label">Unfurnished</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-23" className="checkbox-custom" name="Semi Furnished" checked={filterValues.furnish.includes("Semi Furnished")} onChange={handleFurnishChange} value="Semi Furnished" type="checkbox" />
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
                  <input id="a-24" className="checkbox-custom" checked={filterValues.park.includes("Car")} onChange={handleParkChange} value="Car" name="Car" type="checkbox" />
                  <label htmlFor="a-24" className="checkbox-custom-label">Car</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-25" className="checkbox-custom" checked={filterValues.park.includes("Bike")} onChange={handleParkChange} value="Bike" name="Bike" type="checkbox" />
                  <label htmlFor="a-25" className="checkbox-custom-label">Bike</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-26" className="checkbox-custom" checked={filterValues.park.includes("None")} onChange={handleParkChange} value="None" name="None" type="checkbox" />
                  <label htmlFor="a-26" className="checkbox-custom-label">None</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-27" className="checkbox-custom" checked={filterValues.park.includes("Both")} onChange={handleParkChange} value="Both" name="Both" type="checkbox" />
                  <label htmlFor="a-27" className="checkbox-custom-label">Both</label>
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

export default RrentFilter