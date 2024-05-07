import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Breadcrum = (props) => {
  return (
    <>
        <div className="breadcrum">
            <div className="breadcrumcontainer">
                <Link to={'/'} className='breadcrumheading'>{props.previous}<FaAngleRight className='breadcrumicon'/> <span>{props.active}</span> </Link>
            </div>
        </div>
    </>
  )
}

export default Breadcrum
