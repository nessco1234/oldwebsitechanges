import React from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { SiAdobeacrobatreader } from 'react-icons/si'
import { Link } from 'react-router-dom'
import MachineSpecs from '../../Components/MachineComponent/MachineSpecs'
import specs from '../../Data/GlobalCartonErecting.json'
import RelatedProducts from '../../Components/MachineComponent/RelatedProducts'
import { Helmet } from 'react-helmet'
import Form1 from '../../Components/MarketArea/Form1'
import Form2 from '../../Components/MarketArea/Form2'

const SenegalCartonErecting = (visitData) => {
    const a = "Senegal";
    return (
        <>
            <Helmet>
                <title>Carton Erecting Machine | Paper Box Making Machine in {a} | Nessco</title>
                <meta name="description" content="Buy a carton erecting machine to make paper boxes at best price. Fast delivery. Full range carton erectors & carton sealers. Tailored case handling solutions. "/>
                <meta name="keywords" content="" />
                <meta name="copyright" content="Copyright 2022 Nessco India" />
                <meta name="distribution" content="global" />
                <meta name="language" content="english" />
                <meta name="robots" content="index,follow" />
                <meta name="publisher" content="Nessco India" />
                <meta name="author" content="Nessco India" />
                <meta property="og:image" content="https://www.nesscoindia.com/Assets/images/resource/CartonErectingMachine.webp"/>
                <link rel="canonical" href="https://www.nesscoindia.com/sn/carton-erecting-machine/" />

            </Helmet>
            <section className="intromachine">
                <div className="intromachinecompo">
                    <div className="intromachineleft">
                        <h1 className="intromachineheading">Carton Erecting <br /><span>Machine In {a}</span></h1>
                        <p className="intromachinedescription">
                        The Carton Erecting Machine (Paper Box Making Machine) excels in precision and stability, featuring a servo control system that allows for smooth, vibration-free operations. It comprises several units including paper feeding, adjustment, and forming units, all designed to work in harmony to produce up to 80 pieces per minute, depending on the box type. The Carton Erector machine supports a wide range of paper weights from 180 to 620 gsm, accommodating cardboard, laminated, and corrugated papers. Additionally, the innovative cam pushing system, enhanced by servo technology, ensures reduced wear, longer service life, and precise adjustments, while the auto lubrication system minimizes maintenance needs.
                        </p>
                    </div>
                    <Form1 visitData={visitData}/>
                </div>      
            </section>
            <section className="descriptionmachine">
                <div className="descriptionmachinecomp">
                    <div className="descriptionmachineleft">
                    <img src={'https://www.nesscoindia.com/Assets/images/resource/CartonErectingMachine.webp'} alt="" />
                        <h3 className="descriptionmachineleftdata"> Carton Erecting <span>Machine In {a}</span></h3>
                        <p className="descriptionmachineleftcontent">For gluing, the machine utilizes a water-based glue system suitable for food-grade applications, ensuring safe and reliable adhesion with high efficiency. The addition of a pneumatic air cylinder knife optimizes the handling of thicker papers necessary for robust burger boxes, ensuring flawless cutting and forming. This machine not only automates the collection and counting of finished products but also features high-grade electrical components from brands like Schneider Electric to guarantee longevity. Whether forming hamburger boxes, noodle packs, or any other packaging for quick-service foods, this machine stands as a comprehensive solution for modern packaging needs, combining speed, precision, and adaptability.
                            <br /><br />
                            <h3 className="descriptionmachineleftdata"> Product <span>Introduction</span></h3>
                            <br /><br></br>
                            Discover the versatility of our Carton Erecting Machine (Paper Box Making Machine), an automatic solution specialized in crafting a wide array of paper boxes essential for the food service industry. This machine is ideal for producing various types of cartons including hamburger boxes, children's lunch boxes, French fries boxes, fried chicken boxes, triangular pizza boxes, and more, tailored for the quick-service sector. Equipped with a PLC intelligent control system, the machine ensures precise operations and efficiency, bolstered by a sturdy structure that delivers low noise levels and high operational speed.</p> <br /><br />
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

export default SenegalCartonErecting
