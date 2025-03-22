import React from 'react'
import { Link } from 'react-router-dom'

    const Premiumpage = () => {
    return (
        <>
        <div className="col-lg-9 col-md-8 col-sm-12 d-flex justify-content-center align-items-center flex-column">
            <div className="bg-white rounded p-4">
            <h2 className="text-center p-4">Premium Page</h2>
            <p className="text-center" style={{ color: "black" }}>
            Access to exclusive features: If the premium package includes access to exclusive features, such as advanced analytics,
             customized dashboards, or personalized recommendations, the premium page could display these features for the user to explore.
            </p>
            <div className="btns p-4 text-center">
            <Link to ='/edit-preview-page'>
        <button className='btn btn-success mr-3' style={{backgroundColor:'#27ae60',color:'white'}}>Edit Page</button>
        </Link>
        <button className='btn btn-success ml-3' style={{backgroundColor:'#27ae60',color:'white'}}>Preview Page</button>
            </div>
            </div>
        </div>
        <div>
        </div>
        </>
    )
    }

    export default Premiumpage