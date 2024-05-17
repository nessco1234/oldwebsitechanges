import React from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'
import { SiAdobeacrobatreader } from 'react-icons/si'
import { Link } from 'react-router-dom'
import MachineSpecs from '../Components/MachineComponent/MachineSpecs'
import specs from '../Data/UAEPaper.json'
import RelatedProducts from '../Components/MachineComponent/RelatedProducts'
import img1 from '../Assets/images/resource/fully-automatic-paper-cup-machine.webp'

const GermanyKShow = () => {
    return (
        <>
            <section className="intromachine">
                <div className="intromachinecompo">
                    <div className="intromachineleft">
                        <h1 className="intromachineheading">K Show <br /><span>Germany</span></h1>
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
            </section>
            <section className="descriptionmachine">
                <div className="descriptionmachinecomp">
                    <div className="descriptionmachineleft">
                        <img src={img1} alt="" />
                        <h1 className="descriptionmachineleftdata">Paper Cup Making <span>Machine In Germany</span></h1>
                        <p className="descriptionmachineleftcontent"><b>𝗡𝗲𝘀𝘀𝗰𝗼 𝗜𝗻𝗱𝗶𝗮</b> would like to take the pleasure to invite you all to The World’s No. 1 Trade Fair For Plastics And Rubber – #K2022 in <b>𝗗𝘂̈𝘀𝘀𝗲𝗹𝗱𝗼𝗿𝗳, 𝗚𝗲𝗿𝗺𝗮𝗻𝘆</b>. We are exhibiting at <b>𝗦𝘁𝗮𝗻𝗱 𝗖𝟰𝟲-𝟬𝟮 in 𝗛𝗮𝗹𝗹 𝟭𝟮.</b> Our team will be available at the venue from  <b>𝟭𝟵𝘁𝗵 𝘁𝗼 𝟮𝟲𝘁𝗵 𝗢𝗰𝘁𝗼𝗯𝗲𝗿</b> to assist you with all the details.
<br /><br />
We are showcasing our High Speed Paper Cup Machine along with various technologies associated with it which are – <br />
• IOT Platform <br />
• Remote Machine Controlling <br />
• Machine Synchronization With ERP <br />
• POKA-YOKE Controlled Mechanisms <br />
• High Tech Sensors For Controlling Excessive Paper Waste <br />
• Various Machine Faults Detection System <br />
• Integrated Packaging Solutions <br />
<br />
Besides Paper Cup Machines, we manufacture various machines which are – <br />
• PE Coating Machine <br />
• Bio-Coating Machine <br />
• PLA Coating Machine <br />
• Paper Slitting Machine <br />
• Flexo Printing Machine <br />
• Roll Die Cutting Machine</p> <br /><br />
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
            </section>
            <MachineSpecs labels={specs.MachineSpecsLabels} data={specs.MachineSpecs} />
            <RelatedProducts data={specs.RelatedProducts} />
        </>
    )
}

export default GermanyKShow
