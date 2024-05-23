import axios from 'axios'
import React, { useState } from 'react'
import { FaAngleRight, FaArrowRightLong } from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router-dom'

const IntroMachine = (props) => {
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
                navigate('/thank-you')
                console.log(response)

            } catch (error) {
                console.error('Error submitting form:', error);
            }
        }
    };
    return (
        <section className="intromachine">
            <div className="intromachinecompo">
                <div className="intromachineleft">
                    <div className="breadcrumconnections">
                        <Link to={'/'} className='breadcrumconnectiondislink'>Home</Link> <FaAngleRight className='breadcrumicon2' /><Link to={'/product'} className='breadcrumconnectiondislink'>Products</Link><FaAngleRight className='breadcrumicon2' /><p className='breadcrumconnectionactivelink'>{props.heading}</p>
                    </div>
                    <h1 className="intromachineheading">{props.heading}</h1>
                    <p className="intromachinedescription">
                        {props.description}
                    </p>
                </div>
                <div className="intromachineform">
                    <div className="intromachinecard">
                        <input style={{ background: "white" }} value={formData.SingleLine} onChange={handleChange} name='SingleLine' placeholder='Full Name*' className='intromachineforminputs' type="text" required />
                        <div className="validations" style={{ width: "100%" }}>
                            <input style={{ background: "white" }} value={formData.Email} onChange={handleChange} name='Email' placeholder='Email' className='intromachineforminputs' type="text" />
                            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                        </div>
                        <div className="validations" style={{ width: "100%" }}>
                            <input style={{ background: "white" }} value={formData.PhoneNumber_countrycode} onChange={handleChange} name='PhoneNumber_countrycode' placeholder='Phone Number*' required className='intromachineforminputs' type="text" />
                            {errors.phoneNumber && <p style={{ color: 'red' }}>{errors.phoneNumber}</p>}
                        </div>
                        <textarea style={{ background: "white" }} value={formData.MultiLine} onChange={handleChange} name='MultiLine' placeholder='Message' className='intromachineforminputs' cols="30" rows="3"></textarea>
                        <button onClick={handleSubmit} type="submit" className="contactbtn" style={{ padding: "1.5rem 2rem" }}>
                            <p className='headerbtncon'>Send Message </p> <FaArrowRightLong className='headerbtnarrow' style={{ fontSize: "1.5rem" }} /></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IntroMachine
