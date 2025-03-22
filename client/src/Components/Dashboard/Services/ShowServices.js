// import React,{useContext} from 'react';
// // import ServiceContext from './ServiceContext';
// // import { UserContext } from '../../../context/UserContext';
// import { VendorContext } from "../../../context/VendorContext";

// const ShowServices = () => {

//   const context= useContext(VendorContext)
//   const {vendorData} =  context
//   const { service,name } = vendorData;
//   console.log(vendorData)

//    // const context=useContext(UserContext)
//   // const {myserviceData} = context
//   // console.log(myserviceData)
//   // console.log(setServiceData)

//   // const {service,amount,duration}=myserviceData
//   // const {serviceList}=context
//   // console.log(serviceList);
//   return (
//     <>
//     <div className="col-lg-9 col-md-8 col-sm-12 justify-content-center align-items-center flex-column mb-5">
//     <h2 className="text-center p-4">Show Services</h2>

//         <table className="table">
//           <thead className="thead" style={{ backgroundColor: "#27ae60", color: "white" }}>
//             <tr>
//               <th scope="col">Service</th>
//               <th scope="col">Agent Name</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* <tr>
//               <td>{service}</td>
//               <td>{name}</td>
//             </tr> */}
//               {vendorData.map((service, index) => (
//       <tr key={index}>
//         <td><b>{service.service}</b></td>
//         <td><b>{service.name}</b></td>

//       </tr>
//     ))}
//           </tbody>
//           </table>

//     </div>
//     </>
//   );
// };

// export default ShowServices;

import React, { useContext,useEffect } from "react";
import { ServiceContext } from "../../../context/ServiceContext";


const ShowServices = () => {
  const context = useContext(ServiceContext);
  const {  venderOwnService,
    addNewService} = context;
  // const { service, name } = vendorData;
  // console.log('show',vendorData)
  // useEffect(() => {
  //   console.log('vendorData', vendorData);
  // }, [vendorData]);

  // console.log(vendorData);

  return (
    <>
      <div className="col-lg-9 col-md-8 col-sm-12 justify-content-center align-items-center flex-column mb-5">
        <h2 className="text-center p-4">Show Services</h2>
        <table className="table">
          <thead
            className="thead"
            style={{ backgroundColor: "#27ae60", color: "white" }}
          >
            <tr>
              <th scope="col">Service</th>
              <th scope="col">Agent Name</th>
              <th scope="col">Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {/* <td><b>{vendorData.service}</b></td>
              <td><b>{vendorData.name}</b></td>
              <td><b>{vendorData.duration}</b></td> */}
            </tr>
            {/* {vendorData.map((service, index) => (
  <tr key={index}>
    <td><b>{service.service}</b></td>
    <td><b>{service.name}</b></td>
  </tr>
))} */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ShowServices;
