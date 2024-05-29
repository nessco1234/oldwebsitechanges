import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";
import { useEffect } from "react";
import {Link } from "react-router-dom"
const data = [
    {
        name: `Paper Container Bowl Making Machine`,
        img: 'https://www.nesscoindia.com/Assets/images/resource/paper-container-bowl-making-machine.webp',
        link: "/product/paper-container-bowl-making-machine/",


    },
    {
        name: `Paper Food Bag Making Machine`,
        img: 'https://www.nesscoindia.com/Assets/images/resource/paper-food-bag-making-machine.webp',
        link: "/product/paper-food-bag-making-machine/",
    },
    {
        name: `Paper Handle Cup Making Machine`,
        img: 'https://www.nesscoindia.com/Assets/images/resource/paper-handle-cup-making-machine.webp',
        link: "/product/paper-handle-cup-making-machine/",
    },
    {
        name: `Paper Glass Making Machine`,
        img: 'https://www.nesscoindia.com/Assets/images/resource/paper-glass-machine.webp',
        link: "/product/paper-glass-making-machine/",
    },
    {
        name: `Paper Shopping Bag Making Machine`,
        img: 'https://www.nesscoindia.com/Assets/images/resource/paper-bag-making-machine.webp',
        link: "/product/paper-shopping-bag-making-machine/",
    },
    {
        name: `Disposable Cup Making Machine`,
        img: 'https://www.nesscoindia.com/Assets/images/resource/disposable-paper-cup-making-machine.webp',
        link: "/product/disposable-paper-cup-making-machine/",
    },
    {
        name: `High Speed Paper Cup Machine`,
        img: 'https://www.nesscoindia.com/Assets/images/resource/fully-automatic-paper-cup-making-machine.webp',
        link: "/product/high-speed-paper-cup-making-machine/",
    },

];
const data2 = [
    {
        name: `Paper Lid Machine`,
        img: 'https://www.nesscoindia.com/Assets/images/resource/paper-lid-making-machine.webp',
        link: "/product/paper-lid-making-machine/",
    },
    {
        name: `Paper Plate Machine`,
        img: 'https://www.nesscoindia.com/Assets/images/resource/paper-plate-making-machine.webp',
        link: "/product/paper-plate-making-machine/",
    },
    {
        name: `Paper Bag Machine`,
        img: 'https://www.nesscoindia.com/Assets/images/resource/paper-bag-machine.webp',
        link: "/product/paper-bag-making-machine/",

    },
    {
        name: `Flexo Printing Machine`,
        img: 'https://www.nesscoindia.com/Assets/images/resource/flexo-printing-machine-nessco.webp',
        link: "/product/flexo-printing-machine/",
    },
    {
        name: `Paper Cutlery Machine`,
        img: 'https://www.nesscoindia.com/Assets/images/resource/paper-cutlery-making-machine.webp',
        link: "/product/paper-cutlery-machine/",
    }
];
function App() {
    // const [slider, setSlider] = useState(null);

    const [slidesToShow, setSlidesToShow] = useState(4);
    const updateSlidesToShow = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth <= 600) {
          setSlidesToShow(2);
        } else if (screenWidth <= 1024) {
          setSlidesToShow(2);
        } else {
          setSlidesToShow(4);
        }
      };
    useEffect(() => {
        updateSlidesToShow();
        window.addEventListener('resize', updateSlidesToShow);
        return () => {
          window.removeEventListener('resize', updateSlidesToShow);
        };
      }, []);
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 2000,
        arrows: false,
    };
    return (
        <section className='product'>
            <div className="productcontainer">
                <p className="aboutusbtn align">OUR MACHINES</p>
                <h2 className="productssstitle">Our Products</h2>
                <p className="productsssdesc">We are known for manufacturing and globally exporting various paper packaging machines including
                    Cups, Glass, Straws and Plate Machines.</p>
                <Slider {...settings} className="productbox" aria-hidden="true" >
                    {data.map((d,key) => (
                        <>
                            <Link to={d.link} key={key} className="productssscard" aria-hidden="true" >
                                <div className="productsssupper">
                                    <img src={d.img} alt={d.name} />
                                </div>
                                <div className="productssslower">
                                    {/* <img src={img1} alt="" /> */}
                                    <Link aria-hidden="true" to={d.link} className="productsssheading">{d.name}</Link>
                                    <Link aria-hidden="true" to={d.link} className="productssslink">View Machine <FaArrowRightLong style={{ marginLeft: "1rem" }} /></Link>
                                </div>
                            </Link>
                        </>
                    ))}
                </Slider>
                <Slider {...settings} className="productbox" aria-hidden="true" >
                    {data2.map((d,key) => (
                        <>
                            <Link to={d.link} key={key} className="productssscard" aria-hidden="true">
                                <div className="productsssupper">
                                    <img src={d.img} alt={d.name} />
                                </div>
                                <div className="productssslower">
                                    <Link to={d.link} className="productsssheading">{d.name}</Link>
                                    <Link to={d.link} className="productssslink">View Machine <FaArrowRightLong style={{ marginLeft: "1rem" }} /></Link>
                                </div>
                            </Link>
                        </>
                    ))}
                </Slider>
            </div>

        </section>
    );
}



export default App;