import React from 'react'
import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { BiRightArrowAlt } from 'react-icons/bi'
import product from '../../Assets/images/resource/disposable-paper-cup-making-machine.webp'
const Products = () => {
    const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
    const [currentSlide, setCurrentSlide] = useState(0);
    const [size,setsize]=useState(4)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(currentSlide => (currentSlide + 1) % items.length);
        }, 2000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, []);
    // if(window.innerWidth<=1099  ){
    //     setsize(3)
    // }
    const settings = {
        // dots: true,
        className:"productbox",
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        
        autoplay: true, // Autoplay handled manually
        autoplaySpeed: 3000,
        beforeChange: (oldIndex, newIndex) => {
            setCurrentSlide(newIndex);
        },
    };
    return (
        <>
            <div className="products">
                <div className="productcontainer">
                    <h1 className="aboutusbtn mar">Our Machines</h1>
                    <p className="productdesc">
                        We are known for manufacturing and globally exporting various paper packaging machines including
                        Cups, Glass, Straws and Plate Machines.
                    </p>
                    <Slider {...settings}  >
                        <div className="slick-slide" >
                            <div className="productupper">
                                <img src={product} alt="" />
                            </div>
                            <div className="productlower">
                                <h1 className="productheading">Paper Food Bag Making Machine</h1>
                                <a href="/" className='productlink' >View Machine <BiRightArrowAlt /> </a>
                            </div>
                        </div>
                        <div className="product">
                            <div className="productupper">
                                <img src={product} alt="" />
                            </div>
                            <div className="productlower">
                                <h1 className="productheading">Paper Food Bag Making Machine</h1>
                                <a href="/" className='productlink' >View Machine <BiRightArrowAlt /> </a>
                            </div>
                        </div>
                        <div className="product">
                            <div className="productupper">
                                <img src={product} alt="" />
                            </div>
                            <div className="productlower">
                                <h1 className="productheading">Paper Food Bag Making Machine</h1>
                                <a href="/" className='productlink' >View Machine <BiRightArrowAlt /> </a>
                            </div>
                        </div>
                        <div className="product">
                            <div className="productupper">
                                <img src={product} alt="" />
                            </div>
                            <div className="productlower">
                                <h1 className="productheading">Paper Food Bag Making Machine</h1>
                                <a href="/" className='productlink' >View Machine <BiRightArrowAlt /> </a>
                            </div>
                        </div>
                    </Slider>
                    <div className="productbox mmm">
                        <div className="product">
                            <div className="productupper">
                                <img src={product} alt="" />
                            </div>
                            <div className="productlower">
                                <h1 className="productheading">Paper Food Bag Making Machine</h1>
                                <a href="/" className='productlink' >View Machine <BiRightArrowAlt /> </a>
                            </div>
                        </div>
                        <div className="product">
                            <div className="productupper">
                                <img src={product} alt="" />
                            </div>
                            <div className="productlower">
                                <h1 className="productheading">Paper Food Bag Making Machine</h1>
                                <a href="/" className='productlink' >View Machine <BiRightArrowAlt /> </a>
                            </div>
                        </div>
                        <div className="product">
                            <div className="productupper">
                                <img src={product} alt="" />
                            </div>
                            <div className="productlower">
                                <h1 className="productheading">Paper Food Bag Making Machine</h1>
                                <a href="/" className='productlink' >View Machine <BiRightArrowAlt /> </a>
                            </div>
                        </div>
                        <div className="product">
                            <div className="productupper">
                                <img src={product} alt="" />
                            </div>
                            <div className="productlower">
                                <h1 className="productheading">Paper Food Bag Making Machine</h1>
                                <a href="/" className='productlink' >View Machine <BiRightArrowAlt /> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products
