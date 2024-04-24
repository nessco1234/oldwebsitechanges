import React from 'react'
import Shape from '../Assets/images/shape/shape-209.png'
import Shape2 from '../Assets/images/shape/shape-210.png'

const Presence = () => {
  return (
    <section className='presenceSection'>
      <div className='presenceContainer'>
        <div className='staticimages'>
            <img className='staticimage1' src={Shape} />
            <img className='staticimage2' src={Shape2}/>
        </div>
        <div className='leftpresence'>

        </div>
        <div className='rightpresence'>

        </div>
      </div>
    </section>
  )
}

export default Presence
