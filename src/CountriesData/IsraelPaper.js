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
const IsraelPaper = () => {
    return (
        <>
            <Helmet>
                <title>Paper Cup Making Machine in Israel</title>
                <meta name="description" content="Nessco provides a wide range of paper cup making machine in Israel with latest technology for 40 years. High speed, Low power consumption. Get Quote Now!" />
                <meta name="keywords" content="paper cup making machine, paper cup machine, paper cup machine price, paper cup making machine near me, paper cup making machine price, paper cup, paper cup machine manufacturer, paper cup machine company, cup manufacturing machine" />
                <meta name="copyright" content="Copyright 2022 Nessco India" />
                <meta name="distribution" content="global" />
                <meta name="language" content="english" />
                <meta name="robots" content="index,follow" />
                <meta name="publisher" content="Nessco India" />
                <meta name="author" content="Nessco India" />
                <link rel="canonical" href="https://www.nesscoindia.com/global/paper-cup-making-machine-in-israel/" />

            </Helmet>
            <section className="intromachine">
                <div className="intromachinecompo">
                    <div className="intromachineleft">
                        <h1 className="intromachineheading">Paper Cup Making <br /><span>Machine In Israel</span></h1>
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
                        <h3 className="descriptionmachineleftdata">Paper Cup Making <span>Machine In Israel</span></h3>
                        <p className="descriptionmachineleftcontent">Nesscoindia brings to you a complete range of Paper Cup Making Machine in Israel. We are a verified supplier of fully automatic machines that require less labor and can perform a range of tasks. And these functions also include paper feeding, oil filling, heating, knurling, curling and popping up paper cups.
                            <br /><br /><b>

                                Fully automatic paper cup making machine
                            </b><br /><br />

                            Machines offered by Nessco are Ideal for producing Paper Tasting Drinking Cups, Market Cups, Advertising Cups and many more. It is widely used for hot drinks and cold drinks and beverages and other drinks. In addition, we provide a high level of after-sales service and take care of our client’s budget.</p> <br /><br />
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

export default IsraelPaper
