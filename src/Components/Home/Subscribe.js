import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Subscribe = ({ visitData }) => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({ email: '' });

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const [formData, setFormData] = useState({
        Email: '',
        Last_Name: '',
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
                // Set Last_Name to "Subscribe Button" and clear other fields
                const payload = {
                    ...formData,
                    Last_Name: 'Subscribe Button',
                    Mobile: '',
                    Web_Subject: '',
                    Web_Message: '',
                    ...visitData, // Optionally include visitData if needed
                };

                const response = await axios.post('https://server.nesscoindustries.com/form-submission', payload, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.status === 200) {
                    // Clear the form fields after successful submission
                    setFormData({
                        Email: '',
                        Last_Name: '',
                        Mobile: '',
                        Web_Subject: '',
                        Web_Message: ''
                    });

                    // Navigate to the thank you page
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
            <section className="subscribe">
                <div className="subsribecontainer">
                    <div className="leftsubscribe">
                        <img src={'https://www.nesscoindia.com/Assets/images/icons/icon-1.png'} alt="Mail Icon" className="icon1" />
                        <h2 className="subsribeheading">Subscribe & Get Updates of Sustainable Packaging</h2>
                    </div>
                    <form className="rightsubscribe" >
                        <div className="validations" style={{ width: "100%" }}>
                            <input 
                                value={formData.Email} 
                                onChange={handleChange} 
                                name='Email' 
                                placeholder='Email' 
                                className='presenceinpfields' 
                                type="text" 
                            />
                            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                        </div>
                        <button type='submit' onClick={handleSubmit} className="subscribebtn">Subscribe</button>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Subscribe;
