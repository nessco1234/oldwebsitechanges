import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import '../../Styles/Modal.css';  // Ensure to create this CSS file
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AboutUs = ({ visitData, ...props }) => {  // Correct destructuring
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const [isHovered, setIsHovered] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const openModal2 = () => setIsOpen2(true);
  const closeModal2 = () => setIsOpen2(false);

  function downloadlocal() {
    props.setdown(true);
    closeModal();
  }

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
          ...visitData  // Merging visitData directly into payload
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

        closeModal2();

      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
  };

  return (
    <>
      <section className="homeaboutus">
        <div className="sectionContainer">
          <div className="leftabout">
            <img className="leftaboutpic" alt="Nessco Team" src={'https://www.nesscoindia.com/Assets/images/resource/nessco-team.webp'}  />
            <div className="leftaboutpic2">
              <div className="aboutimagesection"></div>
              <button className="playerbtn" aria-label="Player Button"  onClick={openModal}><FaPlay /></button>
              {isOpen && (
                <div className="modal">
                  <button className="close-button" onClick={closeModal}>&times;</button>
                  <iframe  width={1000} height={500} id="fancybox-frame1715329533515" name="fancybox-frame1715329533515" className="fancybox-iframe modal-content" frameborder="0" vspace="0" hspace="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" allowtransparency="true" src="//www.youtube.com/embed/e-rwkwTE8P4?autoplay=1&amp;autohide=1&amp;fs=1&amp;rel=0&amp;hd=1&amp;wmode=transparent&amp;enablejsapi=1&amp;html5=1" scrolling="no"></iframe>
                </div>
              )}
            </div>
          </div>
          <div className="rightabout">
            <p style={{ margin: "1rem 0" }} className="aboutusbtn  mm">ABOUT US</p>
            <h1 className="aboutheading">
              Paper Cup Machine <span> Manufacturer & Exporter</span>
            </h1>
            <p className="aboutpara">
              Nessco India is an international paper cup machine manufacturing
              company with a trusted brand name since 1978 in domestic as well
              as international markets. Since then, NesscoIndia has widened its
              business globally in the whole Disposable Paper Packaging
              Industry.
            </p>
            <h2 className="aboutheading small">CLAIM TO FAME</h2>
            <p className="aboutpara">
              We are known for manufacturing and globally exporting various
              paper packaging machines including Cups, Glass, Straws and Plate
              Machines. We are focused on innovating the disposable
              manufacturing industry with continuous technology upgradation and
              improvisation for sustainable development.
            </p>
            <div className="aboutbtnsection">
              {isOpen2 && (
                <div className="modal">
                  <div className="modalcard">
                    <button className="close-button" onClick={closeModal2}>&times;</button>
                    <div className="leftmodal">
                      <img src={'https://www.nesscoindia.com/Assets/images/resource/popup.webp'} alt="Popup" />
                    </div>
                    <div className="rightmodal">
                      <h3 className="modalheading">Request for details to receive a call back</h3>
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
              <button onClick={openModal2} className="headerbtn" style={{ padding: "1.5rem 2rem" }}>
                <p className='headerbtncon'>Get a Quote !</p> <FaArrowRightLong className='headerbtnarrow' style={{ fontSize: "1.5rem" }} /></button>
              <img className="signatureimg" alt="Signature" src={'https://www.nesscoindia.com/Assets/images/resource/signature.webp'} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
