import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import HomeNav from '../Header/HomeNav'
import TestimonialClient from './Testimonial_Client/TestimonialClient'
import TestimonialUsers from './Testimonial_Client/TestimonialUsers'
import { Autocomplete } from '@react-google-maps/api'
import HeroBanner from './HeroBanner'
import TopRrent from './Testimonial_Client/TopRrent'
import Footer from '../Footer/Footer'
import OurServices from './OurServices'


const Home = () => {


	return (
		<div >


			<div id="main-wrapper" >
				<HomeNav />

				<HeroBanner />
				<OurServices/>
				<TestimonialUsers />
				<TopRrent/>			
			<Footer/>
			
			</div>

		</div>
	)
}

export default Home