import React, { useEffect, useState } from 'react'
import Breadcrum from '../Components/Home/Breadcrum'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { FaAngleDoubleRight } from 'react-icons/fa'

import '../Styles/MarketArea.css'

const MarketArea = (props) => {
    const data = props.data;
    const data2 = props.data.section1content
    const data3 = props.data.section2content
    const [selectedValue, setSelectedValue] = useState('');
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    const [countries, setcountries] = useState([]);
    const fetchCountries = async () => {
        try {
            const apiKey = "NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZlg4RTk1MlJlaA=="; // Replace with your API key
            const apiUrl = "https://api.countrystatecity.in/v1/countries"; // Replace with your API endpoint

            const response = await fetch(apiUrl, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSCAPI-KEY": apiKey, // Custom header: X-CSCAPI-KEY
                },
            });
            const data = await response.json();
            const countryname = data.map((option) => option.name);
            setcountries(countryname);
            console.log(countryname)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    useEffect(() => {
        fetchCountries()
    }, [])

    return (
        <>
            <Breadcrum active={props.activecomp} previous={"Home"} />
            <section className="marketarea">
                <div className="marketareacontainer">
                    <div className="marketarealeft">
                        <h1 className="marketareaheading">Quick Contact</h1>
                        <div className="marketareacard">
                            <input placeholder='Enter Your Name' className='marketareainp' type="text" />
                            <input placeholder='Enter Your Email' className='marketareainp' type="text" />
                            <input placeholder='Enter Your Mobile' className='marketareainp' type="text" />
                            <select placeholder="Select Country" className='marketareainp' id="dropdown" value={selectedValue} onChange={handleChange}>
                                <option value="">Select Your Country</option>
                                {
                                    countries.map(e => (
                                        <option value={e}>{e}</option>
                                    ))
                                }
                                {/* <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option> */}
                            </select>
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
            </section>
        </>
    )
}

export default MarketArea
