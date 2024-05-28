import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import nes1 from '../..'
import nes2 from '../../Assets/images/resource/fooma.webp'
import nes3 from '../../Assets/images/resource/drupa.webp'
import nes4 from '../../Assets/images/resource/saudiprint.png'
import nes5 from '../../Assets/images/resource/gulffood3.webp'
import nes6 from '../../Assets/images/resource/plastindia.webp'
import nes7 from '../../Assets/images/resource/paperone.webp'
import nes8 from '../../Assets/images/resource/interpack.webp'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
const WeAreNessco = () => {
    const [slider, setSlider] = useState(null);
    const [slidesToShow, setSlidesToShow] = useState(3);
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
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
        if (screenWidth <= 600) {
          setSlidesToShow(3);
        } else if (screenWidth <= 1024) {
          setSlidesToShow(3);
        } else {
          setSlidesToShow(3);
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
            <section className="wenessco">
                <div className="wenesscocontainer">
                    <div className="wenesscoleft">
                        <h2 className="wenesscoheading">We Are <span>
                            <br /> Nessco</span></h2>
                        <div className="wenesscobuttons">
                            <FaArrowLeftLong onClick={next} className='wenesscobtn' />
                            <FaArrowRightLong onClick={previous} className='wenesscobtn' />
                        </div>
                    </div>
                    <div className="wenesscoright">
                        <Slider ref={setSlider} {...settings} className='wenesscocontainer'>
                            <>
                                <a href='https://www.drupa.com/vis/v1/en/exhprofiles/ucAWUVDjQvuCaTPIMjGH4Q' target='_blank' className="wenesscocard">
                                    <div className="wenesscocardleft">
                                        <img src={'https://www.nesscoindia.com/Assets/images/resource/drupa2.webp'} style={{width:"70%"}} alt="Drupa Germany" />
                                    </div>
                                    <div className="wenesscocardright">
                                        <h3 className="nesscocardheading"> Drupa Germany</h3>
                                        <p className="nesscocardpara">Join us at Printing Technologies Expo, <br /> Hall 13 / A106 & Hall 9 / D02,<br /> May 28 to June 7, 2024.</p>
                                    </div>
                                </a>
                            </>
                            <>
                                <a href='https://www.foomajapan.jp/int/exhibitor/' target={"_blank"} className="wenesscocard">
                                    <div className="wenesscocardleft">
                                        <img src={'https://www.nesscoindia.com/Assets/images/resource/fooma2.webp'} style={{width:"80%"}} alt="Fooma Japan 24" />
                                    </div>
                                    <div className="wenesscocardright">
                                        <h3 className="nesscocardheading"> Fooma Japan 24</h3>
                                        <p className="nesscocardpara">Join us at the world's leading food processing and machinery expo: <br /> Booth 7C-13, June 4-7, 2024.</p>
                                    </div>
                                </a>
                            </>
                            <>
                                <a href='/https://saudi-pp.com/' target='_blank' className="wenesscocard">
                                    <div className="wenesscocardleft">
                                        <img src={'https://www.nesscoindia.com/Assets/images/resource/saudiprint.png'} alt="Saudi Print & Pack" />
                                    </div>
                                    <div className="wenesscocardright">
                                        <h3 className="nesscocardheading"> Saudi Print & Pack</h3>
                                        <p className="nesscocardpara">Exhibited at MENA's top industrial machinery and printing expo.</p>
                                    </div>
                                </a>
                            </>
                            <>
                                <a href='/' className="wenesscocard">
                                    <div className="wenesscocardleft">
                                        <img src={'https://www.nesscoindia.com/Assets/images/resource/interpack.webp'} alt="Interpack" />
                                    </div>
                                    <div className="wenesscocardright">
                                        <h3 className="nesscocardheading"> Interpack</h3>
                                        <p className="nesscocardpara">Showcased our best machines portfolio at Interpack 2023</p>
                                    </div>
                                </a>
                            </>
                            <>
                                <a href='/' className="wenesscocard">
                                    <div className="wenesscocardleft">
                                        <img src={'https://www.nesscoindia.com/Assets/images/resource/kshow3.png'} style={{width:"70%"}} alt="K Show" />
                                    </div>
                                    <div className="wenesscocardright">
                                        <h3 className="nesscocardheading"> K- Show</h3>
                                        <p className="nesscocardpara">Glad to visit the World's No. 1 Trade Fair for Plastics and Rubber.</p>
                                    </div>
                                </a>
                            </>
                            <>
                                <a href='/' className="wenesscocard">
                                    <div className="wenesscocardleft">
                                        <img src={'https://www.nesscoindia.com/Assets/images/resource/gulffood3.webp'} alt="Gulfood 2022" />
                                    </div>
                                    <div className="wenesscocardright">
                                        <h3 className="nesscocardheading"> Gulfood 2022</h3>
                                        <p className="nesscocardpara">Had a Great time connecting with Industry People in GUlfood 2022.</p>
                                    </div>
                                </a>
                            </>
                            <>
                                <a href='/' className="wenesscocard">
                                    <div className="wenesscocardleft">
                                        <img src={'https://www.nesscoindia.com/Assets/images/resource/paperone2.webp'} alt="Paper One Show" />
                                    </div>
                                    <div className="wenesscocardright">
                                        <h3 className="nesscocardheading"> Paper One Show</h3>
                                        <p className="nesscocardpara">Experienced interactive sessions and discussed about sustainable packaging solutions.</p>
                                    </div>
                                </a>
                            </>
                            <>
                                <a href='/' className="wenesscocard">
                                    <div className="wenesscocardleft">
                                        <img src={'https://www.nesscoindia.com/Assets/images/resource/plastindia.webp'} alt="PLASTINDIA" />
                                    </div>
                                    <div className="wenesscocardright">
                                        <h3 className="nesscocardheading"> PLASTINDIA</h3>
                                        <p className="nesscocardpara">Build connections and spread awareness of various opportunities in paper. </p>
                                    </div>
                                </a>
                            </>
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WeAreNessco
