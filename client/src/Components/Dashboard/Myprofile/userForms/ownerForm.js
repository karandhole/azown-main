import {React,useContext} from 'react'
import { Formik, Form, Field,  } from "formik";
import * as Yup from 'yup';
import { UserContext } from '../../../../context/UserContext';

// const OwnerForm = (props) => {
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
//                   <label>Name</label>
//                   <Field type="name" name="owner_name" className="form-control" />
//                   <ErrorMessage name='owner_name' className='text-danger' component='div' />
//                 </div>
//                 </li>
//                 <li>
//                 <div className="form-group col-xs-6">
//                   <label>Email</label>
//                   <Field type="email" name="owner_email" className="form-control" />
//                   <ErrorMessage name='owner_email' className='text-danger' component='div' />
//                 </div>
//                 </li>
//                 <li>
//                 <div className="form-group col-xs-6">
//                   <label>Contact No.</label>
//                   <Field type="name" name="owner_phone_no" className="form-control" />
//                   <ErrorMessage name='owner_phone_no' className='text-danger' component='div' />
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
//               <Field type="name" name="owner_facebook_id" className="form-control" />
//               <ErrorMessage name='owner_facebook_id' className='text-danger' component='div' />
//             </div>
//             </li>
//             <li>
//             <div className="form-group col-xs-6">
//               <label>Instagram Id</label>
//               <Field type="name" name="owner_insta_id" className="form-control" />
//               <ErrorMessage name='owner_insta_id' className='text-danger' component='div' />
//             </div>
//             </li>
//             <li>
//             <div className="form-group col-xs-6">
//               <label>Twitter Id</label>
//               <Field type="name" name="owner_twitter_id" className="form-control" />
//               <ErrorMessage name='owner_twitter_id' className='text-danger' component='div' />
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
    
// <Formik initialValues={{category:'owner',owner_name:"",owner_email:"",owner_phone_no:"",owner_facebook_id:"",owner_insta_id:"",owner_twitter_id:""  }} 
// onSubmit={(values,{resetForm})=>{
//   if(currentStep !== 1){
//    setCurrentStep(currentStep + 1)
//   }
//   else 
//   {
//     // setSubmitting(true)
//     console.log(values.category);
//     userKyc(values)
//     resetForm({values:{owner_name:"",owner_email:"",owner_phone_no:"",owner_facebook_id:"",owner_insta_id:"",owner_twitter_id:""  }});
//     props.closeModal(false);
//     console.log("Successful")
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
  owner_aadhar : Yup.string().min(12,"Enter valid Aadhar No.").max(12,"Enter valid Aadhar No.").required('Required'),
  owner_pan : Yup.string().min(10,"Enter valid PAN No.").max(10,"Enter valid PAN No.").required('Required'),
  owner_gst : Yup.string().min(15,"Enter valid GST No.").max(15,"Enter valid GST No.").required('Required'),
})


const OwnerForm = (props) =>{
  const {addOwnerKyc} = useContext(UserContext);

  
  return (
    <>
  <Formik
   initialValues={{
    owner_aadhar:"",
    owner_pan:"",
    owner_gst:""
   }}
   validationSchema={SignupSchema}
   onSubmit={(values, { setSubmitting }) => {
    // console.log(values);
    setSubmitting(false);
    props.closeModal(false);
    const formData = new FormData();
    formData.append("owner_aadhar", values.owner_aadhar)
    formData.append("owner_pan", values.owner_pan)
    formData.append("owner_gst", values.owner_gst)
    addOwnerKyc(formData);
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
               name="owner_aadhar"
               className="form-control"
             />
              {errors.owner_aadhar && touched.owner_aadhar ? (
           <div>{errors.owner_aadhar}</div>
         ) : null}
           </div>
         </li>
         <li>
           <div className="form-group col-xs-6">
             <label>PAN No.</label>
             <Field
               type="text"
               name="owner_pan"
               className="form-control"
             />
              {errors.owner_pan && touched.owner_pan ? (
           <div>{errors.owner_pan}</div>
         ) : null}
           </div>
         </li>
         <li>
           <div className="form-group col-xs-6">
             <label>GST No.</label>
             <Field
               type="text"
               name="owner_gst"
               className="form-control"
             />
             {errors.owner_gst && touched.owner_gst ? (
           <div>{errors.owner_gst}</div>
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

export default OwnerForm