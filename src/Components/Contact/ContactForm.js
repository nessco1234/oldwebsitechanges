import React, { useState } from 'react'
import icon1 from '../../Assets/images/icons/marker.png'
import icon2 from '../../Assets/images/icons/email.png'
import icon3 from '../../Assets/images/icons/phone.png'
import { BiLeftArrow, BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import { FaArrowRightLong } from 'react-icons/fa6'
import { redirect, useNavigate } from 'react-router-dom'
import axios from 'axios'
const ContactForm = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        SingleLine: '',
        Email: '',
        PhoneNumber_countrycode: '',
        SingleLine1: '',
        MultiLine: ''
        // Add more fields as needed
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if () {

        navigate('/thank-you')
        try {
            // const response = await axios.post('http://16.171.239.170:5000/form-submission', formData, {
            const response = await axios.post('http://localhost:5000/form-submission', formData, {
                headers: {
                    'Content-Type': 'application/json', // Ensure the backend handles JSON
                },
            });
            console.log(response)

        } catch (error) {
            console.error('Error submitting form:', error);
        }

        // }
        // navigate('/thank-you')
    };
    return (
        <section className="contact">
            <div className="contactshape"></div>
            <div className="contactcontainer">
                <div className="contactleftsection">
                    <p className="contacttitle">GET IN TOUCH</p>
                    <h1 className="contactheading">Have a Project in Mind? <br />
                        Let’s Contact</h1>
                    <div className="contactcontent">
                        <div className="contactinfo">
                            <div className="contactinfoleft">
                                <div className="contactinfologo">
                                    <img src={icon1} alt="" />
                                </div>
                            </div>
                            <div className="contactinforight">
                                <h1 className="contactinfotitle">Head Office</h1>
                                <a className="contactinfodesc" href='https://maps.app.goo.gl/kuArACWXXSUuSY848'>E-186, Apparel Park, RIICO Industrial Area, Mahal Road, Jagatpura, Jaipur (Rajasthan) - 302022, INDIA</a>
                            </div>
                        </div>
                        <hr className='contactdivider' />
                        <div className="contactinfo">
                            <div className="contactinfoleft">
                                <div className="contactinfologo">
                                    <img src={icon2} alt="" />
                                </div>
                            </div>
                            <div className="contactinforight">
                                <h1 className="contactinfotitle">Company Email</h1>
                                <a href='mailto:info@nesscoindia.com' className="contactinfodesc">Info@nesscoindia.com</a>
                            </div>
                        </div>
                        <hr className='contactdivider' />
                        <div className="contactinfo">
                            <div className="contactinfoleft">
                                <div className="contactinfologo">
                                    <img src={icon3} alt="" />
                                </div>
                            </div>
                            <div className="contactinforight">
                                <h1 className="contactinfotitle">Contact Us</h1>
                                <a href='tel:+91 95494 44484' className="contactinfodesc">+91 95494 44484 </a>
                                <a href='tel:+91 99822 00038' className="contactinfodesc"> +91 99822 00038 </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contactrightsection">
                    <form className="contactcard" onSubmit={handleSubmit}>
                        <div className="contactcardtitle">Send a Message</div>
                        <div className="contactfields">

                            <input value={formData.SingleLine} onChange={handleChange} name='SingleLine' placeholder='Full Name*' className='contactinputfields' type="text" />
                            <input value={formData.Email} onChange={handleChange} name='Email' placeholder='Email' className='contactinputfields' type="text" />
                            <input value={formData.PhoneNumber_countrycode} onChange={handleChange} name='PhoneNumber_countrycode' placeholder='Phone Number*' className='contactinputfields' type="text" />
                            <input value={formData.SingleLine1} onChange={handleChange} name='SingleLine1' placeholder='Subject' className='contactinputfields' type="text" />
                            <textarea value={formData.MultiLine} onChange={handleChange} name='MultiLine' placeholder='Message' className='contactinputtextarea' cols="30" rows="3"></textarea>
                        </div>
                        <button type="submit" className="contactbtn">
                            <p className='headerbtncon'>Send Message </p> <FaArrowRightLong className='headerbtnarrow' style={{ fontSize: "1.5rem" }} /></button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactForm
