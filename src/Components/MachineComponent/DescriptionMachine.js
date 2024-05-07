import React from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'
import { SiAdobeacrobatreader } from 'react-icons/si'
import { Link } from 'react-router-dom'

const DescriptionMachine = (props) => {
    const data = props.data
    return (
        <div className="descriptionmachine">
            <div className="descriptionmachinecomp">
                <div className="descriptionmachineleft">
                    <img src={data.Imglink} alt="" />
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
                                <img src={data.Imagelinkimg} alt="" />
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
                                <img src={data.MultipleImageLink} alt="" />
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
                        <textarea placeholder='Message' className='descriptionaboutaquoteinputs' ></textarea>
                        <button className="descriptionaboutbtn">
                            Send Message <FaArrowRightLong />
                        </button>
                    </div>
                    <div className="downloadbrochures">
                        <h1 className="downloadbrochuresheading">Download Brochures</h1>
                        <p className="downloadbrochuressubheading">Download Our Catalogue to know more about machines</p>
                        <div className="brochurecontent">
                            <div className="brochurelogo">
                                <SiAdobeacrobatreader />
                            </div>
                            <div className="brochuredescription">
                                <a href='/' className="brochuretitle">Nessco India Catalogue</a>
                                <a href='/' className="brochuresubtitle">Download Now</a>
                            </div>
                        </div>
                        <div className="brochurecontent">
                            <div className="brochurelogo">
                                <SiAdobeacrobatreader />
                            </div>
                            <div className="brochuredescription">
                                <a href='/' className="brochuretitle">International Catalogue</a>
                                <a href='/' className="brochuresubtitle">Download Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DescriptionMachine
