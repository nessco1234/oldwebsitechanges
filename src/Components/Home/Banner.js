import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import BannerContent from './BannerContent';
import { BiRightArrowAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
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
          <BannerContent/>
          <Link to={'/'} className='bannerbtn'>Get a Quote <BiRightArrowAlt/></Link>
        </div>
      </div>
    </>
  );
}
