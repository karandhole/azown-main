import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Autocomplete, useJsApiLoader } from "@react-google-maps/api";
import { errorMsg } from "../notification";
import { ToastContainer } from "react-toastify";

const HeroBanner = () => {
  const history = useNavigate();
  const originRef = useRef();
  const [tab, settab] = useState(1);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [autoComplete, setAutoComp] = useState();
  const [bounds,setBounds] = useState({
    north: 18.6391,
    south: 18.4199,
    east: 73.9928,
    west: 73.7397,
  });
  const [libraries, setLibra] = useState(["places"]);
  const [formData, setFormData] = useState({
    city: "",
    area: [],
    proptype: 0,
  });
  const [placeArr,setPlaceArr] = useState([]);

  useEffect(()=>{
    
  })

  var mumbaiBounds = {
    north: 19.30749,
    south: 18.89222,
    east: 73.24783,
    west: 72.75555,
  }

  const noidaBounds = {
    north: 28.6786,
    south: 28.3463,
    east: 77.4728,
    west: 77.2901,
  }
  const bangaloreBounds = {
    north: 13.2447,
    south: 12.7043,
    east: 77.8428,
    west: 77.3473,
  };

  const delhiBounds = {
    north: 28.8857,
    south: 28.4089,
    east: 77.3431,
    west: 76.8385,
  };

  const gaziabadBounds = {
    north: 28.7584,
  south: 28.5794,
  east: 77.6309,
  west: 77.2777,
  };
  const gurgaonBounds = {
    north: 28.5398,
    south: 28.3852,
    east: 77.1204,
    west: 76.9164,
  };
  const puneBounds = {
    north: 18.6391,
    south: 18.4199,
    east: 73.9928,
    west: 73.7397,
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCjYb2QG0B00lOeygGl9w2Nib4-NpBIc9U",
    libraries: libraries,
  });


  if (!isLoaded) {
    return;
  }

  const options = {
    componentRestrictions: { country: "in" },
    bounds: new window.google.maps.LatLngBounds(
      new window.google.maps.LatLng(bounds.south, bounds.west),
      new window.google.maps.LatLng(bounds.north, bounds.east)
    ),
  };

  const meraFunction = (e) =>{
    if(e.target.value === 'Pune'){
      setBounds(x=>puneBounds)
      // console.log('pune selected',bounds)
    }else if(e.target.value === 'Banglore')
    {
      setBounds(x=>bangaloreBounds)
      // console.log(e.target.value,bounds)

    
    }else if(e.target.value === 'Noida')
    {
      setBounds(x=>noidaBounds)
      // console.log('noida selected',bounds)


    }
    else if(e.target.value === 'Delhi')
    {
      setBounds(x=>delhiBounds)
      // console.log('delhi selected',bounds)


    }
    else if(e.target.value === 'Gurgaon')
    {
      setBounds(x=>gurgaonBounds)
      // console.log('gurgaon selected',bounds)


    }
    else if(e.target.value === 'Mumbai')
    {
      setBounds(x=>mumbaiBounds)
      // console.log('mumbaop selected',bounds)


    }
    else{
      // console.log("sdfsdjkbfs")
      setBounds(x=>gaziabadBounds)
    }
  }

  function handleForm(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(e.target.value)
}

  const handleFormAndLocation = (e) =>{
    handleForm(e);
    meraFunction(e);
    setPlaceArr([]);

  }

  const handlePlaceChanged = () => {
    const place = autoComplete.getPlace();
    let selectedArea = place.formatted_address;
    // console.log(formData.city)
    switch(formData.city){
        case "Mumbai":{
          if(selectedArea.includes("Maharashtra")){
         setPlaceArr([...placeArr,originRef.current.value]);
         setFormData({ ...formData, area: [...formData.area,originRef.current.value] });
          originRef.current.value = ""

          }else{
            console.log("Falase")
            errorMsg(`Please select another area in ${formData.city}`)
            originRef.current.value = ""
          }
      break;
        }
        case "Banglore":{
          if(selectedArea.includes("Bangaluru") || selectedArea.includes("Karnataka") ){
            console.log("True");
         setPlaceArr([...placeArr,originRef.current.value]);
         setFormData({ ...formData, area: selectedArea });
          originRef.current.value = ""

          }else{
            console.log("Falase")
            errorMsg(`Please select another area in ${formData.city}`)
            originRef.current.value = ""
          }
      break;
        }
        case "Noida":{
          if(selectedArea.includes("Noida")){
            console.log("True");
            setPlaceArr([...placeArr,originRef.current.value]);
            setFormData({ ...formData, area: selectedArea });
             originRef.current.value = ""

          }else{
            console.log("Falase")
            errorMsg(`Please select another area in ${formData.city}`)
            originRef.current.value = ""
          }
      break;
        }
        case "Delhi":{
          if(selectedArea.includes("Delhi")){
            console.log("True");
            setPlaceArr([...placeArr,originRef.current.value]);
            setFormData({ ...formData, area: selectedArea });
             originRef.current.value = ""

          }else{
            console.log("Falase")
            errorMsg(`Please select another area in ${formData.city}`)
            originRef.current.value = ""
          }
      break;
        }
        case "Gurgaon":{
          if(selectedArea.includes("Gurgaon") || selectedArea.includes("Gurugram")){
            console.log("True");
            setPlaceArr([...placeArr,originRef.current.value]);
            setFormData({ ...formData, area: selectedArea });
             originRef.current.value = ""

          }else{
            console.log("Falase")
            errorMsg(`Please select another area in ${formData.city}`)
            originRef.current.value = ""
          }
      break;
        }
        case "Gaziabad":{
          if(selectedArea.includes("Ghaziabad")){
            console.log("True");
            setPlaceArr([...placeArr,originRef.current.value]);
            setFormData({ ...formData, area: selectedArea });
             originRef.current.value = ""

          }else{
            console.log("Falase")
            errorMsg(`Please select another area in ${formData.city}`)
            originRef.current.value = ""
          }
      break;
        }
          default :
          {
            if(selectedArea.includes("Pune")){
                  console.log("True");
                  setPlaceArr([...placeArr,originRef.current.value]);
                  setFormData({ ...formData, area: selectedArea });
                   originRef.current.value = ""
    
                }else{
                  console.log("Falase")
                  errorMsg(`Please select another area in Pune`)
                  originRef.current.value = ""
                }
            break;
          }
    }
  };

  function handleClick(e) {
    e.preventDefault();

    if (tab === 1) {
      if (formData.proptype === "1") {
        history("/rsale-list", { state: formData });
      } else if (formData.proptype === "2") {
        history("/plot-list", { state: formData });
      }
    } else if (tab === 2) {
      if (formData.proptype === "1") {
        history("/rrent-list", { state: formData });
      } else if (formData.proptype === "2") {
        history("/rfm-list", { state: formData });
      } else if (formData.proptype === "3") {
        history("/rpg-list", { state: formData });
      }
    } else if (tab === 3) {
      if (formData.proptype === "1") {
        history("/cms-list", { state: formData });
      } else if (formData.proptype === "2") {
        history("/cmr-list", { state: formData });
      }
    }
  }
  const handleRemovePlaces = (location) =>{
    setPlaceArr(placeArr.filter((l) => l !== location));
    // const newArea = formData.area.filter((l)=> l !== location );
    // setFormData({...formData,area:newArea})
  }
  return (
    <div
      className="image-cover hero_banner"
      style={{ background: "url(assets/img/banner-1.png) no-repeat" }}
      data-overlay={0}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12 col-lg-12 col-md-12">
            <h1 className="big-header-capt mb-0 text-light" style={{fontSize:'3rem'}}>
              Find your dream home in a click
            </h1>
            <p className="text-center mb-4 text-light">
              Discover your perfect property in a single click
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12">
            <div className="simple_tab_search center">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li
                  className="nav-item"
                  onClick={() => {
                    settab(1);
                  }}
                >
                  <a
                    className={tab === 1 ? "nav-link active" : "nav-link"}
                    style={{
                      fontWeight: "bold",
                      cursor: "pointer",
                      fontSize: "20px",
                    }}
                    id="buy-tab"
                    data-toggle="tab"
                    role="tab"
                    aria-controls="buy"
                    aria-selected="true"
                  >
                    Buy
                  </a>
                </li>
                <li
                  className="nav-item "
                  onClick={() => {
                    settab(2);
                  }}
                >
                  <a
                    className={tab === 2 ? "nav-link active" : "nav-link"}
                    style={{
                      fontWeight: "bold",
                      cursor: "pointer",
                      fontSize: "20px",
                    }}
                    id="sell-tab"
                    data-toggle="tab"
                    role="tab"
                    aria-controls="sell"
                    aria-selected="false"
                  >
                    Rent
                  </a>
                </li>
                <li
                  className="nav-item"
                  onClick={() => {
                    settab(3);
                  }}
                >
                  <a
                    className={tab === 3 ? "nav-link active" : "nav-link"}
                    style={{
                      fontWeight: "bold",
                      cursor: "pointer",
                      fontSize: "20px",
                    }}
                    id="rent-tab"
                    data-toggle="tab"
                    role="tab"
                    aria-controls="rent"
                    aria-selected="false"
                  >
                    Commercial
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  role="tabpanel"
                  aria-labelledby="buy-tab"
                >
                  <div className="full_search_box nexio_search lightanic_search hero_search-radius modern">
                    <div className="search_hero_wrapping">
                      <div className="row">
                        <div className="col-lg-2 col-md-2 col-sm-12">
                          <div className="form-group">
                            <label>City</label>
                            <div className="input-with-icon">
                              <select
                                id="location"
                                name="city"
                                defaultValue="Pune"
                                onChange={handleFormAndLocation}
                                className="form-control py-0"
                              >
                                <option value="Pune">Pune</option>
                                <option value="Banglore">Banglore</option>
                                <option value="Noida">Noida</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Gurgaon">Gurgaon</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Gaziabad">Gaziabad</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 col-md-4">
                          <div className="form-group">
                            <label>Area</label>
                             <Autocomplete
                              onPlaceChanged={handlePlaceChanged}
                              onLoad={(autoComplete) =>
                                setAutoComp(autoComplete)
                              }
                              options={options}
                            >
                             <div className="d-flex"> {placeArr.map((curEle)=>{
                              return <p className="text-dark mr-1 bg-info mt-1 mb-0 px-1 rounded" style={{fontSize:'.9rem'}}>{curEle.split(' ')[0]}<span className="pl-1" style={{cursor:'pointer',fontWeight:'bolder'}} onClick={() => handleRemovePlaces(curEle)}>x</span> </p> 
                              })}
                             <input
                                type="text"
                                ref={originRef}
                                // onChange={handleForm}
                                name="area"
                                className={placeArr.length !== 3 ? "form-control search_input b-0" : "form-control search_input invisible b-0"}
                                placeholder={placeArr.length === 0 ? "ex. Baner" : "Add More.."}
                              /></div>
                              {/*  */}
                            </Autocomplete>
                            
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                          <div className="form-group">
                            <label>Property Type</label>
                            {tab === 1 && (
                              <div className="input-with-icon">
                                <select
                                  id="ptypes"
                                  name="proptype"
                                  defaultValue={0}
                                  onChange={handleForm}
                                  className="form-control py-0"
                                >
                                  <option value={0} disabled>
                                    Select categories
                                  </option>
                                  <option value={1}>Full House</option>
                                  <option value={2}>Land/Plots</option>
                                </select>
                              </div>
                            )}
                            {tab === 2 && (
                              <div className="input-with-icon">
                                <select
                                  id="ptypes"
                                  name="proptype"
                                  onChange={handleForm}
                                  defaultValue={0}
                                  className="form-control py-0"
                                >
                                  {/* <option value>&nbsp;</option> */}
                                  <option disabled value={0}>
                                    Select categories
                                  </option>
                                  <option value={1}>Full House</option>
                                  <option value={2}>Flatmates</option>
                                  <option value={3}>Paying Guest</option>
                                </select>
                              </div>
                            )}
                            {tab === 3 && (
                              <div className="input-with-icon">
                                <select
                                  name="proptype"
                                  onChange={handleForm}
                                  id="ptypes"
                                  defaultValue={0}
                                  className="form-control py-0"
                                >
                                  {/* <option value>&nbsp;</option> */}
                                  <option disabled value={0}>
                                    Select categories
                                  </option>

                                  <option value={1}>Commercial Buy</option>
                                  <option value={2}>Commercial Rent</option>
                                </select>
                              </div>
                            )}
                          </div>
                        </div>

                        <div
                          className="col-lg-3 col-md-3 col-sm-12 small-padd"
                          onClick={handleClick}
                        >
                          <div className="form-group none">
                            <a className="btn search-btn text-white">
                              Search Property
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer style={{paddingTop:'5rem'}}/>

    </div>
  );
};

export default HeroBanner;
