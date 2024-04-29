import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../Product/ProductCard";
import img1 from '../../Assets/images/resource/paper-bag-machine.webp'
import { BiSolidRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
function App() {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
        // speed: 100,
    };
    return (
        <div className='product'>
        .pro
            <div className="productcontainer">
                <h1 className="aboutusbtn align">OUR MACHINES</h1>
                <h1 className="productssstitle">Our Products</h1>
                <p className="productsssdesc">We are known for manufacturing and globally exporting various paper packaging machines including
                    Cups, Glass, Straws and Plate Machines.</p>
                <Slider {...settings} className="productbox">
                    {data.map((d) => (
                        <>
                            <Link className="productssscard">
                                <div className="productsssupper">
                                    <img src={img1} alt="" />
                                </div>
                                <div className="productssslower">
                                    {/* <img src={img1} alt="" /> */}
                                    <h1 className="productsssheading">Paper Container Bowl Making Machine</h1>
                                    <h1 className="productssslink">View Machine <BiSolidRightArrowAlt /></h1>
                                </div>
                            </Link>
                        </>
                    ))}
                </Slider>
                <Slider {...settings} className="productbox">
                    {data.map((d) => (
                        <>
                            <div className="productssscard">
                                <div className="productsssupper">
                                    <img src={img1} alt="" />
                                </div>
                                <div className="productssslower">
                                    {/* <img src={img1} alt="" /> */}
                                    <h1 className="productsssheading">Paper Container Bowl Making Machine</h1>
                                    <h1 className="productssslink">View Machine <BiSolidRightArrowAlt /></h1>
                                </div>
                            </div>
                        </>
                    ))}
                </Slider>
            </div>

        </div>
    );
}

const data = [
    {
        name: `John Morgan`,
        img: `/students/John_Morgan.jpg`,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
        name: `Ellie Anderson`,
        img: `/students/Ellie_Anderson.jpg`,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
        name: `Nia Adebayo`,
        img: `/students/Nia_Adebayo.jpg`,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
        name: `Rigo Louie`,
        img: `/students/Rigo_Louie.jpg`,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
        name: `Mia Williams`,
        img: `/students/Mia_Williams.jpg`,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },

];

export default App;