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
            <div className="bgimagefooter"></div>
                <div className="footercontainer">
                    <div className="footerlinks">
                        <Link className='footerlink' to={'/our-gallery/'}>Our Gallery</Link>
                        <Link className='footerlink' to={'/about-us/'}>Company</Link>
                        <Link className='footerlink' to={'/product/'}>Machines</Link>
                        <Link className='footerlink' to={'/blog/'}>Blog</Link>
                        <Link className='footerlink' to={'/contact/'}>Contact</Link>
                    </div>
                    <hr className='horizontaldiv' />
                    <div className="footercontent">
                        <div className="footerlistabout">
                            <h3 className="footerdesctitle">
                                About</h3>
                            <p className="footerdesccontent">
                                We have been focusing in the Disposable Industry since 1978, and continuously concentrating on the idea of team building by creating an R&D team of hard-working personals with self-transcendence, hard-working attitude and spirit of diligent and dedicated craftsmanship.
                            </p>
                            <div className="footersocialicons">
                                <a aria-label="Footer Icon" href='https://www.facebook.com/NesscoPaperCupMachine' target='_blank' className="footersocialicon">
                                    <FaFacebookF />
                                </a>
                                <a aria-label="Footer Icon" href='https://twitter.com/NesscoIndia' target='_blank' className="footersocialicon">
                                    <FaTwitter />
                                </a>
                                <a aria-label="Footer Icon" href='https://www.youtube.com/c/NesscoPaperCupMachine' target='_blank' className="footersocialicon">
                                    <FaYoutube />
                                </a>
                                <a aria-label="Footer Icon" href='https://www.linkedin.com/company/nesscoindia/' target='_blank' className="footersocialicon">
                                    <FaLinkedin />
                                </a>
                                <a aria-label="Footer Icon" href='https://www.instagram.com/nesscoindia/' target='_blank' className="footersocialicon">
                                    <FaInstagram />
                                </a>

                            </div>
                        </div>
                        <div className="footerlist">
                            <h3 className="footerlistheading">Links</h3>
                            <div className="footerlistslink">
                                <Link className='footeratags' to={'/'}>Home</Link>
                                <Link className='footeratags' to={'/about-us/'}>About us</Link>
                                <Link className='footeratags' to={'/product/'}>Machines</Link>
                                <Link className='footeratags' to={'/video/'}>Video</Link>
                                <Link className='footeratags' to={'/contact/'}>Contact</Link>
                                <Link className='footeratags' to={'/market-area/'}>Market Area</Link>
                            </div>

                        </div>
                        <div className="footerlist">
                            <h3 className="footerlistheading">Services</h3>
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
                            <h3 className="footerlistheading">Contacts</h3>
                            <div className="footerlistslink">
                                <p className="footeraddress">
                                    E-186, Apparel Park, RIICO Industrial Area, Mahal Road, Jagatpura, Jaipur (Rajasthan) - 302022, INDIA
                                </p>
                                <a href='tel:+91 99822 00038' className="mobilenumber">+91 99822 00038</a>
                                <a href='tel:+91 95494 44484' className="mobilenumber">+91 95494 44484</a>
                                <a href='mailto:info@nesscoindia.com' className="email">info@nesscoindia.com</a>
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
