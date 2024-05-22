import React, { useState } from 'react'
import Shape from '../../Assets/images/shape/shape-209.png'
import Shape2 from '../../Assets/images/shape/shape-210.png'
import Map from '../../Assets/images/resource/newmap.png'
import { MdArrowRightAlt } from 'react-icons/md'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Presence = () => {
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
        const response = await axios.post('http://13.202.40.238/form-submission', formData, {
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
    <section className='presenceSection'>
      <div className='presenceContainer'>
        <div className='staticimages'>
          <img className='staticimage1' alt='123' src={'https://nessco.kafkaindia.com/Assets/images/shape/shape-209.png'} />
          <img className='staticimage2' alt='123' src={'https://nessco.kafkaindia.com/Assets/images/shape/shape-210.png'} />
        </div>
        <div className='leftpresence'>
          <h1 className="aboutusbtn">PRESENCE</h1>
          <h1 className="presenceheading">Nessco Global <span> Presence</span>
          </h1>
          <p className="presencepara">With a strong functional position in this market for over 40 years, now Nessco India is backed by 5 Domestic Distributing Centres and 7 International Ones. Over all these years, we have spread our arms to almost every country to expand our business globally.</p>
          <img src={'https://nessco.kafkaindia.com/Assets/images/resource/newmap.png'} alt="map" />
        </div>

        <div className='rightpresence'>
          <div className="presenceCard">
            <h1 className="presencecardtitle">Request For A Quote</h1>
            <input value={formData.SingleLine} onChange={handleChange} name='SingleLine' placeholder='Full Name*' className='presenceinpfields' type="text" required />
            <div className="validations" style={{width:"100%"}}>
              <input value={formData.Email} onChange={handleChange} name='Email' placeholder='Email' className='presenceinpfields' type="text" />
              {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            </div>
            <div className="validations" style={{width:"100%"}}>
              <input value={formData.PhoneNumber_countrycode} onChange={handleChange} name='PhoneNumber_countrycode' placeholder='Phone Number*' required className='presenceinpfields' type="text" />
              {errors.phoneNumber && <p style={{ color: 'red' }}>{errors.phoneNumber}</p>}
            </div>
            <textarea value={formData.MultiLine} onChange={handleChange} name='MultiLine' placeholder='Message' className='presenceinpfields' cols="30" rows="3"></textarea>
            <button onClick={handleSubmit} type="submit" className="contactbtn" style={{ padding: "1.5rem 2rem" }}>
              <p className='headerbtncon'>Send Message </p> <FaArrowRightLong className='headerbtnarrow' style={{ fontSize: "1.5rem" }} /></button>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Presence
