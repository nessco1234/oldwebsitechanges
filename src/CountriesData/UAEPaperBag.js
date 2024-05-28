import React from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { SiAdobeacrobatreader } from 'react-icons/si'
import { Link } from 'react-router-dom'
import MachineSpecs from '../Components/MachineComponent/MachineSpecs'
import specs from '../Data/UAEPaperBag.json'
import RelatedProducts from '../Components/MachineComponent/RelatedProducts'
import Form1 from '../Components/MarketArea/Form1'
import Form2 from '../Components/MarketArea/Form2'
import { Helmet } from 'react-helmet'
const UAEPaperBag = () => {
    return (
        <>
        <Helmet>
        <title>Paper Bag Making Machine in UAE | Nessco</title>
<meta name="description" content="Nessco offers a complete range of paper bag making machine in UAE with latest technology for 40 years. High speed, Low power consumption. Get quote now!" />
<meta name="keywords" content="paper bag making machine UAE, paper bag machine, paper bag machine price, paper bag making machine near me, paper bag making machine price, paper bag, paper bag machine manufacturer, paper bag machine company, bag manufacturing machine"/>
<meta name="copyright" content="Copyright 2022 Nessco India" /> 
<meta name="distribution" content="global" />
<meta name="language" content="english" /> 
<meta name="robots" content="index,follow" /> 
<meta name="publisher" content="Nessco India" />
<meta name="author" content="Nessco India" />
<link rel="canonical" href="https://www.nesscoindia.com/uae/paper-bag-making-machine-in-uae/"/>

        </Helmet>
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
                    <Form1/>
                </div>
            </section>
            <section className="descriptionmachine">
                <div className="descriptionmachinecomp">
                    <div className="descriptionmachineleft">
                        <img src='https://www.nesscoindia.com/assets/images/service/Paper-Cup-Machine-90-Speed.webp' alt="" />
                        <h3 className="descriptionmachineleftdata">Paper Bag Making <span>Machine In Uae</span></h3>
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
            <MachineSpecs labels={specs.MachineSpecsLabels} data={specs.MachineSpecs}/>
            <RelatedProducts data={specs.RelatedProducts}/>
        </>
    )
}

export default UAEPaperBag
