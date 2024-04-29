import React from 'react'
import img1 from '../../Assets/images/team/Gopal-Agarwal.jpg'
import img2 from '../../Assets/images/team/Harsit-Agarwal.jpg'
import img3 from '../../Assets/images/team/Yogesh-Agarwal.jpg'
const AboutExperts = () => {
  return (
    <>
      <div className="aboutexperts">
        <div className="aboutexpertcontainer">
          <h1 className="aboutusbtn mm">OUR EXPERTS</h1>
          <h1 className="aboutexpertsheading">Meet Our Experienced <br /><span>Team Member</span></h1>
          <div className="aboutexpertspics">
            <div className="aboutexpertcontent">
              <div className="aboutexpertspic">
                <img src={img1} alt="" />
              </div>
              <h1 className="aboutexpertsname">Gopal Agarwal</h1>
              <p className="aboutexpertspost">Chief Executive Officer</p>
            </div>
            <div className="aboutexpertcontent">
              <div className="aboutexpertspic">
                <img src={img2} alt="" />
              </div>
              <h1 className="aboutexpertsname">Harshit Agarwal</h1>
              <p className="aboutexpertspost">Managing Director</p>
            </div>
            <div className="aboutexpertcontent">
              <div className="aboutexpertspic">
                <img src={img3} alt="" />
              </div>
              <h1 className="aboutexpertsname">Yogesh Agarwal</h1>
              <p className="aboutexpertspost">Managing Director</p>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutExperts
