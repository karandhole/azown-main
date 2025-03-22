import {React,useContext} from 'react'
import { Formik, Form, Field,  } from "formik";
import { UserContext } from '../../../../context/UserContext';
import * as Yup from 'yup';


// const BuilderForm = (props) => {

//   const [currentStep, setCurrentStep] = useState(0);
//   const context = useContext(UserContext);
//   const {userKyc,kycData} = context
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
//                   <label>Aadhar No.</label>
//                   <Field type="name" name="builder_name" className="form-control" />
//                   <ErrorMessage name='builder_name' className='text-danger' component='div' />
//                 </div>
//                 </li>
//                 <li>
//                 <div className="form-group col-xs-6">
//                   <label>PAN No.</label>
//                   <Field type="email" name="builder_email" className="form-control" />
//                   <ErrorMessage name='builder_email' className='text-danger' component='div' />
//                 </div>
//                 </li>
//                 <li>
//                 <div className="form-group col-xs-6">
//                   <label>GstIn No.</label>
//                   <Field type="name" name="builder_phone_no" className="form-control" />
//                   <ErrorMessage name='builder_phone_no' className='text-danger' component='div' />
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
//               <label>House & Street No.</label>
//               <Field type="name" name="builder_facebook_id" className="form-control" />
//               <ErrorMessage name='builder_facebook_id' className='text-danger' component='div' />
//             </div>
//             </li>
//             <li>
//             <div className="form-group col-xs-6">
//               <label>Email Id</label>
//               <Field type="name" name="builder_insta_id" className="form-control" />
//               <ErrorMessage name='builder_insta_id' className='text-danger' component='div' />
//             </div>
//             </li>
//             <li>
//             <div className="form-group col-xs-6">
//               <label>Facebook Id</label>
//               <Field type="name" name="builder_twitter_id" className="form-control" />
//               <ErrorMessage name='builder_twitter_id' className='text-danger' component='div' />
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
    
// <Formik initialValues={{category:'builder',builder_name:"",builder_email:"",builder_phone_no:"",builder_facebook_id:"",builder_insta_id:"",builder_twitter_id:""  }} 
// onSubmit={(values,{resetForm})=>{
//   if(currentStep !== 1){
//    setCurrentStep(currentStep + 1)
//   }
//   else 
//   {
//     // setSubmitting(true)
//      console.log(values.category);
//     resetForm({values:{builder_name:"",builder_email:"",builder_phone_no:"",builder_facebook_id:"",builder_insta_id:"",builder_twitter_id:""  }});
//     userKyc(values)
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

const SignupSchema = Yup.object().shape({
  builder_aadhar : Yup.string().min(12,"Enter valid Aadhar No.").max(12,"Enter valid Aadhar No.").required('Required'),
  builder_pan : Yup.string().min(10,"Enter valid PAN No.").max(10,"Enter valid PAN No.").required('Required'),
  builder_gst : Yup.string().min(15,"Enter valid GST No.").max(15,"Enter valid GST No.").required('Required'),
})


const BuilderForm = (props) => {
  const {addBuilderKyc} = useContext(UserContext)


  return (
    <>
  <Formik
   initialValues={{
    builder_aadhar:"",
    builder_pan:"",
    builder_gst:""
   }}
   validationSchema={SignupSchema}
   onSubmit={(values, { setSubmitting }) => {
    // console.log(values);
    setSubmitting(false);
    props.closeModal(false);
    const formData = new FormData();
    formData.append("builder_aadhar", values.builder_aadhar)
    formData.append("builder_pan", values.builder_pan)
    formData.append("builder_gst", values.builder_gst)
    addBuilderKyc(formData);
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
               name="builder_aadhar"
               className="form-control"
             />
              {errors.builder_aadhar && touched.builder_aadhar ? (
           <div>{errors.builder_aadhar}</div>
         ) : null}
           </div>
         </li>
         <li>
           <div className="form-group col-xs-6">
             <label>PAN No.</label>
             <Field
               type="text"
               name="builder_pan"
               className="form-control"
             />
              {errors.builder_pan && touched.builder_pan ? (
           <div>{errors.builder_pan}</div>
         ) : null}
           </div>
         </li>
         <li>
           <div className="form-group col-xs-6">
             <label>GST No.</label>
             <Field
               type="text"
               name="builder_gst"
               className="form-control"
             />
             {errors.builder_gst && touched.builder_gst ? (
           <div>{errors.builder_gst}</div>
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

export default BuilderForm