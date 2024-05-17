import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import ReactStars from 'react-stars'
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import img1 from '../../Assets/images/resource/testimonial-1.webp'
import img2 from '../../Assets/images/resource/testimonial-2.webp'
import img3 from '../../Assets/images/resource/testimonial-3.webp'
import img4 from '../../Assets/images/resource/testimonial-4.webp'
import img5 from '../../Assets/images/resource/testimonial-5.webp'
const Testimonials = () => {
    const [slider, setSlider] = useState(null);
    const [slidesToShow, setSlidesToShow] = useState(2);

    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        // fade:true,
        // speed: 100,
    };
    const next = () => {
        slider.slickNext();
    };

    const previous = () => {
        slider.slickPrev();
    };
    const updateSlidesToShow = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth <= 768) {
          setSlidesToShow(1);
        } 
        else {
          setSlidesToShow(2);
        }
      };
    useEffect(() => {
        updateSlidesToShow();
        window.addEventListener('resize', updateSlidesToShow);
        return () => {
          window.removeEventListener('resize', updateSlidesToShow);
        };
      }, []);
    return (
        <>
            <section className="testimonials">
                <div className="testimonialscontainer">
                    <div className="testimonialsleft">
                        <h1 className="aboutusbtn ">TESTIMONIALS</h1>
                        <h1 className="testimonialsheading">Trusted <span> by More Than 7k Clients.</span></h1>
                        <div className="wenesscobuttons">
                            <FaArrowLeftLong  onClick={next} className='wenesscobtn' />
                            <FaArrowRightLong onClick={previous} className='wenesscobtn' />
                        </div>
                    </div>
                    <div className="testimonialsright">
                        <Slider ref={setSlider} {...settings} className="testimonialscards">
                            <>
                                <div className="testimonialsec">
                                    <div className="testimonialcard">
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            color2={'#ffd700'}
                                            value={5}
                                            edit={false}
                                        />
                                        <p className="testimonialdesc">
                                        Good experience their people helps me in getting raw materials and high speed “ machines ” performs very good no service issues found in last two years. Keep it up folks.
                                        </p>

                                    </div>
                                    <div className="testimonialowner">
                                        <div className="testimonialowneravatar">
                                            <img src={img2} alt="" />
                                        </div>
                                        <div className="testimonialownername">Omar Taymullah, UAE</div>
                                    </div>
                                </div>
                            </>
                            <>
                                <div className="testimonialsec">
                                    <div className="testimonialcard">
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            color2={'#ffd700'}
                                            value={5}
                                            edit={false}
                                        />
                                        <p className="testimonialdesc">
                                        We are using 4 Nessco High speed machines. All running nicely and best after sales service support in the market. Highly recommended if you are looking for Machines.
                                        </p>

                                    </div>
                                    <div className="testimonialowner">
                                        <div className="testimonialowneravatar">
                                            <img src={img3} alt="" />
                                        </div>
                                        <div className="testimonialownername">Rekha Sharma</div>
                                    </div>
                                </div>
                            </>
                            <>
                                <div className="testimonialsec">
                                    <div className="testimonialcard">
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            color2={'#ffd700'}
                                            value={5}
                                            edit={false}
                                        />
                                        <p className="testimonialdesc">
                                        Nessco a trusted name in packaging industry machines Very good experience with them staff and owners are very cooperative and ready to help in establishing your business. Machines quality is excellent.
                                        </p>

                                    </div>
                                    <div className="testimonialowner">
                                        <div className="testimonialowneravatar">
                                            <img src={img5} alt="" />
                                        </div>
                                        <div className="testimonialownername">Thomas Aaron</div>
                                    </div>
                                </div>
                            </>
                            <>
                                <div className="testimonialsec">
                                    <div className="testimonialcard">
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            color2={'#ffd700'}
                                            value={5}
                                            edit={false}
                                        />
                                        <p className="testimonialdesc">
                                        It’s really a very nice experience while dealing with Nessco personals, they are very customer friendly and the machines of Nessco are fantabulous, they have low maintenance and user friendly.
                                        </p>

                                    </div>
                                    <div className="testimonialowner">
                                        <div className="testimonialowneravatar">
                                            <img src={img1} alt="" />
                                        </div>
                                        <div className="testimonialownername">Jonathan Robert</div>
                                    </div>
                                </div>
                            </>

                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonials
