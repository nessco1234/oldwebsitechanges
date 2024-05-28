import React from 'react'
const AboutCards = () => {
    return (
        <>
            <div className="about">
                <div className="aboutcardscontainer">
                    <div className="aboutcard">
                        <img rel='' src={'https://www.nesscoindia.com/Assets/images/icons/Experience.webp'} alt="Experience" />
                        <h3 className="aboutcardheading">40+ Years of Experience</h3>
                        <p className="aboutcardpara">We are associated with Disposable Packaging Industry from 1978 and has been innovating since then.</p>
                    </div>
                    <div className="aboutcard">
                        <img src={'https://www.nesscoindia.com/Assets/images/icons/Global-Clientele.webp'} alt="Global-Clientele" />
                        <h3 className="aboutcardheading">Global Clientele</h3>
                        <p className="aboutcardpara">We exported our machines to various countries like USA, UAE, Germany, Saudi Arabia and many more.</p>
                    </div>
                    <div className="aboutcard">
                        <img src={'https://www.nesscoindia.com//Assets/images/icons/iso.webp'} alt="Iso" />
                        <h3 className="aboutcardheading">ISO Certified
Company</h3>
                        <p className="aboutcardpara">We provide you high quality assurance that come along with the ISO & CE certification.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutCards
