import React from 'react';
import {  FaArrowRightLong } from 'react-icons/fa6';
import BannerContent from './BannerContent';
import {  useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
export default function App({ visitData, ...props }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  function downloadlocal() {
    props.setdown(true)
    closeModal()
  }
  const navigate = useNavigate()
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
          ...visitData
        }
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

        props.setdown(true)
        closeModal()

      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }

  };
  return (
    <>
      <section
        className="mySwiper"
      >
        {/* hi therSe my name is karan sharma  */}
        <div className="imglayers">
          <div className="imglayer2"></div>
          <div className="imglayer1"></div>
          <div className="imglayer3"></div>
          <div className="imglayer4"></div>
        </div>
        <div className='bannerslide' >
          <BannerContent />
          {/* <Link to={'/'} className='bannerbtn'>Get a Quote <BiRightArrowAlt /></Link> */}
          <button onClick={openModal} className="bannerbtn" style={{ marginTop: "2rem" }}>
            <p className='bannerbtncon'>Get A Quote</p> <FaArrowRightLong className='bannerbtnarrow' style={{ fontSize: "1.5rem" }} /></button>
          {isOpen && (
            <div className="modal">
              <div className="modalcard">
                <button className="close-button" onClick={closeModal}>&times;</button>
                <div className="leftmodal">
                  <img src={'https://nesscoindia.com/Assets/images/resource/popup.webp'} alt="Popup" />
                </div>
                <div className="rightmodal">
                  <h1 className="modalheading">Request for details to receive a call back</h1>
                  <p className="modaldesc">Enter your details to receive a call back</p>
                  <input value={formData.Last_Name} onChange={handleChange} name='Last_Name' type="text" required placeholder='Enter your Name*' className='modalinp' />
                  <input value={formData.Email} onChange={handleChange} name='Email' placeholder='Email' className='modalinp' type="email" />
                  {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                  <input value={formData.Mobile} onChange={handleChange} name='Mobile' placeholder='Phone Number*' required className='modalinp' type="text" />
                  {errors.phoneNumber && <p style={{ color: 'red' }}>{errors.phoneNumber}</p>}
                  <button onClick={handleSubmit} className="headerbtn x" style={{ padding: "2rem 3rem" }}>
                    <p className='headerbtncon'>Get a Quote !</p> <FaArrowRightLong className='headerbtnarrow' style={{ fontSize: "1.5rem" }} /></button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
