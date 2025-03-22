import React, { useState } from "react";
import PropertyContext from "./PropertyContext";


const PropertyState = (props) => {
  // const host = "https://api.azown.com/api"
  const host = "http://localhost:5000"
  
 
  const [showLoader,setShowLoader] = useState(false);
  const [rrprop, setrrprop] = useState([]);
  
  const [dash, setdash] = useState([]);
  const [userdetail, setuserdetail] = useState([]);
  const [userdata , setuserdata] = useState([])
  const [rrdata, setrrdata] =useState([])
  const [rrsdata, setrrsdata] =useState([])
  const [rfmdata, setrfmdata] =useState([])
  const [rpgdata, setrpgdata] =useState([])
  const [cmrdata, setcmrdata] =useState([])
  const [cmsdata, setcmsdata] =useState([])
  const [plotdata, setplotdata] =useState([])
 const [userRrData, setuserRrData] =useState([])
  const [userRfmData, setuserRfmData] =useState([])
  const [userRpgData, setuserRpgData] =useState([])
  const [userCmrData, setuserCmrData] =useState([])
  const [userCmsData, setuserCmsData] =useState([])
  const [userPlotData, setuserPlotData] =useState([])
  const [userRrsData, setuserRrsData] =useState([])


// userdetails
const getuserdetail = async () => {
  const responce = await fetch(`${host}/user/getuserdetail`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,
    },
  });
  const resdata = await responce.json();
  setuserdetail(resdata);
};

const userprofile = async (id)=>{
  console.log(id);
  const responce = await fetch(`${host}/auth/userprofile`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ _id:id }),
  });
  const resdata = await responce.json();
  setuserdata(resdata);
}

// rr property
const fetchAllrrprop = async () => {
  const responce = await fetch(`${host}/property/getrrprop`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,
    },
  });
  const resdata = await responce.json();
  setrrprop(resdata);
};



// handler 
const handlereq = async (pid,uid,des) => {
  const responce = await fetch(`${host}/property/handlerreq`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,
    },
    body: JSON.stringify({ property_id :pid,property_owner_id:uid }),
  });
  const resdata = await responce.json();
  console.log(resdata);
};


  

  const [gethandle, sethandler] = useState([]);
  const gethandler = async () => {
    const responce = await fetch(`${host}/property/gethandler`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,
      },
    });
    const userdetail = await responce.json();
    sethandler(userdetail);
    // console.log(userdetail);
  };




  const addservice = async (service_name, service_desc, service_charge) => {
    const responce = await fetch(`${host}/service/createservice`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,
      },
      body: JSON.stringify({ service_name, service_desc, service_charge }),
    });
    const data = await responce.json();
    console.log(data);

  };
  const [allservice,setallservice ]= useState([])
  const fetchservice = async()=>{
    const responce = await fetch(`${host}/service/fetchservice`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,
      },
      
    });
    const data = await responce.json();
    // console.log(data);
    setallservice(data)

  }

  
 
  const [rrprolead, setrrprolead] = useState([]);
  const rrproplead = async (id) => {
    const responce = await fetch(`${host}/property/rrproplead/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,
      },
    });
    const leaddata = await responce.json();
    setrrprolead(leaddata);
  };
  
  const paymentreq = async (id) => {
    // console.log(id);
    const responce = await fetch(`${host}/property/paymentreq/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,
      },
    });
    let paydata = await responce.json();
  };
  const MyRent = async () => {
    const responce = await fetch(`${host}/property/myrr`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,
      },
    });
    const userdetail = await responce.json();
    setdash(userdetail);
  };
 
 

  const kycupdatefun = async (name, email, usertype, phone, adharno) => {
    const responce = await fetch(`${host}/auth/kycupdate`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,
      },
      body: JSON.stringify({ name, email, usertype, phone, adharno }),
    });
    const updatedatares = await responce.json();
    console.log(updatedatares);
  };
  
  
  

  
  const [venderservice,setvenderservice]= useState([])
  const allvenderservice = async ()=>{
    const responce = await fetch(`${host}/service/allvenderservice`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,
      }, 
    });
    const updatedatares = await responce.json();
    setvenderservice(updatedatares);
    console.log(venderservice);

  }
    const addVenderService =async (service)=>{
      const responce = await fetch(`${host}/service/addvenderservice`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,
        },
        body: JSON.stringify(service),
      });
      const addservice = await responce.json();
      // console.log(updatedatares);
      setvenderservice(venderservice.concat(addservice))
    }
    const createservicelead = async(id)=>{
      // console.log(id);
      const responce = await fetch(`${host}/service/createservicelead`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,
        },
        body: JSON.stringify({id}),
      });
      const addservice = await responce.json(); 
    }
    const [client_lead_data, set_lead_data] = useState([])
    const client_service_lead = async()=>{
      const responce = await fetch(`${host}/service/clientservicelead`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,
        },
      });
      const client_data = await responce.json(); 
      set_lead_data(client_data)
    }
    

    const rrDetail = async (id) => {
      setShowLoader(true)
      const responce = await fetch(`${host}/property/rr-detail/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,
        },
      });
      let propdata = await responce.json();
      // console.log(propdata);
      setrrdata(propdata)
 setShowLoader(false)
    };

    const rrsDetail = async (id) => {
      setShowLoader(true)
      const responce = await fetch(`${host}/property/rrs-detail/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,
        },
      });
      let propdata = await responce.json();
      // console.log(propdata);
      setrrsdata(propdata)
      setShowLoader(false)
    };
    const rfmDetail = async (id) => {
      setShowLoader(true)
      const responce = await fetch(`${host}/property/rfm-detail/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,
        },
      });
      let propdata = await responce.json();
      // console.log(propdata);
      setrfmdata(propdata)
      setShowLoader(false)

    };
    const rpgDetail = async (id) => {
      setShowLoader(true)
      const responce = await fetch(`${host}/property/rpg-detail/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,
        },
      });
      let propdata = await responce.json();
      // console.log(propdata);
      setrpgdata(propdata)
      setShowLoader(false)
    };

    const cmrDetail = async (id) => {
      setShowLoader(true)
      const responce = await fetch(`${host}/property/cmr-detail/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,
        },
      });
      let propdata = await responce.json();
      // console.log(propdata);
      setcmrdata(propdata)
      setShowLoader(false);
    };

    const cmsDetail = async (id) => {
      setShowLoader(true)
      const responce = await fetch(`${host}/property/cms-detail/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,
        },
      });
      let propdata = await responce.json();
      // console.log(propdata);
      setcmsdata(propdata)
      setShowLoader(false)
    };
    const plotDetail = async (id) => {
      setShowLoader(true)
      const responce = await fetch(`${host}/property/plot-detail/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,
        },
      });
      let propdata = await responce.json();
      // console.log(propdata);
      setplotdata(propdata)
      setShowLoader(false)
    };

const getUserRr = async (id,type) => {
  setShowLoader(true)
  const responce = await fetch(`${host}/property/user-rr-prop/${id}/${type}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,
    },
  });
  let propdata = await responce.json();
  // console.log(propdata);
  setuserRrData(propdata)
  setShowLoader(false)

};
const getUserRrs = async (id,type) => {
  setShowLoader(true)
  const responce = await fetch(`${host}/property/user-rrs-prop/${id}/${type}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,
    },
  });
  let propdata = await responce.json();
  // console.log(propdata);
  setuserRrsData(propdata)
  setShowLoader(false)
};

const getUserRfm = async (id,type) => {
  setShowLoader(true)
  const responce = await fetch(`${host}/property/user-rfm-prop/${id}/${type}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,
    },
  });
  let propdata = await responce.json();
  // console.log(propdata);
  setuserRfmData(propdata)
  setShowLoader(false)
};
const getUserRpg = async (id,type) => {
  setShowLoader(true)
  const responce = await fetch(`${host}/property/user-rpg-prop/${id}/${type}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,

    },
  });
  let propdata = await responce.json();
  // console.log(propdata);
  setuserRpgData(propdata)
  setShowLoader(false)
};
const getUserCmr = async (id,type) => {
  setShowLoader(true)
  const responce = await fetch(`${host}/property/user-cmr-prop/${id}/${type}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,

    },
  });
  let propdata = await responce.json();
  // console.log(propdata);
  setuserCmrData(propdata)
  setShowLoader(false)
};
const getUserCms = async (id,type) => {
  setShowLoader(true)
  const responce = await fetch(`${host}/property/user-cms-prop/${id}/${type}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,

    },
  });
  let propdata = await responce.json();
  // console.log(propdata);
  setuserCmsData(propdata)
  setShowLoader(false)
};
const getUserPlot = async (id,type) => {
  setShowLoader(true)
  const responce = await fetch(`${host}/property/user-plot-prop/${id}/${type}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,

    },
  });
  let propdata = await responce.json();
  // console.log(propdata);
  setuserPlotData(propdata)
  setShowLoader(false)
};




  return (
    <PropertyContext.Provider
      value={{
        rrdata,
        rrDetail,
        rrsDetail,
        rrsdata,
        rpgDetail,
        rpgdata,
        rfmDetail,
        rfmdata,
        cmrDetail,
        cmrdata,
        cmsDetail,
        cmsdata,
        plotDetail,
        plotdata,
        client_lead_data,
        client_service_lead,
        createservicelead,
        venderservice,
        allvenderservice,
        addVenderService,
        fetchservice,allservice,
        rrprop,
       
        fetchAllrrprop,
        dash,
        gethandle,
        gethandler,
      
        rrproplead,
        rrprolead,
        
        paymentreq,
        userdetail,
        getuserdetail,
        kycupdatefun,
        handlereq,
        addservice,
        userprofile,userdata,
        host,
        getUserRr,
        getUserRrs,
        getUserRfm,
        getUserRpg,
        getUserCmr,
        getUserCms,
        getUserPlot,
        userRrData,
        userRrsData,
        userRfmData,
        userRpgData,
        userCmrData,
        userCmsData,
        userPlotData,
        userRrData,
        userRrsData,
        userRfmData,
        showLoader
        
        
      }}
    >
      {props.children}
    </PropertyContext.Provider>
  );
};
export default PropertyState;