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
                        <div className="aboutcardheading">40+ Years of Experience</div>
                        <div className="aboutcardpara">We are associated with Disposable Packaging Industry from 1978 and has been innovating since then.</div>
                    </div>
                    <div className="aboutcard">
                        <img src={img1} alt="" />
                        <div className="aboutcardheading">40+ Years of Experience</div>
                        <div className="aboutcardpara">We are associated with Disposable Packaging Industry from 1978 and has been innovating since then.</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutCards
