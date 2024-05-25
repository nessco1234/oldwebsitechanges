import React, { useState } from 'react'
import icon1 from '../../Assets/images/icons/icon-1.png'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Subscribe = () => {
    const navigate = useNavigate()
    const [errors, setErrors] = useState({ email: '' });
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const [formData, setFormData] = useState({
        Email: '',
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
                const response = await axios.post('https://nesscobackend-sx1t.vercel.app/subscribesubmit', formData, {
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
                            <input value={formData.Email} onChange={handleChange} name='Email' placeholder='Email' className='presenceinpfields' type="text" />
                            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                        </div>
                        <button type='submit' onClick={handleSubmit} className="subscribebtn">Subscribe</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Subscribe
