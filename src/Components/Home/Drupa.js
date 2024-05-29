import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FaCalendarAlt } from 'react-icons/fa';
import { IoLocation } from "react-icons/io5";
import { BsShopWindow } from "react-icons/bs";
const Drupa = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    fade: true,
    // speed: 100,
  };
  return (
    <div className="drupasection" style={{ backgroundColor: "#f7f7f7" }}>

      <Slider {...settings} >
        <a href='https://www.drupa.com/vis/v1/en/exhprofiles/ucAWUVDjQvuCaTPIMjGH4Q' target='_blank' className='drupa'>
          <img className="drupalayers" src={'https://www.nesscoindia.com/Assets/images/resource/druptranparent.png'} />
          <div className="drupadates">
            <div className="drupadatesleft">
              <FaCalendarAlt className='drupaleftlogo' />
            </div>
            <div className="drupadatesright">
              <p>28 May,</p>
              <p>07-June - 2024  </p>
            </div>
          </div>
          <div className="drupalocation">
            <div className="drupalocationleft">
              <IoLocation className='drupaleftlogo' />
            </div>
            <div className="drupalocationright">
              <p>Düsseldorf | Germany</p>
              <p>www.drupa.com</p>
            </div>

          </div>
          <div className="drupabooth">
            <div className="drupalocationleft">
              <BsShopWindow className='drupaleftlogo' />
            </div>
            <div className="drupalocationright">
              <div className="drupatable">
                <div className="drupacontent" >Hall - 9</div>
                {/* <div className="drupacontent">Hall - 13</div> */}
                <div className="drupacontent"> | D02</div>
              </div>
              <div className="drupatable">
                <div className="drupacontent" >Hall - 13</div>
                <div className="drupacontent">| A106</div>
              </div>
            </div>

          </div>
        </a>
        <a href='https://www.drupa.com/vis/v1/en/exhprofiles/ucAWUVDjQvuCaTPIMjGH4Q' target='_blank'  className='drupa2'>
          <img className="drupalayers" src={'https://www.nesscoindia.com/Assets/images/resource/druptranparent.png'} alt='Drupa' />
          <div className="drupadates">
            <div className="drupadatesleft">
              <FaCalendarAlt className='drupaleftlogo' />
            </div>
            <div className="drupadatesright">
              <p>28 May,</p>
              <p>07-June - 2024  </p>
            </div>
          </div>
          <div className="drupalocation">
            <div className="drupalocationleft">
              <IoLocation className='drupaleftlogo' />
            </div>
            <div className="drupalocationright">
              <p>Düsseldorf | Germany</p>
              <p>www.drupa.com</p>
            </div>
          </div>
          <div className="drupabooth">
            <div className="drupalocationleft">
              <BsShopWindow className='drupaleftlogo' />
            </div>
            <div className="drupalocationright">
              <div className="drupatable">
                <div className="drupacontent" >Hall - 9</div>
                {/* <div className="drupacontent">Hall - 13</div> */}
                <div className="drupacontent"> | D02</div>
              </div>
              <div className="drupatable">
                <div className="drupacontent" >Hall - 13</div>
                <div className="drupacontent">| A106</div>
              </div>
            </div>
          </div>
        </a>
      </Slider >
    </div >
  )
}

export default Drupa
