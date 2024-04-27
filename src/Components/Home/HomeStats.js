import React, { useState } from 'react'
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';
const HomeStats = () => {
    const [counterOn, setCounterOn] = useState(false);
    return (
        <>
            <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
            >

                <div className="homestats">
                    <div className="homstatscontainer">
                        <div className="homestatcontentbox">
                            <div className="homestatcontent">
                                <h1 className='homestatheading'>{counterOn && (
                                    <CountUp start={0} end={300} duration={2}  />
                                )}
                                    +</h1>
                                <p className="homestatpara">Ready Stock Machine</p>
                            </div>
                        </div>
                        <div className="homestatcontentbox">
                            <div className="homestatcontent">
                                <h1 className='homestatheading'>{counterOn && (
                                    <CountUp start={0} end={30} duration={2}  />
                                )}
                                    +</h1>
                                <p className="homestatpara">Service Center</p>
                            </div>
                        </div>
                        <div className="homestatcontentbox">
                            <div className="homestatcontent">
                                <h1 className='homestatheading'>{counterOn && (
                                    <CountUp start={0} end={80} duration={2}  />
                                )}
                                    +</h1>
                                <p className="homestatpara">Service Engineers</p>
                            </div>
                        </div>
                        <div className="homestatcontentbox">
                            <div className="homestatcontent">
                                <h1 className='homestatheading'>{counterOn && (
                                    <CountUp start={0} end={7000} duration={2}  />
                                )}
                                    +</h1>
                                <p className="homestatpara">Installation Till Date</p>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollTrigger>
        </>
    )
}

export default HomeStats
