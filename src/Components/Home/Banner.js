import React from 'react';
import { FaArrowRight, FaArrowRightLong } from 'react-icons/fa6';
import BannerContent from './BannerContent';
import { BiRightArrowAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import img1 from '../../Assets/images/resource/popup.webp'
export default function App(props) {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  function downloadlocal() {
    props.setdown(true)
    closeModal()
    console.log(props.down)
  }
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
        <div className='bannerslide'>
          <BannerContent />
          

          {/* <Link to={'/'} className='bannerbtn'>Get a Quote <BiRightArrowAlt /></Link> */}
          <button onClick={openModal} className="bannerbtn" style={{marginTop:"2rem"}}>
            <p className='bannerbtncon'>Get A Quote</p> <FaArrowRightLong className='bannerbtnarrow' style={{ fontSize: "1.5rem" }} /></button>
          {isOpen && (
            <div className="modal">
              <button className="close-button" onClick={closeModal}>&times;</button>
              <div className="modalcard">
                <div className="leftmodal">
                  <img src={img1} alt="" />
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
        </div>
      </section>
    </>
  );
}
