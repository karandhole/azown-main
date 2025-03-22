import React, { useContext, useRef, useState } from 'react'
import Navbar from '../../Header/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import LocationPicker from './LocationPicker'
import propertyContext from '../../../context/PropertyContext'
import Footer from '../../Footer/Footer'
import { Formik, Form, Field, ErrorMessage, } from "formik";
import * as Yup from 'yup';
import { Autocomplete, useJsApiLoader } from '@react-google-maps/api'
import { successMsg } from '../../notification'
import Loader from '../../loader'
import { PremiumContext } from '../../../context/PremiumContext'


const ResidentialRent = () => {

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef()
  
  const context = useContext(propertyContext);
  const { host } = context;
  const [currentStep, setCurrentStep] = useState(0);
  const [autocompleteRef, setAutocompleteRef] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState({ lat: 26.477626, lng: 80.31696 });
  const history = useNavigate()
  const [file, setFile] = useState([]);
  const [autoComplete,setAutoComp] = useState(null);
  const [markerPosition,setMarkerPosition] = useState({ lat: 26.477626, lng: 80.31696 });
  const [placeValue,setPlaceValue] = useState("");
  const [libraries,setLibra] = useState(['places'])
  const [showLoader,setShowLoader] = useState(false)

  const handlePlaceChanged = (callbackFun) =>{
    const place = autoComplete.getPlace();
    const lat = place.geometry.location.lat();
    const lng = place.geometry.location.lng();
    setPlaceValue(originRef.current.value);
    console.log(lat,lng)
    setMarkerPosition({lat:lat,lng:lng});
   //  console.log(markerPosition);
   callbackFun({lat:lat,lng:lng})
 
   }
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCjYb2QG0B00lOeygGl9w2Nib4-NpBIc9U",
    libraries: libraries,
  })
  const handleUserPlaceChange = (e) =>{
  const value = e.target.value;
  setPlaceValue(value)
  // console.log(placeValue)
  }
  const handleChildData =(data)=>{
    setPlaceValue(data);
  }
  const fileSelected = (event) => {
    setFile(event.target.files);
  };
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  // if (!isLoaded) {
  //   return <h4>Map is Loading....</h4>
  // }
  
  function handleStep(step, setFieldValue) {
    function handleLocation(e) {
      setFieldValue('rr_location_latitiude', e.lat);
      setFieldValue('rr_location_longitude', e.lng);
    }
    switch (step) {

      case 0:
        return <>
         <div className='row justify-content-center  rounded' >
<div className='col-md-11 rounded bg-white mb-0 '>
          <div className="frm_submit_block">
          <div className="shorting_pagination pb-2">
                    <div className="shorting_pagination_laft">
                      <h3 className='text-dark'>Property Information</h3>
                    </div>
                    <div className="shorting_pagination_right">
                      <ul>
                        <li><a className="active theme-bg text-white">1</a></li>
                        <li><a>2</a></li>
                        <li><a>3</a></li>
                        <li><a>4</a></li>
                      </ul>
                    </div>
                  </div>
            <div className="frm_submit_wrap">
              <div className="form-row">

                <div className="form-group col-md-3">
                  <label>Apartment Type</label>


                  <Field as="select" className="form-control" name="rr_detail_app_type">
                    <option value={undefined} selected>Select</option>
                    <option value="Appartment">Appartment</option>
                    <option value="Independent house villa">Independent house villa</option>
                    <option value="Gated Community Villa">Gated Community Villa</option>
                  </Field>
                  <ErrorMessage name='rr_detail_app_type' className='text-danger' component='div' />
                </div>

                <div className="form-group col-md-3">
                  <label>BHK Type</label>
                  <Field as="select" name="rr_detail_bhk_type" className="form-control" >
                    <option value={undefined} selected>Select</option>
                    <option value="1 RK">1 RK</option>
                    <option value="1 BHK">1 BHK</option>
                    <option value="2 BHK">2 BHK</option>
                    <option value="3 BHK">3 BHK</option>
                  </Field>
                  <ErrorMessage name='rr_detail_bhk_type' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-2">
                  <label>Floor</label>
                  <Field as="select" name="rr_detail_floor" className="form-control" >
                    <option value={undefined} selected>Select</option>
                    <option value="1">1 Floor</option>
                    <option value="2">2 Floor</option>
                    <option value="3">3 Floor</option>
                    <option value="4">4 Floor</option>
                  </Field>
                  <ErrorMessage name='rr_detail_floor' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-2">
                  <label>Total  Floor</label>
                  <Field as="select" name="rr_detail_total_floor" className="form-control" >
                    <option value={undefined} selected>Select</option>
                    <option value="1">1 Floor</option>
                    <option value="2">2 Floor</option>
                    <option value="3">3 Floor</option>
                    <option value="4">4 Floor</option>
                    <option value="99+">99+ Floor</option>
                  </Field>
                  <ErrorMessage name='rr_detail_total_floor' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-2">
                  <label>Floor Type</label>
                  <Field as="select" name="rr_detail_floor_type" className="form-control" >
                    <option value={undefined} selected>Select</option>
                    <option value="Vitrified Tiles">Vitrified Tiles</option>
                    <option value="Mossaic">Mossaic</option>
                    <option value="Marble">Marble</option>
                    <option value="Granite">Granite</option>
                    <option value="Cement">Cement</option>
                  </Field>
                  <ErrorMessage name='rr_detail_floor_type' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-3">
                  <label>Kitchen Type</label>
                  <Field as="select" name="rr_detail_kitchen_type" className="form-control" >
                    <option value={undefined} selected>Select</option>
                    <option value="Modular">Modular</option>
                    <option value="Covered Shelves">Covered Shelves</option>
                    <option value="Open Shelves">open Shelves</option>
                  </Field>
                  <ErrorMessage name='rr_detail_kitchen_type' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-2">
                  <label>Building Age</label>
                  <Field as="select" name="rr_detail_prop_age" className="form-control" >
                    <option value={undefined} selected>Select</option>
                    <option value="0-10">0-10yrs</option>
                    <option value="10-20">10-20yrs</option>
                    <option value="20-30">20-30yrs</option>
                    <option value="30-40">30-40yrs</option>
                    <option value="40+">40+ yrs</option>
                  </Field>
                  <ErrorMessage name='rr_detail_prop_age' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-3">
                  <label>Facing</label>
                  <Field as="select" name="rr_detail_facing" className="form-control" >
                    <option value={undefined} selected>Select</option>
                    <option value="North">North</option>
                    <option value="East">East</option>
                    <option value="West">West</option>
                    <option value="South">South</option>
                  </Field>
                  <ErrorMessage name='rr_detail_facing' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-2">
                  <label>Builtup Area</label>
                  <Field type="number" name="rr_detail_builtup_area" className="form-control no-spinner" min="0"/>
                  <ErrorMessage name='rr_detail_builtup_area' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-2">
                  <label>Carpet Area</label>
                  <Field type="number" name="rr_detail_carpet_area" className="form-control no-spinner" min="0"/>
                  <ErrorMessage name='rr_detail_carpet_area' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-2">
                  <label>Furnishing</label>
                  <Field as='select' name="rr_detail_furnishing" className="form-control">
                    <option value={undefined} selected>Select</option>
                    <option value="Furnished">Furnished</option>
                    <option value="Unfurnished">Unfurnished</option>
                    <option value="Semi Furnished">Semi Furnished</option>
                  </Field>
                  <ErrorMessage name='rr_detail_furnishing' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-2">
                  <label>Parking</label>
                  <Field as="select" name="rr_detail_parking" className="form-control">
                    <option value={undefined} selected>Select</option>
                    <option value="Car">Car</option>
                    <option value="Bike">Bike</option>
                    <option value="Both">Both</option>
                    <option value="Bone">None</option>
                  </Field>
                  <ErrorMessage name='rr_detail_parking' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-2">
                  <label>Bathroom</label>
                  <Field type="number" name="rr_detail_bathroom" className="form-control no-spinner" min="0" />
                  <ErrorMessage name='rr_detail_bathroom' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-2">
                  <label>Balcony</label>
                  <Field type="number" name="rr_detail_balcony" className="form-control no-spinner" min="0" />
                  <ErrorMessage name='rr_detail_balcony' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-2">
                  <label>Water Supply</label>
                  <Field as='select' name="rr_detail_water_supply" className="form-control">
                    <option value={undefined} selected>Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="Borewell">Borewell</option>
                    <option value="Corporation">Corporation</option>
                  </Field>
                  <ErrorMessage name='rr_detail_water_supply' className='text-danger' component='div' />
                </div>
              </div>
            </div>
            </div>
            </div>
          </div></>

      case 1:
        return <div className='row justify-content-center  rounded' >
        <div className='col-md-12 rounded bg-white mb-0 '>
           <div className="frm_submit_block">
           <div className="shorting_pagination pb-2">
                    <div className="shorting_pagination_laft">
                      <h3 className='text-dark'>Location</h3>
                    </div>
                    <div className="shorting_pagination_right">
                      <ul>
                        <li><a className="active theme-bg text-white">1</a></li>
                        <li><a className="active theme-bg text-white">2</a></li>
                        <li><a>3</a></li>
                        <li><a>4</a></li>
                      </ul>
                    </div>
                  </div>
          <div className="frm_submit_wrap">
            <div className="form-row px-2">
            <div className='col-md-5'>

            <div className="form-group col-md-12">
                <label>Society</label>
                  
                 <Field name='rr_location_state' type='text' className='form-control' placeholder="Enter the Society" />
                  <ErrorMessage name='rr_location_state' className='text-danger' component='div' />
                </div>

              <div className="form-group col-md-12">
              <label>Location</label>

                <Field name="rr_location_city">
                  {({ values, field, form }) => (
                    <div>
                      <Autocomplete onLoad={(autoComplete)=>setAutoComp(autoComplete)} onPlaceChanged={()=>{handlePlaceChanged(handleLocation);}}>
                        <input type='text' placeholder='Enter the Location' className='form-control' value={placeValue} onChange={handleUserPlaceChange} ref={originRef} required />

                      </Autocomplete>
                    </div>

                  )}

                </Field>
              </div>
              </div>
              <div className='col-md-7'>
              <div className="form-group col-md-12">
                {/* <LocationPicker onLocation={handleLocation} /> */}
                <LocationPicker onLocation={handleLocation} markerPosition={markerPosition} onChildData={handleChildData} />
              </div>
              </div>
</div>
</div>
            </div>
          </div>
        </div>
      case 2:
        return <>
        <div className='row justify-content-center  rounded' >
        <div className='col-md-10 rounded bg-white mb-0 '>
          <div className="frm_submit_block">
          <div className="shorting_pagination pb-2">
                    <div className="shorting_pagination_laft">
                      <h3 className='text-dark'>Rent Detail</h3>
                    </div>
                    <div className="shorting_pagination_right">
                      <ul>
                        <li><a className="active theme-bg text-white">1</a></li>
                        <li><a className="active theme-bg text-white">2</a></li>
                        <li><a className="active theme-bg text-white">3</a></li>
                        <li><a>4</a></li>
                        <li><a>5</a></li>

                      </ul>
                    </div>
                  </div>
            <div className="frm_submit_wrap">
              <div className="form-row px-2">
                
                <div className="form-group col-md-12">
                  <label>Property Description<a  className="tip-topdata" data-tip="Property Description"><i className="ti-help" /></a></label>
                  <Field type="text" name="rr_detail_description" className="form-control" />
                  <ErrorMessage name='rr_detail_description' className='text-danger' component='div' />
                </div> 
                <div className="form-group col-md-3">
                  <label>Rent</label>
                  <Field type="number" name="rr_rental_detail_rent" className="form-control no-spinner" min="0" />
                  <ErrorMessage name='rr_rental_detail_rent' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-3">
                  <label>Expected Deposit</label>
                  <Field type="number" name="rr_rental_detail_exp_deposit" className="form-control no-spinner" min="0" />
                  <ErrorMessage name='rr_rental_detail_exp_deposit' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-2">
                  <label>Negotiable</label>
                  <Field as='select' name="rr_rental_detail_is_nogotiable" className="form-control" >
                    <option value={undefined} selected>Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </Field>
                  <ErrorMessage name='rr_rental_detail_is_nogotiable' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-4">
                  <label>Monthly Maintenance</label>
                  <Field as='select' name="rr_rental_detail_monthly_maintenance" className="form-control" >
                    <option value={undefined} selected>Select</option>
                    <option value="Maintenance Included">Maintenance Included</option>
                    <option value="Maintenance Extra">Maintenance Extra</option>
                  </Field>
                  <ErrorMessage name='rr_rental_detail_monthly_maintenance' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-3">
                  <label>Available From</label>
                  <Field type="date" name="rr_rental_detail_avail_from" className="form-control" />
                  <ErrorMessage name='rr_rental_detail_avail_from' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-3">
                  <label>Prefered Tenent</label>
                  <Field as='select' name="rr_rental_detail_pref_tenent" className="form-control" >
                    <option value={undefined} selected>Select</option>
                    <option value="Doesnot Matter">Doesnt Matter</option>
                    <option value="Family">Family</option>
                    <option value="Bachelors">Bachelors</option>
                    <option value="Company">Company</option>
                  </Field>
                  <ErrorMessage name='rr_rental_detail_pref_tenent' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-3">
                  <label>Non-Veg Allowed</label>
                  <Field as='select' name="rr_rental_detail_is_allowed_nonveg" className="form-control"  >
                    <option value={undefined} selected>Select</option>
                    <option value="No">No</option>
                    <option value="Yes" >Yes</option>
                  </Field>
                  <ErrorMessage name='rr_rental_detail_is_allowed_nonveg' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-3">
                  <label>Shown By</label>
                  <Field as='select' name="rr_rental_detail_shown_by" className="form-control" >
                    <option value={undefined} selected>Select</option>
                    <option value="Doesnot Matter">Doesnt Matter</option>
                    <option value="I will show">I Will Show</option>
                    <option value="Friends">Friends</option>
                    <option value="Neighbour">Neighbour</option>
                    <option value="Security">Security</option>
                    <option value="Tenents">Tenents</option>
                  </Field>
                  <ErrorMessage name='rr_rental_detail_shown_by' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-6">
                  <label>Shown By Number</label>
                  <Field type="number" name="rr_rental_detail_shown_by_number" className="form-control no-spinner" min="0" />
                  <ErrorMessage name='rr_rental_detail_shown_by_number' className='text-danger' component='div' />
                </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </>
      case 3:
        return <>
          <div className='row justify-content-center  rounded' >
        <div className='col-md-10 rounded bg-white mb-0 '>
          <div className="frm_submit_block">
            {/* <h3 className='text-dark'></h3> */}
            <div className="shorting_pagination pb-2">
                    <div className="shorting_pagination_laft">
                      <h3 className='text-dark'>Detailed Information</h3>
                    </div>
                    <div className="shorting_pagination_right">
                      <ul>
                        <li><a className="active theme-bg text-white">1</a></li>
                        <li><a className="active theme-bg text-white">2</a></li>
                        <li><a className="active theme-bg text-white">3</a></li>
                        <li><a className="active theme-bg text-white">4</a></li>
                        <li><a>5</a></li>

                      </ul>
                    </div>
                  </div>
            <div className="frm_submit_wrap">
              <div className="form-row px-2">
                <div className="form-group col-md-12">
                  <label>Other Features (optional)</label>
                  <div className="o-features">
                    <ul className="no-ul-list third-row">
                      <li>
                        <Field id="a-1" className="checkbox-custom" name="rr_amenities_lift" type="checkbox" />
                        <label htmlFor="a-1" className="checkbox-custom-label">Lift</label>
                      </li>
                      <li>
                        <Field id="a-13" className="checkbox-custom" name="rr_amenities_ac" type="checkbox" />
                        <label htmlFor="a-13" className="checkbox-custom-label">Air Condition</label>
                      </li>
                      <li>
                        <Field id="a-14" className="checkbox-custom" name="rr_amenities_intercom" type="checkbox" />
                        <label htmlFor="a-14" className="checkbox-custom-label">Inter Communication</label>
                      </li>
                      <li>
                        <Field id="a-15" className="checkbox-custom" name="rr_amenities_children_play_area" type="checkbox" />
                        <label htmlFor="a-15" className="checkbox-custom-label">Children Play Area</label>
                      </li>
                      <li>
                        <Field id="a-16" className="checkbox-custom" name="rr_amenities_servant_room" type="checkbox" />
                        <label htmlFor="a-16" className="checkbox-custom-label">Servent Room</label>
                      </li>
                      <li>
                        <Field id="a-17" className="checkbox-custom" name="rr_amenities_gas_pipeline" type="checkbox" />
                        <label htmlFor="a-17" className="checkbox-custom-label">Gas Pipeline</label>
                      </li>
                      <li>
                        <Field id="a-18" className="checkbox-custom" name="rr_amenities_rainwater_harvesting" type="checkbox" />
                        <label htmlFor="a-18" className="checkbox-custom-label">Rainwater Harvesting</label>
                      </li>
                      <li>
                        <Field id="a-19" className="checkbox-custom" name="rr_amenities_housekeepiing" type="checkbox" />
                        <label htmlFor="a-19" className="checkbox-custom-label">Housekeeping</label>
                      </li>
                      <li>
                        <Field id="a-20" className="checkbox-custom" name="rr_amenities_visitor_parking" type="checkbox" />
                        <label htmlFor="a-20" className="checkbox-custom-label">Visitor Parking</label>
                      </li>
                      <li>
                        <Field id="a-21" className="checkbox-custom" name="rr_amenities_club_house" type="checkbox" />
                        <label htmlFor="a-21" className="checkbox-custom-label">House Club</label>
                      </li>
                      <li>
                        <Field id="a-22" className="checkbox-custom" name="rr_amenities_swimming_pool" type="checkbox" />
                        <label htmlFor="a-22" className="checkbox-custom-label">Swimming Pool</label>
                      </li>
                      <li>
                        <Field id="a-50" className="checkbox-custom" name="rr_amenities_fire_safety" type="checkbox" />
                        <label htmlFor="a-50" className="checkbox-custom-label">Fire Safety</label>
                      </li>
                      <li>
                        <Field id="a-2" className="checkbox-custom" name="rr_amenities_shopping_center" type="checkbox" />
                        <label htmlFor="a-2" className="checkbox-custom-label">Shopping Center</label>
                      </li>
                      <li>
                        <Field id="a-3" className="checkbox-custom" name="rr_amenities_park" type="checkbox" />
                        <label htmlFor="a-3" className="checkbox-custom-label">Park</label>
                      </li>
                      <li>
                        <Field id="a-4" className="checkbox-custom" name="rr_amenities_internet" type="checkbox" />
                        <label htmlFor="a-4" className="checkbox-custom-label">Internet</label>
                      </li>
                      <li>
                        <Field id="a-5" className="checkbox-custom" name="rr_amenities_sewage_treatment" type="checkbox" />
                        <label htmlFor="a-5" className="checkbox-custom-label">Sewage Treatment</label>
                      </li>
                      <li>
                        <Field id="a-6" className="checkbox-custom" name="rr_amenities_power_backup" type="checkbox" />
                        <label htmlFor="a-6" className="checkbox-custom-label">Power Backup</label>
                      </li>
                      <li>
                        <Field id="a-7" className="checkbox-custom" name="rr_amenities_gated_security" type="checkbox" />
                        <label htmlFor="a-7" className="checkbox-custom-label">Gated Security</label>
                      </li>
                      <li>
                        <Field id="a-8" className="checkbox-custom" name="rr_amenities_gym" type="checkbox" />
                        <label htmlFor="a-8" className="checkbox-custom-label">GYM</label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            </div>
            </div>
          </div>
        </>

      case 4:
        return <> <div className="frm_submit_block">
          {/* <h3 className='text-dark'></h3> */}
          <div className="shorting_pagination pb-2">
                    <div className="shorting_pagination_laft">
                      <h3 className='text-dark'>Gallery</h3>
                    </div>
                    <div className="shorting_pagination_right">
                      <ul>
                        <li><a className="active theme-bg text-white">1</a></li>
                        <li><a className="active theme-bg text-white">2</a></li>
                        <li><a className="active theme-bg text-white">3</a></li>
                        <li><a className="active theme-bg text-white">4</a></li>
                        <li><a className="active theme-bg text-white">5</a></li>

                      </ul>
                    </div>
                  </div>
          <div className="frm_submit_wrap">
            <div className="form-row">
              <div className="form-group col-md-12">
                <label>Upload Gallery</label>
                <div className="dropzone dz-clickable primary-dropzone" >
                  <Field type='file' name='file' onChange={fileSelected}
                    accept="image/*"
                    multiple />
                  <ErrorMessage name='file' component='div'
                  />
                  <div className="dz-default dz-message">
                    <i className="ti-gallery" />
                    <span>Drag &amp; Drop To Change Logo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div></>

      default:
        break;
    }
  }



  const Schema = [Yup.object().shape({
    rr_detail_app_type: Yup.string().required('This Field is Required'),
    rr_detail_bhk_type: Yup.string().required('This Field is Required'),
    rr_detail_floor: Yup.string().required('This Field is Required'),
    rr_detail_total_floor: Yup.string().required('This Field is Required'),
    rr_detail_floor_type: Yup.string().required('This Field is Required'),
    rr_detail_kitchen_type: Yup.string().required('This Field is Required'),
    rr_detail_prop_age: Yup.string().required('This Field is Required'),
    rr_detail_facing: Yup.string().required('This Field is Required'),
    rr_detail_builtup_area: Yup.number().required('This Field is Required').positive('Enter the Positive Value'),
    rr_detail_carpet_area: Yup.number().required('This Field is Required').positive('Enter the Positive Value'),
    rr_detail_furnishing: Yup.string().required('This Field is Required'),
    rr_detail_parking: Yup.string().required('This Field is Required'),
    rr_detail_bathroom: Yup.number().required('This Field is Required').positive('Enter the Positive Value'),
    rr_detail_balcony: Yup.number().required('This Field is Required').positive('Enter the Positive Value'),
    rr_detail_water_supply: Yup.string().required('This Field is Required'),

  }),
  Yup.object().shape({
    rr_location_city: Yup.string(),
    rr_location_state: Yup.string().required('This Field is Required')
  }),
  Yup.object().shape({
    rr_detail_description: Yup.string().required('This Field is Required'),
    rr_rental_detail_rent: Yup.number().required('This Field is Required').positive('Enter the Positive Value'),
    rr_rental_detail_exp_deposit: Yup.number().required('This Field is Required').positive('Enter the Positive Value'),
    rr_rental_detail_is_nogotiable: Yup.string().required('This Field is Required'),
    rr_rental_detail_monthly_maintenance: Yup.string().required('This Field is Required'),
    rr_rental_detail_avail_from: Yup.string().required('This Field is Required'),
    rr_rental_detail_pref_tenent: Yup.string().required('This Field is Required'),
    rr_rental_detail_is_allowed_nonveg: Yup.string().required('This Field is Required'),
    rr_rental_detail_shown_by: Yup.string(),
    rr_rental_detail_shown_by_number: Yup.number().required('This Field is Required').positive('Enter the Positive Value'),
  }),
  Yup.object().shape({
    rr_amenities_lift: Yup.boolean(),
    rr_amenities_ac: Yup.boolean(),
    rr_amenities_intercom: Yup.boolean(),
    rr_amenities_children_play_area: Yup.boolean(),
    rr_amenities_servant_room: Yup.boolean(),
    rr_amenities_gas_pipeline: Yup.boolean(),
    rr_amenities_rainwater_harvesting: Yup.boolean(),
    rr_amenities_housekeepiing: Yup.boolean(),
    rr_amenities_visitor_parking: Yup.boolean(),
    rr_amenities_internet: Yup.boolean(),
    rr_amenities_club_house: Yup.boolean(),
    rr_amenities_swimming_pool: Yup.boolean(),
    rr_amenities_fire_safety: Yup.boolean(),
    rr_amenities_shopping_center: Yup.boolean(),
    rr_amenities_park: Yup.boolean(),
    rr_amenities_sewage_treatment: Yup.boolean(),
    rr_amenities_power_backup: Yup.boolean(),
    rr_amenities_gated_security: Yup.boolean(),
    rr_amenities_gym: Yup.boolean(),
  }),
  Yup.object().shape({
    // files: Yup.array().of(Yup.mixed().required('At least one image is required'))

  }),



  ]







  return (
    <div id="main-wrapper">
      {showLoader && <Loader/>}
      <Navbar />
      <div className="clearfix" />
      <div className="page-title" style={{ background: '#f4f4f4 url(assets/img/bg.jpg)' }} data-overlay={5}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="breadcrumbs-wrap">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href>Home</a></li>
                  <li className="breadcrumb-item"><a href>Create Property</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Submit Your Property</li>
                </ol>
                <h2 className="breadcrumb-title">Residential Rent Property</h2>
              </div>
            </div>
          </div>
        </div>
        <section className='container pt-2'>
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white py-3 rounded">
              <div className="submit-page p-0">

                <Formik
                  initialValues={{

                    rr_detail_description: "",
                    rr_detail_app_type: "",
                    rr_detail_bhk_type: "",
                    rr_detail_floor: "",
                    rr_detail_total_floor: "",
                    rr_detail_floor_type: "",
                    rr_detail_kitchen_type: "",
                    rr_detail_prop_age: "",
                    rr_detail_facing: "",
                    rr_detail_builtup_area: "",
                    rr_detail_carpet_area: "",
                    rr_detail_furnishing: "",
                    rr_detail_parking: "",
                    rr_detail_bathroom: "",
                    rr_detail_balcony: "",
                    rr_detail_water_supply: "",
                    rr_location_state: "",
                    rr_location_city: "",
                    rr_location_latitiude: "",
                    rr_location_longitude: "",

                    rr_rental_detail_rent: "",
                    rr_rental_detail_exp_deposit: "",
                    rr_rental_detail_is_nogotiable: "",
                    rr_rental_detail_monthly_maintenance: "",
                    rr_rental_detail_avail_from: "",
                    rr_rental_detail_pref_tenent: "",
                    rr_rental_detail_is_allowed_nonveg: "",
                    rr_rental_detail_shown_by: "",
                    rr_rental_detail_shown_by_number: "",

                    rr_amenities_lift: false,
                    rr_amenities_ac: false,
                    rr_amenities_intercom: false,
                    rr_amenities_children_play_area: false,
                    rr_amenities_servant_room: false,
                    rr_amenities_gas_pipeline: false,
                    rr_amenities_rainwater_harvesting: false,
                    rr_amenities_housekeepiing: false,
                    rr_amenities_visitor_parking: false,
                    rr_amenities_internet: false,
                    rr_amenities_club_house: false,
                    rr_amenities_swimming_pool: false,
                    rr_amenities_fire_safety: false,
                    rr_amenities_shopping_center: false,
                    rr_amenities_park: false,
                    rr_amenities_sewage_treatment: false,
                    rr_amenities_power_backup: false,
                    rr_amenities_gated_security: false,
                    rr_amenities_gym: false,
                  }}
                  validationSchema={Schema[currentStep]}
                  onSubmit={(values, { setSubmitting, setTouched, setFieldValue }) => {
                    if (currentStep === 1) {
                      setFieldValue('rr_location_city', originRef.current.value)
                      setSubmitting(false);
                      setCurrentStep(currentStep + 1)
                      setTouched({})
                    }
                    else if (currentStep === 4) {
                      const formData = new FormData();
                      formData.append("rr_detail_description", values.rr_detail_description);
                      formData.append("rr_detail_app_type", values.rr_detail_app_type)
                      formData.append("rr_detail_bhk_type", values.rr_detail_bhk_type)
                      formData.append("rr_detail_floor", values.rr_detail_floor)
                      formData.append("rr_detail_total_floor", values.rr_detail_total_floor)
                      formData.append("rr_detail_floor_type", values.rr_detail_floor_type)
                      formData.append("rr_detail_kitchen_type", values.rr_detail_kitchen_type)
                      formData.append("rr_detail_prop_age", values.rr_detail_prop_age)
                      formData.append("rr_detail_facing", values.rr_detail_facing)
                      formData.append("rr_detail_builtup_area", values.rr_detail_builtup_area)

                      formData.append("rr_detail_carpet_area", values.rr_detail_carpet_area)
                      formData.append("rr_detail_furnishing", values.rr_detail_furnishing)
                      formData.append("rr_detail_parking", values.rr_detail_parking)
                      formData.append("rr_detail_bathroom", values.rr_detail_bathroom)
                      formData.append("rr_detail_balcony", values.rr_detail_balcony)
                      formData.append("rr_location_state", values.rr_location_state)
                      formData.append("rr_location_city", values.rr_location_city)
                      formData.append("rr_location_latitude", values.rr_location_latitiude)
                      formData.append("rr_location_longitude", values.rr_location_longitude)

                      formData.append("rr_rental_detail_rent", values.rr_rental_detail_rent)
                      formData.append("rr_rental_detail_exp_deposit", values.rr_rental_detail_exp_deposit)
                      formData.append("rr_rental_detail_is_nogotiable", values.rr_rental_detail_is_nogotiable)
                      formData.append("rr_rental_detail_monthly_maintenance", values.rr_rental_detail_monthly_maintenance)
                      formData.append("rr_rental_detail_avail_from", values.rr_rental_detail_avail_from)

                      formData.append("rr_rental_detail_pref_tenent", values.rr_rental_detail_pref_tenent)
                      formData.append("rr_rental_detail_is_allowed_nonveg", values.rr_rental_detail_is_allowed_nonveg)
                      formData.append("rr_rental_detail_shown_by", values.rr_rental_detail_shown_by)
                      formData.append("rr_rental_detail_shown_by_number", values.rr_rental_detail_shown_by_number)

                      formData.append("rr_amenities_lift", values.rr_amenities_lift)
                      formData.append("rr_amenities_ac", values.rr_amenities_ac)
                      formData.append("rr_amenities_intercom", values.rr_amenities_intercom)
                      formData.append("rr_amenities_children_play_area", values.rr_amenities_children_play_area)
                      formData.append("rr_amenities_servant_room", values.rr_amenities_servant_room)
                      formData.append("rr_amenities_gas_pipeline", values.rr_amenities_gas_pipeline)
                      formData.append("rr_amenities_rainwater_harvesting", values.rr_amenities_rainwater_harvesting)
                      formData.append("rr_amenities_housekeepiing", values.rr_amenities_housekeepiing)
                      formData.append("rr_amenities_visitor_parking", values.rr_amenities_visitor_parking)
                      formData.append("rr_amenities_internet", values.rr_amenities_internet)
                      formData.append("rr_amenities_club_house", values.rr_amenities_club_house)
                      formData.append("rr_amenities_swimming_pool", values.rr_amenities_swimming_pool)
                      formData.append("rr_amenities_fire_safety", values.rr_amenities_fire_safety)
                      formData.append("rr_amenities_shopping_center", values.rr_amenities_shopping_center)
                      formData.append("rr_amenities_park", values.rr_amenities_park)
                      formData.append("rr_amenities_sewage_treatment", values.rr_amenities_sewage_treatment)

                      formData.append("rr_amenities_power_backup", values.rr_amenities_power_backup)
                      formData.append("rr_amenities_gated_security", values.rr_amenities_gated_security)
                      formData.append("rr_amenities_gym", values.rr_amenities_gym)
                      console.log(formData)
                      Array.from(file).forEach((item) => {
                        formData.append("image", item);
                      });
                      setShowLoader(true)
                      axios.post(`${host}/property/addprop`, formData, {
                        headers: {
                          "Content-Type": "multipart/form-data",
                          "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,
                        },
                      }).then((response) => {
                        setSubmitting(false);
                        history('/')
                        setTimeout(()=>{successMsg("Your Property Added")},1000)
                      })
                        .catch((error) => {
                          console.error(error);
                          setSubmitting(false);
                          setShowLoader(false)
                        });

                    } else {

                      setCurrentStep(currentStep + 1);
                      setSubmitting(false);
                      setTouched({});
                      console.log(values)
                    }
                  }
                  }
                >
                  {({ values, isSubmitting, setFieldValue }) => (
                    <Form >
                      {handleStep(currentStep, setFieldValue)}
                      <div className='d-flex justify-content-center'>
                      <button type='button' onClick={prevStep} className='btn border-0 btn-danger rounded w-25 ' style={{padding:".8rem "}} disabled={currentStep === 0}>Prev</button>
                      <button type='submit' className='btn  border-0 theme-bg rounded w-25' style={{padding:".8rem "}}  >{currentStep === 4 ? 'Submit' : 'Next'}</button>
                      </div>
                    </Form>

                  )}

                </Formik>





              </div>
            </div>
          </div>
        </div>
        


      </section >
      </div>
      
      <Footer />
    </div >

  )
}

export default ResidentialRent


