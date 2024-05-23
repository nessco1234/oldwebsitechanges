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

const JordanPaper = () => {
    return (
        <><Helmet>
            <title>Paper Cup Making Machine in Jordan | Nessco</title>
            <meta name="description" content="Nessco offers a wide range of paper cup making machine in Jordan for 40 years. Best Price. Get Quote Now!" />
            <meta name="keywords" content="paper cup making machine, paper cup machine, paper cup machine price, paper cup making machine near me, paper cup making machine price, paper cup, paper cup machine manufacturer, paper cup machine company, cup manufacturing machine" />
            <meta name="copyright" content="Copyright 2022 Nessco India" />
            <meta name="distribution" content="global" />
            <meta name="language" content="english" />
            <meta name="robots" content="index,follow" />
            <meta name="publisher" content="Nessco India" />
            <meta name="author" content="Nessco India" />
            <link rel="canonical" href="https://www.nesscoindia.com/jordan/paper-cup-making-machine-in-jordan/" />

        </Helmet>
            <section className="intromachine">
                <div className="intromachinecompo">
                    <div className="intromachineleft">
                        <h1 className="intromachineheading">Paper Cup Making <br /><span>Machine In Jordan</span></h1>
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
                        <h1 className="descriptionmachineleftdata">Paper Cup Making <span>Machine In Jordan</span></h1>
                        <p className="descriptionmachineleftcontent">Nesscoindia is bringing you its complete range of Paper Cup Making Machine In Jordan. We are supplying our fully automated machines which require the least human intervention and can perform a chain of functions. And these serial functions include paper feeding, oil filling, heating, knurling, curling, and popping up paper cups as well.
                            <br /><br /><b>

                                High-Quality Paper Cup Machine in Jordan
                            </b><br /><br />

                            The offered range of machines is ideal for producing paper testing drinking cups, market cups, advertising cups, and many more. It is widely used for hot drinks and beverages such as cold drinks and buttermilk. Moreover, our clients can have these machines at a budget-friendly price.
                            <br /><br />
                            Features <br />
                            • The main frame of the machine is an incline and the incline can help the cups easily drop into the plastic hoed, the rate of which goes up to 99.99%. <br />
                            • Inside the machine, we have used three range chains instead of conventional two range chains. <br />
                            • It can reduce paper wastage.</p> <br /><br />
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
                        <Form2/>
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

export default JordanPaper
