import React from 'react'
import Breadcrum from '../Components/Home/Breadcrum'
import { Link } from 'react-router-dom'
import '../Styles/Thankyou.css'
import file1 from '../textfile1.txt'
import file2 from '../textfile2.txt'
const Thankyou = (props) => {
    return (
        <>
            <Breadcrum active={"Thank You"} previous={"Home"} />
            <section className="thankyou">
                <div className="thankyoucontainer">
                    <h1 className="thankyouheading">Thank <span>You</span> </h1>
                    <p className="thankyoudesc">We received your message and will get back to you shortly. <Link>Subscribe Nessco India</Link> at youtube for all machine maintenance and working.</p>
                        <a href={props.link?file1:file2} download={''} className='thankyoubtn'>Click To Download Our Catalogue</a>
                </div>
            </section>
        </>
    )
}

export default Thankyou
