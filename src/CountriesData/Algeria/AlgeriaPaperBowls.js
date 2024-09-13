import React from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { SiAdobeacrobatreader } from 'react-icons/si'
import { Link } from 'react-router-dom'
import MachineSpecs from '../../Components/MachineComponent/MachineSpecs'
import specs from '../../Data/GlobalBowl.json'
import RelatedProducts from '../../Components/MachineComponent/RelatedProducts'
import { Helmet } from 'react-helmet'
import Form1 from '../../Components/MarketArea/Form1'
import Form2 from '../../Components/MarketArea/Form2'

const AlgeriaPaperBowl = (visitData) => {
   const a= "Algeria"
    return (
        <>
            <Helmet>
                <title>Paper Bowl Making Machine in {a} | Nessco</title>
                <meta name="description" content="Nessco India offering paper bowl making machine equipped with photoelectric sensors . This paper container machine produces soup bowls, noodle bowls, etc. Enquire Now!" />
                <meta name="keywords" content="paper container bowl making machine, paper container making machine , paper bowl making machine, Paper Container Forming Machine, Paper Food Container making Machine, Paper Food bowl making Machine" />
                <meta name="copyright" content="Copyright 2022 Nessco India" />
                <meta name="distribution" content="global" />
                <meta name="language" content="english" />
                <meta name="robots" content="index,follow" />
                <meta name="publisher" content="Nessco India" />
                <meta name="author" content="Nessco India" />
                <meta property="og:image" content="https://www.nesscoindia.com/Assets/images/resource/paper-container-bowl-machine.webp" />
                <link rel="canonical" href="https://www.nesscoindia.com/dz/paper-container-bowl-making-machine/" />

            </Helmet>
            <section className="intromachine">
                <div className="intromachinecompo">
                    <div className="intromachineleft">
                        <h1 className="intromachineheading">Paper Bowl Making <br /><span>Machine In {a}</span></h1>
                        <p className="intromachinedescription">
                        Nessco paper container machine or paper bowl making machine is designed with high level of accuracy and international standards. This machine makes paper containers and bowls for food packaging and serving. The machines runs a whole procedure of paper feeding, bowl-fan wall sealing, oil lubrication, bottom punching, heating, rolling, rimming, rounding, and discharge as well.
                        </p>
                    </div>
                    <Form1 visitData={visitData}/>
                </div>      
            </section>
            <section className="descriptionmachine">
                <div className="descriptionmachinecomp">
                    <div className="descriptionmachineleft">
                    <img src={'https://www.nesscoindia.com/Assets/images/resource/paper-container-bowl-machine.webp'} alt="" />
                        <h3 className="descriptionmachineleftdata">Paper Bowl Manufacturing <span>Machine In {a}</span></h3>
                        <p className="descriptionmachineleftcontent">Nessco Paper Container or Paper Bowl Making Machine is equipped with the latest single turn plate technology and has a heavy frame. These features make the process simpler and ensure smooth functioning. The Open cam technology induces greater speed and accuracy. The automatic lubrication system reduces friction among various parts of the machinery and keeps the device durable for a long period of time.
                            <br /><br />
                            <h3 className="descriptionmachineleftdata"> Product <span>Introduction</span></h3>
                            <br /><br></br>
                            Nessco Paper food container or Paper Bowl making machine can make containers up to 1500 ml. This machine can use both single and double-coated PE paper and has a production capacity of 75 pcs per minute. This model is most suitable for making soup bowls, noodles bowls, etc. It adopts an open cam system and a helical gear transmission system to function smoothly.</p> <br /><br />
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

export default AlgeriaPaperBowl
