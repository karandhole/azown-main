import React, { createContext, useState } from "react";
import axios from "axios";
import { successMsg } from "../Components/notification";

const ServiceContext = createContext();

const ServiceState = (props) => {
  const host = "http://localhost:5000"
  // const host = "https://api.azown.com/api";

  const [agentService, setAgentService] = useState([]);
  const [venderOwnServiceData, setVenderOwnServiceData] = useState([]);
  const [serviceLeads, setServiceLeads] = useState([])
  const [requestService , setRequestService] = useState([])

  const addNewService = async (data) => {
    const responce = await axios.post(
      `${host}/service/create-vender-service`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          "auth-token": JSON.parse(localStorage.getItem("userDetail"))
            .authtoken,
        },
      }
    );
    console.log(responce);
    successMsg("Service Added")
    setVenderOwnServiceData([...venderOwnServiceData, responce.data]);
  };
  const venderOwnServices = async () => {
    // console.log("id",id)
    const response = await fetch(
      `${host}/service/fetch-vender-own-service`,
      {
        method: "GET",
        headers: {
          "content-Type": "application/json",
          "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken
        },
      }
    );
    let vdata = await response.json();
    //   console.log(response)
    console.log("vdata", vdata);
    setVenderOwnServiceData(vdata);
  };

  const [venderList, setVenderList] = useState([]);
  const getVenderList = async (id) => {
    const responce = await fetch(
      `${host}/service/fetch-vender-by-service/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,
        },
      }
    );
    const data = await responce.json();
    setVenderList(data);
  };


  const createServiceLead = async (data) => {
    console.log("data", data);
    // let host = "http://localhost:5000";
    const responce = await axios.post(
      `${host}/service/create-service-lead`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,
        },

      }
    );
    console.log(responce);

  };


  const getServiceLeads = async (id,uid) => {
    // console.log(id,uid);
    // let host = "http://localhost:5000"
    const responce = await axios.get(`${host}/service/my-service-lead/${id}/${uid}`,
      {
        headers: {
          "Content-Type": "application/json",
          // "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,
        }
      }
    );
    console.log(responce.data);
    setServiceLeads(responce.data)
}

const updateLeadStage = async( id , stage) => {
  // console.log(id, stage);
  // let host = "http://localhost:5000"
  const responce = await axios.put(`${host}/service/update-service-lead/${id}/${stage}`,
    {
      headers: {
        "Content-Type": "application/json",
        "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,
      }
    }
  );
  console.log(responce.data);
  // setServiceLeads(responce.data)
}


const myRequestService = async () => {
  // let host = "http://localhost:5000"
  const responce = await axios.get(
    `${host}/service/my-request-service-lead`,
    {
      headers: {
        "Content-Type": "application/json",
        "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,
      }
    }
  );
  console.log(responce.data);
  setRequestService(responce.data)
}


const [myservice,setMyservice]=useState([])


const myownservices=async (id)=>{
  const response = await fetch(`${host}/service/get-vender-service/${id}`, {
    method :"GET",
    headers: {
      "Content-Type":"application/json",
      "auth-token":JSON.parse(localStorage.getItem("userDetail")).authtoken
},
});
if (response.ok) {
const myservice = await response.json();
setMyservice(myservice)
// console.log(myservice);

} else {
console.log("Some error in fetching user data");
}
};




// show existing service

return (
  <ServiceContext.Provider
    value={{
      host,


      venderOwnServiceData,
      venderOwnServices,
      addNewService,
      venderList,
      getVenderList,
      createServiceLead,
      serviceLeads,
      getServiceLeads ,
      updateLeadStage ,
      requestService,
      myRequestService,
      myownservices,
      myservice

    }}
  >
    {props.children}
  </ServiceContext.Provider>
);
};

export { ServiceContext, ServiceState };
