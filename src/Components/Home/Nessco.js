import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, A11y]}
      spaceBetween={50}
      slidesPerView={5}
      navigation
      loop={true}
    //   pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className='logos'
    >
      <SwiperSlide className='logos-slide'>Slide 1</SwiperSlide>
      <SwiperSlide className='logos-slide'>Slide 2</SwiperSlide>
      <SwiperSlide className='logos-slide'>Slide 3</SwiperSlide>
      <SwiperSlide className='logos-slide'>Slide 4</SwiperSlide>
      <SwiperSlide className='logos-slide'>Slide 4</SwiperSlide>
      <SwiperSlide className='logos-slide'>Slide 4</SwiperSlide>
      ...
    </Swiper>
  );
};