import React from 'react'
import img1 from '../../Assets/images/icons/Experience.webp'
const AboutCards = () => {
    return (
        <>
            <div className="about">
                <div className="aboutcardscontainer">
                    <div className="aboutcard">
                        <img src={img1} alt="" />
                        <div className="aboutcardheading">40+ Years of Experience</div>
                        <div className="aboutcardpara">We are associated with Disposable Packaging Industry from 1978 and has been innovating since then.</div>
                    </div>
                    <div className="aboutcard">
                        <img src={img1} alt="" />
                        <div className="aboutcardheading">Global Clientele</div>
                        <div className="aboutcardpara">We exported our machines to various countries like USA, UAE, Germany, Saudi Arabia and many more.</div>
                    </div>
                    <div className="aboutcard">
                        <img src={img1} alt="" />
                        <div className="aboutcardheading">ISO Certified
Company</div>
                        <div className="aboutcardpara">We provide you high quality assurance that come along with the ISO & CE certification.</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutCards
