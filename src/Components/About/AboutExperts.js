import React from 'react'
const AboutExperts = () => {
  return (
    <>
      <div className="aboutexperts">
        <div className="aboutexpertcontainer">
          <p className="aboutusbtn mm">OUR EXPERTS</p>
          <h2 className="aboutexpertsheading">Meet Our Experienced <br /><span>Team Member</span></h2>
          <div className="aboutexpertspics">
            <div className="aboutexpertcontent">
              <div className="aboutexpertspic">
                <img src={'https://www.nesscoindia.com/Assets/images/team/Gopal-Agarwal.jpg'} alt="Gopal Agarwal" />
              </div>
              <h3 className="aboutexpertsname">Gopal Agarwal</h3>
              <p className="aboutexpertspost">Chief Executive Officer</p>
            </div>
            <div className="aboutexpertcontent">
              <div className="aboutexpertspic">
                <img src={'https://www.nesscoindia.com/Assets/images/team/Harsit-Agarwal.jpg'} alt="Harshit Agarwal" />
              </div>
              <h3 className="aboutexpertsname">Harshit Agarwal</h3>
              <p className="aboutexpertspost">Managing Director</p>
            </div>
            <div className="aboutexpertcontent">
              <div className="aboutexpertspic">
                <img src={'https://www.nesscoindia.com/Assets/images/team/Yogesh-Agarwal.jpg'} alt="Yogesh Agarwal" />
              </div>
              <h3 className="aboutexpertsname">Yogesh Agarwal</h3>
              <p className="aboutexpertspost">Managing Director</p>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutExperts
