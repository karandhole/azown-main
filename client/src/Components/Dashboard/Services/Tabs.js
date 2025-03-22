// import { useState } from "react";
// import "./tabs.css";

// function Tabs() {
//   const [toggleState, setToggleState] = useState(1);


//   const [tab,setTab]= useState([
//     {name:"Shahzeb",phoneno:"1234",status:"Accept"},
//     {name:"Shahzeb",phoneno:"1234",status:"Reject"},
//     {name:"Shahzeb",phoneno:"1234",status:"Ongoing"},
//     {name:"Shahzeb",phoneno:"1234",status:"Complete"},
// ]);

//   const toggleTab = (index) => {
       
//     console.log(tab)
//     setToggleState(index);


//     if (index===1){
//         setTab([
//             {name:"Shahzeb",phoneno:"1234",status:"Accept"},
//             {name:"Shahzeb",phoneno:"1234",status:"Reject"},
//             {name:"Shahzeb",phoneno:"1234",status:"Ongoing"},
//             {name:"Shahzeb",phoneno:"1234",status:"Complete"},
//         ])

//     }
//     else if (index===2){
      
//         let myFilter = tab.filter((curEle)=>{
//             return   curEle.status === "Accept" 
//         })
//         console.log('in new',myFilter)
//         setTab(myFilter)
//     }
//     else if (index ===3){
      
//         let myFilter=tab.filter((curEle)=> { 
//             return curEle.status === "Ongoing"
//           })
//             console.log('in ongoing ',myFilter)
//         setTab(myFilter)

//     }
//     else if (index===4){
      
//         let myFilter=tab.filter((curEle)=> { 
//             return curEle.status === "Complete"
//           })
//             console.log('in complete',myFilter)
//         setTab(myFilter)

//     }
//   };

//   return (
//     <>
//       {/* <div className="col-lg-9 col-md-8 col-sm-12 justify-content-center align-items-center flex-column"> */}
//       <div className="container ">
//         <div className="row-lg-3 row-md-3 col-sm-12 d-flex ml-3 w-50 ">
//           <button
//             onClick={() => toggleTab(1)}
//             {...(toggleState === 1 ? "tabs1 active-tabs" : "tabs1")}
//           >
//             All
//           </button>

//           <button
//             onClick={() =>{toggleTab(2)}}
//             // onClick={handleClickAcc}
//             {...(toggleState === 2 ? "tabs1 active-tabs" : "tabs1")}
//           >
//             New
//           </button>
//           <button
//             onClick={() => toggleTab(3)}
//             // onClick={handleClickRej}
//             {...(toggleState === 3 ? "tabs1 active-tabs" : "tabs1")}
//           >
//             Pending
//           </button>
//           <button
//             onClick={() => toggleTab(4)}
//             // onClick={handleClickCom}
//             {...(toggleState === 4 ? "tabs1 active-tabs" : "tabs1")}
//           >
//             Complete
//           </button>
//         </div>

//         <div className="container">
//           <div
//             className={
//               toggleState === 1 ? "  active-content1" : "content1"
//             }
//           >
//             <div className="row-lg-3 row-md-3 col-sm-12 d-flex justify-content-center flex-column ">
//               <table className="table">
//                 <thead
//                   className="thead"
                
//                 >
//                   <tr>
//                     <th scope="col">Name</th>
//                     <th scope="col">Phone No.</th>
//                     <th scope="col">Status</th>
                  
//                   </tr>
//                 </thead>
//                 <tbody>
//                     {tab.map((row)=>{
//                         return(
//                         <tr key={row.status}>
//                             <td>{row.name}</td>
//                             <td>{row.phoneno}</td>
//                             <td><button>{row.status}</button></td>
//                         </tr>
//                         );
//                     })}
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           <div
//             className={
//               toggleState === 2 ? "  active-content1" : "content1"
              
//             }
//             // onClick={handleClickAcc}
//           >
//             <div className="row-lg-3 row-md-3 col-sm-12 justify-content-center flex-column">
//               <table className="table">
//               <thead
//                   className="thead"
//                 >
//                   <tr>
//                     <th scope="col">Name</th>
//                     <th scope="col">Phone No.</th>
//                     <th scope="col">Status</th>
                  
//                   </tr>
//                 </thead>
//                 <tbody>
//                 {tab.map((row)=>{
//                         return(
//                         <tr key={row.status}>
//                             <td>{row.name}</td>
//                             <td>{row.phoneno}</td>
//                             <td><button>{row.status}</button></td>
//                         </tr>
//                         );
//                     })}
                 

//                 </tbody>
//               </table>
//             </div>
//           </div>

//           <div
//             className={
//               toggleState === 3 ? "  active-content1" : "content1"
//             }
//           >
//             <div className="row-lg-3 row-md-3 col-sm-12 justify-content-center flex-column">
//               <table className="table">
//               <thead
//                   className="thead"
//                 >
//                   <tr>
//                     <th scope="col">Name</th>
//                     <th scope="col">Phone No.</th>
//                     <th scope="col">Status</th>
                  
//                   </tr>
//                 </thead>
//                 <tbody>
//                 {tab.map((row)=>{
//                         return(
//                         <tr key={row.status}>
//                             <td>{row.name}</td>
//                             <td>{row.phoneno}</td>
//                             <td><button>{row.status}</button></td>
//                         </tr>
//                         );
//                     })}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//           <div
//             className={
//               toggleState === 4 ? "  active-content1" : "content1"
//             }
//           >
//             <div className="row-lg-3 row-md-3 col-sm-12 justify-content-center flex-column">
//               <table className="table">
//               <thead
//                   className="thead"
                
//                 >
//                   <tr>
//                     <th scope="col">Name</th>
//                     <th scope="col">Phone No.</th>
//                     <th scope="col">Status</th>
                  
//                   </tr>
//                 </thead>
//                 <tbody>
//                 {tab.map((row)=>{
//                         return(
//                         <tr key={row.status}>
//                             <td>{row.name}</td>
//                             <td>{row.phoneno}</td>
//                             <td><button>{row.status}</button></td>
//                         </tr>
//                         );
//                     })}
                  
                
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//         {/* </div> */}
//       </div>
//     </>
//   );
// }

// export default Tabs;
 

import { useState } from "react";
import "./tabs.css";

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { name: "All", filter: () => true },
    { name: "New", filter: (item) => item.status === "Accept" || item.status === "Reject"},
    { name: "Pending", filter: (item) => item.status === "Ongoing" },
    { name: "Complete", filter: (item) => item.status === "Complete" }
  ];

  const items = [
    { name: "Shahzeb", phoneno: "1234", status: "Accept" },
    { name: "Shahzeb", phoneno: "1234", status: "Reject" },
    { name: "Shahzeb", phoneno: "123456", status: "Ongoing" },
    { name: "Shahzeb", phoneno: "1234567", status: "Complete" }
  ];

  const filteredItems = items.filter(tabs[activeTab].filter);

  const handleClick = (index) => {
    setActiveTab(index);
    // console.log(index)
  };

  return (
    <div className="container">
      <div className="row-lg-3 row-md-3 col-sm-12 d-flex w-50 ">
      
        {tabs.map((tab, index) => (
         <button>
          <li
            key={index}
            className={`tabs__item ${activeTab === index ? "tabs__item--active" : ""}`}
            onClick={() => handleClick(index)}
          >
            {tab.name}
          </li>
         </button>
        ))}
      
      </div>
      <hr/>

      <div className="row-lg-3 row-md-3 col-sm-12 justify-content-center flex-column">
      <div className="tabs__content">
        <table className="table">
          <thead className="thead">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Phone No.</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.phoneno}</td>
                <td>
                  <button>{item.status}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}

export default Tabs;
