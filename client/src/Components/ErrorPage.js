import React from 'react'
import Navbar from './Header/Navbar'
import Footer from './Footer/Footer'

const ErrorPage = () => {
  return (
    <>
        <Navbar/>
        {/* <hr/> */}
      <section className="error-wrap gray">
				<div className="container">
					<div className="row justify-content-center">
						
						<div className="col-lg-6 col-md-10">
							<div className="text-center">
                                {/* <img src='assets/img/logo.png' className='img-fluid pb-3' alt=""/> */}
								<img src="assets/img/404.png" className="img-fluid mb-4" alt=""/>
								<h2>The page you are looking for does not exist.</h2>
                                <h3>Please check the URL or navigate back to the homepage.</h3>
								<a className="btn btn-theme" href="#" style={{marginTop:20}}>Back To Home</a>
								
							</div>
						</div>
						
					</div>
				</div>
			</section>
            {/* <Footer/> */}
    </>
  )
}

export default ErrorPage
