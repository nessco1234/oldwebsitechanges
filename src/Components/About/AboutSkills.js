import React from 'react'
import img1 from '../../Assets/images/icons/f1.webp'
import img2 from '../../Assets/images/icons/f2.webp'
import img3 from '../../Assets/images/icons/f3.webp'
import img4 from '../../Assets/images/icons/f4.webp'
const AboutSkills = () => {
  return (
    <>
      <div className="aboutskills">
        <div className="aboutskillscontainer">
          <div className="aboutskillsleft">
            <h1 className="aboutusbtn">OUR SKILLS</h1>
            <h1 className="aboutskillsheading"><span>Our Skillset</span> with More Experience.</h1>
            <p className="aboutskillspara">All our machines are manufactured and assembled using high quality parts with the usage of advance technology. Our machines are constructed on the principle of Open Cam Technology accompanied with Gear Driven System or Chain Transmission System as per the model of machines. We have shown an impeccable growth in dynamic technical environment as we believe in growing together through Creativity, Innovation and Invention.</p>
          </div>
          <div className="aboutskillright">
            <div className="aboutskillcontentbox">
              <div className="aboutskillcontentleft">
                <img src={img1} alt="" />
              </div>
              <div className="aboutskillcontentright">
                <h1 className="aboutskillcontentheading">Well Facilitated Infrastructure</h1>
                <p className="aboutskillcontentdesc">We have highly advanced machineries for Sustainable Packaging that are equipped with latest technology.</p>
              </div>
            </div>

            <div className="aboutskillcontentbox">
              <div className="aboutskillcontentleft">
                <img src={img3} alt="" />
              </div>
              <div className="aboutskillcontentright">
                <h1 className="aboutskillcontentheading">Effective Range of Products</h1>
                <p className="aboutskillcontentdesc">We have machines for manufacturing paper cups, bowls, bags, cutlery, etc.</p>
              </div>
            </div>
            <div className="aboutskillcontentbox">
              <div className="aboutskillcontentleft">
                <img src={img2} alt="" />
              </div>
              <div className="aboutskillcontentright">
                <h1 className="aboutskillcontentheading">Capacious Warehouse</h1>
                <p className="aboutskillcontentdesc">We have a well capacitated warehouse for maintaining stock of machines.</p>
              </div>
            </div>
            <div className="aboutskillcontentbox">
              <div className="aboutskillcontentleft">
                <img src={img4} alt="" />
              </div>
              <div className="aboutskillcontentright">
                <h1 className="aboutskillcontentheading">Global Clientele</h1>
                <p className="aboutskillcontentdesc">With our global reach over the years, we have our clients in more than 45 countries.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutSkills
