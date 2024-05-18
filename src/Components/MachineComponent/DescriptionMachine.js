import React, { useState } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'
import { SiAdobeacrobatreader } from 'react-icons/si'
import { Link } from 'react-router-dom'
import img1 from '../../Assets/images/resource/popup.webp'
const DescriptionMachine = (props) => {
    const data = props.data
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const [isOpen2, setIsOpen2] = useState(false);
    const openModal2 = () => setIsOpen2(true);
    const closeModal2 = () => setIsOpen2(false);
    function downloadinternational() {
        props.setdown(false)
        console.log(props.down)
    }
    function downloadlocal() {
        props.setdown(true)
        console.log(props.down)
    }
    return (
        <section className="descriptionmachine">
            <div className="descriptionmachinecomp">
                <div className="descriptionmachineleft">
                    <img src={props.imgurl} alt="" />
                    {
                        data.Imgdesc.map(obj => (
                            <p className="descriptionmachineleftcontent">
                                {obj}
                            </p>
                        ))
                    }
                    {
                        data.PointsComponent &&
                        <>

                            <h1 className="descriptionmachineleftdata">{data.PointsHeading[0]} <span>{data.PointsHeading[1]}</span></h1>
                            <p className="descriptionmachineleftcontent">{data.PointsHeadingDesc}</p>
                            {
                                !data.NotPoints &&
                                <div className="descriptionmachineleftcontentlist">
                                    <li className="descriptionpoints">{data.PointsDescription[0]}</li>
                                    <li className="descriptionpoints">{data.PointsDescription[1]}</li>
                                    <li className="descriptionpoints">{data.PointsDescription[2]}</li>
                                    <li className="descriptionpoints">{data.PointsDescription[3]}</li>
                                </div>
                            }
                        </>
                    }
                    {
                        data.ImageComponent &&
                        <div className="descriptionmachineleftimage">
                            <div className="descriptionmachineimageleft">
                                <h1 className="descriptionmachineleftdata">{data.ImageHeading[0]} <span>{data.ImageHeading[1]}</span></h1>
                                <p className="descriptionmachineleftcontent">{data.ImageDescription}</p>
                            </div>
                            <div className="descriptionmachineimageright">
                                <img src={props.img2url} alt="" />
                            </div>
                        </div>
                    }
                    {
                        data.MultipleImageComp &&
                        <div className="descriptionmachineleftimage">
                            <div className="descriptionmachineimageleft">
                                <h1 className="descriptionmachineleft">{data.MultipleImageHeading} </h1>
                                <p className="descriptionmachineleftcontent">{data.MultipleImageDescription}</p>
                            </div>
                            <div className="descriptionmachineimageright">
                                <img src={props.img3url} alt="" />
                            </div>
                        </div>
                    }
                </div>
                <div className="descriptionmachineright">
                    <div className="descriptionsuggestions">
                        {
                            data.Suggestions.map(obj => (
                                <Link to={obj.suggestionlink} className="descriptionsuggestion">
                                    <FaAngleDoubleRight />{obj.name}
                                </Link>

                            ))
                        }
                    </div>
                    <div className="descriptionaboutaquote">
                        <h1 className="descriptionaboutaquoteheading">Get a Quote</h1>
                        <input placeholder='Full Name *' className='descriptionaboutaquoteinputs' type="text" />
                        <input placeholder='Phone Number*' className='descriptionaboutaquoteinputs' type="text" />
                        <input placeholder='Email' className='descriptionaboutaquoteinputs' type="text" />
                        <textarea style={{marginBottom:"1rem"}} placeholder='Message' className='descriptionaboutaquoteinputs' ></textarea>
                        <button onClick={openModal2} className="headerbtn" style={{ padding: "1.5rem 2rem" }}>
                            <p className='headerbtncon'>Send Message </p> <FaArrowRightLong className='headerbtnarrow' style={{ fontSize: "1.5rem" }} /></button>
                    </div>
                    <div className="downloadbrochures">
                        <h1 className="downloadbrochuresheading">Download Brochures</h1>
                        <p className="downloadbrochuressubheading">Download Our Catalogue to know more about machines</p>
                        <div className="brochurecontent">
                            <div className="brochurelogo">
                                <SiAdobeacrobatreader />
                            </div>
                            <div className="brochuredescription">
                                <button onClick={openModal} className="brochuresubtitle">Nessco India Catalogue</button>
                                <button className="brochuresubtitle" onClick={openModal}>Download Now</button>
                                {isOpen && (
                                    <div className="modal">
                                        <button className="close-button" onClick={closeModal}>&times;</button>
                                        <div className="modalcard">
                                            <div className="leftmodal">
                                                <img src={img1} alt="" />
                                            </div>
                                            <div className="rightmodal">
                                                <h1 className="modalheading">Request for details to receive a call back</h1>
                                                <p className="modaldesc">Enter your details to receive a call back</p>
                                                <input placeholder='Enter your Name' className='modalinp' type="text" />
                                                <input placeholder='Enter your Email' className='modalinp' type="text" />
                                                <input placeholder='Enter your Phone' className='modalinp' type="text" />
                                                <Link onClick={downloadlocal} to={'/thank-you'} className="headerbtn x" style={{ padding: "2rem 3rem" }}>
                                                    <p className='headerbtncon'>Get a Quote !</p> <FaArrowRightLong className='headerbtnarrow' style={{ fontSize: "1.5rem" }} /></Link>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="brochurecontent">
                            <div className="brochurelogo">
                                <SiAdobeacrobatreader />
                            </div>
                            <div className="brochuredescription">
                                <button onClick={openModal} className=" brochuresubtitle">International Catalogue</button>
                                <button className="brochuresubtitle" onClick={openModal2}>Download Now</button>
                                {isOpen2 && (
                                    <div className="modal">
                                        <button className="close-button" onClick={closeModal2}>&times;</button>
                                        <div className="modalcard">
                                            <div className="leftmodal">
                                                <img src={img1} alt="" />
                                            </div>
                                            <div className="rightmodal">
                                                <h1 className="modalheading">Request for details to receive a call back</h1>
                                                <p className="modaldesc">Enter your details to receive a call back</p>
                                                <input placeholder='Enter your Name' className='modalinp' type="text" />
                                                <input placeholder='Enter your Email' className='modalinp' type="text" />
                                                <input placeholder='Enter your Phone' className='modalinp' type="text" />
                                                <Link onClick={downloadinternational} to={'/thank-you'} className="headerbtn x" style={{ padding: "2rem 3rem" }}>
                                                    <p className='headerbtncon'>Get a Quote !</p> <FaArrowRightLong className='headerbtnarrow' style={{ fontSize: "1.5rem" }} /></Link>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DescriptionMachine
