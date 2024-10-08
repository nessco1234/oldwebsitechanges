import React from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { SiAdobeacrobatreader } from 'react-icons/si'
import { Link } from 'react-router-dom'
import MachineSpecs from '../Components/MachineComponent/MachineSpecs'
import specs from '../Data/UAEPaper.json'
import RelatedProducts from '../Components/MachineComponent/RelatedProducts'
import { Helmet } from 'react-helmet'
import Form1 from '../Components/MarketArea/Form1'
import Form2 from '../Components/MarketArea/Form2'

const Interpack = (visitData) => {
    return (
        <>
            <Helmet>
                <title>InterPack 2023 Germany | Nessco</title>
                <meta name="description" content="We are showcasing our High Speed Paper Cup Machine associated with advanced technology in InterPack exhibition Germany" />
                <meta name="copyright" content="Copyright 2022 Nessco India" />
                <meta name="distribution" content="global" />
                <meta name="language" content="english" />
                <meta name="robots" content="index,follow" />
                <meta name="publisher" content="Nessco India" />
                <meta name="author" content="Nessco India" />
                <meta property="og:image" content="https://nesscoindia.com/Assets/images/resource/fully-automatic-paper-cup-machine.webp" />
                <link rel="canonical" href="https://www.nesscoindia.com/germany/interpack/" />

            </Helmet>
            <section className="intromachine">
                <div className="intromachinecompo">
                    <div className="intromachineleft">
                        <h1 className="intromachineheading">Interpack Germany <br /><span>Machine In Bangladesh</span></h1>
                        <p className="intromachinedescription">
                            Nessco India is known for manufacturing and globally exporting various paper product forming machineries. With a strong functional position in this market for over 40 years, now we are backed by 5 Domestic Distributing Centers and 4 International Ones. Over all these years, we have spread our arms to almost every country to expand our business globally.
                        </p>
                    </div>
                    <Form1 visitData={visitData}/>
                </div>
            </section>
            <section className="descriptionmachine">
                <div className="descriptionmachinecomp">
                    <div className="descriptionmachineleft">
                    <img src={'https://nesscoindia.com/Assets/images/resource/fully-automatic-paper-cup-machine.webp'} alt="" />
                        <h3 className="descriptionmachineleftdata">Interpack <span>Germany</span></h3>
                        <p className="descriptionmachineleftcontent"><b>𝗡𝗲𝘀𝘀𝗰𝗼 𝗜𝗻𝗱𝗶𝗮 </b>  would like to take the pleasure to invite you all to The World’s No. 1 Trade Fair For Processing & Packaging – Interpack in <b> 𝗗𝘂̈𝘀𝘀𝗲𝗹𝗱𝗼𝗿𝗳, 𝗚𝗲𝗿𝗺𝗮𝗻𝘆.</b> We are exhibiting at Booth F64-2 in Hall 8A. Our team will be available at the venue from 4th to 10th May to assist you with all the details.
                            <br /><b></b>
                            We are showcasing our High Speed Paper Cup Machine along with various technologies associated with it which are – <br />
                            • IOT Platform <br />
                            • Remote Machine Controlling <br />
                            • Machine Synchronization With ERP <br />
                            • POKA-YOKE Controlled Mechanisms <br />
                            • High Tech Sensors For Controlling Excessive Paper Waste <br />
                            • Various Machine Faults Detection System <br />
                            • Integrated Packaging Solutions <br />
                            <br />
                            <br />This time, we are coming to Interpack to introduce our High Tech Sustainable Packaging Solutions. Besides paper cup machine, we manufacture various paper packaging machines as well which are – <br />
                            • PE Coating Machine <br />
                            • Paper Straw Machine <br />
                            • Paper Cutlery Machine <br />
                            • Paper Bowl Machine <br />
                            • Paper Bag Machine <br />
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
                                specs.Suggestions.map((obj,key) => (
                                    <Link key={key} to={obj.suggestionlink} className="descriptionsuggestion">
                                        <FaAngleDoubleRight />{obj.name}
                                    </Link>

                                ))
                            }
                        </div>
                        <Form2 visitData={visitData}/>
                        <div className="downloadbrochures">
                            <h3 className="downloadbrochuresheading">Download Brochures</h3>
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

export default Interpack
