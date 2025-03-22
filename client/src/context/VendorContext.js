import React, { createContext, useState } from 'react';

 const VendorContext = createContext();

const VendorStatus = (props) => {


const [vendorData, setVendorData] = useState({});

    
  //   const [vendorData, setVendorData] = useState({
  //   name:" Adam K. Jollio",
  //   service:"Mover & Packer",
  //   duration: '3 Days'
  // });

const addVendorData = (data) => {
  // setVendorData([...vendorData, data]);

    setVendorData(data)
    // console.log('vc',vendorData)
  };
  

  return (
    <VendorContext.Provider value={{ vendorData, addVendorData }}>
      {props.children}
    </VendorContext.Provider>
  );
};

export  {VendorContext,VendorStatus};