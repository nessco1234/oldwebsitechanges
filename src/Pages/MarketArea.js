import React, { useState,useMemo } from 'react'
import Breadcrum from '../Components/Home/Breadcrum'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { FaAngleDoubleRight } from 'react-icons/fa'

import '../Styles/MarketArea.css'

const MarketArea = () => {
    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])

    const changeHandler = value => {
        setValue(value)
    }
    return (
        <>
            <Breadcrum active={"Market Area"} previous={"Home"} />
            <div className="marketarea">
                <div className="marketareacontainer">
                    <div className="marketarealeft">
                        <h1 className="marketareaheading">Quick Contact</h1>
                        <div className="marketareacard">
                            <input placeholder='Enter Your Name' className='marketareainp' type="text" />
                            <input placeholder='Enter Your Email' className='marketareainp' type="text" />
                            <input placeholder='Enter Your Phone Number' className='marketareainp' type="text" />
                            <textarea placeholder='Enter Your Name' className='marketareainp' type="text" />
                            <button className='marketplacebtn'>Submit <FaArrowRightLong style={{marginLeft:"0.5rem"}}/></button>
                        </div>
                    </div>
                    <div className="marketarearight">
                        <h1 className="marketareaheading">Market Area</h1>
                        <div className="marketcardcontainer">
                            <Link className="marketlink"><FaAngleDoubleRight className="marketlinkicon"/> Supplier</Link>
                        </div>
                        <div className="marketareaheading">International Market Area</div>
                        <div className="marketcardcontainer">
                            <Link className="marketlink"><FaAngleDoubleRight className="marketlinkicon"/> UAE</Link>
                            <Link className="marketlink"><FaAngleDoubleRight className="marketlinkicon"/> Egypt</Link>
                            <Link className="marketlink"><FaAngleDoubleRight className="marketlinkicon"/> Iraq</Link>
                            <Link className="marketlink"><FaAngleDoubleRight className="marketlinkicon"/> Turkey</Link>
                            <Link className="marketlink"><FaAngleDoubleRight className="marketlinkicon"/> France</Link>
                            <Link className="marketlink"><FaAngleDoubleRight className="marketlinkicon"/> Other Global Areas</Link>
                            <Link className="marketlink"><FaAngleDoubleRight className="marketlinkicon"/> Jordan</Link>
                            <Link className="marketlink"><FaAngleDoubleRight className="marketlinkicon"/> Bangladesh</Link>
                            <Link className="marketlink"><FaAngleDoubleRight className="marketlinkicon"/> Germany</Link>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default MarketArea
