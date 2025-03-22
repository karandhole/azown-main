import {React,useState,useEffect} from 'react'

const RpgFilter = ({handleFilter}) => {
  const [filterVal,setFilterVal] = useState({
    sex:[],
    room:[],
    price:2500,
    guestType:[],
    park:[]
  })

  const handleSex = (e) =>{
    const isSelected = e.target.checked;
    const value = e.target.value;
    if(isSelected){
     setFilterVal({...filterVal , sex:[...filterVal.sex,value]})
    }
    else{
     setFilterVal({...filterVal, sex: filterVal.sex.filter(val => val !== value)});
    }
 }  
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
const handleGuestType = (e) =>{
  const isSelected = e.target.checked;
  const value = e.target.value;
  if(isSelected){
   setFilterVal({...filterVal , guestType:[...filterVal.guestType,value]})
  }
  else{
   setFilterVal({...filterVal, guestType: filterVal.guestType.filter(val => val !== value)});
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
const handlePrice = (e) =>{
  setFilterVal({...filterVal,price:e.target.value})
}
useEffect(()=>{
  handleFilter(filterVal); 
 },[filterVal])
const myFun = () => {
  handleFilter(filterVal)
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
                    <h6>Available For</h6>
                    <ul className="row p-0 m-0">
                      <li className="col-lg-6 col-md-6 p-0">
                        <input id="a-1" className="checkbox-custom" name="Male" checked={filterVal.sex.includes("Male")} onChange={handleSex} value="Male" type="checkbox" />
                        <label htmlFor="a-1" className="checkbox-custom-label">Male</label>
                      </li>
                      <li className="col-lg-6 col-md-6 p-0">
                        <input id="a-2" className="checkbox-custom" name="Female" checked={filterVal.sex.includes("Female")} onChange={handleSex} value="Female" type="checkbox" />
                        <label htmlFor="a-2" className="checkbox-custom-label">Female</label>
                      </li>
                      <li className="col-lg-6 col-md-6 p-0">
                        <input id="a-3" className="checkbox-custom" name="Anyone" checked={filterVal.sex.includes("Anyone")} onChange={handleSex} value="Anyone" type="checkbox" />
                        <label htmlFor="a-3" className="checkbox-custom-label">Anyone</label>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 pt-4">
                    <h6>Room Type</h6>
                    <ul className="row p-0 m-0">
                      <li className="col-lg-6 col-md-6 p-0">
                        <input id="a-4" className="checkbox-custom" name="1 Room" checked={filterVal.room.includes("1")} onChange={handleRoom} value="1" type="checkbox" />
                        <label htmlFor="a-4" className="checkbox-custom-label">1 Room</label>
                      </li>
                      <li className="col-lg-6 col-md-6 p-0">
                        <input id="a-6" className="checkbox-custom" name="2 Room" checked={filterVal.room.includes("2")} onChange={handleRoom} value="2" type="checkbox" />
                        <label htmlFor="a-6" className="checkbox-custom-label">2 Room</label>
                      </li>
                      <li className="col-lg-6 col-md-6 p-0">
                        <input id="a-7" className="checkbox-custom" name="3 Room" checked={filterVal.room.includes("3")} onChange={handleRoom} value="3" type="checkbox" />
                        <label htmlFor="a-7" className="checkbox-custom-label">3 Room</label>
                      </li>
                      <li className="col-lg-6 col-md-6 p-0">
                        <input id="a-8" className="checkbox-custom" name="4+ Room" checked={filterVal.room.includes("4")} onChange={handleRoom} value="4" type="checkbox" />
                        <label htmlFor="a-8" className="checkbox-custom-label">4+ Room</label>
                      </li>													
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 pt-4 pb-4">
                    <h6>Choose Price</h6>
                    <div className="rg-slider">
                    <input type="range" className="w-100" min="0" max="50000" defaultValue={filterVal.price} onChange={handlePrice} name="price"  />
                <span className='d-block text-bold'>₹ {filterVal.price}</span>
                    </div>
                  </div>
                </div>		
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 pt-4">
                    <h6>Prefered For </h6>
                    <ul className="row p-0 m-0">
                      <li className="col-lg-6 col-md-6 p-0">
                        <input id="a-21" className="checkbox-custom" name="Working Professional" checked={filterVal.guestType.includes("Working Professional")} onChange={handleGuestType} value="Working Professional" type="checkbox" />
                        <label htmlFor="a-21" className="checkbox-custom-label">Working Professional</label>
                      </li>
                      <li className="col-lg-6 col-md-6 p-0">
                        <input id="a-22" className="checkbox-custom" name="Student" checked={filterVal.guestType.includes("Student")} onChange={handleGuestType} value="Student" type="checkbox" />
                        <label htmlFor="a-22" className="checkbox-custom-label">Student</label>
                      </li>
                      <li className="col-lg-6 col-md-6 p-0">
                        <input id="a-23" className="checkbox-custom" name="Both" checked={filterVal.guestType.includes("Both")} onChange={handleGuestType} value="Both" type="checkbox" />
                        <label htmlFor="a-23" className="checkbox-custom-label">Both</label>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 pt-4">
                    <h6>Parking</h6>
                    <ul className="row p-0 m-0">
                      <li className="col-lg-6 col-md-6 p-0">
                        <input id="a-24" className="checkbox-custom" name="Car" checked={filterVal.park.includes("Car")} onChange={handlePark} value="Car" type="checkbox" />
                        <label htmlFor="a-24" className="checkbox-custom-label">Car</label>
                      </li>
                      <li className="col-lg-6 col-md-6 p-0">
                        <input id="a-25" className="checkbox-custom" name="Bike" checked={filterVal.park.includes("Bike")} onChange={handlePark} value="Bike" type="checkbox" />
                        <label htmlFor="a-25" className="checkbox-custom-label">Bike</label>
                      </li>
                      <li className="col-lg-6 col-md-6 p-0">
                        <input id="a-26" className="checkbox-custom" name="None" checked={filterVal.park.includes("None")} onChange={handlePark} value="None" type="checkbox" />
                        <label htmlFor="a-26" className="checkbox-custom-label">None</label>
                      </li>
                      <li className="col-lg-6 col-md-6 p-0">
                        <input id="a-27" className="checkbox-custom" name="Both" checked={filterVal.park.includes("Both")} onChange={handlePark} value="Both" type="checkbox" />
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

export default RpgFilter