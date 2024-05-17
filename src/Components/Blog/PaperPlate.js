import React from 'react'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import Breadcrum from '../Home/Breadcrum'
import { Link } from 'react-router-dom'

const PaperPlate = () => {
    return (
        <>
            <Breadcrum third={true} previous={"Blog"} link={"/blog"} active={"Paper Plate Making Machine An Eco Friendly Alternative"} />
            <div className="blogdescsection">
                <div className="blogdescsectioncontainer">

                    <h1 className="blogmainheading">Paper Plate Making Machine An Eco Friendly Alternative</h1>
                    <p className="blogdesc">Nessco India promotes Paper Plate Making Machine as eco friendly alternative. The primary usage of paper is for writing purposes and due to its ease of production in large volumes and flexible characteristics. It is also preferable for manufacturing many products like paper cups, bowls, thalis, straw, bags etc. . Paper and paper-based products are continuously evolving and developed for various purposes of industries such as packaging, paper structural cores, cartons, labels, and non-structural elements. Paper plate making machine aids in the manufacturing of Eco-friendly and recyclable paper plates.</p>
                    <h1 className="blogheading">Recycling of Paper:</h1>
                    <p className="blogdesc"> Recycling is the best method to reduce wastage and pollution. Recycling of paper is easy, which undergoes recycling for several times and gets transformed into various products. Paper  production in various quality grades can be classified into writing paper, packaging papers, wrap sheets or as cartons. Recycled paper is generally put in use for making packaging paper rolls, corrugated sheets and cartons. By recycling the paper repeatedly, the need for cutting the trees is greatly reduces. Production costs involved in paper production is also less in comparison to new paper manufacturing. Usage of recycled papers is common in making paper plate making process since it is also recyclable.</p>
                    <h1 className="blogheading">Paper Forming Technology:</h1>
                    <p className="blogdesc">
                        Generally paper web is very thin film and its thickness varies in the unit of GSM. By the virtue of paper’s ability to transform and take the structures, it is possible to impart certain shapes to the paper sheet. With the application of mechanical pressure at a certain degree with the help of a punch and die pair results in paper blank attaining a structural form which adds mechanical strength to it. Thermo-mechanical forming is process of performing mechanical pressing with application of heat energy.
                        <br /><br />
                        It has integrated the pneumatic and the mechanic technologies, which makes it has the functions of faster working speed, higher safety-performance, safer operation and easier maintenance than the conventional one.

                        <br /><br />
                        It adopts highly efficient pressurizing air cylinder, so that the maximum pressure can reach to 3 Ton, compared with the oil pressure one, it has the advantages of faster speed, environment protection and humanism design.

                        <br /><br />
                        The Paper Plate Forming Machine has two working stations, each station installs one set of mold and each station has separately digital control and electric control.
                    </p>
                    <div className="blognavigationbtns marr">
                        <Link to={'/blog/why-say-yes-to-paper-cups/'} className='blognavbtn'><FaArrowLeftLong style={{ marginRight: "2rem" }} /> Previous</Link>
                        <Link to={'/blog/use-paper-cups-it-can-be-recycled/'} className='blognavbtn'>Next <FaArrowRightLong style={{ marginLeft: "2rem" }} /></Link>
                    </div>
                    <div className="blognavigationbtns marrr">
                        <h1 className="blognavigationdesc">Ppaer Cups - Responsibel Consumer Choice?</h1>
                        <h1 className="blognavigationdesc">Use Paper Cups It can Be Recycled</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaperPlate
