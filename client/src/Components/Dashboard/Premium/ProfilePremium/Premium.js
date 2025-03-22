import {React} from "react";
import Templates from "./templates"

const Premium = () => {
  const userDetail = JSON.parse(localStorage.getItem("userDetail"));
 
  const vendorTempData = [
    {
      id: 1,
      img: 'assets/img/vendorTemp1.png' 
    },
    {
      id: 2,
      img: 'assets/img/vendorTemp2.png' 
    },
    {
      id: 3,
      img: 'assets/img/vendorTemp3.png' 
    },
    {
      id: 4,
     img: 'assets/img/vendorTemp4.png' 
    },
  ];
  const brokerTempData = [
      {
        id: 5,
        img: 'assets/img/brokerTemp1.png'
      },
      {
        id: 6,
        img: 'assets/img/brokerTemp2.png'
      },
      {
        id: 7,
        img: 'assets/img/brokerTemp3.png'
      },
      {
        id: 8,
        img: 'assets/img/brokerTemp4.png'
      },
    ];

    const builderTempData = [
      {
        id: 9,
        img: 'assets/img/temp1.png'
      },
      {
        id: 10,
        img: 'assets/img/temp2.png'
      },
      {
        id: 11,
        img: 'assets/img/temp3.png'
      },
      {
        id: 12,
        img: 'assets/img/temp4.png'
      },
    ];

    const ownerTempData = [
      {
        id: 13,
        img: 'assets/img/temp1.png'
      },
      {
        id: 14,
        img: 'assets/img/temp2.png'
      },
      {
        id: 15,
        img: 'assets/img/temp3.png'
      },
      {
        id: 16,
        img: 'assets/img/temp4.png'
      },
    ];

 console.log()
  
    if(userDetail.user.usertype == 1)
    {
      return <Templates data={vendorTempData} />
    }
    else if(userDetail.user.usertype == 2)
    {
      return <Templates data={brokerTempData} />
    }
    else if(userDetail.user.usertype == 3)
    {
      return <Templates data={builderTempData} />
    }
    else if(userDetail.user.usertype == 4){
      return <Templates data={ownerTempData} />
    }else{
    return (
      <div style={{display:'flex',alignItems:'center',justifyContent:'center',color:'black'}} className='d-flex align-items-center col-lg-9 col-md-8 col-sm-12 justify-content-center flex-column'>
      <p className="bg-white p-2 rounded text-center" > We're sorry, but your user category could not be recognized. Please Register as a <span  className="theme-bg p-1 mr-1 rounded">Owner</span> <span  className="theme-bg p-1 mr-1 rounded">Broker</span><span  className="theme-bg p-1 mr-1 rounded">Vender</span><span className="theme-bg p-1 mr-1 rounded"> Builder</span>.</p>
    </div>
    );
  }
}
export default Premium;
