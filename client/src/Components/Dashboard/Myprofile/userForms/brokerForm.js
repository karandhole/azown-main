import { React,  useContext } from "react";
import { Formik,  Field, Form } from "formik";
import * as Yup from "yup";
import { UserContext } from "../../../../context/UserContext";

 const SignupSchema = Yup.object().shape({
  broker_aadhar : Yup.string().min(12,"Enter valid Aadhar No.").max(12,"Enter valid Aadhar No.").required('Required'),
  broker_pan : Yup.string().min(10,"Enter valid PAN No.").max(10,"Enter valid PAN No.").required('Required'),
  broker_gst : Yup.string().min(15,"Enter valid GST No.").max(15,"Enter valid GST No.").required('Required'),
})

const BrokerForm = (props) => {
  const {addBrokerKyc} = useContext(UserContext);
 
  return (
    <>
  <Formik
   initialValues={{
    broker_aadhar:"",
    broker_pan:"",
    broker_gst:""
   }}
   validationSchema={SignupSchema}
   onSubmit={(values, { setSubmitting }) => {
    // console.log(values);
    setSubmitting(false);
    props.closeModal(false);
    const formData = new FormData();
    formData.append("broker_aadhar", values.broker_aadhar)
    formData.append("broker_pan", values.broker_pan)
    formData.append("broker_gst", values.broker_gst)
    addBrokerKyc(formData);
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
               name="broker_aadhar"
               className="form-control"
             />
              {errors.broker_aadhar && touched.broker_aadhar ? (
           <div>{errors.broker_aadhar}</div>
         ) : null}
           </div>
         </li>
         <li>
           <div className="form-group col-xs-6">
             <label>PAN No.</label>
             <Field
               type="text"
               name="broker_pan"
               className="form-control"
             />
              {errors.broker_pan && touched.broker_pan ? (
           <div>{errors.broker_pan}</div>
         ) : null}
           </div>
         </li>
         <li>
           <div className="form-group col-xs-6">
             <label>GST No.</label>
             <Field
               type="text"
               name="broker_gst"
               className="form-control"
             />
             {errors.broker_gst && touched.broker_gst ? (
           <div>{errors.broker_gst}</div>
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
};

export default BrokerForm;






  // const [currentStep, setCurrentStep] = useState(0);
  // const context = useContext(UserContext);
  // const { userKyc, kycData } = context;
  // const prevStep = () => {
  //   setCurrentStep(currentStep - 1);
  // };
  // function handleStep(step) {
  //   switch(step)
  //   {
  //     case 0:
  //       return <div className="frm_submit_block">
  //         <h3 style={{marginLeft:'-.8rem'}}>Basic Information</h3>

  //         <div className="frm_submit_wrap">
  //           <div className="o-features">
  //             <ul className="no-ul-list">
  //               <li>
  //               <div className="form-group col-xs-6">
  //                 <label>Name</label>
  //                 <Field type="name" name="broker_name" className="form-control" />
  //                 <ErrorMessage name='broker_name' className='text-danger' component='div' />
  //               </div>
  //               </li>
  //               <li>
  //               <div className="form-group col-xs-6">
  //                 <label>Email</label>
  //                 <Field type="email" name="broker_email" className="form-control" />
  //                 <ErrorMessage name='broker_email' className='text-danger' component='div' />
  //               </div>
  //               </li>
  //               <li>
  //               <div className="form-group col-xs-6">
  //                 <label>Contact No.</label>
  //                 <Field type="name" name="broker_phone_no" className="form-control" />
  //                 <ErrorMessage name='broker_phone_no' className='text-danger' component='div' />
  //               </div>
  //               </li>
  //             </ul>
  //           </div>

  //         </div>
  //       </div>

  //           case 1:
  //             return <div className="frm_submit_block">
  //         <h3 style={{marginLeft:'-.8rem'}}>Contact Details</h3>
  //               <div className="frm_submit_wrap">
  //                 <div className="o-features">
  //                 <ul className="no-ul-list">
  //               <li>
  //               <div className="form-group col-xs-6">
  //                 <label>Aadhar No.</label>
  //                 <Field type="num" name="broker_aadhar" className="form-control" />
  //                 <ErrorMessage name='broker_aadhar' className='text-danger' component='div' />
  //               </div>
  //               </li>
  //               <li>
  //               <div className="form-group col-xs-6">
  //                 <label>PAN No.</label>
  //                 <Field type="text" name="broker_pan" className="form-control" />
  //                 <ErrorMessage name='broker_pan' className='text-danger' component='div' />
  //               </div>
  //               </li>
  //               <li>
  //               <div className="form-group col-xs-6">
  //                 <label>GST No.</label>
  //                 <Field type="text" name="broker_gst" className="form-control" />
  //                 <ErrorMessage name='broker_gst' className='text-danger' component='div' />
  //               </div>
  //               </li>
  //             </ul>
  //                 </div>

  //               </div>
  //             </div>

  //   }
  // }

  
      {/* <Formik initialValues={{category:'broker',broker_name:"",broker_email:"",broker_phone_no:"",broker_facebook_id:"",broker_insta_id:"",broker_twitter_id:""  }} 
    onSubmit={(values,{setSubmitting,resetForm})=>{
      if(currentStep !== 1){
        setCurrentStep(currentStep + 1)
       }
       else 
       {
         // setSubmitting(true)
          console.log(values.category,values);
         resetForm({values:{broker_name:"",broker_email:"",broker_phone_no:"",broker_facebook_id:"",broker_insta_id:"",broker_twitter_id:""  }});
         userKyc(values)
         props.closeModal(false);
       }
     
       
    }} >
 {({ values, isSubmitting }) => (
                    <Form >
                      {handleStep(currentStep)}
                      <button type='submit' className='btn btn-dark float-right'  >{currentStep === 1 ? 'Submit' : 'Next'}</button>
                      <button type='button' onClick={prevStep} className='btn btn-dark float-left' disabled={currentStep === 0}>Prev</button>
                    </Form>

                  )}
    

    </Formik> */}

