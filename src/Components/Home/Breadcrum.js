import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Breadcrum = (props) => {
  return (
    <>
        <div className="breadcrum">
            <div className="breadcrumcontainer">
            {props.third ?<Link to={'/'} className='breadcrumheading'>Home <FaAngleRight className='breadcrumicon'/></Link>: null}
                <Link to={props.link}  className='breadcrumheading'>{props.previous}<FaAngleRight className='breadcrumicon'/></Link><Link  className='breadcrumheading'><span>{props.active}</span> </Link>
            </div>
        </div>
    </>
  )
}

export default Breadcrum
