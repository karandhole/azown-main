import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
  return (
    <div className='fixed-top d-flex justify-content-center align-items-center w-100 h-100' style={{backgroundColor:'rgba(0,0,0,.3)',zIndex:'1000'}}>
<Spinner animation="border text-dark p-4" />
</div>
  )
}

export default Loader
