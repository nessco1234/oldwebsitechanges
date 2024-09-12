import React, { useState } from 'react';
import Breadcrum from '../Components/Home/Breadcrum';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
import { FaAngleDoubleRight } from 'react-icons/fa';
import '../Styles/MarketArea.css';
import axios from 'axios';

const MarketArea = ({ visitData, ...props }) => {
    
    const data = props.data;
    const data2 = props.data.section1content;
    const data3 = props.data.section2content;

    const navigate = useNavigate();
    const [errors, setErrors] = useState({ Mobile: '', Email: '' });

    const validatePhoneNumber = (number) => {
        const phoneRegex = /^\d{7,15}$/;
        return phoneRegex.test(number);
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const [formData, setFormData] = useState({
        Last_Name: '',
        Email: '',
        Mobile: '',
        Web_Subject: '',
        Web_Message: ''
    });

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
                    visitData,  // Spread visitData into the payload
                };


                const response = await axios.post('https://server.nesscoindustries.com/form-submission', payload, {
                    headers: {
                        'Content-Type': 'application/json', // Ensure the backend handles JSON
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
        <>
            <Breadcrum active={props.activecomp} previous={"Home"} />
            <section className="marketarea">
                <div className="marketareacontainer">
                    <div className="marketarealeft">
                        <h2 className="marketareaheading">Quick Contact</h2>
                        <div className="marketareacard">
                            <input 
                                value={formData.Last_Name} 
                                onChange={handleChange} 
                                name='Last_Name' 
                                placeholder='Enter your Name*' 
                                className='intromachineforminputs' 
                                type="text" 
                                required 
                            />
                            <div className="validations" style={{ width: "100%" }}>
                                <input 
                                    value={formData.Email} 
                                    onChange={handleChange} 
                                    name='Email' 
                                    placeholder='Enter Your Email' 
                                    className='intromachineforminputs' 
                                    type="text" 
                                />
                                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                            </div>
                            <div className="validations" style={{ width: "100%" }}>
                                <input 
                                    value={formData.Mobile} 
                                    onChange={handleChange} 
                                    name='Mobile' 
                                    placeholder='Enter Your Mobile*' 
                                    required 
                                    className='intromachineforminputs' 
                                    type="text" 
                                />
                                {errors.phoneNumber && <p style={{ color: 'red' }}>{errors.phoneNumber}</p>}
                            </div>
                            <textarea 
                                value={formData.Web_Message} 
                                onChange={handleChange} 
                                name='Web_Message' 
                                placeholder='Enter your Message' 
                                className='intromachineforminputs' 
                                cols="30" 
                                rows="3"
                            ></textarea>
                            <button onClick={handleSubmit} type="submit" className="contactbtn" style={{ padding: "1.5rem 2rem" }}>
                                <p className='headerbtncon'>Send Message</p>
                                <FaArrowRightLong className="headerbtnarrow" style={{ fontSize: "1.5rem" }} />
                            </button>
                        </div>
                    </div>
                    <div className="marketarearight">
                        {data.section2 && (
                            <>
                                <h1 className="marketareaheading">{data.section2heading}</h1>
                                <div className="marketcardcontainer">
                                    {data3.map((obj, key) => (
                                        <Link key={key} to={obj.Link} className="marketlink">
                                            <FaAngleDoubleRight className="marketlinkicon" /> {obj.Name}
                                        </Link>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}

export default MarketArea;
