import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../Header/Navbar'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import LocationPicker from './LocationPicker'
import propertyContext from '../../../context/PropertyContext'
import Footer from '../../Footer/Footer'
import { Formik, Form, Field, ErrorMessage, } from "formik";
import * as Yup from 'yup';
import { Autocomplete, useJsApiLoader } from '@react-google-maps/api'
import PropertyTemplates from '../../Dashboard/Premium/PropPremium/propertyTemplates'
import IsPremium from '../../Dashboard/Premium/PropPremium/isPropPremium'
import { PremiumContext } from '../../../context/PremiumContext'

const EditPlot = () => {
  
  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef()
  const context = useContext(propertyContext);
  const { host,plotDetail,plotdata } = context;
  const [currentStep, setCurrentStep] = useState(0);
  const history = useNavigate()
  const [file, setFile] = useState([]);
  const [autoComplete,setAutoComp] = useState(null);
  const [markerPosition,setMarkerPosition] = useState({ lat: 26.477626, lng: 80.31696 });
  const [placeValue,setPlaceValue] = useState("");
  const [libraries,setLibra] = useState(['places'])

  const isPremium = true;
  
  const { id } = useParams();
  useEffect(() => {
    plotDetail(id);
  }, []);

 
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCjYb2QG0B00lOeygGl9w2Nib4-NpBIc9U",
    libraries: libraries,
  })
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
  const fileSelected = (event) => {
    setFile(event.target.files);
  };
  const handleUserPlaceChange = (e) =>{
    const value = e.target.value;
    setPlaceValue(value)
    // console.log(placeValue)
    }
    const handleChildData =(data)=>{
      setPlaceValue(data);
    }
  if (!isLoaded) {
    return <h4>Loading....</h4>
  }
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };
  function handleStep(step,setFieldValue) {
    function handleLocation(e) {
      setFieldValue('ps_location_latitiude', e.lat);
      setFieldValue('ps_location_longitude', e.lng);
    }
    switch (step) {

      case 0:
        return <>
            <div className='row justify-content-center  rounded' >
          <div className='col-md-8 rounded bg-white mb-0 '>
          <div className="frm_submit_block">
            <div className="shorting_pagination pb-2">
                    <div className="shorting_pagination_laft">
                      <h3 className='text-dark'>Property Information</h3>
                    </div>
                    <div className="shorting_pagination_right">
                      <ul>
                        <li><a className="active theme-bg text-white" >1</a></li>
                        <li><a>2</a></li>
                        <li><a>3</a></li>
                        <li><a>4</a></li>
                        <li><a>5</a></li>
                        <li><a>6</a></li>
                        <li><a>7</a></li>
                      </ul>
                    </div>
                
                  </div>
            <div className="frm_submit_wrap">
              <div className="form-row">
                
                <div className="form-group col-md-6">
                  <label>Plot Length (.ft)</label>
                  <Field type="number" name="ps_detail_plot_length"className="form-control no-spinner" min="0" />
                  <ErrorMessage name='ps_detail_plot_length' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-6">
                  <label>Plot Width (.ft)</label>
                  <Field type="number" name="ps_detail_plot_width" className="form-control no-spinner" min="0" />
                  <ErrorMessage name='ps_detail_plot_width' className='text-danger' component='div' />
                </div>

                <div className="form-group col-md-6">
                  <label>Width of Facing Road (.ft)</label>
                  <Field type="number" name="ps_detail_width_of_facing_road" className="form-control no-spinner" min="0" />
                  <ErrorMessage name='ps_detail_width_of_facing_road' className='text-danger' component='div' />
                </div>




                <ul className="no-ul-list third-row ml-2">
                  <li >
                    <Field id="a-99" className="checkbox-custom" name="ps_detail_has_boundary" type="checkbox" />
                    <label htmlFor="a-99" className="checkbox-custom-label">Lift</label>
                  </li>
                  <li >
                    <Field id="a-98" className="checkbox-custom" name="ps_detail_inside_gated_project" type="checkbox" />
                    <label htmlFor="a-98" className="checkbox-custom-label">Parking</label>
                  </li>
                </ul>


              </div>
            </div>
          </div>
          </div>
          </div></>
case 1:
          return <div className='row  justify-content-center rounded'>
          <div className='col-md-12 pb-0 rounded '>
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
                        <li><a>7</a></li>
                      </ul>
                    </div>
              
            </div>
            <div className="frm_submit_wrap">
            <div className="form-row">
              <div className='col-md-5'>
            <div className=" col-md-12">
            <label>Society</label>

      
            <Field name='ps_location_state' type='text' className='form-control' placeholder="Enter the Society" />
              <ErrorMessage name='ps_location_state' className='text-danger' component='div' />
            </div>

            <div className=" col-md-12">
            <label>Location</label>

        <Field name="ps_location_city">
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
  <div className="col-md-12">
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
        return<div className='row justify-content-center '>
        <div className='col-md-10 rounded'>
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
                        <li><a >4</a></li>
                        <li><a >5</a></li>
                        <li><a>6</a></li>
                        <li><a>7</a></li>
                      </ul>
                    </div>
                    
                  </div>
          <div className="frm_submit_wrap">
            <div className="o-features">
              <ul className="no-ul-list">
                <li>
                <div className=" col-md-6">
                  <label>Allowed Floor</label>
                  <Field type="number" name="ps_rules_allowed_floors" className="form-control no-spinner" min="0" />
                  <ErrorMessage name='ps_rules_allowed_floors' className='text-danger' component='div' />
                </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
        </div>
        </div>



      case 3:
        return <>
         <div className='row justify-content-center '>
        <div className='col-md-8 rounded'>
          <div className="frm_submit_block">
            {/* <h3 className='text-dark'> land/Plot Details</h3> */}
            <div className="shorting_pagination pb-2">
                    <div className="shorting_pagination_laft">
                      <h3 className='text-dark'>Land/Plot Details</h3>
                    </div>
                    <div className="shorting_pagination_right">
                      <ul>
                      <li><a className="active theme-bg text-white">1</a></li>
                        <li><a className="active theme-bg text-white">2</a></li>
                        <li><a className="active theme-bg text-white">3</a></li>
                        <li><a className="active theme-bg text-white" >4</a></li>
                        <li><a >5</a></li>
                        <li><a>6</a></li>
                        <li><a>7</a></li>
                      </ul>
                    </div>
                   
                  </div>
            <div className="frm_submit_wrap">
              <div className="form-row p-2">
                <div className="form-group col-md-12">
                  <label>Property Description<a href className="tip-topdata" data-tip="Property Description"><i className="ti-help" /></a></label>
                  <Field type="text" name="ps_detail_description" className="form-control" />
                  <ErrorMessage name='ps_detail_description' className='text-danger' component='div' />
                </div> 
                <div className="form-group col-md-6">
                  <label> Land/Plot Price</label>
                  <Field type="number" name="ps_sale_detail_price" className="form-control no-spinner" min="0" />
                  <ErrorMessage name='ps_sale_detail_price' className='text-danger' component='div' />
                </div>
                <div className="form-group col-md-6">
                  <label>Available From</label>
                  <Field type="date" name="ps_sale_detail_available_from" className="form-control" />
                  <ErrorMessage name='ps_sale_detail_available_from' className='text-danger' component='div' />
                </div>

                <div className="o-features">
                  <ul className="no-ul-list ml-2  d-flex">
                    <li className='pr-4'>
                      <Field id="a-101" className="checkbox-custom" name="ps_sale_detail_is_negotiable" type="checkbox" />
                      <label htmlFor="a-101" className="checkbox-custom-label">Negotiable</label>
                    </li>
                    <li >
                      <Field id="a-102" className="checkbox-custom" name="ps_sale_detail_currently_under_loan" type="checkbox" />
                      <label htmlFor="a-102" className="checkbox-custom-label">Currently Under Loan</label>
                    </li>
                    
                  </ul>
                </div>

              </div>
            </div>
          </div>
          </div>
          </div>
        </>
      case 4:
        return <>
          <div className='row justify-content-center '>
        <div className='col-md-12 rounded'>
        <div className='row justify-content-center'>
        <div className='col-md-12 rounded'>
          <div className="frm_submit_block">
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
                        <li><a className="active theme-bg text-white">5</a></li>
                        <li><a>6</a></li>
                        <li><a>7</a></li>
                      </ul>
                    </div>
                   
                  </div>
            
          </div>
            <div className="frm_submit_wrap">
              <div className="form-row p-1">
                <div className="form-group col-md-12">
                  <label>Other Features (optional)</label>
                  <div className="o-features">
                    <div className="form-group col-md-12">
                      <label>Building Type</label>

                      <Field as="select" className="form-control" name="ps_info_ownership">
                        <option value={undefined} selected>Select</option>
                        <option value="Freehold">Freehold</option>
                        <option value="Leasehold">Leasehold</option>
                        <option value="Co-Operative Society">Co-Operative Society</option>
                        <option value="Power of Attorney">Power of Attorney</option>
                      </Field>
                      <ErrorMessage name='ps_info_ownership' className='text-danger' component='div' />
                    </div>
                    <ul className="no-ul-list third-row">
                      <li>
                        <Field id="a-1" className="checkbox-custom" name="ps_amenities_water" type="checkbox" />
                        <label htmlFor="a-1" className="checkbox-custom-label">Water</label>
                      </li>
                      <li>
                        <Field id="a-3" className="checkbox-custom" name="ps_amenities_sewage_connection" type="checkbox" />
                        <label htmlFor="a-3" className="checkbox-custom-label">Sewage Connection</label>
                      </li>
                      <li>
                        <Field id="a-4" className="checkbox-custom" name="ps_amenities_gated_security" type="checkbox" />
                        <label htmlFor="a-4" className="checkbox-custom-label">Gated Security</label>
                      </li>
                      <li>
                        <Field id="a-5" className="checkbox-custom" name="ps_amenities_electricity_connection" type="checkbox" />
                        <label htmlFor="a-5" className="checkbox-custom-label">Electric Connection</label>
                      </li>
                     
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
          </div>
          </div>
          </div>
          {/* </div> */}
        </>

      case 5:
        return <>
           <div className='row justify-content-center '>
        <div className='col-md-12 rounded'>
          <div className="frm_submit_block">
          <div className="shorting_pagination pb-2">
                    <div className="shorting_pagination_laft">
                    <h3 className='text-dark'>Property Information</h3>
                    </div>
                    <div className="shorting_pagination_right">
                      <ul>
                      <li><a className="active theme-bg text-white">1</a></li>
                        <li><a className="active theme-bg text-white">2</a></li>
                        <li><a className="active theme-bg text-white">3</a></li>
                        <li><a className="active theme-bg text-white">4</a></li>
                        <li><a className="active theme-bg text-white">5</a></li>
                        <li><a className="active theme-bg text-white">6</a></li>
                        <li><a>7</a></li>
                      </ul>
                    </div>
                   
                  </div>
            <div className="frm_submit_wrap">
              <div className="form-row">
                <div className="form-group col-md-12">
                  <div className="o-features">
                    <ul className="no-ul-list third-row">
                      <li>
                        <Field id="a-1" className="checkbox-custom" name="ps_info_khata_certificate_is_available" type="checkbox" />
                        <label htmlFor="a-1" className="checkbox-custom-label">Khata Certificate is Available</label>
                      </li>
                      <li>
                        <Field id="a-3" className="checkbox-custom" name="ps_info_conversion_certificate_is_available" type="checkbox" />
                        <label htmlFor="a-3" className="checkbox-custom-label">Conversion Certificate is Available</label>
                      </li>
                      <li>
                        <Field id="a-4" className="checkbox-custom" name="ps_info_sale_deed_certificate_is_available" type="checkbox" />
                        <label htmlFor="a-4" className="checkbox-custom-label">Deed Certificate is Available</label>
                      </li>
                      <li>
                        <Field id="a-5" className="checkbox-custom" name="ps_info_encumbrance_certificate_is_available" type="checkbox" />
                        <label htmlFor="a-5" className="checkbox-custom-label">Encumbrance Certificate is Available</label>
                      </li>
                      <li>
                        <Field id="a-4567" className="checkbox-custom" name="ps_info_is_rera_approved" type="checkbox" />
                        <label htmlFor="a-4567" className="checkbox-custom-label">Rera Approved</label>
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

      case 6:
        return <> <div className="frm_submit_block">
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
                        <li><a className="active theme-bg text-white">7</a></li>
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
    ps_detail_description: Yup.string().required('This Field is Required'),
    ps_detail_plot_length: Yup.number().required('This Field is Required').positive("Please Enter the positive Value"),
    ps_detail_plot_width: Yup.number().required('This Field is Required').positive("Please Enter the positive Value"),
    ps_detail_width_of_facing_road: Yup.number().required('This Field is Required').positive("Please Enter the positive Value"),
    ps_detail_has_boundary: Yup.boolean(),
    ps_detail_inside_gated_project: Yup.boolean(),

  }),
  Yup.object().shape({
    ps_location_city: Yup.string(),
    ps_location_state: Yup.string().required('Required')
  }),
  Yup.object().shape({
    ps_rules_allowed_floors: Yup.number().required('Required').positive("Please Enter the Positive Value")
  }),
  
  Yup.object().shape({
    ps_sale_detail_price: Yup.number().required('This Field is Required').positive("Please Enter the positive Value"),
    ps_sale_detail_available_from: Yup.string().required('This Field is Required'),
    ps_sale_detail_is_negotiable: Yup.boolean(),
    ps_sale_detail_currently_under_loan: Yup.boolean(),
  }),
  Yup.object().shape({
    ps_amenities_water: Yup.boolean(),
    ps_amenities_sewage_connection: Yup.boolean(),
    ps_amenities_gated_security: Yup.boolean(),
    ps_amenities_electricity_connection: Yup.boolean(),
  }),
  Yup.object().shape({
    ps_info_ownership: Yup.string().required('This Field is Required'),
    ps_info_khata_certificate_is_available: Yup.boolean(),
    ps_info_conversion_certificate_is_available: Yup.boolean(),
    ps_info_sale_deed_certificate_is_available: Yup.boolean(),
    ps_info_encumbrance_certificate_is_available: Yup.boolean(),
  }),
  Yup.object().shape({


  }),



  ]







  return (
    <div id="main-wrapper">
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
                <h2 className="breadcrumb-title">Land/Plot Property</h2>
              </div>
            </div>
          </div>
        </div>

      </div>
      <section className='gray'>
        <div className="container">
          <div className="row  justify-content-md-center bg-white">
            <div className="col-lg-8 col-md-8 col-sm-12" style={{borderRight:'2px solid rgba(0,0,0,.1)'}}>
              <div className="submit-page py-4">

                <Formik
                  initialValues={plotdata}
                  validationSchema={Schema[currentStep]}
                  onSubmit={(values, { setSubmitting, setTouched, setFieldValue }) => {
                    if (currentStep === 1) {
                      setFieldValue('ps_location_city', originRef.current.value)
                      setSubmitting(false);
                      setCurrentStep(currentStep + 1)
                      setTouched({})
                    }else if (currentStep === 6) {
                      const formData = new FormData();
                      formData.append("ps_detail_description", values.ps_detail_description)
                      formData.append("ps_detail_plot_length", values.ps_detail_plot_length)
                      formData.append("ps_detail_plot_width", values.ps_detail_plot_width)
                      formData.append("ps_detail_width_of_facing_road", values.ps_detail_width_of_facing_road)
                      formData.append("ps_detail_has_boundary", values.ps_detail_has_boundary)
                      formData.append("ps_detail_inside_gated_project", values.ps_detail_inside_gated_project)

                      formData.append("ps_rules_allowed_floors", values.ps_rules_allowed_floors)

                      formData.append("ps_location_state", values.ps_location_state)
                      formData.append("ps_location_city", values.ps_location_city)
                      formData.append("ps_location_latitiude", values.ps_location_latitiude)
                      formData.append("ps_location_longitude", values.ps_location_longitude)

                      formData.append("ps_sale_detail_price", values.ps_sale_detail_price)
                      formData.append("ps_sale_detail_available_from", values.ps_sale_detail_available_from)
                      formData.append("ps_sale_detail_is_negotiable", values.ps_sale_detail_is_negotiable)
                      formData.append("ps_sale_detail_currently_under_loan", values.ps_sale_detail_currently_under_loan)

                      formData.append("ps_amenities_water", values.ps_amenities_water)
                      formData.append("ps_amenities_sewage_connection", values.ps_amenities_sewage_connection)
                      formData.append("ps_amenities_gated_security", values.ps_amenities_gated_security)
                      formData.append("ps_amenities_electricity_connection", values.ps_amenities_electricity_connection)

                      formData.append("ps_info_ownership", values.ps_info_ownership)
                      formData.append("ps_info_khata_certificate_is_available", values.ps_info_khata_certificate_is_available)
                      formData.append("ps_info_conversion_certificate_is_available", values.ps_info_conversion_certificate_is_available)
                      formData.append("ps_info_sale_deed_certificate_is_available", values.ps_info_sale_deed_certificate_is_available)
                      formData.append("ps_info_encumbrance_certificate_is_available", values.ps_info_encumbrance_certificate_is_available)
                      formData.append("ps_info_is_rera_approved", values.ps_info_is_rera_approved)
                      console.log(formData)
                      Array.from(file).forEach((item) => {
                        formData.append("image", item);
                      });
                      axios.put(`${host}/property/update-plot/${plotdata._id}/1`, formData, {
                        headers: {
                          "Content-Type": "multipart/form-data",
                          "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,
                        },
                      }).then((response) => {
                        console.log(response);
                        setSubmitting(false);
                        history('/')
                      })
                        .catch((error) => {
                          console.error(error);
                          setSubmitting(false);
                        });

                    } else {

                      setCurrentStep(currentStep + 1);
                      setSubmitting(false);
                      console.log(values)
                      setTouched({})
                    }
                  }
                  }
                >
                  {({ values, isSubmitting,setFieldValue }) => (
                    <Form >
                      {handleStep(currentStep,setFieldValue)}
                      <div className=' d-flex justify-content-center'>
                      <button type='button' onClick={prevStep} className='btn border-0 btn-danger rounded w-25 ' style={{padding:".8rem "}} disabled={currentStep === 0}>Prev</button>
                      <button type='submit' className='btn  border-0 theme-bg rounded  w-25' style={{padding:".8rem "}}  >{currentStep === 6 ? 'Submit' : 'Next'}</button>
                      </div>
                      {/* <button type='submit' className='btn btn-dark float-right'  >{currentStep === 6 ? 'Submit' : 'Next'}</button>
                      <button type='button' onClick={prevStep} className='btn btn-dark float-left' disabled={currentStep === 0}>Prev</button> */}
                    </Form>

                  )}

                </Formik>
              </div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12 rounded bg-white pt-4'>
            {plotdata && <IsPremium propId={plotdata._id} ownerId={plotdata.userid} expDate={plotdata.primium_expiry_date} propType={7} />}
            </div>
          </div>
        </div>

        {plotdata && <PropertyTemplates id={plotdata._id} />}
      </section >
      <Footer />
    </div >

  )
}

export default EditPlot