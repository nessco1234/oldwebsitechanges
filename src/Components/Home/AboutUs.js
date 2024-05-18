import React, { useState } from "react";
// import TeamPic from "../../Assets/images/resource/nessco-team.webp";
// import NesscoTeamPic from "../../Assets/images/resource/samplekshow2.webp";
import Signature from "../../Assets/images/resource/signature.webp";
import img1 from '../../Assets/images/resource/popup.webp'
import { FaPlay } from "react-icons/fa";
import { MdArrowRightAlt } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import '../../Styles/Modal.css';  // Ensure to create this CSS file
import { Link } from "react-router-dom";
const AboutUs = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const [isHovered, setIsHovered] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const openModal2 = () => setIsOpen2(true);
    const closeModal2 = () => setIsOpen2(false);
    function downloadlocal(){
        props.setdown(true)
        closeModal()
        console.log(props.down)
    }
  return (
    <>
      <section className="homeaboutus">
        <div className="sectionContainer">
          <div className="leftabout">
            <img className="leftaboutpic" alt="Nessco Team" src="https://nessco.kafkaindia.com/Assets/images/resource/nessco-team.webp" decoding="async"  />
            <div className="leftaboutpic2">
              {/* <a  href="https://www.youtube.com/embed/e-rwkwTE8P4" data-caption>
                <FaPlay />
              </a> */}
              <div className="aboutimagesection"></div>
              <button className="playbtn" onClick={openModal}><FaPlay /></button>
              {isOpen && (
                <div className="modal">
                  <button className="close-button" onClick={closeModal}>&times;</button>
                  <iframe className="modal-content" width={1000} height={500} id="fancybox-frame1715329533515" name="fancybox-frame1715329533515" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" allowtransparency="true" src="//www.youtube.com/embed/e-rwkwTE8P4?autoplay=1&amp;autohide=1&amp;fs=1&amp;rel=0&amp;hd=1&amp;wmode=transparent&amp;enablejsapi=1&amp;html5=1" scrolling="no"></iframe>
                </div>
              )}
            </div>
          </div>
          <div className="rightabout">
            <h1 className="aboutusbtn  mm">ABOUT US</h1>
            <h1 className="aboutheading">
              Paper cup machine <span> Manufacturer & Exporter</span>
            </h1>
            <p className="aboutpara">
              Nessco India is an international <Link to={'/product/high-speed-paper-cup-making-machine/'}> paper cup machine</Link> manufacturing
              company with a trusted brand name since 1978 in domestic as well
              as international markets. Since then, NesscoIndia has widened its
              business globally in the whole Disposable Paper Packaging
              Industry.
            </p>
            <h1 className="aboutheading small">CLAIM TO FAME</h1>
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
                  <button className="close-button" onClick={closeModal2}>&times;</button>
                  <div className="modalcard">
                    <div className="leftmodal">
                      <img src={'https://nessco.kafkaindia.com/Assets/images/resource/popup.webp'} alt="Popup" />
                    </div>
                    <div className="rightmodal">
                      <h1 className="modalheading">Request for details to receive a call back</h1>
                      <p className="modaldesc">Enter your details to receive a call back</p>
                      <input placeholder='Enter your Name' className='modalinp' type="text" />
                      <input placeholder='Enter your Email' className='modalinp' type="text" />
                      <input placeholder='Enter your Phone' className='modalinp' type="text" />
                      <Link onClick={downloadlocal} to={'/thank-you'} className="headerbtn x" style={{ padding: "2rem 3rem" }}>
                        <p className='headerbtncon'>Get a Quote !</p> <FaArrowRightLong className='headerbtnarrow' style={{ fontSize: "1.5rem" }} /></Link>
                    </div>
                  </div>
                </div>
              )}
              <button onClick={openModal2} className="headerbtn" style={{ padding: "1.5rem 2rem" }}>
                <p className='headerbtncon'>Get a Quote !</p> <FaArrowRightLong className='headerbtnarrow' style={{ fontSize: "1.5rem" }} /></button>
              <img className="signatureimg" alt="Signature" src={'https://nessco.kafkaindia.com/Assets/images/resource/signature.webp'} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
