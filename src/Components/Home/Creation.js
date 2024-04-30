import React from 'react'
import { CgPlayButton } from 'react-icons/cg'
import { MdArrowRightAlt } from 'react-icons/md'

const Creation = () => {
    return (
        <>
            <section className="creation">
                <div className="creationpattern1"></div>
                <div className="creationpattern2"></div>
                <div className="creationpattern3"></div>
                <div className="creationpattern4"></div>
                <div className="creationcontainer">
                    <div className="creationcontent">
                        <h1 className="creationheading">High Tech Machines Created <br />By  Our Engineers:</h1>
                        <p className="creationdesc">
                            Our Engineers innovate and bring new solutions every now and then to  ease the production process. We change the way you think about Paper Packaging Industry.
                        </p>
                        <button className="creationvideo">
                            Play Video <MdArrowRightAlt style={{ fontSize: "3rem" }} /></button>
                    </div>
                    <div className="creationbtn">
                        <h1 className='youtubebtn'><CgPlayButton /></h1>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Creation
