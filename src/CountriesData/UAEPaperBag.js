import React from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'
import { SiAdobeacrobatreader } from 'react-icons/si'
import { Link } from 'react-router-dom'
import MachineSpecs from '../Components/MachineComponent/MachineSpecs'
import specs from '../Data/UAEPaperBag.json'
import RelatedProducts from '../Components/MachineComponent/RelatedProducts'
const UAEPaperBag = () => {
    return (
        <>
            <section className="intromachine">
                <div className="intromachinecompo">
                    <div className="intromachineleft">
                        {/* <div className="breadcrumconnections">
                        <Link to={'/'} className='breadcrumconnectiondislink'>Home</Link> <FaAngleRight className='breadcrumicon2'/><Link to={'/product'} className='breadcrumconnectiondislink'>Products</Link><FaAngleRight className='breadcrumicon2' /><p className='breadcrumconnectionactivelink'>{props.heading}</p>
                    </div> */}
                        <h1 className="intromachineheading">Paper Bag Making <br /><span>Machine In Uae</span></h1>
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
                        <img src='https://www.nesscoindia.com/assets/images/service/Paper-Cup-Machine-90-Speed.webp' alt="" />
                        <h1 className="descriptionmachineleftdata">Paper Bag Making <span>Machine In Uae</span></h1>
                        <p className="descriptionmachineleftcontent"><Link> Nessco India </Link>brings you a top-quality range of Paper bag Making Machine. which are automatic, able to perform a series of functions including printing tracking, cutting, bottom inden-
tation, bottom folding, bottom gluing. One can use both plain and printed paper as raw material for bag formation. We are selling the best paper bag making machine in UAE.
                            <br /><br /><b>
                            High-quality Paper bag Machine In UAE
                            </b><br /><br />
                            The offered range of bag making machines is ideal for producing shopping bags, gift/goodies bags, carry bags, food bags and many more. This machine is equipped with German photoelectric sensors which enables precise tracking of paper movement throughout the machine whether it is alignment of paper, unwinding or rewinding of paper. Servo motor is being used for the handle gluing part of the machine. It is known for making high-quality paper bag at an excellent speed of 200 bags per minute.</p>
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
            <MachineSpecs labels={specs.MachineSpecsLabels} data={specs.MachineSpecs}/>
            <RelatedProducts data={specs.RelatedProducts}/>
        </>
    )
}

export default UAEPaperBag
