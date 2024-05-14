import React from 'react'
import Breadcrum from '../Components/Home/Breadcrum'
// import { FaLocationDot } from 'react-icons/fa6'

import '../Styles/Contact.css'
import ContactForm from '../Components/Contact/ContactForm'
import Branches from '../Components/Contact/Branches'

const Contact = () => {
    return (
        <>
            <Breadcrum previous={"Home"} active={"Contact"} />
            <ContactForm/>
            <Branches/>
        </>
    )
}

export default Contact
