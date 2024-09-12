import React, { useState } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import {  useNavigate } from 'react-router-dom'
import axios from 'axios'
const Presence = ({visitData}) => {
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
    // if () {
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
    <section className='presenceSection'>
      <div className='presenceContainer'>
        <div className='staticimages'>
          <div className='staticimage1' />
          <div className='staticimage2'  />
        </div>
        <div className='leftpresence'>
          <p className="aboutusbtn">PRESENCE</p>
          <h2 className="presenceheading">Nessco Global <span> Presence</span>
          </h2>
          <p className="presencepara">With a strong functional position in this market for over 40 years, now Nessco India is backed by 5 Domestic Distributing Centres and 7 International Ones. Over all these years, we have spread our arms to almost every country to expand our business globally.</p>
          <img src={'https://www.nesscoindia.com/Assets/images/resource/Nessco Map.webp'} alt="map" />
          {/* <img src={'https://www.nesscoindia.com/Assets/images/resource/newmap.png'} alt="map" /> */}
        </div>
        <div className='rightpresence'>
          <div className="presenceCard">
            <h3 className="presencecardtitle">Request For A Quote</h3>
            <input value={formData.Last_Name} onChange={handleChange} name='Last_Name' placeholder='Full Name*' className='presenceinpfields' type="text" required />
            <div className="validations" style={{width:"100%"}}>
              <input value={formData.Email} onChange={handleChange} name='Email' placeholder='Email' className='presenceinpfields' type="text" />
              {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            </div>
            <div className="validations" style={{width:"100%"}}>
              <input value={formData.Mobile} onChange={handleChange} name='Mobile' placeholder='Phone Number*' required className='presenceinpfields' type="text" />
              {errors.phoneNumber && <p style={{ color: 'red' }}>{errors.phoneNumber}</p>}
            </div>
            <textarea value={formData.Web_Message} onChange={handleChange} name='Web_Message' placeholder='Message' className='presenceinpfields' cols="30" rows="3"></textarea>
            <button onClick={handleSubmit} type="submit" className="contactbtn" style={{ padding: "1.5rem 2rem" }}>
              <p className='headerbtncon'>Send Message </p> <FaArrowRightLong className='headerbtnarrow' style={{ fontSize: "1.5rem" }} /></button>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Presence
