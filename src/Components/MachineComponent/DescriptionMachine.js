import React, { useState } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'
import { SiAdobeacrobatreader } from 'react-icons/si'
import { Link, useNavigate } from 'react-router-dom'
import img1 from '../../Assets/images/resource/popup.webp'
import axios from 'axios'
const DescriptionMachine = (props) => {
    const data = props.data
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const [isOpen2, setIsOpen2] = useState(false);
    const openModal2 = () => setIsOpen2(true);
    const closeModal2 = () => setIsOpen2(false);
    function downloadinternational() {
        props.setdown(false)
        console.log(props.down)
    }
    function downloadlocal() {
        props.setdown(true)
        console.log(props.down)
    }
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
                navigate('/thank-you/')
                // props.setdown(true)
                closeModal2()
                console.log(response)

            } catch (error) {
                console.error('Error submitting form:', error);
            }
        }
    };
    return (
        <section className="descriptionmachine">
            <div className="descriptionmachinecomp">
                <div className="descriptionmachineleft">
                    <img src={props.imgurl} alt={`${data.PointsHeading[0]} ${data.PointsHeading[1]}`} />
                    {
                        data.Imgdesc.map(obj => (
                            <p className="descriptionmachineleftcontent">
                                {obj}
                            </p>
                        ))
                    }
                    {
                        data.PointsComponent &&
                        <>

                            <h2 className="descriptionmachineleftdata">{data.PointsHeading[0]} <span>{data.PointsHeading[1]}</span></h2>
                            <p className="descriptionmachineleftcontent">{data.PointsHeadingDesc}</p>
                            {
                                !data.NotPoints &&
                                <div className="descriptionmachineleftcontentlist">
                                    <li className="descriptionpoints">{data.PointsDescription[0]}</li>
                                    <li className="descriptionpoints">{data.PointsDescription[1]}</li>
                                    <li className="descriptionpoints">{data.PointsDescription[2]}</li>
                                    <li className="descriptionpoints">{data.PointsDescription[3]}</li>
                                </div>
                            }
                        </>
                    }
                    {
                        data.ImageComponent &&
                        <div className="descriptionmachineleftimage">
                            <div className="descriptionmachineimageleft">
                                <h2 className="descriptionmachineleftdata">{data.ImageHeading[0]} <span>{data.ImageHeading[1]}</span></h2>
                                <p className="descriptionmachineleftcontent">{data.ImageDescription}</p>
                            </div>
                            <div className="descriptionmachineimageright">
                                <img src={props.img2url} alt="" />
                            </div>
                        </div>
                    }
                    {
                        data.MultipleImageComp &&
                        <div className="descriptionmachineleftimage">
                            <div className="descriptionmachineimageleft">
                                <h2 className="descriptionmachineleft">{data.MultipleImageHeading} </h2>
                                <p className="descriptionmachineleftcontent">{data.MultipleImageDescription}</p>
                            </div>
                            <div className="descriptionmachineimageright">
                                <img src={props.img3url} alt="" />
                            </div>
                        </div>
                    }
                </div>
                <div className="descriptionmachineright">
                    <div className="descriptionsuggestions">
                        {
                            data.Suggestions.map(obj => (
                                <Link to={obj.suggestionlink} className="descriptionsuggestion">
                                    <FaAngleDoubleRight />{obj.name}
                                </Link>

                            ))
                        }
                    </div>
                    <div className="descriptionaboutaquote">
                        <h3 className="descriptionaboutaquoteheading">Get a Quote</h3>
                        <input style={{ background: "white" }} value={formData.SingleLine} onChange={handleChange} name='SingleLine' placeholder='Full Name*' className='presenceinpfields' type="text" required />
                        <div className="validations" style={{ width: "100%" }}>
                            <input style={{ background: "white" }} value={formData.Email} onChange={handleChange} name='Email' placeholder='Email' className='presenceinpfields' type="text" />
                            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                        </div>
                        <div className="validations" style={{ width: "100%" }}>
                            <input style={{ background: "white" }} value={formData.PhoneNumber_countrycode} onChange={handleChange} name='PhoneNumber_countrycode' placeholder='Phone Number*' required className='presenceinpfields' type="text" />
                            {errors.phoneNumber && <p style={{ color: 'red' }}>{errors.phoneNumber}</p>}
                        </div>
                        <textarea style={{ background: "white" }} value={formData.MultiLine} onChange={handleChange} name='MultiLine' placeholder='Message' className='presenceinpfields' cols="30" rows="3"></textarea>
                        <button onClick={handleSubmit} type="submit" className="contactbtn" style={{ padding: "1.5rem 2rem" }}>
                            <p className='headerbtncon'>Send Message </p> <FaArrowRightLong className='headerbtnarrow' style={{ fontSize: "1.5rem" }} /></button>
                    </div>
                    <div className="downloadbrochures">
                        <h4 className="downloadbrochuresheading">Download Brochures</h4>
                        <p className="downloadbrochuressubheading">Download Our Catalogue to know more about machines</p>
                        <div className="brochurecontent">
                            <div className="brochurelogo">
                                <SiAdobeacrobatreader />
                            </div>
                            <div className="brochuredescription">
                                <button onClick={openModal} className="brochuresubtitle">Nessco India Catalogue</button>
                                <button className="brochuresubtitle" onClick={openModal}>Download Now</button>
                                {isOpen && (
                                    <div className="modal">
                                        <div className="modalcard">
                                            <button className="close-button" onClick={closeModal}>&times;</button>
                                            <div className="leftmodal">
                                                <img src={'https://www.nesscoindia.com/Assets/images/resource/popup.webp'} alt="POPUP" />
                                            </div>
                                            <div className="rightmodal">
                                                <h1 className="modalheading">Request for details to receive a call back</h1>
                                                <p className="modaldesc">Enter your details to receive a call back</p>
                                                <input placeholder='Enter your Name' className='modalinp' type="text" />
                                                <input placeholder='Enter your Email' className='modalinp' type="text" />
                                                <input placeholder='Enter your Phone' className='modalinp' type="text" />
                                                <Link onClick={downloadlocal} to={'/thank-you/'} className="headerbtn x" style={{ padding: "2rem 3rem" }}>
                                                    <p className='headerbtncon'>Get a Quote !</p> <FaArrowRightLong className='headerbtnarrow' style={{ fontSize: "1.5rem" }} /></Link>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="brochurecontent">
                            <div className="brochurelogo">
                                <SiAdobeacrobatreader />
                            </div>
                            <div className="brochuredescription">
                                <button onClick={openModal} className=" brochuresubtitle">International Catalogue</button>
                                <button className="brochuresubtitle" onClick={openModal2}>Download Now</button>
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
                                                <input placeholder='Enter your Name' className='modalinp' type="text" />
                                                <input placeholder='Enter your Email' className='modalinp' type="text" />
                                                <input placeholder='Enter your Phone' className='modalinp' type="text" />
                                                <Link onClick={downloadinternational} to={'/thank-you/'} className="headerbtn x" style={{ padding: "2rem 3rem" }}>
                                                    <p className='headerbtncon'>Get a Quote !</p> <FaArrowRightLong className='headerbtnarrow' style={{ fontSize: "1.5rem" }} /></Link>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DescriptionMachine
