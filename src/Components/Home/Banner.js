import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
export default function App() {
  return (
    <>
      <div
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
          <div className="bannerslidecontainer">
            <h1 className='bannerslideheading'>Envision Sucess Through  Innovation <span></span></h1>
            <p className="bannerslidepara">High Speed Machines that are Enginnered for you <span></span></p>
            <button className="bannerbtn">Get a Quote <FaArrowRight /></button>
          </div>
        </div>
      </div>
    </>
  );
}
