import React from 'react'
import '../../Styles/Layout.css'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footercontainer">
                    <div className="footerlinks">
                        <Link className='footerlink' to={'/'}>Our Gallery</Link>
                        <Link className='footerlink' to={'/'}>Company</Link>
                        <Link className='footerlink' to={'/'}>Machines</Link>
                        <Link className='footerlink' to={'/'}>Blog</Link>
                        <Link className='footerlink' to={'/'}>Contact</Link>
                    </div>
                    <hr className='horizontaldiv' />
                    <div className="footercontent">
                        <div className="footerlistabout">
                            <h1 className="footerdesctitle">
                                About</h1>
                            <p className="footerdesccontent">
                                We have been focusing in the Disposable Industry since 1978, and continuously concentrating on the idea of team building by creating an R&D team of hard-working personals with self-transcendence, hard-working attitude and spirit of diligent and dedicated craftsmanship.
                            </p>
                            <div className="footersocialicons">
                                <div className="footersocialicon">
                                    <FaFacebookF />
                                </div>
                                <div className="footersocialicon">
                                    <FaTwitter />
                                </div>
                                <div className="footersocialicon">
                                    <FaYoutube />
                                </div>
                                <div className="footersocialicon">
                                    <FaLinkedin />
                                </div>
                                <div className="footersocialicon">
                                    <FaInstagram />
                                </div>

                            </div>
                        </div>
                        <div className="footerlist">
                            <h1 className="footerlistheading">Links</h1>
                            <div className="footerlistslink">
                                <Link className='footeratags' to={'/'}>Home</Link>
                                <Link className='footeratags' to={'/'}>About us</Link>
                                <Link className='footeratags' to={'/'}>Machines</Link>
                                <Link className='footeratags' to={'/'}>Video</Link>
                                <Link className='footeratags' to={'/'}>Contact</Link>
                                <Link className='footeratags' to={'/'}>MarketArea</Link>
                            </div>

                        </div>
                        <div className="footerlist">
                            <h1 className="footerlistheading">Services</h1>
                            <div className="footerlistslink">
                                <Link className='footeratags' to={'/'}>Paper Cup Machine</Link>
                                <Link className='footeratags' to={'/'}>Paper Bag Machine</Link>
                                <Link className='footeratags' to={'/'}>Paper Bowl Machine</Link>
                                <Link className='footeratags' to={'/'}>PE Coating Machine</Link>
                                <Link className='footeratags' to={'/'}>Paper Straw Machine</Link>
                                <Link className='footeratags' to={'/'}>Flexo Printing Machine</Link>
                            </div>
                        </div>
                        <div className="footerlist">
                            <h1 className="footerlistheading">Contacts</h1>
                            <div className="footerlistslink">
                                <p className="footeraddress">
                                    E-186, Apparel Park, RIICO Industrial Area, Mahal Road, Jagatpura, Jaipur (Rajasthan) - 302022, INDIA
                                </p>
                                <p className="mobilenumber">+91 99822 00038</p>
                                <p className="mobilenumber">+91 99822 00038</p>
                                <p className="email">info@nesscoindia.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="footerrights">
                <div className="footercontainerx">

                    <p className='footerright'>Nessco &copy; 2022 All Right Reserved</p>
                    <a className='footerright' href="/">Privacy Policy</a>
                </div>
            </div>
        </>
    )
}

export default Footer
