import React, { useState } from 'react'
import { MdArrowRightAlt } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../Assets/images/logo.webp'
import { FaArrowRightLong, FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa6'
import img1 from '../../Assets/images/resource/popup.webp'
import { IoIosMenu, IoMdMenu } from "react-icons/io";
import { ImCross } from "react-icons/im";
import { FaAngleDown, FaFacebookSquare, FaFcebookSquare, FaInstagramSquare } from 'react-icons/fa'
import axios from 'axios'
const list1 = [
    {
        id: 1,
        name: "Paper Glass Machine",
        link: "/product/paper-glass-making-machine/",
    },
    {
        id: 2,
        name: "Paper Disposable Cup Machine",
        link: "/product/disposable-paper-cup-making-machine/",
    },
    {
        id: 3,
        name: "High Speed Paper Cup Machine",
        link: "/product/high-speed-paper-cup-making-machine/",
    },
    {
        id: 4,
        name: "Paper Handle Cup Machine",
        link: "/product/paper-handle-cup-making-machine/",
    },
    {
        id: 5,
        name: "Ripple wall Cup Machine",
        link: "/product/ripple-wall-cup-machine/",
    },
    {
        id: 6,
        name: "Servo Driven Paper Cup Machine",
        link: "/product/servo-driven-paper-cup-machine/",
    },
    {
        id: 6,
        name: "Paper Dome Lid Cup Machine",
        link: "/product/paper-dome-lid-machine/",
    },
]
const list2 = [
    {
        id: 1,
        name: "Paper Bowl Machine",
        link: "/product/paper-container-bowl-making-machine/",
    },
    {
        id: 2,
        name: "Paper Salad Bowl Machine",
        link: "/product/salad-bowl-making-machine/",
    },
    {
        id: 4,
        name: "Paper Lid Machine",
        link: "/product/paper-lid-making-machine/",
    },
    {
        id: 5,
        name: "Paper Cutlery Machine",
        link: "/product/paper-cutlery-machine/",
    },
    {
        id: 3,
        name: "Paper Bucket Machine ( Pop Corn / Chicken Tub Mahchine )",
        link: "/product/pop-corn-tub-making-machine/",
    },
]
const list3 = [
    {
        id: 5,
        name: "Paper Plate Machine",
        link: "/product/paper-plate-making-machine/",
    },
    {
        id: 3,
        name: "Lunch Box Forming Machine",
        link: "/product/lunch-box-forming-machine/",
    },
    {
        id: 4,
        name: "Carton Erecting Machine",
        link: "/product/carton-erecting-machine/",
    },
    {
        id: 2,
        name: "Octagonal Box Forming Machine",
        link: "/product/octagonal-box-forming-machine/",
    },
    {
        id: 1,
        name: "Rectangular Flat Bottom Bowl Machine",
        link: "/product/rectangle-flat-bottom-bowl-machine/",
    },
]
const list4 = [
    {
        id: 1,
        name: "Flexo Printing Machine",
        link: "/product/flexo-printing-machine/",
    },
    {
        id: 2,
        name: "Roll Die Cutting Machine",
        link: "/product/roll-die-cutting-machine/",
    },
    {
        id: 3,
        name: "PE Coating Machine",
        link: "/product/pe-coating-machine/",
    },
    {
        id: 4,
        name: "Paper Straw Machine",
        link: "/product/paper-straw-making-machine/",
    },
    {
        id: 5,
        name: "Ripple Wall Cup Sleeve Glueing Machine",
        link: "/product/ripple-wall-cup-sleeve-glueing-machine/",
    },
    {
        id: 5,
        name: "Paper Sleeve Gluing & Folding Machine",
        link: "/product/paper-sleeve-gluing-folding-machine/",
    },
]

const list5 = [
    {
        id: 1,
        name: "Fully Automatic Paper Bag Machine",
        link: "/product/paper-shopping-bag-making-machine/",
    },
    {
        id: 2,
        name: "Square Bottom paper Bag Machine",
        link: "/product/paper-food-bag-making-machine/",
    },
]

const Header = (props) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenmain, setIsOpenmain] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);
    const [isOpen6, setIsOpen6] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    function downloadlocal() {

        console.log(props.down)
    }
    const [navigation, setnavigation] = useState(false)
    function opennavigation() {
        setnavigation(true);
        console.log("Opened")
    }
    function closenavigation() {
        setnavigation(false);
        setIsOpenmain(false);
        setIsOpen1(false);
        setIsOpen2(false);
        setIsOpen3(false);
        setIsOpen4(false);
        setIsOpen5(false);
        setIsOpen6(false);
        console.log("CLosed")
    }
    const mainlist = [
        "Paper Cup Machines", "Paper Container Machines ", "Paper Forming Machines", "Other Machines", "Paper Bag Machines"
    ]
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
                const response = await axios.post('http://localhost:5000/form-submission', formData, {
                    headers: {
                        'Content-Type': 'application/json', // Ensure the backend handles JSON
                    },
                });
                navigate('/thank-you')
                console.log(response)
                props.setdown(true)
                closeModal()

            } catch (error) {
                console.error('Error submitting form:', error);
            }
        }

    };
    return (
        <>
            <nav className="navbar">
                <div className="navbarcontainer">
                    <Link className='navbarlogolink' to={'/'}><img src={'https://www.nesscoindia.com/Assets/images/logo.webp'} alt="NesscoLogo" /></Link>
                    <ul className="navlist">
                        <Link className='navlink' to={'/'}>HOME</Link>
                        <Link className='navlink' to={'/about-us'}>ABOUT US</Link>
                        <div className='navlink' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                            <Link onClick={() => setIsHovered(false)} className='navlink' to={'/product'}>OUR MACHINES</Link>
                            {isHovered && (
                                <ul className="menu-list">
                                    <div className="menu-list-container">

                                        <div className="menulistitems">
                                            <h3 className="menulistheading">Paper Cup Machines</h3>
                                            {list1.map(obj => (
                                                <Link onClick={() => setIsHovered(false)} className='menulistlinks' key={obj.id} to={obj.link}>{obj.name}</Link>
                                            ))}
                                        </div>
                                        <div className="menulistitems">
                                            <h3 className="menulistheading">Paper Container Machines</h3>
                                            {list2.map(obj => (
                                                <Link onClick={() => setIsHovered(false)} className='menulistlinks' key={obj.id} to={obj.link}>{obj.name}</Link>
                                            ))}
                                        </div>
                                        <div className="menulistitems">
                                            <h3 className="menulistheading">Paper Forming Machines</h3>
                                            {list3.map(obj => (
                                                <Link onClick={() => setIsHovered(false)} className='menulistlinks' key={obj.id} to={obj.link}>{obj.name}</Link>
                                            ))}
                                        </div>
                                        <div className="menulistitems">
                                            <h3 className="menulistheading">Other Machines</h3>
                                            {list4.map(obj => (
                                                <Link onClick={() => setIsHovered(false)} className='menulistlinks' key={obj.id} to={obj.link}>{obj.name}</Link>
                                            ))}
                                        </div>
                                        <div className="menulistitems">
                                            <h3 className="menulistheading">Paper Bag Machines</h3>
                                            {list5.map(obj => (
                                                <Link onClick={() => setIsHovered(false)} className='menulistlinks' key={obj.id} to={obj.link}>{obj.name}</Link>
                                            ))}
                                        </div>
                                    </div>

                                </ul>
                            )}
                        </div>
                        <Link className='navlink' to={'/video'}>VIDEO</Link>
                        <Link className='navlink' to={'/blog'}>BLOG</Link>
                        <Link className='navlink' to={'/contact'}>CONTACT US</Link>
                    </ul>
                    <button onClick={openModal} className="headerbtn tt">
                        <p className='headerbtncon'>Inquire Now !</p> <FaArrowRightLong className='headerbtnarrow' style={{ fontSize: "1.5rem" }} /></button>
                    {isOpen && (
                        <div className="modal">
                            <button className="close-button" onClick={closeModal}>&times;</button>
                            <div className="modalcard">
                                <div className="leftmodal">
                                    <img src={'https://www.nesscoindia.com/Assets/images/resource/popup.webp'} alt="POPUP" />
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
                    <div className="navhamburger active">
                        <IoIosMenu onClick={opennavigation} className='hamburger' />
                        {
                            navigation &&
                            <div className='hamburgermenu'>
                                <div className="hamburgercontent">
                                    <button onClick={closenavigation} className='hamburgerclose'><ImCross /></button>
                                    <div className="hamburgercontainer">
                                        <div className="hamburgerimgcontainer">

                                            <img className='hamburgerimg' src={'https://www.nesscoindia.com//Assets/images/logo.webp'} alt="NesscoLogo" />
                                        </div>
                                        <div className="hamburgerlinks">
                                            <Link className='hamburgerlink' to={'/'} onClick={closenavigation}>HOME</Link>
                                            <Link className='hamburgerlink' to={'/about-us'} onClick={closenavigation} >ABOUT US</Link>
                                            <div className="hamburgerinternallink ">
                                                <div className="hamburgerinternalcombo">

                                                    <Link className='hamburgerlink' to={'/product'} onClick={closenavigation} >
                                                        OUR MACHINES
                                                    </Link>
                                                    <button onClick={() => setIsOpenmain(!isOpenmain)} className={!isOpenmain ? 'hamburgertogglebtn' : ' toggled'}><FaAngleDown /></button>
                                                </div>
                                                {
                                                    isOpenmain &&
                                                    <>
                                                        <div className="hamburgerinternallist">
                                                            <div className="hamburgerinternalcombo">
                                                                <p className='hamburgerlink' onClick={closenavigation} >
                                                                    Paper Cup Machines
                                                                </p>
                                                                <button onClick={() => setIsOpen1(!isOpen1)} className={!isOpen1 ? 'hamburgertogglebtn' : 'hamburgertogglebtn toggled'}><FaAngleDown /></button>
                                                            </div>
                                                            {
                                                                isOpen1 &&
                                                                <>
                                                                    <div className="hamburgerinternallist">
                                                                        {
                                                                            list1.map(e => (
                                                                                <Link className='hamburgerlink' to={e.link} onClick={closenavigation} >{e.name}</Link>
                                                                            ))
                                                                        }
                                                                    </div>
                                                                </>
                                                            }
                                                        </div>
                                                        <div className="hamburgerinternallist">
                                                            <div className="hamburgerinternalcombo">
                                                                <p className='hamburgerlink' onClick={closenavigation} >
                                                                    Paper Container Machines
                                                                </p>
                                                                <button onClick={() => setIsOpen2(!isOpen2)} className={!isOpen2 ? 'hamburgertogglebtn' : 'hamburgertogglebtn toggled'}><FaAngleDown /></button>
                                                            </div>
                                                            {
                                                                isOpen2 &&
                                                                <>
                                                                    <div className="hamburgerinternallist">
                                                                        {
                                                                            list2.map(e => (
                                                                                <Link className='hamburgerlink' to={e.link} onClick={closenavigation} >{e.name}</Link>
                                                                            ))
                                                                        }
                                                                    </div>
                                                                </>
                                                            }
                                                        </div>
                                                        <div className="hamburgerinternallist">
                                                            <div className="hamburgerinternalcombo">
                                                                <p className='hamburgerlink' onClick={closenavigation} >
                                                                    Paper Forming machines
                                                                </p>
                                                                <button onClick={() => setIsOpen3(!isOpen3)} className={!isOpen3 ? 'hamburgertogglebtn' : 'hamburgertogglebtn toggled'}><FaAngleDown /></button>
                                                            </div>
                                                            {
                                                                isOpen3 &&
                                                                <>
                                                                    <div className="hamburgerinternallist">
                                                                        {
                                                                            list3.map(e => (
                                                                                <Link className='hamburgerlink' to={e.link} onClick={closenavigation} >{e.name}</Link>
                                                                            ))
                                                                        }
                                                                    </div>
                                                                </>
                                                            }
                                                        </div>
                                                        <div className="hamburgerinternallist">
                                                            <div className="hamburgerinternalcombo">
                                                                <p className='hamburgerlink' onClick={closenavigation} >
                                                                    Other Machines
                                                                </p>
                                                                <button onClick={() => setIsOpen4(!isOpen4)} className={!isOpen4 ? 'hamburgertogglebtn' : 'hamburgertogglebtn toggled'}><FaAngleDown /></button>
                                                            </div>
                                                            {
                                                                isOpen4 &&
                                                                <>
                                                                    <div className="hamburgerinternallist">
                                                                        {
                                                                            list4.map(e => (
                                                                                <Link className='hamburgerlink' to={e.link} onClick={closenavigation} >{e.name}</Link>
                                                                            ))
                                                                        }
                                                                    </div>
                                                                </>
                                                            }
                                                        </div>
                                                        <div className="hamburgerinternallist">
                                                            <div className="hamburgerinternalcombo">
                                                                <p className='hamburgerlink' onClick={closenavigation} >
                                                                    Paper Bag Machines
                                                                </p>
                                                                <button onClick={() => setIsOpen5(!isOpen5)} className={!isOpen5 ? 'hamburgertogglebtn' : 'hamburgertogglebtn toggled'}><FaAngleDown /></button>
                                                            </div>
                                                            {
                                                                isOpen5 &&
                                                                <>
                                                                    <div className="hamburgerinternallist">
                                                                        {
                                                                            list5.map(e => (
                                                                                <Link className='hamburgerlink' to={e.link} onClick={closenavigation} >{e.name}</Link>
                                                                            ))
                                                                        }
                                                                    </div>
                                                                </>
                                                            }
                                                        </div>
                                                    </>
                                                }
                                            </div>
                                            <Link className='hamburgerlink' to={'/video'} onClick={closenavigation}>VIDEO</Link>
                                            <Link className='hamburgerlink' to={'/blog'} onClick={closenavigation}>BLOG</Link>
                                            <Link className='hamburgerlink' to={'/contact'} onClick={closenavigation}>CONTACT US</Link>
                                        </div>
                                        <div className="hamburgerdetails">
                                            <a href="tel:+91 95494 44484" className="hamburgercontact hh">+91 95494 44484</a>
                                            <a href="mailto:info@nesscoindia.com" className="hamburgercontact hh">info@nesscoindia.com</a>
                                            <a href='https://maps.app.goo.gl/eWURecM5YL7Gt2Kf7' className="hamburgercontact">E-186, Apparel Park, RIICO Industrial Area, Mahal Road, Jagatpura, Jaipur (Rajasthan) - 302022, INDIA</a>
                                        </div>
                                        <div className="hamburgersocials">
                                            <a className='hamburgersocialicons' href="https://twitter.com/NesscoIndia" target='_blank'><FaTwitter /></a>
                                            <a className='hamburgersocialicons' href="https://www.facebook.com/NesscoPaperCupMachine" target='_blank'><FaFacebookSquare /></a>
                                            <a className='hamburgersocialicons' href="https://www.linkedin.com/company/nesscoindia/" target='_blank'><FaLinkedinIn /></a>
                                            <a className='hamburgersocialicons' href="https://www.instagram.com/nesscoindia/" target='_blank'><FaInstagram /></a>
                                            <a className='hamburgersocialicons' href="https://www.youtube.com/c/NesscoPaperCupMachine" target='_blank'><FaYoutube /></a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        }
                    </div>
                </div>
            </nav >
        </>
    )
}

export default Header
