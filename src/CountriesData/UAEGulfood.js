import React from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'
import { SiAdobeacrobatreader } from 'react-icons/si'
import { Link } from 'react-router-dom'
import MachineSpecs from '../Components/MachineComponent/MachineSpecs'
import specs from '../Data/UAEGulfood.json'
import RelatedProducts from '../Components/MachineComponent/RelatedProducts'
const UAEGulfood = () => {
    return (
        <>
            <div className="intromachine">
                <div className="intromachinecompo">
                    <div className="intromachineleft">
                        
                        <h1 className="intromachineheading">Gulfood<span>Manufacturing</span></h1>
                        <p className="intromachinedescription">
                            Nessco India is known for manufacturing and globally exporting various paper product forming machineries. With a strong functional position in this market for over 40 years, now we are backed by 5 Domestic Distributing Centers and 4 International Ones. Over all these years, we have spread our arms to almost every country to expand our business globally.
                        </p>
                    </div>
                    <div className="intromachineform">
                        <div className="intromachinecard">
                            <input placeholder='Full Name *' className='intromachineforminputs' type="text" />
                            <input placeholder='Phone Number *' className='intromachineforminputs' type="text" />
                            <input placeholder='Email ' className='intromachineforminputs' type="text" />
                            <textarea placeholder='Message ' className='intromachineforminputs' type="text" />
                            <button className='intromachineformbtn'>Send Message <FaArrowRightLong className='intromachineicon' /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="descriptionmachine">
                <div className="descriptionmachinecomp">
                    <div className="descriptionmachineleft">
                        <img src='https://www.nesscoindia.com/assets/images/service/Paper-Cup-Machine-90-Speed.webp' alt="" />
                        <h1 className="descriptionmachineleftdata">Paper Bag Making <span>Machine In Uae</span></h1>
                        <p className="descriptionmachineleftcontent"> <b>Nessco India</b> would like to take the pleasure to invite you all to the Food Tech Show <b>Gulfood Manufacturing</b> in <b>Trade Centre Arena, Dubai.</b> We are exhibiting at <b>Stall NO S E-3 in Sheikh Saeed Hall (SSH)</b>. Our team will be available at the venue from <b>8th to 10th November, 2022</b> to assist you with all the details.
                            <br /><br />
                            We are showcasing our High Speed Paper Cup Machine along with various technologies associated with it which are –<br /> <br />
                            • IOT Platform <br />
                            • Remote Machine Controlling <br />
                            • Machine Synchronization With ERP <br />
                            • POKA-YOKE Controlled Mechanisms <br />
                            • High Tech Sensors For Controlling Excessive Paper Waste <br />
                            • Various Machine Faults Detection System <br />
                            • Integrated Packaging Solutions <br />
                            <br /><b></b>
                            Besides Paper Cup Machines, we manufacture various machines which are –<br /><br />
                            •Double Wall / Ripple Wall Machine <br />
                            •Salad Bowl Machine <br />
                            •Paper Cutlery Machine <br />
                            •Paper Bag Machine</p>
                    </div>
                    <div className="descriptionmachineright">
                        <div className="descriptionsuggestions">
                            {
                                specs.Suggestions.map(obj => (
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
            <MachineSpecs labels={specs.MachineSpecsLabels} data={specs.MachineSpecs} />
            <RelatedProducts data={specs.RelatedProducts} />
        </>
    )
}

export default UAEGulfood
