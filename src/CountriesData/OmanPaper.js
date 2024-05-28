import React from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'
import { SiAdobeacrobatreader } from 'react-icons/si'
import { Link } from 'react-router-dom'
import MachineSpecs from '../Components/MachineComponent/MachineSpecs'
import specs from '../Data/UAEPaper.json'
import RelatedProducts from '../Components/MachineComponent/RelatedProducts'
import img1 from '../Assets/images/resource/fully-automatic-paper-cup-machine.webp'
import { Helmet } from 'react-helmet'
import Form1 from '../Components/MarketArea/Form1'
import Form2 from '../Components/MarketArea/Form2'

const OmanPaper = () => {
    return (
        <>
            <Helmet>
                <title>Paper Cup Making Machine in Oman | Nessco</title>
                <meta name="description" content="Nessco offers a wide range of paper cup making machine in Oman with latest technology for 40 years. High Speed, Low Power Consumption. Get Quote Now!" />
                <meta name="keywords" content="paper cup making machine, paper cup machine, paper cup machine price, paper cup making machine near me, paper cup making machine price, paper cup, paper cup machine manufacturer, paper cup machine company, cup manufacturing machine"/>
                    <meta name="copyright" content="Copyright 2022 Nessco India" />
                    <meta name="distribution" content="global" />
                    <meta name="language" content="english" />
                    <meta name="robots" content="index,follow" />
                    <meta name="publisher" content="Nessco India" />
                    <meta name="author" content="Nessco India" />
                    <link rel="canonical" href="https://www.nesscoindia.com/global/paper-cup-making-machine-in-oman/"/>

                    </Helmet>
                    <section className="intromachine">
                        <div className="intromachinecompo">
                            <div className="intromachineleft">
                                <h1 className="intromachineheading">Paper Cup Making <br /><span>Machine In Oman</span></h1>
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
                                <img src={img1} alt="" />
                                <h3 className="descriptionmachineleftdata">Paper Cup Making <span>Machine In Oman</span></h3>
                                <p className="descriptionmachineleftcontent">On the off chance that you are thinking about buying a paper cup making machine in Oman, you can undoubtedly profit one from a presumed manufacturer NESSCO. In the market, there are various machine manufacturers giving paper cup creating machines. In any case, you ought to pick the maker that holds quite a long while of expertise in providing a wide scope of paper cup making machine. A highest machine producer gives machines, which are made and planned by profoundly very much educated experts. You should search for a machine with simple usefulness, dependable execution, and long life administration.
                                    <br /><br /><b>

                                        Machine Features
                                    </b><br /><br />

                                    Paper cup making machine is one of the most recent and completely programmed open-cam based machine accessible on the lookout. It is known for making great paper cups inside a magnificent speed of 85 cups each consistently. The machine is made with the most recent innovation improving its speed and security. It is probably the best machine that you can buy to improve the quality and increment the creation and of paper cups.</p> <br /><br />
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

                export default OmanPaper
