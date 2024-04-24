import React from 'react'
import icon1 from '../Assets/images/icons/icon-1.png'
const Subscribe = () => {
  return (
    <>
        <section className="subscribe">
            <div className="subsribecontainer">
                <div className="leftsubscribe">
                    <img src={icon1} alt="" className="icon1" />
                    <h1 className="subsribeheading">Subscribe & Get Updates of Sustainable Packaging</h1>
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
