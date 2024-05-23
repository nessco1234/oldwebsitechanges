import React, { useState } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
const MachineSpecs3 = (props) => {
    const data = props.data;
    const [isOpen2, setIsOpen2] = useState(false);
    const openModal2 = () => setIsOpen2(true);
    const closeModal2 = () => setIsOpen2(false);
    return (
        <>
            <section className="machinespecs3">
                <div className="machinespecs3container">
                    <h3 className="machinespecs3heading">{props.Heading}</h3>
                    <div className="machinespecsss">
                        <div className="machinespecsleft">
                            <img src={props.imglink} alt={props.Heading} />
                        </div>
                        <div className="machinespecsright">
                            <table className='machinetable'>
                                <thead className='machinehead'>
                                    <tr>
                                        <th style={cellStyle}>FEATURE</th>
                                        <th style={cellStyle}>SPECIFICATION</th>
                                    </tr>
                                </thead>
                                <tbody className='machinedata'>
                                    {data.map(row => (
                                        <tr key={row.key} className='machinetablerow'>
                                            <td style={cellStyle}>{row.feature}</td>
                                            <td style={cellStyle}>{row.specs}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <button onClick={openModal2} className="headerbtn h">
                                <p className='headerbtncon'>Inquire Now !</p> <FaArrowRightLong className='headerbtnarrow ' style={{ fontSize: "1.5rem" }} /></button>
                            {isOpen2 && (
                                <div className="modal">
                                    <button className="close-button" onClick={closeModal2}>&times;</button>
                                    <div className="modalcard">
                                        <div className="leftmodal">
                                            <img src={'https://www.nesscoindia.com/Assets/images/resource/popup.webp'} alt="Popup" />
                                        </div>
                                        <div className="rightmodal">
                                            <h1 className="modalheading">Request for details to receive a call back</h1>
                                            <p className="modaldesc">Enter your details to receive a call back</p>
                                            <input placeholder='Enter your Name' className='modalinp' type="text" />
                                            <input placeholder='Enter your Email' className='modalinp' type="text" />
                                            <input placeholder='Enter your Phone' className='modalinp' type="text" />
                                            <Link to={'/thank-you'} className="headerbtn x" style={{ padding: "2rem 3rem" }}>
                                                <p className='headerbtncon'>Get a Quote !</p> <FaArrowRightLong className='headerbtnarrow' style={{ fontSize: "1.5rem" }} /></Link>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
const cellStyle = {
    border: '1px solid grey',
    padding: '8px',
    fontSize: "1.4rem",
    textAlign: "start"
};
export default MachineSpecs3
