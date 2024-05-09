import React from 'react'
import Breadcrum from '../Components/Home/Breadcrum'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { FaAngleDoubleRight } from 'react-icons/fa'

import '../Styles/MarketArea.css'

const MarketArea = (props) => {
    const data = props.data;
    const data2 = props.data.section1content
    const data3 = props.data.section2content
    return (
        <>
            <Breadcrum active={props.activecomp} previous={"Home"} />
            <div className="marketarea">
                <div className="marketareacontainer">
                    <div className="marketarealeft">
                        <h1 className="marketareaheading">Quick Contact</h1>
                        <div className="marketareacard">
                            <input placeholder='Enter Your Name' className='marketareainp' type="text" />
                            <input placeholder='Enter Your Email' className='marketareainp' type="text" />
                            <input placeholder='Enter Your Phone Number' className='marketareainp' type="text" />
                            <textarea placeholder='Enter Your Name' className='marketareainp' type="text" />
                            <button className='marketplacebtn'>Submit <FaArrowRightLong style={{ marginLeft: "0.5rem" }} /></button>
                        </div>
                    </div>
                    <div className="marketarearight">
                        {
                            data.section1 && <>

                                <h1 className="marketareaheading">{data.section1heading}</h1>
                                <div className="marketcardcontainer">
                                    {data2.map((obj) => (
                                        <Link to={obj.Link} className="marketlink"><FaAngleDoubleRight className="marketlinkicon" /> {obj.Name}</Link>
                                    ))}
                                </div>
                            </>
                        }
                        {
                            data.section2 && <>
                                <h1 className="marketareaheading">{data.section2heading}</h1>
                                <div className="marketcardcontainer">
                                    {data3.map((obj) => (
                                        <Link to={obj.Link} className="marketlink"><FaAngleDoubleRight className="marketlinkicon" /> {obj.Name}</Link>
                                    ))}

                                </div>
                            </>
                        }
                    </div>

                </div>
            </div>
        </>
    )
}

export default MarketArea
