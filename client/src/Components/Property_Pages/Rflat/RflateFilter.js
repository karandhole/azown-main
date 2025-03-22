import {React,useState,useEffect} from 'react'

const RflateFilter = ({handleFilter}) => {
const [filterVal,setFilterVal] = useState({
  room:[],
  sex:[],
  prop:[],
  floor:[],
  price:2000,
  furnish:[],
  veg:[],
  park:[],
  bath:[]
})

  const handleRoom = (e) =>{
    const isSelected = e.target.checked;
    const value = e.target.value;
    if(isSelected){
     setFilterVal({...filterVal , room:[...filterVal.room,value]})
    }
    else{
     setFilterVal({...filterVal, room: filterVal.room.filter(val => val !== value)});
    }
 }
 const handleSex = (e) =>{
   const isChecked = e.target.checked;
   const value = e.target.value;
   if(isChecked){
   setFilterVal({...filterVal,sex:[...filterVal.sex,value]});
   }
   else{
     setFilterVal({...filterVal,sex:filterVal.sex.filter(val => val !== value)});
   }
 }
 const handlePropType = (e) =>{
  const isSelected = e.target.checked;
  const value = e.target.value;
  if(isSelected){
   setFilterVal({...filterVal , prop:[...filterVal.prop,value]})
  }
  else{
   setFilterVal({...filterVal, prop: filterVal.prop.filter(val => val !== value)});
  }
}
const handleFloorChange = (e) =>{
 const isChecked = e.target.checked;
 const value = e.target.value;
 if(isChecked){
 setFilterVal({...filterVal,floor:[...filterVal.floor,value]});
 }
 else{
   setFilterVal({...filterVal,floor:filterVal.floor.filter(val => val !== value)});
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
const handleVeg = (e) =>{
 const isChecked = e.target.checked;
 const value = e.target.value;
 if(isChecked){
 setFilterVal({...filterVal,veg:[...filterVal.veg,value]});
 }
 else{
   setFilterVal({...filterVal,veg:filterVal.veg.filter(val => val !== value)});
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
const handleBathroom = (e) =>{
 const isChecked = e.target.checked;
 const value = e.target.value;
 if(isChecked){
 setFilterVal({...filterVal,bath:[...filterVal.bath,value]});
 }
 else{
   setFilterVal({...filterVal,bath:filterVal.bath.filter(val => val !== value)});
 }
 
}

const handlePrice = (e) =>{
  setFilterVal({...filterVal,price:e.target.value})
}
const myFun = () =>{
  handleFilter(filterVal)
}

useEffect(()=>{
  handleFilter(filterVal)
 
},[filterVal])

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
              <h6>Room Type</h6>
              <ul className="row p-0 m-0">
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-25" className="checkbox-custom" name="Shared Room" checked={filterVal.room.includes("Shared")} onChange={handleRoom} value="Shared" type="checkbox" />
                  <label htmlFor="a-25" className="checkbox-custom-label">Shared Room</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-26" className="checkbox-custom" name="Single Room" checked={filterVal.room.includes("Single")} onChange={handleRoom} value="Single" type="checkbox" />
                  <label htmlFor="a-26" className="checkbox-custom-label">Single Room</label>
                </li>													
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 pt-4">
              <h6>Tenent Type</h6>
              <ul className="row p-0 m-0">
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-27" className="checkbox-custom" name="Male"  checked={filterVal.sex.includes("Male")} onChange={handleSex} value="Male" type="checkbox" />
                  <label htmlFor="a-27" className="checkbox-custom-label">Male</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-28" className="checkbox-custom" name="Female"  checked={filterVal.sex.includes("Female")} onChange={handleSex} value="Female" type="checkbox" />
                  <label htmlFor="a-28" className="checkbox-custom-label">Female</label>
                </li>													
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 pt-4">
              <h6>Property Type</h6>
              <ul className="row p-0 m-0">
                <li className="col-lg-12 col-md-12 p-0">
                  <input id="a-1" className="checkbox-custom" name="Appartment"  checked={filterVal.prop.includes("Appartment")} onChange={handlePropType} value="Appartment" type="checkbox" />
                  <label htmlFor="a-1" className="checkbox-custom-label">Appartment</label>
                </li>
                <li className="col-lg-12 col-md-12 p-0">
                  <input id="a-2" className="checkbox-custom" name="Independent House Villa"  checked={filterVal.prop.includes("Independent House Villa")} onChange={handlePropType} value="Independent House Villa" type="checkbox" />
                  <label htmlFor="a-2" className="checkbox-custom-label">Independent House Villa</label>
                </li>
                <li className="col-lg-12 col-md-12 p-0">
                  <input id="a-3" className="checkbox-custom" name="Gated Community Villa"  checked={filterVal.prop.includes("Gated Community Villa")} onChange={handlePropType} value="Gated Community Villa" type="checkbox" />
                  <label htmlFor="a-3" className="checkbox-custom-label">Gated Community Villa</label>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 pt-4">
              <h6>Floor</h6>
              <ul className="row p-0 m-0">
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-9" className="checkbox-custom" name="0-10 Floor"  checked={filterVal.floor.includes("0-10 Floor")} onChange={handleFloorChange} value="0-10 Floor" type="checkbox" />
                  <label htmlFor="a-9" className="checkbox-custom-label">0-10 Floor</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-10" className="checkbox-custom" name="10-20 Floor"  checked={filterVal.floor.includes("10-20 Floor")} onChange={handleFloorChange} value="10-20 Floor" type="checkbox" />
                  <label htmlFor="a-10" className="checkbox-custom-label">10-20 Floor</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-11" className="checkbox-custom" name="20-30 Floor"  checked={filterVal.floor.includes("20-30 Floor")} onChange={handleFloorChange} value="20-30 Floor" type="checkbox" />
                  <label htmlFor="a-11" className="checkbox-custom-label">20-30 Floor</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-12" className="checkbox-custom" name="30-40 Floor"  checked={filterVal.floor.includes("30-40 Floor")} onChange={handleFloorChange} value="30-40 Floor" type="checkbox" />
                  <label htmlFor="a-12" className="checkbox-custom-label">30-40 Floor</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-13" className="checkbox-custom" name="40-50 Floor"  checked={filterVal.floor.includes("40-50 Floor")} onChange={handleFloorChange} value="40-50 Floor" type="checkbox" />
                  <label htmlFor="a-13" className="checkbox-custom-label">40-50 Floor</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-14" className="checkbox-custom" name="50+ Floor"  checked={filterVal.floor.includes("50+ Floor")} onChange={handleFloorChange} value="50+ Floor" type="checkbox" />
                  <label htmlFor="a-14" className="checkbox-custom-label">50+ Floor</label>
                </li>													
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 pt-4 pb-4">
              <h6>Choose Price</h6>
              <div className="rg-slider">
              <input type="range" className="w-100" min="1000" max="50000" defaultValue={filterVal.price} onChange={handlePrice} name="price"  />
                <span className='d-block text-bold'>₹ {filterVal.price}</span>
              </div>
            </div>
          </div>		
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 pt-4">
              <h6>Furnishing</h6>
              <ul className="row p-0 m-0">
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-21" className="checkbox-custom" name="Furnished"  checked={filterVal.furnish.includes("Furnished")} onChange={handleFurnish} value="Furnished" type="checkbox" />
                  <label htmlFor="a-21" className="checkbox-custom-label">Furnished</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-22" className="checkbox-custom" name="Unfurnished"  checked={filterVal.furnish.includes("Unfurnished")} onChange={handleFurnish} value="Unfurnished" type="checkbox" />
                  <label htmlFor="a-22" className="checkbox-custom-label">Unfurnished</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-23" className="checkbox-custom" name="Semi Furnished"  checked={filterVal.furnish.includes("Semi Furnished")} onChange={handleFurnish} value="Semi Furnished" type="checkbox" />
                  <label htmlFor="a-23" className="checkbox-custom-label">Semi Furnished</label>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 pt-4">
              <h6>Show Only </h6>
              <ul className="row p-0 m-0">
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-29" className="checkbox-custom" name="Non-Veg Allowed"  checked={filterVal.veg.includes("Non-Veg Allowed")} onChange={handleVeg} value="Non-Veg Allowed" type="checkbox" />
                  <label htmlFor="a-29" className="checkbox-custom-label">Non-Veg Allowed</label>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 pt-4">
              <h6>Parking</h6>
              <ul className="row p-0 m-0">
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-30" className="checkbox-custom" name="Car"  checked={filterVal.park.includes("Car")} onChange={handlePark} value="Car" type="checkbox" />
                  <label htmlFor="a-30" className="checkbox-custom-label">Car</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-31" className="checkbox-custom" name="Bike"  checked={filterVal.park.includes("Bike")} onChange={handlePark} value="Bike" type="checkbox" />
                  <label htmlFor="a-31" className="checkbox-custom-label">Bike</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-32" className="checkbox-custom" name="None"  checked={filterVal.park.includes("None")} onChange={handlePark} value="None" type="checkbox" />
                  <label htmlFor="a-32" className="checkbox-custom-label">None</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-33" className="checkbox-custom" name="Both"  checked={filterVal.park.includes("Both")} onChange={handlePark} value="Both" type="checkbox" />
                  <label htmlFor="a-33" className="checkbox-custom-label">Both</label>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 pt-4">
              <h6>Bathroom</h6>
              <ul className="row p-0 m-0">
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-34" className="checkbox-custom" name='1' checked={filterVal.bath.includes("1")} onChange={handleBathroom} value="1" type="checkbox" />
                  <label htmlFor="a-34" className="checkbox-custom-label">1</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-35" className="checkbox-custom" name='2'  checked={filterVal.bath.includes("2")} onChange={handleBathroom} value="2" type="checkbox" />
                  <label htmlFor="a-35" className="checkbox-custom-label">2</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-36" className="checkbox-custom" name='3'  checked={filterVal.bath.includes("3")} onChange={handleBathroom} value="3" type="checkbox" />
                  <label htmlFor="a-36" className="checkbox-custom-label">3</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-37" className="checkbox-custom" name="3+" checked={filterVal.bath.includes("3+")} onChange={handleBathroom} value="3+" type="checkbox" />
                  <label htmlFor="a-37" className="checkbox-custom-label">3+</label>
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

export default RflateFilter