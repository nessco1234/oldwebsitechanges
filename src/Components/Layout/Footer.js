import React from 'react'
import '../../Styles/Layout.css'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import Subscribe from '../Home/Subscribe'
const Footer = () => {
    return (
        <>
            <Subscribe />
            <footer className="footer">
                <div className="footercontainer">
                    <div className="footerlinks">
                        <Link className='footerlink' to={'/our-gallery'}>Our Gallery</Link>
                        <Link className='footerlink' to={'/about-us/'}>Company</Link>
                        <Link className='footerlink' to={'/product'}>Machines</Link>
                        <Link className='footerlink' to={'/blog'}>Blog</Link>
                        <Link className='footerlink' to={'/contact'}>Contact</Link>
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
                                <Link className='footeratags' to={'/about-us'}>About us</Link>
                                <Link className='footeratags' to={'/product/'}>Machines</Link>
                                <Link className='footeratags' to={'/video'}>Video</Link>
                                <Link className='footeratags' to={'/contact'}>Contact</Link>
                                <Link className='footeratags' to={'/market-area'}>Market Area</Link>
                            </div>

                        </div>
                        <div className="footerlist">
                            <h1 className="footerlistheading">Services</h1>
                            <div className="footerlistslink">
                                <Link className='footeratags' to={'/product/high-speed-paper-cup-making-machine/'}>Paper Cup Machine</Link>
                                <Link className='footeratags' to={'/product/paper-bag-making-machine/'}>Paper Bag Machine</Link>
                                <Link className='footeratags' to={'/product/paper-container-bowl-making-machine/'}>Paper Bowl Machine</Link>
                                <Link className='footeratags' to={'/product/pe-coating-machine/'}>PE Coating Machine</Link>
                                <Link className='footeratags' to={'/product/paper-straw-making-machine/'}>Paper Straw Machine</Link>
                                <Link className='footeratags' to={'/product/flexo-printing-machine/'}>Flexo Printing Machine</Link>
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
                    <p className='footerright'>Nessco &copy; 2024 All Right Reserved</p>
                    <Link className='footerright' to={"/privacy-policy/"}>Privacy Policy</Link>
                </div>
            </div>
        </>
    )
}

export default Footer
