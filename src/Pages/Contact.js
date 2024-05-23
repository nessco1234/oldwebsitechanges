import React from 'react'
import Breadcrum from '../Components/Home/Breadcrum'
// import { FaLocationDot } from 'react-icons/fa6'

import '../Styles/Contact.css'
import ContactForm from '../Components/Contact/ContactForm'
import Branches from '../Components/Contact/Branches'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa6'

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Enquire About Paper Forming Machines | Get Free Quote!</title>
                <meta name="description" content="Need Information about paper forming Machine? Get Free product details and prices. Contact us - Call/WhatsApp/Email or Get call from us." />
                <meta name="keywords" content="paper cup machine contact number, paper cup machine supplier number" />
                <meta name="State" content="Rajasthan" />
                <meta name="City" content="Jaipur" />
                <meta name="address" content="186 Apparel Park, Mahal Rd, Ricco Industrial Area, Jagatpura, Jaipur, Rajasthan 302022, India" />
                <meta name="copyright" content="Copyright 2022 Nessco India" />
                <meta name="distribution" content="global" />
                <meta name="language" content="english" />
                <meta name="robots" content="index,follow" />
                <meta name="publisher" content="Nessco India" />
                <meta name="author" content="Nessco India" />
                <link rel="canonical" href="https://www.nesscoindia.com/contact/" />

            </Helmet>
            <section className="breadcrum">
        <div className="breadcrumcontainer">
          <Link to={'/'} className='breadcrumheading'>Home<FaAngleRight className='breadcrumicon' /></Link><Link className='breadcrumheading'><span>Contact</span> </Link>
        </div>
      </section>
            <ContactForm />
            <Branches />
        </>
    )
}

export default Contact
