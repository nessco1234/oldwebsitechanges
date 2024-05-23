import React from 'react'
import icon1 from '../../Assets/images/icons/icon-1.png'
const Subscribe = () => {
  return (
    <>
        <section className="subscribe">
            <div className="subsribecontainer">
                <div className="leftsubscribe">
                    <img src={'https://www.nesscoindia.com/Assets/images/icons/icon-1.png'} alt="Mail Icon" className="icon1" />
                    <h2 className="subsribeheading">Subscribe & Get Updates of Sustainable Packaging</h2>
                </div>
                <div className="rightsubscribe">
                    <input type="text" placeholder='Your email address'/>
                    <button className="subscribebtn">Subscribe</button>
                </div>
            </div>
        </section>
    </>
  )
}

export default Subscribe
