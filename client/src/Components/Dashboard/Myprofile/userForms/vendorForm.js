import {React,useContext} from 'react'
import { Formik, Form, Field, } from "formik";
import { UserContext } from '../../../../context/UserContext';
import * as Yup from 'yup';

// const VendorForm = (props) => {
//   const [currentStep, setCurrentStep] = useState(0);
//   const {userKyc} = useContext(UserContext);

//   const prevStep = () => {
//     setCurrentStep(currentStep - 1);
//   };
//   function handleStep(step) {
//     switch(step)
//     {
//       case 0:
//         return <div className="frm_submit_block">
//           <h3 style={{marginLeft:'-.8rem'}}>Basic Information</h3>
//           <div className="frm_submit_wrap">
//             <div className="o-features">
//               <ul className="no-ul-list">
//                 <li>
//                 <div className="form-group col-xs-6">
//                   <label>Name</label>
//                   <Field type="name" name="vendor_name" className="form-control" />
//                   <ErrorMessage name='vendor_name' className='text-danger' component='div' />
//                 </div>
//                 </li>
//                 <li>
//                 <div className="form-group col-xs-6">
//                   <label>Email</label>
//                   <Field type="email" name="vendor_email" className="form-control" />
//                   <ErrorMessage name='vendor_email' className='text-danger' component='div' />
//                 </div>
//                 </li>
//                 <li>
//                 <div className="form-group col-xs-6">
//                   <label>Contact No.</label>
//                   <Field type="name" name="vendor_phone_no" className="form-control" />
//                   <ErrorMessage name='vendor_phone_no' className='text-danger' component='div' />
//                 </div>
//                 </li>
//               </ul>
//             </div>

//           </div>
//         </div>
//         case 1:
//           return <div className="frm_submit_block">
//           <h3 style={{marginLeft:'-.8rem'}}>Contact Details</h3>
//             <div className="frm_submit_wrap">
//               <div className="o-features">
//               <ul className="no-ul-list">
//             <li>
//             <div className="form-group col-xs-6">
//               <label>Facebook Id</label>
//               <Field type="name" name="vendor_facebook_id" className="form-control" />
//               <ErrorMessage name='vendor_facebook_id' className='text-danger' component='div' />
//             </div>
//             </li>
//             <li>
//             <div className="form-group col-xs-6">
//               <label>Instagram Id</label>
//               <Field type="name" name="vendor_insta_id" className="form-control" />
//               <ErrorMessage name='vendor_insta_id' className='text-danger' component='div' />
//             </div>
//             </li>
//             <li>
//             <div className="form-group col-xs-6">
//               <label>Twitter Id</label>
//               <Field type="name" name="vendor_twitter_id" className="form-control" />
//               <ErrorMessage name='vendor_twitter_id' className='text-danger' component='div' />
//             </div>
//             </li>
//           </ul>
//               </div>
  
//             </div>
//           </div>
//     }
//     }
//   return (
//     <>
    
// <Formik initialValues={{category:'vendor',vendor_name:"",vendor_email:"",vendor_phone_no:"",vendor_facebook_id:"",vendor_insta_id:"",vendor_twitter_id:""  }} 
// onSubmit={(values,{resetForm})=>{
//   if(currentStep !== 1){
//    setCurrentStep(currentStep + 1)
//   }
//   else 
//   {
//     // setSubmitting(true)
//     console.log(values.category);
//     userKyc(values);
//     resetForm({values:{vendor_name:"",vendor_email:"",vendor_phone_no:"",vendor_facebook_id:"",vendor_insta_id:"",vendor_twitter_id:""  }});
//     props.closeModal(false);
//   }

// }} >

// {({ values, isSubmitting }) => (
//                     <Form >
//                       {handleStep(currentStep)}
//                       <button type='submit' className='btn btn-dark float-right'  >{currentStep === 1 ? 'Submit' : 'Next'}</button>
//                       <button type='button' onClick={prevStep} className='btn btn-dark float-left' disabled={currentStep === 0}>Prev</button>
//                     </Form>

//                   )}
//     </Formik>
//     </>
//   )
// }

// export default VendorForm

const SignupSchema = Yup.object().shape({
  vender_aadhar : Yup.string().min(12,"Enter valid Aadhar No.").required('Required'),
  vender_pan : Yup.string().min(10,"Enter valid PAN No.").required('Required'),
  vender_gst : Yup.string().min(15,"Enter valid GST No.")
})

const VendorForm = (props) => {
  const {addVenderKyc} = useContext(UserContext);

  return (
    <>
  <Formik
   initialValues={{
    vender_aadhar:"",
    vender_pan:"",
    vender_gst:""
   }}
   validationSchema={SignupSchema}
   onSubmit={(values, { setSubmitting }) => {
    // console.log(values);
    setSubmitting(false);
    props.closeModal(false);
    const formData = new FormData();
    formData.append("vender_aadhar", values.vender_aadhar)
    formData.append("vender_pan", values.vender_pan)
    formData.append("vender_gst", values.vender_gst)
    addVenderKyc(formData);
  }}
 
  >
{({errors,touched,isSubmitting})=>(
 <Form>
 <div className="frm_submit_block">
   <h3 style={{ marginLeft: "-.8rem" }}>Contact Details</h3>
   <div className="frm_submit_wrap">
     <div className="o-features">
       <ul className="no-ul-list">
         <li>
           <div className="form-group col-xs-6">
             <label>Aadhar No.</label>
             <Field
               type="num"
               name="vender_aadhar"
               className="form-control"
             />
              {errors.vender_aadhar && touched.vender_aadhar ? (
           <div>{errors.vender_aadhar}</div>
         ) : null}
           </div>
         </li>
         <li>
           <div className="form-group col-xs-6">
             <label>PAN No.</label>
             <Field
               type="text"
               name="vender_pan"
               className="form-control"
             />
              {errors.vender_pan && touched.vender_pan ? (
           <div>{errors.vender_pan}</div>
         ) : null}
           </div>
         </li>
         <li>
           <div className="form-group col-xs-6">
             <label>GST No.</label>
             <Field
               type="text"
               name="vender_gst"
               className="form-control"
             />
             {errors.vender_gst && touched.vender_gst ? (
           <div>{errors.vender_gst}</div>
         ) : null}
           </div>
         </li>
       </ul>
       <button type="submit" disabled={isSubmitting} className="btn btn-dark float-right">Submit</button>
     </div>
   </div>
 </div>
</Form>
)}
 
  </Formik>

  </>
);
   
}

export default VendorForm