import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { BiLeftArrowAlt, BiRightArrow, BiRightArrowAlt } from 'react-icons/bi';
// import banner1 from '../Assets/images/banner/banner-image-nessco.webp'
export default function App() {
  const swiper = useSwiper();
  return (
    <>
      {/* <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <div className="imglayers">
          <div className="imglayer2"></div>
          <div className="imglayer1"></div>
          <div className="imglayer3"></div>
          <div className="imglayer4"></div>
        </div>
        <SwiperSlide className='bannerslide1'>
          hi there
        </SwiperSlide>
        <SwiperSlide className='bannerslide2'>Slide 2</SwiperSlide>
        <SwiperSlide className='bannerslide3'>Slide 3</SwiperSlide>
        <BiRightArrowAlt/>
      </Swiper> */}
      <div
        className="mySwiper"
      >
        <div className="imglayers">
          <div className="imglayer2"></div>
          <div className="imglayer1"></div>
          <div className="imglayer3"></div>
          <div className="imglayer4"></div>
        </div>
        <div className='bannerslide'>
          
        </div>
      </div>
    </>
  );
}
