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

const IraqPaper = (visitData) => {
    return (
        <>
            <Helmet>
                <title>Paper Cup Making Machine in Iraq | Nessco</title>
                <meta name="description" content="Nessco provides a wide range of paper cup making machine in Iraq with latest technology for 40 years. High Speed, Low Power Consumption. Get Quote Now!" />
                <meta name="keywords" content="paper cup making machine, paper cup machine, paper cup machine price, paper cup making machine near me, paper cup making machine price, paper cup, paper cup machine manufacturer, paper cup machine company, cup manufacturing machine" />
                <meta name="copyright" content="Copyright 2022 Nessco India" />
                <meta name="distribution" content="global" />
                <meta name="language" content="english" />
                <meta name="robots" content="index,follow" />
                <meta name="publisher" content="Nessco India" />
                <meta name="author" content="Nessco India" />
                <meta property="og:image" content="https://nesscoindia.com/Assets/images/resource/fully-automatic-paper-cup-machine.webp" />
                <link rel="canonical" href="https://www.nesscoindia.com/iraq/paper-cup-making-machine-in-iraq/" />

            </Helmet>
            <section className="intromachine">
                <div className="intromachinecompo">
                    <div className="intromachineleft">
                        <h1 className="intromachineheading">Paper Cup Making <br /><span>Machine In Iraq</span></h1>
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

                        <h3 className="descriptionmachineleftdata">Paper Cup Making <span>Machine in Egypt</span></h3>
                        <p className="descriptionmachineleftcontent">Nessco brings you A top quality range of one side PE coated paper cup making machine in Iraq. which are multi-station automatic, capable of producing an unbelievable number of paper cups at one time. Continuous automatic procedures such as sealing, oil filling, heating, knurling, curling, and unloading make it the ideal machine for paper cups.
                            <br /><br />
                            <b>
                                High Speed Paper Cup Forming Machine in Iraq.
                            </b>
                            <br /><br />
                            The offered range of disposable paper cup machines is ideal for producing paper testing drinking cups, market cups, advertising cups, and many more. It is widely used for hot drinks and beverages such as cold drinks and buttermilk. Moreover, our clients can have these machines at a budget-friendly price.
                            <br /><b></b>
                            Features <br />
                            • The main frame of the machine is an incline and the incline can help the cups easily drop into the plastic hoed, the rate of which goes up to 99.99%. <br />
                            • It can reduce paper wastage. <br />
                            • Inside the machine, we have used three range chains instead of conventional two range chains.</p> <br /><br />
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

export default IraqPaper
