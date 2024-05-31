import React from 'react'
import Breadcrum from '../Components/Home/Breadcrum'
import { Link } from 'react-router-dom'
import '../Styles/Thankyou.css'
const Thankyou = (props) => {
    return (
        <>
            <Breadcrum active={"Thank You"} previous={"Home"} />
            <section className="thankyou">
                <div className="thankyoucontainer">
                    <h1 className="thankyouheading">Thank <span>You</span> </h1>
                    <p className="thankyoudesc">We received your message and will get back to you shortly. <a href='https://www.youtube.com/c/NesscoPaperCupMachine' target='_blank'>Subscribe Nessco India</a> at youtube for all machine maintenance and working.</p>
                        <a href={props.link?'https://www.nesscoindia.com/Assets/images/resource/Nessco.pdf':'https://www.nesscoindia.com/Assets/images/resource/Nessco.pdf'} download={''} className='thankyoubtn'>Click To Download Our Catalogue</a>
                </div>
            </section>
        </>
    )
}

export default Thankyou
