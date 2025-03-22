
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
import Loader from '../../loader'
import { successMsg } from '../../notification'
import { PremiumContext } from '../../../context/PremiumContext'

const ResidentialResale = () => {
  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef()
  const context = useContext(propertyContext);
  const { host } = context;
  const [currentStep, setCurrentStep] = useState(0);
  const history = useNavigate()
  const [file, setFile] = useState([]);
  const [autoComplete,setAutoComp] = useState(null);
  const [markerPosition,setMarkerPosition] = useState({ lat: 26.477626, lng: 80.31696 });
  const [libraries,setLibra] = useState(['places'])
  const [placeValue,setPlaceValue] = useState("");
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
  const handleUserPlaceChange = (e) =>{
  const value = e.target.value;
  setPlaceValue(value)
  // console.log(placeValue)
  }
  const handleChildData =(data)=>{
    setPlaceValue(data);
  }
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCjYb2QG0B00lOeygGl9w2Nib4-NpBIc9U",
    libraries:libraries,
  })

  if (!isLoaded) {
    return <h4> Loading....</h4>
  }
  const fileSelected = (event) => {
    setFile(event.target.files);
  };
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };
  function handleStep(step, setFieldValue) {
    function handleLocation(e) {
      setFieldValue('rrs_location_latitiude', e.lat);
      setFieldValue('rrs_location_longitude', e.lng);
    }
    switch (step) {

      case 0:
        return <>
         <div className='row justify-content-center rounded' >
<div className='col-md-11 rounded bg-white mb-0 '>
          <div className="frm_submit_block">
            {/* <h3 className='text-dark'>Property Information</h3> */}
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
                        <li><a>5</a></li>
                        <li><a>6</a></li>

                      </ul>
                    </div>
                  </div>
            <div className="frm_submit_wrap">
              <div className="form-row px-2">
              
                <div className="form-group col-md-3">
                  <label>Apartment Type</label>


                  <Field as="select" className="form-control" name="rrs_detail_app_type">
                    <option value={undefined} selected>Select</option>
                    <option value="Appartment">Appartment</option>
                    <option value="Independent house villa">Independent house villa</option>
                    <option value="Gated Community Villa">Gated Community Villa</option>
                  </Field>
                  <ErrorMessage name='rrs_detail_app_type' className='text-danger' component='div' />
                </div>

                <div className="form-group col-md-3">
                  <label>BHK Type</label>
                  <Field as="select" name="rrs_detail_bhk_type" className="form-control" >
                    <option value={undefined} selected>Select</option>
                    <option value="1 RK">1 RK</option>
                    <option value="1 BHK">1 BHK</option>
                    <option value="2 BHK">2 BHK</option>
                    <option value="3 BHK">3 BHK</option>
                  </Field>
                  <ErrorMessage name='rrs_detail_bhk_type' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-2">
                  <label>Floor</label>
                  <Field as="select" name="rrs_detail_floor" className="form-control" >
                    <option value={undefined} selected>Select</option>
                    <option value="1">1 Floor</option>
                    <option value="2">2 Floor</option>
                    <option value="3">3 Floor</option>
                    <option value="4">4 Floor</option>
                  </Field>
                  <ErrorMessage name='rrs_detail_floor' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-2">
                  <label>Total  Floor</label>
                  <Field as="select" name="rrs_detail_total_floor" className="form-control" >
                    <option value={undefined} selected>Select</option>
                    <option value="1">1 Floor</option>
                    <option value="2">2 Floor</option>
                    <option value="3">3 Floor</option>
                    <option value="4">4 Floor</option>
                    <option value="99+">99+ Floor</option>
                  </Field>
                  <ErrorMessage name='rrs_detail_total_floor' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-2">
                  <label>Floor Type</label>
                  <Field as="select" name="rrs_detail_floor_type" className="form-control" >
                    <option value={undefined} selected>Select</option>
                    <option value="Vitrified Tiles">Vitrified Tiles</option>
                    <option value="Mossaic">Mossaic</option>
                    <option value="Marble">Marble</option>
                    <option value="Granite">Granite</option>
                    <option value="Cement">Cement</option>
                  </Field>
                  <ErrorMessage name='rrs_detail_floor_type' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-3">
                  <label>Kitchen Type</label>
                  <Field as="select" name="rrs_detail_kitchen_type" className="form-control" >
                    <option value={undefined} selected>Select</option>
                    <option value="Modular">Modular</option>
                    <option value="Covered Shelves">Covered Shelves</option>
                    <option value="Open Shelves">open Shelves</option>
                  </Field>
                  <ErrorMessage name='rrs_detail_kitchen_type' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-2">
                  <label>Building Age</label>
                  <Field as="select" name="rrs_detail_prop_age" className="form-control" >
                    <option value={undefined} selected>Select</option>
                    <option value="0-10">0-10yrs</option>
                    <option value="10-20">10-20yrs</option>
                    <option value="20-30">20-30yrs</option>
                    <option value="30-40">30-40yrs</option>
                    <option value="40+">40+ yrs</option>
                  </Field>
                  <ErrorMessage name='rrs_detail_prop_age' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-3">
                  <label>Facing</label>
                  <Field as="select" name="rrs_detail_facing" className="form-control" >
                    <option value={undefined} selected>Select</option>
                    <option value="North">North</option>
                    <option value="East">East</option>
                    <option value="West">West</option>
                    <option value="South">South</option>
                  </Field>
                  <ErrorMessage name='rrs_detail_facing' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-2">
                  <label>Builtup Area</label>
                  <Field type="number" name="rrs_detail_builtup_area" className="form-control no-spinner" min="0" />
                  <ErrorMessage name='rrs_detail_builtup_area' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-2">
                  <label>Carpet Area</label>
                  <Field type="number" name="rrs_detail_carpet_area" className="form-control no-spinner" min="0" />
                  <ErrorMessage name='rrs_detail_carpet_area' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-3">
                  <label>Furnishing</label>
                  <Field as='select' name="rrs_detail_furnishing" className="form-control">
                    <option value={undefined} selected>Select</option>
                    <option value="Furnished">Furnished</option>
                    <option value="Unfurnished">Unfurnished</option>
                    <option value="Semi Furnished">Semi Furnished</option>
                  </Field>
                  <ErrorMessage name='rrs_detail_furnishing' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-2">
                  <label>Parking</label>
                  <Field as="select" name="rrs_detail_parking" className="form-control">
                    <option value={undefined} selected>Select</option>
                    <option value="Car">Car</option>
                    <option value="Bike">Bike</option>
                    <option value="Both">Both</option>
                    <option value="Bone">None</option>
                  </Field>
                  <ErrorMessage name='rrs_detail_parking' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-2">
                  <label>Bathroom</label>
                  <Field type="number" name="rrs_detail_bathroom" className="form-control no-spinner" min="0" />
                  <ErrorMessage name='rrs_detail_bathroom' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-2">
                  <label>Balcony</label>
                  <Field type="number" name="rrs_detail_balcony" className="form-control no-spinner" min="0"/>
                  <ErrorMessage name='rrs_detail_balcony' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-2">
                  <label>Water Supply</label>
                  <Field as='select' name="rrs_detail_water_supply" className="form-control">
                    <option value={undefined} selected>Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="Borewell">Borewell</option>
                    <option value="Corporation">Corporation</option>
                  </Field>
                  <ErrorMessage name='rrs_detail_water_supply' className='text-danger' component='div' />
                </div>
              </div>
            </div>
            </div>
            </div>
          </div></>

      case 1:
        return   <div className='row justify-content-center  rounded' >
        <div className='col-md-12 rounded bg-white mb-0 '> 
        <div className="frm_submit_block">
          {/* <h3 className='text-dark'>Location</h3> */}
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
                        <li><a>5</a></li>
                        <li><a>6</a></li>

                      </ul>
                    </div>
                  </div>
          <div className="frm_submit_wrap">
            <div className="form-row px-2">
              <div className='col-md-5'>
              <div className="form-group col-md-12">
              <label>Society</label>

                <Field name='rrs_location_state' type='text' className='form-control' placeholder="Enter the Society" />
                <ErrorMessage name='rrs_location_state' className='text-danger' component='div' />
              </div>

              <div className="form-group col-md-12">
              <label>Location</label>

                <Field name="rrs_location_city">
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
            {/* <h3 className='text-dark'>Resale Details</h3> */}
            <div className="shorting_pagination pb-2">
                    <div className="shorting_pagination_laft">
                      <h3 className='text-dark'>Resale Details</h3>
                    </div>
                    <div className="shorting_pagination_right">
                      <ul>
                        <li><a className="active theme-bg text-white">1</a></li>
                        <li><a className="active theme-bg text-white">2</a></li>
                        <li><a className="active theme-bg text-white">3</a></li>
                        <li><a>4</a></li>
                        <li><a>5</a></li>
                        <li><a>6</a></li>

                      </ul>
                    </div>
                  </div>
            <div className="frm_submit_wrap">
              <div className="form-row">
              <div className="form-group col-md-12">
                  <label>Property Description<a href className="tip-topdata" data-tip="Property Description"><i className="ti-help" /></a></label>
                  <Field type="text" name="rrs_detail_description" className="form-control" />
                  <ErrorMessage name='rrs_detail_description' className='text-danger' component='div' />
                </div> 
                <div className="form-group col-md-4">
                  <label>Price</label>
                  <Field type="number" name="rrs_resale_detail_exp_price" className="form-control no-spinner" min="0" />
                  <ErrorMessage name='rrs_resale_detail_exp_price' className='text-danger' component='div' />
                </div>

                <div className="form-group col-md-4">
                  <label>Monthly Maintenance</label>
                  <Field type="number" name="rrs_resale_detail_maintenance" className="form-control no-spinner" min="0"/>
                  <ErrorMessage name='rrs_resale_detail_maintenance' className='text-danger' component='div' />
                </div>

                <div className="form-group col-md-4">
                  <label>Available From</label>
                  <Field type="date" name="rrs_resale_detail_available_from" className="form-control" />
                  <ErrorMessage name='rrs_resale_detail_available_from' className='text-danger' component='div' />
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
            {/* <h3 className='text-dark'>Detailed Information</h3> */}
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
                        <li><a>6</a></li>

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
                        <Field id="a-1" className="checkbox-custom" name="rrs_amenities_lift" type="checkbox" />
                        <label htmlFor="a-1" className="checkbox-custom-label">Lift</label>
                      </li>
                      <li>
                        <Field id="a-13" className="checkbox-custom" name="rrs_amenities_ac" type="checkbox" />
                        <label htmlFor="a-13" className="checkbox-custom-label">Air Condition</label>
                      </li>
                      <li>
                        <Field id="a-14" className="checkbox-custom" name="rrs_amenities_intercom" type="checkbox" />
                        <label htmlFor="a-14" className="checkbox-custom-label">Inter Communication</label>
                      </li>
                      <li>
                        <Field id="a-15" className="checkbox-custom" name="rrs_amenities_children_play_area" type="checkbox" />
                        <label htmlFor="a-15" className="checkbox-custom-label">Children Play Area</label>
                      </li>
                      <li>
                        <Field id="a-16" className="checkbox-custom" name="rrs_amenities_servant_room" type="checkbox" />
                        <label htmlFor="a-16" className="checkbox-custom-label">Servent Room</label>
                      </li>
                      <li>
                        <Field id="a-17" className="checkbox-custom" name="rrs_amenities_gas_pipeline" type="checkbox" />
                        <label htmlFor="a-17" className="checkbox-custom-label">Gas Pipeline</label>
                      </li>
                      <li>
                        <Field id="a-18" className="checkbox-custom" name="rrs_amenities_rainwater_harvesting" type="checkbox" />
                        <label htmlFor="a-18" className="checkbox-custom-label">Rainwater Harvesting</label>
                      </li>
                      <li>
                        <Field id="a-19" className="checkbox-custom" name="rrs_amenities_housekeepiing" type="checkbox" />
                        <label htmlFor="a-19" className="checkbox-custom-label">Housekeeping</label>
                      </li>
                      <li>
                        <Field id="a-20" className="checkbox-custom" name="rrs_amenities_visitor_parking" type="checkbox" />
                        <label htmlFor="a-20" className="checkbox-custom-label">Visitor Parking</label>
                      </li>
                      <li>
                        <Field id="a-21" className="checkbox-custom" name="rrs_amenities_club_house" type="checkbox" />
                        <label htmlFor="a-21" className="checkbox-custom-label">House Club</label>
                      </li>
                      <li>
                        <Field id="a-22" className="checkbox-custom" name="rrs_amenities_swimming_pool" type="checkbox" />
                        <label htmlFor="a-22" className="checkbox-custom-label">Swimming Pool</label>
                      </li>
                      <li>
                        <Field id="a-50" className="checkbox-custom" name="rrs_amenities_fire_safety" type="checkbox" />
                        <label htmlFor="a-50" className="checkbox-custom-label">Fire Safety</label>
                      </li>
                      <li>
                        <Field id="a-2" className="checkbox-custom" name="rrs_amenities_shopping_center" type="checkbox" />
                        <label htmlFor="a-2" className="checkbox-custom-label">Shopping Center</label>
                      </li>
                      <li>
                        <Field id="a-3" className="checkbox-custom" name="rrs_amenities_park" type="checkbox" />
                        <label htmlFor="a-3" className="checkbox-custom-label">Park</label>
                      </li>
                      <li>
                        <Field id="a-4" className="checkbox-custom" name="rrs_amenities_internet" type="checkbox" />
                        <label htmlFor="a-4" className="checkbox-custom-label">Internet</label>
                      </li>
                      <li>
                        <Field id="a-5" className="checkbox-custom" name="rrs_amenities_sewage_treatment" type="checkbox" />
                        <label htmlFor="a-5" className="checkbox-custom-label">Sewage Treatment</label>
                      </li>
                      <li>
                        <Field id="a-6" className="checkbox-custom" name="rrs_amenities_power_backup" type="checkbox" />
                        <label htmlFor="a-6" className="checkbox-custom-label">Power Backup</label>
                      </li>
                      <li>
                        <Field id="a-7" className="checkbox-custom" name="rrs_amenities_gated_security" type="checkbox" />
                        <label htmlFor="a-7" className="checkbox-custom-label">Gated Security</label>
                      </li>
                      <li>
                        <Field id="a-8" className="checkbox-custom" name="rrs_amenities_gym" type="checkbox" />
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

      case 5:
        return <>
         <div className="frm_submit_block">
          {/* <h3 className='text-dark'>Gallery</h3> */}
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
                        <li><a className="active theme-bg text-white">6</a></li>

                      </ul>
                    </div>
                  </div>
          <div className="frm_submit_wrap">
            <div className="form-row px-2">
              <div className="form-group col-md-12">
                <label>Upload Gallery</label>
                <div className="dropzone dz-clickable primary-dropzone" >
                  <Field type='file' name='file' onChange={fileSelected}
                    accept="image/*"
                    multiple />
                  <div className="dz-default dz-message">
                    <i className="ti-gallery" />
                    <span>Drag &amp; Drop To Change Logo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div></>

      case 4:
        return <>
        <div className='row justify-content-center  rounded' >
        <div className='col-md-10 rounded bg-white mb-0 '> 
         <div className="frm_submit_block">
          {/* <h3 className='text-dark'>Property Info</h3> */}
          <div className="shorting_pagination pb-2">
                    <div className="shorting_pagination_laft">
                      <h3 className='text-dark'>Property Info</h3>
                    </div>
                    <div className="shorting_pagination_right">
                      <ul>
                        <li><a className="active theme-bg text-white">1</a></li>
                        <li><a className="active theme-bg text-white">2</a></li>
                        <li><a className="active theme-bg text-white">3</a></li>
                        <li><a className="active theme-bg text-white">4</a></li>
                        <li><a className="active theme-bg text-white">5</a></li>
                        <li><a>6</a></li>

                      </ul>
                    </div>
                  </div>
          <div className="frm_submit_wrap">
            <div className="form-row px-2">
              <div className="o-features">
                {/* no-ul-list */}
                <ul className=""> 
                  <li>
                  <Field id="a-345" className="checkbox-custom" name="rrs_info_prop_tax_is_paid" type="checkbox" />
                    <label htmlFor="a-345" className="checkbox-custom-label">Tax is Paid </label>
                   
                  </li>
                  <li>
                  <Field id="a-546" className="checkbox-custom" name="rrs_info_occupany_certificate_available" type="checkbox" />
                    <label htmlFor="a-546" className="checkbox-custom-label">Occupany Certificate Available</label>
                 
                  </li>
                  <li>
                 <Field id="a-654" className="checkbox-custom" name="rss_info_deed_certificate_is_available" type="checkbox" />
                    <label htmlFor="a-654" className="checkbox-custom-label">deed Certificate Available</label>
                  
                  </li>
                </ul>
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
    rrs_detail_app_type: Yup.string().required('This Field is Required'),
    rrs_detail_bhk_type: Yup.string().required('This Field is Required'),
    rrs_detail_floor: Yup.string().required('This Field is Required'),
    rrs_detail_total_floor: Yup.string().required('This Field is Required'),
    rrs_detail_floor_type: Yup.string().required('This Field is Required'),
    rrs_detail_kitchen_type: Yup.string().required('This Field is Required'),
    rrs_detail_prop_age: Yup.string().required('This Field is Required'),
    rrs_detail_facing: Yup.string().required('This Field is Required'),
    rrs_detail_builtup_area: Yup.number().required('This Field is Required').positive("Enter the Positive Nuber"),
    rrs_detail_carpet_area: Yup.number().required('This Field is Required').positive("Enter the Positive Nuber"),
    rrs_detail_furnishing: Yup.string().required('This Field is Required'),
    rrs_detail_parking: Yup.string().required('This Field is Required'),
    rrs_detail_bathroom: Yup.number().required('This Field is Required').positive("Enter the Positive Nuber"),
    rrs_detail_balcony: Yup.number().required('This Field is Required').positive("Enter the Positive Nuber"),
    rrs_detail_water_supply: Yup.string().required('This Field is Required'),

  }),
  Yup.object().shape({
    rrs_location_city: Yup.string(),
    rrs_location_state: Yup.string().required('Required')
  }),
  Yup.object().shape({
    rrs_detail_description: Yup.string().required('This Field is Required'),
    rrs_resale_detail_exp_price: Yup.number().required('This Field is Required').positive("Enter the Positive Nuber"),
    rrs_resale_detail_maintenance: Yup.number().required('This Field is Required').positive("Enter the Positive Nuber"),
    rrs_resale_detail_available_from: Yup.string().required('This Field is Required'),
  }),
  Yup.object().shape({
    rrs_amenities_lift: Yup.boolean(),
    rrs_amenities_ac: Yup.boolean(),
    rrs_amenities_intercom: Yup.boolean(),
    rrs_amenities_children_play_area: Yup.boolean(),
    rrs_amenities_servant_room: Yup.boolean(),
    rrs_amenities_gas_pipeline: Yup.boolean(),
    rrs_amenities_rainwater_harvesting: Yup.boolean(),
    rrs_amenities_housekeepiing: Yup.boolean(),
    rrs_amenities_visitor_parking: Yup.boolean(),
    rrs_amenities_internet: Yup.boolean(),
    rrs_amenities_club_house: Yup.boolean(),
    rrs_amenities_swimming_pool: Yup.boolean(),
    rrs_amenities_fire_safety: Yup.boolean(),
    rrs_amenities_shopping_center: Yup.boolean(),
    rrs_amenities_park: Yup.boolean(),
    rrs_amenities_sewage_treatment: Yup.boolean(),
    rrs_amenities_power_backup: Yup.boolean(),
    rrs_amenities_gated_security: Yup.boolean(),
    rrs_amenities_gym: Yup.boolean(),
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
                <h2 className="breadcrumb-title">Residential Resale Property</h2>
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
                    rrs_detail_description: "",
                    rrs_detail_app_type: "",
                    rrs_detail_bhk_type: "",
                    rrs_detail_floor: "",
                    rrs_detail_total_floor: "",
                    rrs_detail_floor_type: "",
                    rrs_detail_kitchen_type: "",
                    rrs_detail_prop_age: "",
                    rrs_detail_builtup_area: "",
                    rrs_detail_carpet_area: "",
                    rrs_detail_furnishing: "",
                    rrs_detail_parking: "",
                    rrs_detail_bathroom: "",
                    rrs_detail_balcony: "",
                    rrs_detail_water_supply: "",

                    rrs_location_state: "",
                    rrs_location_city: "",
                    rrs_location_latitiude: "",
                    rrs_location_longitude: "",
                    rrs_location_iframe: "",

                    rrs_resale_detail_exp_price: "",
                    rrs_resale_detail_maintenance: "",
                    rrs_resale_detail_available_from: "",

                    rrs_amenities_lift: false,
                    rrs_amenities_ac: false,
                    rrs_amenities_intercom: false,
                    rrs_amenities_children_play_area: false,
                    rrs_amenities_servant_room: false,
                    rrs_amenities_gas_pipeline: false,
                    rrs_amenities_rainwater_harvesting: false,
                    rrs_amenities_housekeepiing: false,
                    rrs_amenities_visitor_parking: false,
                    rrs_amenities_internet: false,
                    rrs_amenities_club_house: false,
                    rrs_amenities_swimming_pool: false,
                    rrs_amenities_fire_safety: false,
                    rrs_amenities_shopping_center: false,
                    rrs_amenities_park: false,
                    rrs_amenities_sewage_treatment: false,
                    rrs_amenities_power_backup: false,
                    rrs_amenities_gated_security: false,
                    rrs_amenities_gym: false,
                    rrs_info_prop_tax_is_paid: false,
                    rrs_info_occupany_certificate_available: false,
                    rss_info_deed_certificate_is_available: false
                  }}
                  validationSchema={Schema[currentStep]}
                  onSubmit={(values, { setSubmitting, setFieldValue,setTouched }) => {
                    if (currentStep===1){
                      setFieldValue('rrs_location_city', originRef.current.value)
                      setSubmitting(false);
                      setCurrentStep(currentStep + 1)
                      setTouched({})

                    }
                   else if (currentStep === 5) {
                      const formData = new FormData();
                      formData.append("rrs_detail_description", values.rrs_detail_description)
                      formData.append("rrs_detail_app_type", values.rrs_detail_app_type)
                      formData.append("rrs_detail_bhk_type", values.rrs_detail_bhk_type)
                      formData.append("rrs_detail_floor", values.rrs_detail_floor)
                      formData.append("rrs_detail_total_floor", values.rrs_detail_total_floor)
                      formData.append("rrs_detail_floor_type", values.rrs_detail_floor_type)
                      formData.append("rrs_detail_kitchen_type", values.rrs_detail_kitchen_type)
                      formData.append("rrs_detail_prop_age", values.rrs_detail_prop_age)
                      formData.append("rrs_detail_facing", values.rrs_detail_facing)
                      formData.append("rrs_detail_builtup_area", values.rrs_detail_builtup_area)
                      formData.append("rrs_detail_carpet_area", values.rrs_detail_carpet_area)
                      formData.append("rrs_detail_furnishing", values.rrs_detail_furnishing)
                      formData.append("rrs_detail_parking", values.rrs_detail_parking)
                      formData.append("rrs_detail_bathroom", values.rrs_detail_bathroom)
                      formData.append("rrs_detail_balcony", values.rrs_detail_balcony)
                      formData.append("rrs_detail_water_supply", values.rrs_detail_water_supply)

                      formData.append("rrs_location_state", values.rrs_location_state)
                      formData.append("rrs_location_city", values.rrs_location_city)
                      formData.append("rrs_location_latitiude", values.rrs_location_latitiude)
                      formData.append("rrs_location_longitude", values.rrs_location_longitude)
                      formData.append("rrs_location_iframe", values.rrs_location_iframe)

                      formData.append("rrs_resale_detail_exp_price", values.rrs_resale_detail_exp_price)
                      formData.append("rrs_resale_detail_maintenance", values.rrs_resale_detail_maintenance)
                      formData.append("rrs_resale_detail_available_from", values.rrs_resale_detail_available_from)

                      formData.append("rrs_amenities_lift", values.rrs_amenities_lift)
                      formData.append("rrs_amenities_ac", values.rrs_amenities_ac)
                      formData.append("rrs_amenities_intercom", values.rrs_amenities_intercom)
                      formData.append("rrs_amenities_children_play_area", values.rrs_amenities_children_play_area)
                      formData.append("rrs_amenities_servant_room", values.rrs_amenities_servant_room)
                      formData.append("rrs_amenities_gas_pipeline", values.rrs_amenities_gas_pipeline)
                      formData.append("rrs_amenities_rainwater_harvesting", values.rrs_amenities_rainwater_harvesting)
                      formData.append("rrs_amenities_housekeepiing", values.rrs_amenities_housekeepiing)
                      formData.append("rrs_amenities_visitor_parking", values.rrs_amenities_visitor_parking)
                      formData.append("rrs_amenities_internet", values.rrs_amenities_internet)
                      formData.append("rrs_amenities_club_house", values.rrs_amenities_club_house)
                      formData.append("rrs_amenities_swimming_pool", values.rrs_amenities_swimming_pool)
                      formData.append("rrs_amenities_fire_safety", values.rrs_amenities_fire_safety)
                      formData.append("rrs_amenities_shopping_center", values.rrs_amenities_shopping_center)
                      formData.append("rrs_amenities_park", values.rrs_amenities_park)
                      formData.append("rrs_amenities_sewage_treatment", values.rrs_amenities_sewage_treatment)
                      formData.append("rrs_amenities_power_backup", values.rrs_amenities_power_backup)
                      formData.append("rrs_amenities_gated_security", values.rrs_amenities_gated_security)
                      formData.append("rrs_amenities_gym", values.rrs_amenities_gym)
                      formData.append("rrs_info_prop_tax_is_paid", values.rrs_info_prop_tax_is_paid)
                      formData.append("rrs_info_occupany_certificate_available", values.rrs_info_occupany_certificate_available)
                      formData.append("rrs_info_deed_certificate_is_available", values.rss_info_deed_certificate_is_available)
                      console.log(formData)
                      Array.from(file).forEach((item) => {
                        formData.append("image", item);
                      });
                      setShowLoader(true)
                      axios.post(`${host}/property/add-rrs-prop`, formData, {
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

                        });

                    } else {

                      setCurrentStep(currentStep + 1);
                      setSubmitting(false);
                      setTouched({})
                      console.log(values)
                    }
                  }
                  }
                >
                  {({ values, isSubmitting, setFieldValue }) => (
                    <Form >
                      {handleStep(currentStep, setFieldValue)}
                      <div className='d-flex justify-content-center'>
                      <button type='button' onClick={prevStep} className='btn border-0 btn-danger rounded w-25 ' style={{padding:".8rem "}}  disabled={currentStep === 0}>Prev</button>
                      <button type='submit' className='btn border-0 theme-bg rounded  w-25' style={{padding:".8rem "}}  >{currentStep === 5 ? 'Submit' : 'Next'}</button>
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


export default ResidentialResale