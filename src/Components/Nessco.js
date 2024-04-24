import React from 'react'
import Card from './Card'
const Imagecarousel = () => {
    let box = document.querySelector('.product-container');

    const btnpressprev = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
        console.log(width)
    }

    const btnpressnext = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
        console.log(width)
    }
    return (
        <div className="product-carousel">
            <button className="pre-btn" onClick={btnpressprev}><p>&lt;</p></button>
            <button className="next-btn" onClick={btnpressnext}><p>&gt;</p></button>


            <div className="product-container">
                <Card cardno='1' />
                <Card cardno='2' />
                <Card cardno='3' />
                <Card cardno='4' />
                <Card cardno='5' />
                <Card cardno='6' />
                <Card cardno='7' />
                <Card cardno='8' />
                <Card cardno='9' />
                <Card cardno='10' />
                <Card cardno='11' />
                <Card cardno='12' />
                <Card cardno='13' />
            </div>
        </div>
    )
}

export default Imagecarousel