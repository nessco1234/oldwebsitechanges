import axios from 'axios';
import React, { useState } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6';
import {  useNavigate } from 'react-router-dom';
const MachineSpecs3 = (props) => {
    const data = props.data;
    const [isOpen2, setIsOpen2] = useState(false);
    const openModal2 = () => setIsOpen2(true);
    const closeModal2 = () => setIsOpen2(false);
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
                // const response = await axios.post('http://16.171.239.170:5000/form-submission', formData, {
                const response = await axios.post('https://nesscobackend-sx1t.vercel.app/form-submission', formData, {
                    headers: {
                        'Content-Type': 'application/json', // Ensure the backend handles JSON
                    },
                });
                navigate('/thank-you/')
                console.log(response)
                props.setdown(true)
                closeModal2()

            } catch (error) {
                console.error('Error submitting form:', error);
            }
        }

    };
    return (
        <>
            <section className="machinespecs3">
                <div className="machinespecs3container">
                    <h3 className="machinespecs3heading">{props.Heading}</h3>
                    <div className="machinespecsss">
                        <div className="machinespecsleft">
                            <img src={props.imglink} alt={props.Heading} />
                        </div>
                        <div className="machinespecsright">
                            <table className='machinetable'>
                                <thead className='machinehead'>
                                    <tr>
                                        <th style={cellStyle}>FEATURE</th>
                                        <th style={cellStyle}>SPECIFICATION</th>
                                    </tr>
                                </thead>
                                <tbody className='machinedata'>
                                    {data.map((row,key) => (
                                        <tr key={key} className='machinetablerow'>
                                            <td style={cellStyle}>{row.feature}</td>
                                            <td style={cellStyle}>{row.specs}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <button onClick={openModal2} className="headerbtn h">
                                <p className='headerbtncon'>Inquire Now !</p> <FaArrowRightLong className='headerbtnarrow ' style={{ fontSize: "1.5rem" }} /></button>
                            {isOpen2 && (
                                <div className="modal">
                                    <div className="modalcard">
                                    <button className="close-button" onClick={closeModal2}>&times;</button>
                                        <div className="leftmodal">
                                            <img src={'https://www.nesscoindia.com/Assets/images/resource/popup.webp'} alt="Popup" />
                                        </div>
                                        <div className="rightmodal">
                                            <h1 className="modalheading">Request for details to receive a call back</h1>
                                            <p className="modaldesc">Enter your details to receive a call back</p>
                                            <input value={formData.SingleLine} onChange={handleChange} name='SingleLine' type="text" required placeholder='Enter your Name' className='modalinp' />
                                    <input value={formData.Email} onChange={handleChange} name='Email' placeholder='Email' className='modalinp' type="email" />
                                    {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                                    <input value={formData.PhoneNumber_countrycode} onChange={handleChange} name='PhoneNumber_countrycode' placeholder='Phone Number*' required className='modalinp' type="text" />
                                    {errors.phoneNumber && <p style={{ color: 'red' }}>{errors.phoneNumber}</p>}
                                    <button onClick={handleSubmit} className="headerbtn x" style={{ padding: "2rem 3rem" }}>
                                        <p className='headerbtncon'>Get a Quote !</p> <FaArrowRightLong className='headerbtnarrow' style={{ fontSize: "1.5rem" }} /></button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
const cellStyle = {
    border: '1px solid grey',
    padding: '8px',
    fontSize: "1.4rem",
    textAlign: "start"
};
export default MachineSpecs3
