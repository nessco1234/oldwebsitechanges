import React from 'react'
import Breadcrum from '../Components/Home/Breadcrum'
import InfinteCompany from '../Components/Home/InfinteCompany'
import Testimonials from '../Components/Home/Testimonials'
import AboutNessco from '../Components/About/AboutNessco'
import AboutCards from '../Components/About/AboutCards'
import '../Styles/About.css'
import AboutDescription from '../Components/About/AboutDescription'
import AboutVision from '../Components/About/AboutVision'
import AboutSkills from '../Components/About/AboutSkills'
import AboutExperts from '../Components/About/AboutExperts'
import Creation from '../Components/Home/Creation'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa6'
const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Nessco India Machineries</title>
        <meta name="description" content="NesscoIndia Machineries is a well established brand in paper forming machines. The best in market as paper cup making machine manufacturer and supplier." />
        <meta name="keywords" content="paper cup making machine, paper cup machine, paper cup machine price, paper cup making machine near me, paper cup making machine price, paper cup, paper cup machine manufacturer, paper cup machine company, cup manufacturing machine" />

        <meta name="State" content="Rajasthan" />
        <meta name="City" content="Jaipur" />
        <meta name="address" content="186 Apparel Park, Mahal Rd, Ricco Industrial Area, Jagatpura, Jaipur, Rajasthan 302022, India" />
        <meta name="copyright" content="Copyright 2022 Nessco India" />
        <meta name="distribution" content="global" />
        <meta name="language" content="english" />
        <meta name="robots" content="index,follow" />
        <meta name="publisher" content="Nessco India" />
        <meta name="author" content="Nessco India" />
        <link rel="canonical" href="https://www.nesscoindia.com/about-us/" />

      </Helmet>
      <section className="breadcrum">
        <div className="breadcrumcontainer">
          <Link to={'/'} className='breadcrumheading'>Home<FaAngleRight className='breadcrumicon' /></Link><h3 className='breadcrumheading'><span>About</span> </h3>
        </div>
      </section>
      {/* ///////////////// */}
      <AboutNessco />
      <AboutCards />
      <AboutDescription />
      <AboutVision />
      <AboutSkills />
      <AboutExperts />
      <Creation />
      <Testimonials />
      <InfinteCompany />
    </>
  )
}

export default About
