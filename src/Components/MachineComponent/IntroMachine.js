import React from 'react'
import { FaAngleRight, FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const IntroMachine = (props) => {
    return (
        <div className="intromachine">
            <div className="intromachinecompo">
                <div className="intromachineleft">
                    <div className="breadcrumconnections">
                        <Link to={'/'} className='breadcrumconnectiondislink'>Home</Link> <FaAngleRight className='breadcrumicon2'/><Link to={'/product'} className='breadcrumconnectiondislink'>Products</Link><FaAngleRight className='breadcrumicon2' /><p className='breadcrumconnectionactivelink'>{props.heading}</p>
                    </div>
                    <h1 className="intromachineheading">{props.heading}</h1>
                    <p className="intromachinedescription">
                        {props.description}
                    </p>
                </div>
                <div className="intromachineform">
                    <div className="intromachinecard">
                        <input placeholder='Full Name *' className='intromachineforminputs' type="text" />
                        <input placeholder='Phone Number *' className='intromachineforminputs' type="text" />
                        <input placeholder='Email ' className='intromachineforminputs' type="text" />
                        <textarea placeholder='Message ' className='intromachineforminputs' type="text" />
                        <button className='intromachineformbtn'>Send Message <FaArrowRightLong className='intromachineicon' /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroMachine
