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

const KoreaPaper = () => {
    return (
        <>
            <Helmet>
                <title>Fully Automatic Paper Cup Machine in Korea | Nessco</title>
                <meta name="description" content="We are a leading manufacturer of paper cup machine in Korea. Buy Fully automatic high-speed Korean paper cup making machine for sale. Get Quote Now!" />
                <meta name="keywords" content="Paper Cup Making machine In korea, Paper Cup Forming Machine In korea, High Speed Paper Cup Machine In korea, Automatic Paper Cup Machine In korea, korean paper cup machine, paper cup machine korea" />
                <meta name="copyright" content="Copyright 2022 Nessco India" />
                <meta name="distribution" content="global" />
                <meta name="language" content="english" />
                <meta name="robots" content="index,follow" />
                <meta name="publisher" content="Nessco India" />
                <meta name="author" content="Nessco India" />
                <link rel="canonical" href="https://www.nesscoindia.com/global/paper-cup-machine-in-korea/" />

            </Helmet>
            <section className="intromachine">
                <div className="intromachinecompo">
                    <div className="intromachineleft">
                        <h1 className="intromachineheading">Paper Cup Making <br /><span>Machine In Korea</span></h1>
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
                        <h1 className="descriptionmachineleftdata">Paper Cup Making <span>Machine In Korea</span></h1>
                        <p className="descriptionmachineleftcontent">IF you are looking for the best quality <b> paper cup machine in Korea</b>, you can undoubtedly profit one from a presumed manufacturer NESSCO. In the market, there are various machine manufacturers giving paper cup making machines. In any case, you ought to pick the maker that holds quite a long while of expertise in providing a wide scope of paper cup making machine. The highest machine producer gives machines, which are made and planned by profoundly very much educated experts. You should search for a machine with simple usefulness, dependable execution, and long-life administration.</p> <br /><br />
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

export default KoreaPaper
