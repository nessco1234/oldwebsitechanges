import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../Product/ProductCard";
import img1 from '../../Assets/images/resource/paper-container-bowl-making-machine.webp'
import img2 from '../../Assets/images/resource/paper-food-bag-making-machine.webp'
import img3 from '../../Assets/images/resource/paper-handle-cup-making-machine.webp'
import img4 from '../../Assets/images/resource/paper-glass-machine.webp'
import img5 from '../../Assets/images/resource/paper-bag-making-machine.webp'
import img6 from '../../Assets/images/resource/disposable-paper-cup-making-machine.webp'
import img7 from '../../Assets/images/resource/high-speed-paper-cup-machine.webp'
import img8 from '../../Assets/images/resource/paper-lid-making-machine.webp'
import img9 from '../../Assets/images/resource/paper-plate-making-machine.webp'
import img10 from '../../Assets/images/resource/paper-bag-machine.webp'
import img11 from '../../Assets/images/resource/flexo-printing-machine-nessco.webp'
import img12 from '../../Assets/images/resource/paper-cutlery-making-machine.webp'
import { BiSolidRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
const data = [
    {
        name: `Paper Container Bowl Making Machine`,
        img: img1,
        link: "/product/paper-container-bowl-making-machine/"

    },
    {
        name: `Paper Food Bag Making Machine`,
        img: img2,
        link: "/product/paper-food-bag-making-machine/"
    },
    {
        name: `Paper Handle Cup Making Machine`,
        img: img3,
        link: "/product/paper-handle-cup-making-machine/"
    },
    {
        name: `Paper Glass Making Machine`,
        img: img4,
        link: "/product/paper-glass-making-machine/"
    },
    {
        name: `Paper Shopping Bag Making Machine`,
        img: img5,
        link: "/product/paper-shopping-bag-making-machine/"
    },
    {
        name: `Disposable Cup Making Machine`,
        img: img6,
        link: "/product/disposable-paper-cup-making-machine/"
    },
    {
        name: `High Speed Paper Cup Machine`,
        img: img7,
        link: "/product/high-speed-paper-cup-making-machine/"
    },

];
const data2 = [
    {
        name: `Paper Lid Machine`,
        img: img8,
        link: "/product/paper-lid-making-machine/"
    },
    {
        name: `Paper Plate Machine`,
        img: img9,
        link: "/product/paper-plate-making-machine/"
    },
    {
        name: `Paper Bag Machine`,
        img: img10,
        link: "/product/paper-bag-making-machine/"

    },
    {
        name: `Flexo Printing Machine`,
        img: img11,
        link: "/product/flexo-printing-machine/"
    },
    {
        name: `Paper Cultery Machine`,
        img: img12,
        link: "/product/paper-cutlery-machine/"
    }
];
function App() {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    infinite: true,
                    speed: 500,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    pauseOnHover: false,
                    autoplaySpeed: 2000,
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    pauseOnHover: false,
                    autoplaySpeed: 2000,
                    arrows: false,
                }
            }
        ]
        // speed: 100,
    };
    return (
        <section className='product'>
            <div className="productcontainer">
                <h1 className="aboutusbtn align">OUR MACHINES</h1>
                <h1 className="productssstitle">Our Products</h1>
                <p className="productsssdesc">We are known for manufacturing and globally exporting various paper packaging machines including
                    Cups, Glass, Straws and Plate Machines.</p>
                <Slider {...settings} className="productbox" >
                    {data.map((d) => (
                        <>
                            <Link to={d.link} className="productssscard" >
                                <div className="productsssupper">
                                    <img src={d.img} alt="" />
                                </div>
                                <div className="productssslower">
                                    {/* <img src={img1} alt="" /> */}
                                    <Link to={d.link} className="productsssheading">{d.name}</Link>
                                    <Link to={d.link} className="productssslink">View Machine <FaArrowRightLong style={{ marginLeft: "1rem" }} /></Link>
                                </div>
                            </Link>
                        </>
                    ))}
                </Slider>
                <Slider {...settings} className="productbox" >
                    {data2.map((d) => (
                        <>
                            <Link to={d.link} className="productssscard">
                                <div className="productsssupper">
                                    <img src={d.img} alt="" />
                                </div>
                                <div className="productssslower">
                                    {/* <img src={img1} alt="" /> */}
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