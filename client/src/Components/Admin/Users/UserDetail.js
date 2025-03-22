import React from 'react'


const UserDetail = () => {
  return (
    
   <div className="_prtis_list mb-4">
  <div className="_prtis_list_header">
    <ul>
      <li>
        <div className="content_thumb"><i className="fa fa-envelope" /></div>
        <div className="content">
          <span className="dark">svalia.tech@gmail.com</span>
          <span className="title">Email</span>
        </div>
      </li>
      <li>
        <div className="content_thumb"><i className="fa fa-phone" /></div>
        <div className="content">
          <span className="dark">856 574 2314</span>
          <span className="title">Call Me</span>
        </div>
      </li>
      <li>
        <div className="content_thumb"><i className="fa fa-map-marker-alt" /></div>
        <div className="content">
          <span className="dark">Montreal, USA</span>
          <span className="title">Location</span>
        </div>
      </li>
    </ul>
  </div>
  <div className="_prtis_list_body">
    <ul className="deatil_features">
      <li><strong>Svalia Techu</strong>Name</li>
      <li><strong>svalia.tech@gmail.com</strong>Email</li>
      <li><strong>568 942 5163</strong>Call</li>
      <li><strong>Liverden</strong>City</li>
      <li><strong>California</strong>State</li>
      <li><strong>United State</strong>Country</li>
      <li><strong>+91 256 8547</strong>Fax</li>
      <li><strong>22 Listed</strong>Property</li>
    </ul>
  </div>
</div>

  )
}

export default UserDetail