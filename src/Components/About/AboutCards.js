import React from 'react'
import img1 from '../../Assets/images/icons/Experience.webp'
import img2 from '../../Assets/images/icons/Global-Clientele.webp'
import img3 from '../../Assets/images/icons/iso.webp'
const AboutCards = () => {
    return (
        <>
            <div className="about">
                <div className="aboutcardscontainer">
                    <div className="aboutcard">
                        <img src={img1} alt="" />
                        <h1 className="aboutcardheading">40+ Years of Experience</h1>
                        <p className="aboutcardpara">We are associated with Disposable Packaging Industry from 1978 and has been innovating since then.</p>
                    </div>
                    <div className="aboutcard">
                        <img src={img2} alt="" />
                        <h1 className="aboutcardheading">Global Clientele</h1>
                        <p className="aboutcardpara">We exported our machines to various countries like USA, UAE, Germany, Saudi Arabia and many more.</p>
                    </div>
                    <div className="aboutcard">
                        <img src={img3} alt="" />
                        <h1 className="aboutcardheading">ISO Certified
Company</h1>
                        <p className="aboutcardpara">We provide you high quality assurance that come along with the ISO & CE certification.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutCards
