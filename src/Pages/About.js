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
const About = () => {
  return (
    <>
        <Breadcrum previous={"Home"} active={"About"} />
        {/* ///////////////// */}
        <AboutNessco/>
        <AboutCards/>
        <AboutDescription/>
        <AboutVision/>
        <AboutSkills/>
        <AboutExperts/>
        <Creation/>
        <Testimonials/>
        <InfinteCompany/>
    </>
  )
}

export default About
