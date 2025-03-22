import React from 'react'

const Alert = (props) => {
  return (
    <div class="alert alert-danger " style={{position:"fixed",zIndex:"99999999",color:"red" ,width:"400px" , right:"100px",top:"100px"}}  role="alert">
   {props.msg}
  </div>
  )
}

export default Alert