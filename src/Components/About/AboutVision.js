import React from 'react'
import img1 from '../../Assets/images/gallery/about2.webp'
import img2 from '../../Assets/images/gallery/event3.webp'
const AboutVision = () => {
  return (
    <>
      <div className="aboutvision">
        <div className="aboutvisioncontainer">
          <div className="aboutvisionleft">
            <img src={img1} alt="" className="aboutvisionimg" />
            <p className="aboutvisiondesc">We are considered as a leader in paper packaging industry for our High Speed Paper Cup Machines, Roll Die Cutting Machines, Flexo Printing Machines, Paper Bag Machines, Paper Slitting Machine, PE Coating Machine, Paper Container/Salad Bowl Machine and Paper Lid Machine. We have shown an impeccable growth in dynamic technical environment as we believe in growing together through Creativity, Innovation and Invention. By leveraging the use of modern technology, Nessco has the ultimate vision of catering to the clients’ needs with our premium machines that match the international standards of production.</p>
          </div>
          <div className="aboutvisionright">
            <h1 className="aboutusbtn">OUR VISION</h1>
            <h1 className="aboutvisionheading">Begins with <span>Innovation</span></h1>
            <p className="aboutvisiondesc">We envision changing the process of the industry by establishing the importance of creativity that births with continuous Research and Development. With this aim in mind, we look forward to becoming the best Indian and International one stop solution for paper packaging machine manufacturer.</p>
            <img src={img2} alt="" className="aboutvisionimg" />
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutVision
