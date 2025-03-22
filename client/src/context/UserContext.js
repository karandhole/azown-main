import React, { createContext, useState } from "react";
import axios from "axios";
import { userTempArr } from "../Components/Constant/userTemplates";
import { successMsg } from "../Components/notification";

const UserContext = createContext();

const UserState = (props) => {
  const host = "http://localhost:5000"
  // const host = "https://api.azown.com/api";
  const [userData , setUserData] = useState({})
  const [showLoader,setShowLoader] = useState(false)

  const [alluserData,setallUserData]=useState([])
  const kycupdate = async (formData) => {
    console.log(formData);
    const responce = await axios.put(`${host}/auth/kycupdate`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "auth-token": localStorage.getItem("token"),
      },
    });
    console.log(responce.data);
  };
  const [venderDetail, setVenderDetail] = useState({});
  const getVenderData = async (_id) => {
    console.log(_id);
    const responce = await fetch(`${host}/user/userprofile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id }),
    });
    let data = await responce.json();

    console.log(data);
    setVenderDetail(data);
  };

  const updateTemplateData = async (tempData) => {
    const jsonData = JSON.stringify(tempData) ;
    const res = await fetch(`${host}/user/add-tempalate-data`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,
      },
      body: JSON.stringify({ template_data: jsonData }),
    });
    if (res.ok) {
      const json = await res.json();
      setShowLoader(false);
      successMsg("Registration Successfully Done")
    }
    else{
      setShowLoader(false)
      console.log("Some Error")
    }
  };
  const addBrokerKyc = async (data) => {
    setShowLoader(true)
    const response = await fetch(`${host}/user/add-broker-kyc`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,
      },
      body: JSON.stringify(data),
    });
    console.log(response);
    if (response.ok) {
      const userData = JSON.parse(localStorage.getItem("userDetail"));
      userData.user.usertype = "2";
      userData.user.kyc_status = 1;
      localStorage.setItem("userDetail", JSON.stringify(userData));
      const tempData = userTempArr[7].projectData
      updateTemplateData(tempData);
    } else {
      console.log("Some error occured");
      setShowLoader(false)
    }
  };

  const addBuilderKyc = async (data) => {
    setShowLoader(true)
    const response = await fetch(`${host}/user/add-builder-kyc`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const userData = JSON.parse(localStorage.getItem("userDetail"));
      userData.user.usertype = 3;
      userData.user.kyc_status = 1;
      localStorage.setItem("userDetail", JSON.stringify(userData));
      const tempData = userTempArr[11].projectData
      updateTemplateData(tempData);
    } else {
      console.log("Some error occured");
      setShowLoader(false)
    }
  };

  const addOwnerKyc = async (data) => {
    setShowLoader(true)
    const response = await fetch(`${host}/user/add-owner-kyc`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const userData = JSON.parse(localStorage.getItem("userDetail"));
      userData.user.usertype = 4;
      userData.user.kyc_status = 1;
      localStorage.setItem("userDetail", JSON.stringify(userData));
      const tempData = userTempArr[15].projectData
      updateTemplateData(tempData);
    } else {
      console.log("Some error occured");
      setShowLoader(false)
    }
  };

  const addVenderKyc = async (data) => {
    setShowLoader(true)
    const response = await fetch(`${host}/user/add-vender-kyc`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const userData = JSON.parse(localStorage.getItem("userDetail"));
      userData.user.usertype = 1;
      userData.user.kyc_status = 1;
      localStorage.setItem("userDetail", JSON.stringify(userData));
      const tempData = userTempArr[3].projectData
      updateTemplateData(tempData);
    } else {
      console.log("Some error occured");
      setShowLoader(false)
    }
  };

  const getUserData = async (id) => {
    const response = await fetch(`${host}/user/get-user-detail/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,
      },
    });
    if (response.ok) {
      const userData = await response.json();
      setUserData(userData)
      // console.log(userData);

    } else {
      console.log("Some error in fetching user data");
    }
  };

  const allUserData=async (id)=>{
    const response = await fetch(`${host}/user/get-users/${id}`, {
      method :"GET",
      headers: {
        "Content-Type":"application/json",
        "auth-token":JSON.parse(localStorage.getItem("userDetail")).authtoken
  },
});
if (response.ok) {
  const alluserData = await response.json();
  setallUserData(alluserData)
  // console.log(alluserData);

} else {
  console.log("Some error in fetching user data");
}
};

   


  

  return (
    <UserContext.Provider
      value={{
        host,
        kycupdate,
        addBrokerKyc,
        addBuilderKyc,
        addOwnerKyc,
        addVenderKyc,
        getVenderData,
        venderDetail,
      getUserData,
        userData,
               showLoader,
               allUserData,
               alluserData,
               setallUserData,

        
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
export { UserContext, UserState };