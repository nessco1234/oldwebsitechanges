import React from 'react'
import Shape from '../../Assets/images/shape/shape-209.png'
import Shape2 from '../../Assets/images/shape/shape-210.png'
import Map from '../../Assets/images/resource/newmap.png'
import { MdArrowRightAlt } from 'react-icons/md'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
const Presence = () => {
  return (
    <section className='presenceSection'>
      <div className='presenceContainer'>
        <div className='staticimages'>
          <img className='staticimage1' alt='123' src={'https://nessco.kafkaindia.com/Assets/images/shape/shape-209.png'} />
          <img className='staticimage2' alt='123' src={'https://nessco.kafkaindia.com/Assets/images/shape/shape-210.png'} />
        </div>
        <div className='leftpresence'>
          <h1 className="aboutusbtn">PRESENCE</h1>
          <h1 className="presenceheading">Nessco Global <span> Presence</span>
          </h1>
          <p className="presencepara">With a strong functional position in this market for over 40 years, now Nessco India is backed by 5 Domestic Distributing Centres and 7 International Ones. Over all these years, we have spread our arms to almost every country to expand our business globally.</p>
          <img src={'https://nessco.kafkaindia.com/Assets/images/resource/newmap.png'} alt="map" />
        </div>

        <div className='rightpresence'>
          <div className="presenceCard">
            <h1 className="presencecardtitle">Request For A Quote</h1>
            <input  className='presenceinpfields' type="text" placeholder='Full Name *' />
            <input className='presenceinpfields' type="text" placeholder='Email' />
            <input  className='presenceinpfields' type="text" placeholder='Phone Number *' />
            <textarea className='presenceinpfields'  name="" id="" cols="5" rows="3" placeholder='Message' />
            <Link to={'/thank-you'} className="headerbtn" style={{padding:"1.5rem 2rem"}}>
                <p className='headerbtncon'>Send Message !</p> <FaArrowRightLong className='headerbtnarrow' style={{ fontSize: "1.5rem" }} /></Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Presence
