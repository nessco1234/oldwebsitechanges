import React, { useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ContactForm = ({ visitData }) => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({ Mobile: '', Email: '' });
    const [formData, setFormData] = useState({
        Last_Name: '',
        Email: '',
        Mobile: '',
        Web_Subject: '',
        Web_Message: ''
    });

    const validatePhoneNumber = (number) => {
        const phoneRegex = /^\d{7,15}$/;
        return phoneRegex.test(number);
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let valid = true;

        if (!formData.Mobile) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                phoneNumber: 'Phone number is required',
            }));
            valid = false;
        } else if (!validatePhoneNumber(formData.Mobile)) {
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
                const payload = {
                    ...formData,
                    ...visitData // Include visitData in the payload
                };
                
                const response = await axios.post('http://localhost:5000/form-submission', payload, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.status === 200) {
                    navigate('/thank-you/');
                } else {
                    console.error('Error submitting form:', response);
                }
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        }
    };

    return (
        <section className="contact">
            <div className="contactshape"></div>
            <div className="contactcontainer">
                <div className="contactleftsection">
                    <p className="contacttitle">GET IN TOUCH</p>
                    <h1 className="contactheading">Have a Project in Mind? <br /> Let’s Contact</h1>
                    <div className="contactcontent">
                        {/* Contact information elements */}
                    </div>
                </div>
                <div className="contactrightsection">
                    <form className="contactcard" onSubmit={handleSubmit}>
                        <div className="contactcardtitle">Send a Message</div>
                        <div className="contactfields">
                            <input value={formData.Last_Name} onChange={handleChange} name='Last_Name' placeholder='Full Name*' className='contactinputfields' type="text" required />
                            <div className="validations">
                                <input value={formData.Email} onChange={handleChange} name='Email' placeholder='Email' className='contactinputfields' type="text" />
                                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                            </div>
                            <div className="validations">
                                <input value={formData.Mobile} onChange={handleChange} name='Mobile' placeholder='Phone Number*' required className='contactinputfields' type="text" />
                                {errors.phoneNumber && <p style={{ color: 'red' }}>{errors.phoneNumber}</p>}
                            </div>
                            <input value={formData.Web_Subject} onChange={handleChange} name='Web_Subject' placeholder='Subject' className='contactinputfields' type="text" />
                            <textarea value={formData.Web_Message} onChange={handleChange} name='Web_Message' placeholder='Message' className='contactinputtextarea' cols="30" rows="3"></textarea>
                        </div>
                        <button aria-label='Send Message' type="submit" className="contactbtn">
                            <p className='headerbtncon'>Send Message </p> <FaArrowRightLong className='headerbtnarrow' style={{ fontSize: "1.5rem" }} /></button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
