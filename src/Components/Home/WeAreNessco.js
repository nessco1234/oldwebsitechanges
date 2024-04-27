import React from 'react'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import nes1 from '../../Assets/images/resource/kshow.webp'
const WeAreNessco = () => {
    return (
        <>
            <div className="wenessco">
                <div className="wenesscocontainer">
                    <div className="wenesscoleft">
                        <h1 className="wenesscoheading">We Are <span>
                            <br /> Nessco</span></h1>
                        <div className="wenesscobuttons">
                            <BiLeftArrowAlt className='wenesscobtn' />
                            <BiRightArrowAlt className='wenesscobtn' />
                        </div>
                    </div>
                    <div className="wenesscoright">
                        <div className="wenesscocontainer">
                            <div className="wenesscocard">
                                <div className="wenesscocardleft">
                                    <img src={nes1} alt="" />
                                </div>
                                <div className="wenesscocardright">
                                    <h1 className="nesscocardheading"> Paper One Show</h1>
                                    <p className="nesscocardpara">Experienced interactive sessions and discussed about sustainable packaging solutions.</p>
                                </div>
                            </div>
                            <div className="wenesscocard">
                                <div className="wenesscocardleft">
                                    <img src={nes1} alt="" />
                                </div>
                                <div className="wenesscocardright">
                                    <h1 className="nesscocardheading"> Paper One Show</h1>
                                    <p className="nesscocardpara">Experienced interactive sessions and discussed about sustainable packaging solutions.</p>
                                </div>
                            </div>
                            {/* <div className="wenesscocard">
                                <div className="wenesscocardleft">
                                    <img src={nes1} alt="" />

                                </div>
                                <div className="wenesscocardright">
                                    <h1 className="nesscocardheading"> Paper One Show</h1>
                                    <p className="nesscocardpara">Experienced interactive sessions and discussed about sustainable packaging solutions.</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeAreNessco
