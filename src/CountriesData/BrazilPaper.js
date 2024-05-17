import React from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'
import { SiAdobeacrobatreader } from 'react-icons/si'
import { Link } from 'react-router-dom'
import MachineSpecs from '../Components/MachineComponent/MachineSpecs'
import specs from '../Data/UAEPaper.json'
import RelatedProducts from '../Components/MachineComponent/RelatedProducts'
import img1 from '../Assets/images/resource/fully-automatic-paper-cup-machine.webp'

const BrazilPaper = () => {
    return (
        <>
            <section className="intromachine">
                <div className="intromachinecompo">
                    <div className="intromachineleft">
                        <h1 className="intromachineheading">Paper Cup Making <br /><span>Machine In Brazil</span></h1>
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
                        <h1 className="descriptionmachineleftdata">Paper Cup Making <span>Machine In Brazil</span></h1>
                        <p className="descriptionmachineleftcontent">Nessco brings a top quality range of paper cup making machine in Brazil.

                            Our product range includes a wide range of automatic<Link> paper cup making machine</Link>, automatic high speed paper cup making machine, fully automatic paper cup making machine, high speed paper cup making machine and semi automatic paper cup making machine. Moreover, our clients can easily buy paper cup machine in brazil at a budget-friendly price. Fully Automatic Paper Cup Making Machine Small size, type Single PE coated Dixie cup machine is the automatic environmental machine with multi-running positions. This machine manufactured by Nessco, runs an entire procedure of paper-feeding, cup-fan-wall sealing, oiling, bottom-punching, heating, rolling, rimming, rounding, and tripping. it’s thought equipment for manufacturing Dixie cup, ice-cream cup, and other food cone-shaping containers. this sort of paper cup machine mainly won’t to making one side PE coated paper cups from 3 oz to 12 oz or above 12oz</p> <br /><br />
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

export default BrazilPaper
