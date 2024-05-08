import React from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const ProductCard = (props) => {
  return (
    <>
        <Link className="productpagecard" to={props.url}>
            <div className="productpageupper">
                <img src={props.img} alt="" />
            </div>
            <div className="productpagelower">
                <h1 className="productpageheading">{props.heading}</h1>
                <Link className='productpagelink' to={props.url}>View Machine <BiRightArrowAlt/></Link>
            </div>
        </Link>
    </>
  )
}

export default ProductCard
