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

const ResidentialPg = () => {
  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef()
  const context = useContext(propertyContext);
  const { host } = context;
  const [currentStep, setCurrentStep] = useState(0);
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
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCjYb2QG0B00lOeygGl9w2Nib4-NpBIc9U",
    libraries: libraries,
  })

  if (!isLoaded) {
    return <h4> Loading....</h4>
  }
  function handleStep(step, setFieldValue) {
    function handleLocation(e) {
      setFieldValue('rpg_location_latitiude', e.lat);
      setFieldValue('rpg_location_longitude', e.lng);
    }
    switch (step) {
      case 0:
        return <>
         <div className='row justify-content-center  rounded' >
<div className='col-md-8 rounded bg-white mb-0 '>
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
                     

                      </ul>
                    </div>
                  </div>
            <div className="frm_submit_wrap">
              <div className="form-row p-2">
              
                <div className="form-group col-md-3">
                  <label>Occupany Type</label>


                  <Field type="number" className="form-control no-spinner" min="0" name="rpg_detail_room_occupany" />
                  <ErrorMessage name='rpg_detail_room_occupany' className='text-danger' component='div' />
                </div>

                <div className="form-group col-md-3">
                  <label>Room Rent</label>
                  <Field type="number" name="rpg_detail_room_rent"className="form-control no-spinner" min="0" />
                  <ErrorMessage name='rpg_detail_room_rent' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-3">
                  <label>Room Deposit</label>
                  <Field type="number" name="rpg_detail_room_deposit" className="form-control no-spinner" min="0" />
                  <ErrorMessage name='rpg_detail_room_deposit' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-3">
                  <label>Available For</label>
                  <Field as="select" name="rpg_detail_availablefor" className="form-control" >
                    <option value={undefined} selected>Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Anyone">Anyone</option>

                  </Field>
                  <ErrorMessage name='rpg_detail_availablefor' className='text-danger' component='div' />
                </div>

                <div className="form-group col-md-6">
                  <label>Prefered Guest</label>
                  <Field as="select" name="rpg_detail_pref_guest" className="form-control" >
                    <option value={undefined} selected>Select</option>
                    <option value="Working Professional">Working Professional</option>
                    <option value="Student">Student</option>
                    <option value="Both">Both</option>
                  </Field>
                  <ErrorMessage name='rpg_detail_pref_guest' className='text-danger' component='div' />
                </div>

                <div className="form-group col-md-3">
                  <label>Available From</label>
                  <Field type="date" name="rpg_detail_available_from" className="form-control" />
                  <ErrorMessage name='rpg_detail_available_from' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-3">
                  <label>Gate Shut Time</label>
                  <Field type="time" name="rpg_detail_gate_shut_time" className="form-control" />
                  <ErrorMessage name='rpg_detail_gate_shut_time' className='text-danger' component='div' />
                </div>
                

                <div className="form-group col-md-3">
                  <label>Parking</label>
                  <Field as="select" name="rpg_detail_parking" className="form-control">
                    <option value={undefined} selected>Select</option>
                    <option value="Car">Car</option>
                    <option value="Bike">Bike</option>
                    <option value="Both">Both</option>
                    <option value="None">None</option>
                  </Field>
                  <ErrorMessage name='rpg_detail_parking' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-3" style={{marginTop:'2.5rem'}}>
                  <ul className=" ">
                    <li>
                      <Field id="a-123" className="checkbox-custom" name="rpg_detail_food_included" type="checkbox" />
                      <label htmlFor="a-123" className="checkbox-custom-label">Food Included</label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            </div>
            </div>
          </div></>
      case 1:
        return  <div className='row justify-content-center  rounded' >
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
                        

                      </ul>
                    </div>
                  </div>
          <div className="frm_submit_wrap">
            <div className="form-row">
              <div className='col-md-5'>
              <div className=" col-md-12">
              <label>Society</label>

                <Field name='rpg_location_state' type='text' className='form-control' placeholder="Enter the Society" />
                <ErrorMessage name='rpg_location_state' className='text-danger' component='div' />
              </div>

              <div className="col-md-12">
              <label>Location</label>

                <Field name="rpg_location_city">
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
        return <div className='row justify-content-center  rounded' >
        <div className='col-md-10 rounded bg-white mb-0 '>  
        <div className="frm_submit_block">
          {/* <h3 className='text-dark'>Rules</h3> */}
          <div className="shorting_pagination pb-2">
                    <div className="shorting_pagination_laft">
                      <h3 className='text-dark'>Rules</h3>
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
            <div className="o-features">
              <ul className="no-ul-list pl-4 third-row">
                <li>
                  <Field id="a-100" className="checkbox-custom" name="rpg_rules_no_smoking" type="checkbox" />
                  <label htmlFor="a-100" className="checkbox-custom-label">No Smooking</label>
                </li>
                <li>
                  <Field id="a-101" className="checkbox-custom" name="rpg_rules_no_guardian_stay" type="checkbox" />
                  <label htmlFor="a-101" className="checkbox-custom-label">No  Guardian Stay</label>
                </li>
                <li>
                  <Field id="a-102" className="checkbox-custom" name="rpg_rules_no_girls_entry" type="checkbox" />
                  <label htmlFor="a-102" className="checkbox-custom-label">No Girls Entry</label>
                </li>
                <li>
                  <Field id="a-103" className="checkbox-custom" name="rpg_rules_no_drinking" type="checkbox" />
                  <label htmlFor="a-103" className="checkbox-custom-label">No Drinking</label>
                </li>
                <li>
                  <Field id="a-104" className="checkbox-custom" name="rpg_rules_no_non_veg" type="checkbox" />
                  <label htmlFor="a-104" className="checkbox-custom-label">No Non-Veg</label>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </div>
        </div>


      case 3:
        return <>
        <div className='row justify-content-center  rounded' >
<div className='col-md-8 rounded bg-white mb-0 '>
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
                        

                      </ul>
                    </div>
                  </div>
            <div className="frm_submit_wrap">
              <div className="form-row pl-3">
                   <div className="form-group col-md-12">
                  <label>Property Description<a href className="tip-topdata" data-tip="Property Description"><i className="ti-help" /></a></label>
                  <Field type="text" name="rpg_detail_description" className="form-control" />
                  <ErrorMessage name='rpg_detail_description' className='text-danger' component='div' />
                </div> 
                <div className="form-group col-md-12">
                  <label>Other Features (optional)</label>
                  <div className="o-features">
                    <ul className="no-ul-list third-row">
                      <li>
                        <Field id="a-1" className="checkbox-custom" name="rpg_amenities_cupboard" type="checkbox" />
                        <label htmlFor="a-1" className="checkbox-custom-label">Cupboard</label>
                      </li>
                      <li>
                        <Field id="a-13" className="checkbox-custom" name="rpg_amenities_tv" type="checkbox" />
                        <label htmlFor="a-13" className="checkbox-custom-label">TV</label>
                      </li>
                      <li>
                        <Field id="a-14" className="checkbox-custom" name="rpg_amenities_bed" type="checkbox" />
                        <label htmlFor="a-14" className="checkbox-custom-label">Bed</label>
                      </li>
                      <li>
                        <Field id="a-15" className="checkbox-custom" name="rpg_amenities_geyser" type="checkbox" />
                        <label htmlFor="a-15" className="checkbox-custom-label">Geyser</label>
                      </li>
                      <li>
                        <Field id="a-16" className="checkbox-custom" name="rpg_amenities_ac" type="checkbox" />
                        <label htmlFor="a-16" className="checkbox-custom-label">AC</label>
                      </li>
                      <li>
                        <Field id="a-17" className="checkbox-custom" name="rpg_amenities_attached_bathroom" type="checkbox" />
                        <label htmlFor="a-17" className="checkbox-custom-label">Bathroom</label>
                      </li>
                      <li>
                        <Field id="a-18" className="checkbox-custom" name="rpg_amenities_laundry" type="checkbox" />
                        <label htmlFor="a-18" className="checkbox-custom-label">Laundry</label>
                      </li>
                      <li>
                        <Field id="a-19" className="checkbox-custom" name="rpg_amenities_room_cleaning" type="checkbox" />
                        <label htmlFor="a-19" className="checkbox-custom-label">Room Cleaning</label>
                      </li>
                      <li>
                        <Field id="a-20" className="checkbox-custom" name="rpg_amenities_warden_facility" type="checkbox" />
                        <label htmlFor="a-20" className="checkbox-custom-label">Warden Facility</label>
                      </li>
                      <li>
                        <Field id="a-21" className="checkbox-custom" name="rpg_amenities_common_tv" type="checkbox" />
                        <label htmlFor="a-21" className="checkbox-custom-label">Common TV</label>
                      </li>
                      <li>
                        <Field id="a-22" className="checkbox-custom" name="rpg_amenities_lift" type="checkbox" />
                        <label htmlFor="a-22" className="checkbox-custom-label">Lift</label>
                      </li>
                      <li>
                        <Field id="a-50" className="checkbox-custom" name="rpg_amenities_wifi" type="checkbox" />
                        <label htmlFor="a-50" className="checkbox-custom-label">WiFi</label>
                      </li>
                      <li>
                        <Field id="a-2" className="checkbox-custom" name="rpg_amenities_power_backup" type="checkbox" />
                        <label htmlFor="a-2" className="checkbox-custom-label">Power backup</label>
                      </li>
                      <li>
                        <Field id="a-3" className="checkbox-custom" name="rpg_amenities_mess" type="checkbox" />
                        <label htmlFor="a-3" className="checkbox-custom-label">Mess</label>
                      </li>
                      <li>
                        <Field id="a-4" className="checkbox-custom" name="rpg_amenities_fridge" type="checkbox" />
                        <label htmlFor="a-4" className="checkbox-custom-label">Fridge</label>
                      </li>
                      <li>
                        <Field id="a-5" className="checkbox-custom" name="rpg_amenities_mess_cooking" type="checkbox" />
                        <label htmlFor="a-5" className="checkbox-custom-label">Mess Cooking</label>
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
    rpg_detail_room_occupany: Yup.number().required('This Field is Required').positive('Please Enter Positive'),
    rpg_detail_room_rent: Yup.number().required('This Field is Required').positive('Please Enter Positive'),
    rpg_detail_room_deposit: Yup.number().required('This Field is Required').positive('Please Enter Positive'),
    rpg_detail_availablefor: Yup.string().required('This Field is Required'),
    rpg_detail_pref_guest: Yup.string().required('This Field is Required'),
    rpg_detail_available_from: Yup.string().required('This Field is Required'),
    rpg_detail_food_included: Yup.boolean(),
    rpg_detail_gate_shut_time: Yup.string().required('This Field is Required'),
    rpg_detail_parking: Yup.string().required('This Field is Required'),

  }),
  Yup.object().shape({
    rpg_location_city: Yup.string(),
    rpg_location_state: Yup.string().required('Required'),
  }),
  Yup.object().shape({
    rpg_rules_no_smoking: Yup.string().required('Required'),
    rpg_rules_no_guardian_stay: Yup.string().required('Required'),
    rpg_rules_no_girls_entry: Yup.string().required('Required'),
    rpg_rules_no_drinking: Yup.string().required('Required'),
    rpg_rules_no_non_veg: Yup.string().required('Required'),
  }),

  Yup.object().shape({
    rpg_detail_description: Yup.string().required('This Field is Required'),
    rpg_amenities_cupboard: Yup.boolean(),
    rpg_amenities_tv: Yup.boolean(),
    rpg_amenities_bed: Yup.boolean(),
    rpg_amenities_geyser: Yup.boolean(),
    rpg_amenities_ac: Yup.boolean(),
    rpg_amenities_attached_bathroom: Yup.boolean(),
    rpg_amenities_laundry: Yup.boolean(),
    rpg_amenities_room_cleaning: Yup.boolean(),
    rpg_amenities_warden_facility: Yup.boolean(),
    rpg_amenities_common_tv: Yup.boolean(),
    rpg_amenities_lift: Yup.boolean(),
    rpg_amenities_wifi: Yup.boolean(),
    rpg_amenities_power_backup: Yup.boolean(),
    rpg_amenities_mess: Yup.boolean(),
    rpg_amenities_fridge: Yup.boolean(),
    rpg_amenities_mess_cooking: Yup.boolean(),
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
                <h2 className="breadcrumb-title">Residential Pg Property</h2>
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
                    rpg_detail_description: "",
                    rpg_detail_room_occupany: "",
                    rpg_detail_room_deposit: "",
                    rpg_detail_availablefor: "",
                    rpg_detail_pref_guest: "",
                    rpg_detail_available_from: "",
                    rpg_detail_food_included: "",
                    rpg_detail_gate_shut_time: "",
                    rpg_detail_parking: "",

                    rpg_detail_room_rent: "",

                    rpg_rules_no_smoking: false,
                    rpg_rules_no_guardian_stay: false,
                    rpg_rules_no_girls_entry: false,
                    rpg_rules_no_drinking: false,
                    rpg_rules_no_non_veg: false,

                    rpg_location_state: "",
                    rpg_location_city: "",
                    rpg_location_latitiude: "",
                    rpg_location_longitude: "",
                    rpg_location_iframe: "",


                    rpg_amenities_cupboard: false,
                    rpg_amenities_tv: false,
                    rpg_amenities_bed: false,
                    rpg_amenities_geyser: false,
                    rpg_amenities_ac: false,
                    rpg_amenities_attached_bathroom: false,
                    rpg_amenities_laundry: false,
                    rpg_amenities_room_cleaning: false,
                    rpg_amenities_lift: false,
                    rpg_amenities_wifi: false,
                    rpg_amenities_power_backup: false,
                    rpg_amenities_mess: false,
                    rpg_amenities_fridge: false,
                    rpg_amenities_mess_cooking: false,
                  }}
                  validationSchema={Schema[currentStep]}
                  onSubmit={(values, { setSubmitting, setFieldValue, setTouched }) => {
                    if (currentStep === 1) {
                      setFieldValue('rpg_location_city', originRef.current.value)
                      setSubmitting(false);
                      setCurrentStep(currentStep + 1)
                      setTouched({})

                    } else if (currentStep === 4) {
                      const formData = new FormData();
                      formData.append("rpg_detail_description", values.rpg_detail_description)
                      formData.append("rpg_detail_room_occupany", values.rpg_detail_room_occupany)
                      formData.append("rpg_detail_room_deposit", values.rpg_detail_room_deposit)
                      formData.append("rpg_detail_availablefor", values.rpg_detail_availablefor)
                      formData.append("rpg_detail_pref_guest", values.rpg_detail_pref_guest)
                      formData.append("rpg_detail_available_from", values.rpg_detail_available_from)
                      formData.append("rpg_detail_food_included", values.rpg_detail_food_included)
                      formData.append("rpg_detail_gate_shut_time", values.rpg_detail_gate_shut_time)
                      formData.append("rpg_detail_parking", values.rpg_detail_parking)
                      formData.append("rpg_rules_no_girls_entry", values.rpg_rules_no_girls_entry)
                      formData.append("rpg_rules_no_drinking", values.rpg_rules_no_drinking)
                      formData.append("rpg_rules_no_non_veg", values.rpg_rules_no_non_veg)

                      formData.append("rpg_detail_room_rent", values.rpg_detail_room_rent)

                      formData.append("rpg_location_state", values.rpg_location_state)
                      formData.append("rpg_location_city", values.rpg_location_city)
                      formData.append("rpg_location_latitiude", values.rpg_location_latitiude)
                      formData.append("rpg_location_longitude", values.rpg_location_longitude)
                      formData.append("rpg_location_iframe", values.rpg_location_iframe)

                      formData.append("rpg_amenities_cupboard", values.rpg_amenities_cupboard)
                      formData.append("rpg_amenities_tv", values.rpg_amenities_tv)
                      formData.append("rpg_amenities_bed", values.rpg_amenities_bed)
                      formData.append("rpg_amenities_geyser", values.rpg_amenities_geyser)
                      formData.append("rpg_amenities_ac", values.rpg_amenities_ac)
                      formData.append("rpg_amenities_attached_bathroom", values.rpg_amenities_attached_bathroom)
                      formData.append("rpg_amenities_laundry", values.rpg_amenities_laundry)
                      formData.append("rpg_amenities_room_cleaning", values.rpg_amenities_room_cleaning)
                      formData.append("rpg_amenities_lift", values.rpg_amenities_lift)
                      formData.append("rpg_amenities_wifi", values.rpg_amenities_wifi)
                      formData.append("rpg_amenities_power_backup", values.rpg_amenities_power_backup)
                      formData.append("rpg_amenities_mess", values.rpg_amenities_mess)
                      formData.append("rpg_amenities_fridge", values.rpg_amenities_fridge)
                      formData.append("rpg_amenities_mess_cooking", values.rpg_amenities_mess_cooking)
                      console.log(formData)
                      Array.from(file).forEach((item) => {
                        formData.append("image", item);
                      });
                      setShowLoader(true)
                      axios.post(`${host}/property/add-rpg-prop`, formData, {
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
                      <button type='button' onClick={prevStep} className='btn border-0 btn-danger rounded w-25 ' style={{padding:".8rem "}} disabled={currentStep === 0}>Prev</button>
                      <button type='submit' className='btn  border-0 theme-bg rounded  w-25' style={{padding:".8rem "}} >{currentStep === 4 ? 'Submit' : 'Next'}</button>
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


export default ResidentialPg