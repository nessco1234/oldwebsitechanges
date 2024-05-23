import React from 'react'
import location from '../../Assets/images/icons/location.png'
import { FaMapLocationDot } from 'react-icons/fa6'
const Branches = () => {
    return (
        <>
            <section className="branches">
                <div className="branchcontainer">
                    <h2 className="branchheading">Nessco India Branches</h2>
                    <div className="branchdesc">Nessco India has GLobal Presensel check out some of our Branches</div>
                    <div className="branchcards">
                        <div className="branchcard">
                            <img src={'https://www.nesscoindia.com/Assets/images/icons/location.png'} className='branchcardimg' alt="Location" />
                            <h3 className="branchcardheading">Germany Office</h3>
                            <p className="branchcarddesc">Hanauer Landstrasse 477, Hesse 60386, Germany</p>
                        </div>
                        <div className="branchcard">
                        <img src={'https://www.nesscoindia.com/Assets/images/icons/location.png'} className='branchcardimg' alt="Location" />
                            

                            <h3 className="branchcardheading">
                                Turkey Office</h3>
                            <p className="branchcarddesc">Çarşı Mh., Bodrum, Muğla 48400, Turkey</p>
                        </div>
                        <div className="branchcard">
                            <img src={'https://www.nesscoindia.com/Assets/images/icons/location.png'} className='branchcardimg' alt="Location" />
                            <h3 className="branchcardheading">Italy Office
                            </h3>
                            <p className="branchcarddesc">Via Laura, 13, Laura Salerno 84047, Italy</p>
                        </div>
                        <div className="branchcard">
                            <img src={'https://www.nesscoindia.com/Assets/images/icons/location.png'} className='branchcardimg' alt="Location" />
                            <h3 className="branchcardheading">UAE Office</h3>
                            <p className="branchcarddesc">Salahuddin Rd Deira, Dubai 57680, UAE</p>
                        </div>
                    </div>
                </div>
            </section>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.6906406902926!2d75.86234927478176!3d26.78612946552013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db577a120875b%3A0x3912582d92baafea!2sNessco%20Paper%20Cup%20Machine!5e0!3m2!1sen!2sin!4v1714119835373!5m2!1sen!2sin" width="100%" height="550" ></iframe>
        </>
    )
}

export default Branches
