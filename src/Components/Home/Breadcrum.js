import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Breadcrum = (props) => {
  return (
    <>
        <section className="breadcrum">
            <div className="breadcrumcontainer">
            {props.third ?<Link to={'/'} className='breadcrumheading'>Home <FaAngleRight className='breadcrumicon'/></Link>: null}
                <Link to={props.link}  className='breadcrumheading'>{props.previous}<FaAngleRight className='breadcrumicon'/></Link><h4  className='breadcrumheading'><span>{props.active}</span> </h4>
            </div>
        </section>
    </>
  )
}

export default Breadcrum
