import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const ProductCard = (props) => {
  return (
    <>
        <Link className="productpagecard" to={props.url}>
            <div className="productpageupper">
                <img src={props.img} alt={props.heading} />
            </div>
            <div className="productpagelower">
                <h3 className="productpageheading">{props.heading}</h3>
                <Link className='productpagelink' to={props.url}>View Machine <FaArrowRightLong style={{marginLeft:"1rem"}}/></Link>
            </div>
        </Link>
    </>
  )
}

export default ProductCard
