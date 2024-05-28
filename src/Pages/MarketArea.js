import React, { useEffect, useState } from 'react'
import Breadcrum from '../Components/Home/Breadcrum'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router-dom'
import { FaAngleDoubleRight } from 'react-icons/fa'

import '../Styles/MarketArea.css'
import axios from 'axios'

const MarketArea = (props) => {
    const data = props.data;
    const data2 = props.data.section1content
    const data3 = props.data.section2content
    const [selectedValue, setSelectedValue] = useState('');
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    const [countries, setcountries] = useState([]);
    const fetchCountries = async () => {
        try {
            const apiKey = "NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZlg4RTk1MlJlaA=="; // Replace with your API key
            const apiUrl = "https://api.countrystatecity.in/v1/countries"; // Replace with your API endpoint

            const response = await fetch(apiUrl, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSCAPI-KEY": apiKey, // Custom header: X-CSCAPI-KEY
                },
            });
            const data = await response.json();
            const countryname = data.map((option) => option.name);
            setcountries(countryname);
            console.log(countryname)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    useEffect(() => {
        fetchCountries()
    }, [])
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
    const handleChange1 = (e) => {
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
    };

    return (
        <>
            <Breadcrum active={props.activecomp} previous={"Home"} />
            <section className="marketarea">
                <div className="marketareacontainer">
                    <div className="marketarealeft">
                        <h2 className="marketareaheading">Quick Contact</h2>
                        <div className="marketareacard">
                            <input value={formData.SingleLine} onChange={handleChange1} name='SingleLine' placeholder='Enter your Name' className='intromachineforminputs' type="text" required />
                            <div className="validations" style={{ width: "100%" }}>
                                <input value={formData.Email} onChange={handleChange1} name='Email' placeholder='Enter Your Email' className='intromachineforminputs' type="text" />
                                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                            </div>
                            <div className="validations" style={{ width: "100%" }}>
                                <input value={formData.PhoneNumber_countrycode} onChange={handleChange1} name='PhoneNumber_countrycode' placeholder='Enter Your Mobile' required className='intromachineforminputs' type="text" />
                                {errors.phoneNumber && <p style={{ color: 'red' }}>{errors.phoneNumber}</p>}
                            </div>
                            <select placeholder="Select Country" className='marketareainp' id="dropdown" value={selectedValue} onChange={handleChange}>
                                <option value="">Select Your Country</option>
                                {
                                    countries.map(e => (
                                        <option value={e}>{e}</option>
                                    ))
                                }
                            </select>
                            <textarea value={formData.MultiLine} onChange={handleChange1} name='MultiLine' placeholder='Enter your Message' className='intromachineforminputs' cols="30" rows="3"></textarea>
                            <button onClick={handleSubmit} type="submit" className="contactbtn" style={{ padding: "1.5rem 2rem" }}>
                                <p className='headerbtncon'>Send Message </p> <FaArrowRightLong className='headerbtnarrow' style={{ fontSize: "1.5rem" }} /></button>
                        </div>
                    </div>
                    <div className="marketarearight">
                        {/* {
                            data.section1 && <>

                                <h1 className="marketareaheading">{data.section1heading}</h1>
                                <div className="marketcardcontainer">
                                    {data2.map((obj) => (
                                        <Link to={obj.Link} className="marketlink"><FaAngleDoubleRight className="marketlinkicon" /> {obj.Name}</Link>
                                    ))}
                                </div>
                            </>
                        } */}
                        {
                            data.section2 && <>
                                <h1 className="marketareaheading">{data.section2heading}</h1>
                                <div className="marketcardcontainer">
                                    {data3.map((obj) => (
                                        <Link to={obj.Link} className="marketlink"><FaAngleDoubleRight className="marketlinkicon" /> {obj.Name}</Link>
                                    ))}

                                </div>
                            </>
                        }
                    </div>

                </div>
            </section>
        </>
    )
}

export default MarketArea
