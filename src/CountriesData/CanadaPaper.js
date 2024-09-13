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

const CanadaPaper = (visitData) => {
    return (
        <>
            <Helmet>
                <title>Paper Cup Making Machine in Canada | Nessco</title>
                <meta name="description" content="Looking for paper cup machine in Canada? Nessco has over 40 years of experience in paper cup making machine manufacturing in Canada. Get Quote Now!" />
                <meta name="keywords" content="paper cup making machine in canada, paper cup machine in canada, paper cup making machine supplier in canada, paper cup making machine manufacturers in canada, paper cup making machine price in canada, paper forming machine in canada" />
                <meta name="copyright" content="Copyright 2022 Nessco India" />
                <meta name="distribution" content="global" />
                <meta name="language" content="english" />
                <meta name="robots" content="index,follow" />
                <meta name="publisher" content="Nessco India" />
                <meta name="author" content="Nessco India" />
                <meta property="og:image" content="https://nesscoindia.com/Assets/images/resource/fully-automatic-paper-cup-machine.webp" />
                <link rel="canonical" href="https://www.nesscoindia.com/global/paper-cup-making-machine-in-canada/" />

            </Helmet>
            <section className="intromachine">
                <div className="intromachinecompo">
                    <div className="intromachineleft">
                        <h1 className="intromachineheading">Paper Cup Making <br /><span>Machine In Canada</span></h1>
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
                        <h2 className="descriptionmachineleftdata">Paper Cup Making <span>Machine In Canada</span></h2>
                        <p className="descriptionmachineleftcontent">Nessco brings A top quality range of paper cup making machine in Canada. <br />
                            <Link to={'/'}>Nessco Machine</Link> is a multi-station automatic cup making machine. Introduced with a photoelectric sensor, flaw recognizing gadget, précised counter, and other instruments, this paper forming machine is in high demand and production of a variety of paper cups. The high-speed paper cup machine satisfies various complex systems and is noted for simple activity, stable properties, minimal involved area, and high production. Moreover, now our clients in Canada can buy paper cup making machines at a budget-friendly price. Fully Automatic Paper Cup Making Machine for Small and large size cups, Single PE coated Dixie cups.</p> <br /><br />
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
                            <h2 className="downloadbrochuresheading">Download Brochures</h2>
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

export default CanadaPaper
