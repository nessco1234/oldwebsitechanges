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
    const [errors, setErrors] = useState({ phoneNumber: '', email: '', username: '' });
    const validatePhoneNumber = (number) => {
        const phoneRegex = /^\d{7,15}$/;
        return phoneRegex.test(number);
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const [formData, setFormData] = useState({
        SingleLine: '',
        Email: '',
        PhoneNumber_countrycode: '',
        SingleLine1: '',
        MultiLine: ''
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
        let valid = true;
        if (!formData.PhoneNumber_countrycode) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                phoneNumber: 'Phone number is required',
            }));
            valid = false;
        } else if (!validatePhoneNumber(formData.PhoneNumber_countrycode)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                phoneNumber: 'Phone number must be between 7 and 15 digits long',
            }));
            valid = false;
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, phoneNumber: '' }));
        }

        if (!formData.Email) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: 'Email is required',
            }));
            valid = false;
        } else if (!validateEmail(formData.Email)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: 'Email is not valid',
            }));
            valid = false;
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
        }
        if (valid) {
            try {
                const response = await axios.post('https://nesscobackend-sx1t.vercel.app/form-submission', formData, {
                // const response = await axios.post('http://localhost:5000/form-submission', formData, {
                    headers: {
                        'Content-Type': 'application/json', // Ensure the backend handles JSON
                    },
                });
                navigate('/thank-you/')
                console.log(response)

            } catch (error) {
                console.error('Error submitting form:', error);
            }
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
                                    <img src={'https://www.nesscoindia.com/Assets/images/icons/marker.png'} alt="Marker" />
                                </div>
                            </div>
                            <div className="contactinforight">
                                <h2 className="contactinfotitle">Head Office</h2>
                                <a className="contactinfodesc" href='https://maps.app.goo.gl/kuArACWXXSUuSY848'>E-186, Apparel Park, RIICO Industrial Area, Mahal Road, Jagatpura, Jaipur (Rajasthan) - 302022, INDIA</a>
                            </div>
                        </div>
                        <hr className='contactdivider' />
                        <div className="contactinfo">
                            <div className="contactinfoleft">
                                <div className="contactinfologo">
                                    <img src={'https://www.nesscoindia.com/Assets/images/icons/email.png'} alt="Email" />
                                </div>
                            </div>
                            <div className="contactinforight">
                                <h2 className="contactinfotitle">Company Email</h2>
                                <a href='mailto:info@nesscoindia.com' className="contactinfodesc">Info@nesscoindia.com</a>
                            </div>
                        </div>
                        <hr className='contactdivider' />
                        <div className="contactinfo">
                            <div className="contactinfoleft">
                                <div className="contactinfologo">
                                    <img src={'https://www.nesscoindia.com/Assets/images/icons/phone.png'} alt="Phone" />
                                </div>
                            </div>
                            <div className="contactinforight">
                                <h2 className="contactinfotitle">Contact Us</h2>
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
                            <input value={formData.SingleLine} onChange={handleChange} name='SingleLine' placeholder='Full Name*' className='contactinputfields' type="text" required />
                            <div className="validations">
                                <input value={formData.Email} onChange={handleChange} name='Email' placeholder='Email' className='contactinputfields' type="text" />
                                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                            </div>
                            <div className="validations">

                                <input value={formData.PhoneNumber_countrycode} onChange={handleChange} name='PhoneNumber_countrycode' placeholder='Phone Number*' required className='contactinputfields' type="text" />
                                {errors.phoneNumber && <p style={{ color: 'red' }}>{errors.phoneNumber}</p>}
                            </div>
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
