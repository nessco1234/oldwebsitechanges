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

const BrazilPaper = () => {
    return (
        <>
            <Helmet>
                <title>Paper Cup Making Machine in Brazil | Nessco</title>
                <meta name="description" content="Nessco provides a wide range of paper cup making machine in Brazil. High speed. Low energy consumption. Easy maintenance. Best price. Get quote now!" />
                <meta name="keywords" content="Paper cup making machine in brazil, paper cup machine in brazil, paper cup froming machine in brazil, paper cup making machine price in brazil, high speed paper cup making machine in brazil, automatic paper cup making machine in brazil"/>
                    <meta name="copyright" content="Copyright 2022 Nessco India" />
                    <meta name="distribution" content="global" />
                    <meta name="language" content="english" />
                    <meta name="robots" content="index,follow" />
                    <meta name="publisher" content="Nessco India" />
                    <meta name="author" content="Nessco India" />
                    <link rel="canonical" href="https://www.nesscoindia.com/global/paper-cup-making-machine-in-brazil/"/>

                    </Helmet>
                    <section className="intromachine">
                        <div className="intromachinecompo">
                            <div className="intromachineleft">
                                <h1 className="intromachineheading">Paper Cup Making <br /><span>Machine In Brazil</span></h1>
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
                                <h3 className="descriptionmachineleftdata">Paper Cup Making <span>Machine In Brazil</span></h3>
                                <p className="descriptionmachineleftcontent">Nessco brings a top quality range of paper cup making machine in Brazil.

                                    Our product range includes a wide range of automatic<Link to={'/product/high-speed-paper-cup-making-machine/'}> paper cup making machine</Link>, automatic high speed paper cup making machine, fully automatic paper cup making machine, high speed paper cup making machine and semi automatic paper cup making machine. Moreover, our clients can easily buy paper cup machine in brazil at a budget-friendly price. Fully Automatic Paper Cup Making Machine Small size, type Single PE coated Dixie cup machine is the automatic environmental machine with multi-running positions. This machine manufactured by Nessco, runs an entire procedure of paper-feeding, cup-fan-wall sealing, oiling, bottom-punching, heating, rolling, rimming, rounding, and tripping. it’s thought equipment for manufacturing Dixie cup, ice-cream cup, and other food cone-shaping containers. this sort of paper cup machine mainly won’t to making one side PE coated paper cups from 3 oz to 12 oz or above 12oz</p> <br /><br />
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

                export default BrazilPaper
