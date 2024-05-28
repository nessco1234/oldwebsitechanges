import React from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'
import { SiAdobeacrobatreader } from 'react-icons/si'
import { Link } from 'react-router-dom'
import MachineSpecs from '../Components/MachineComponent/MachineSpecs'
import specs from '../Data/UAEPaper.json'
import RelatedProducts from '../Components/MachineComponent/RelatedProducts'
import { Helmet } from 'react-helmet'
import Form1 from '../Components/MarketArea/Form1'
import Form2 from '../Components/MarketArea/Form2'

const EgyptPaper = () => {
    return (
        <>
            <Helmet>
                <title>Paper Cup Making Machine in Egypt | Nessco</title>
                <meta name="description" content="Nessco offers a wide range of paper cup making machine in Egypt for 40 years. Best Price. Get Quote Now!" />
                <meta name="keywords" content="Paper Cup Making Machine In Egypt, Paper Cup Forming Machine In Egypt, High Speed Paper Cup Forming Machine in Egypt, ماكينة صنع الأكواب الورقية عالية السرعة في مصر,egyptian paper cup machine, paper cup machine made in china, paper cup machine manufacturers eygpt, paper cup machine suppliers eygpt, paper cup machine made in egypt, coffee cup machine eygpt, ice cream cup machine eygpt, paper forming machine eygpt" />
                <meta name="copyright" content="Copyright 2022 Nessco India" />
                <meta name="distribution" content="global" />
                <meta name="language" content="english" />
                <meta name="robots" content="index,follow" />
                <meta name="publisher" content="Nessco India" />
                <meta name="author" content="Nessco India" />
                <link rel="canonical" href="https://www.nesscoindia.com/egypt/paper-cup-making-machine-in-egypt/" />

            </Helmet>
            <section className="intromachine">
                <div className="intromachinecompo">
                    <div className="intromachineleft">
                        <h1 className="intromachineheading">Paper Cup Making <br /><span>Machine In Egypt</span></h1>
                        <p className="intromachinedescription">
                            Nessco India is known for manufacturing and globally exporting various paper product forming machineries. With a strong functional position in this market for over 40 years, now we are backed by 5 Domestic Distributing Centers and 4 International Ones. Over all these years, we have spread our arms to almost every country to expand our business globally.
                        </p>
                    </div>
                    <Form1/>
                </div>
            </section>
            <section className="descriptionmachine">
                <div className="descriptionmachinecomp">
                    <div className="descriptionmachineleft">
                    <img src={'https://nesscoindia.com/Assets/images/resource/fully-automatic-paper-cup-machine.webp'} alt="" />
                        <h3 className="descriptionmachineleftdata">Paper Cup Making <span>Machine in Egypt</span></h3>
                        <p className="descriptionmachineleftcontent">Nessco brings you A top quality range of Paper Cup Making Machine In Egypt. It offers continuous high speed process, including automatic paper cup wall feeding, ultrasonic wave sealing, cup top lubrication, bottom punching, heating, knurling, curling and cup stacking..
                            <br /><br />
                            <b>
                                High speed paper cup making machine in Egypt
                            </b>
                            <br /><br />
                            The offered range of <Link> paper cup machines </Link>is ideal for nations like Egypt that have very few paper cup making industries
                            which work productively and the local markets face challenges of sufficient supply of paper cups and local
                            industries fail to meet the very high demand of paper cups since these machines are not made locally.
                            <br /><br />
                            Features <br />
                            • Fully automatic and manual operation modes the production rate goes up to 99.99%. <br />
                            • Less paper cup rejection, avoiding raw material wastage. <br />
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
                        <Form2/>
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

export default EgyptPaper
