import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import Slider from 'react-slick'
import ReactStars from 'react-stars'

const Testimonials = () => {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
        // speed: 100,
    };
    return (
        <>
            <div className="testimonials">
                <div className="testimonialscontainer">
                    <div className="testimonialsleft">
                        <h1 className="aboutusbtn ">TESTIMONIALS</h1>
                        <h1 className="testimonialsheading">Trusted <span> by More Than 7k Clients.</span></h1>
                        <div className="wenesscobuttons">
                            <BiLeftArrowAlt className='wenesscobtn' />
                            <BiRightArrowAlt className='wenesscobtn' />
                        </div>
                    </div>
                    <div className="testimonialsright">
                        <Slider {...settings} className="testimonialscards">
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
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quisquam similique porro esse itaque nam velit nisi sunt accusamus. Nostrum commodi molestiae corrupti, ratione iure sed optio eaque perferendis labore.
                                        </p>

                                    </div>
                                    <div className="testimonialowner">
                                        <div className="testimonialowneravatar"></div>
                                        <div className="testimonialownername">Rahul Shukla</div>
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
                                        />
                                        <p className="testimonialdesc">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quisquam similique porro esse itaque nam velit nisi sunt accusamus. Nostrum commodi molestiae corrupti, ratione iure sed optio eaque perferendis labore.
                                        </p>

                                    </div>
                                    <div className="testimonialowner">
                                        <div className="testimonialowneravatar"></div>
                                        <div className="testimonialownername">Rahul Shukla</div>
                                    </div>
                                </div>
                            </>

                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials
