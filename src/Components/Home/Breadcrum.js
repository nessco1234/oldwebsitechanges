import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrum = (props) => {
  return (
    <>
        <div className="breadcrum">
            <div className="breadcrumcontainer">
                <Link to={'/'} className='breadcrumheading'>{props.previous} <span>{props.active}</span> </Link>
            </div>
        </div>
    </>
  )
}

export default Breadcrum
