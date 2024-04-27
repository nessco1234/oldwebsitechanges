import React from 'react'
import Breadcrum from '../Components/Home/Breadcrum'
import InfinteCompany from '../Components/Home/InfinteCompany'
import Testimonials from '../Components/Home/Testimonials'
import AboutNessco from '../Components/About/AboutNessco'
import AboutCards from '../Components/About/AboutCards'
import '../Styles/About.css'
const About = () => {
  return (
    <>
        <Breadcrum previous={"Home > "} active={"About"} />
        {/* ///////////////// */}
        <AboutNessco/>
        <AboutCards/>

        <Testimonials/>
        <InfinteCompany/>
    </>
  )
}

export default About
