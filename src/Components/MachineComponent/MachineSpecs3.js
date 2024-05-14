import React from 'react'
import img1 from '../../Assets/images/resource/High-Speed-Paper-Cup-Making-Machine.webp'
import { FaArrowRightLong } from 'react-icons/fa6';
const MachineSpecs3 = (props) => {
    const data=props.data;
    return (
        <>
            <div className="machinespecs3">
                <div className="machinespecs3container">
                    <h1 className="machinespecs3heading">{props.Heading}</h1>
                    <div className="machinespecsss">
                        <div className="machinespecsleft">
                            <img src={img1} alt="" />
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
                                            <td  style={cellStyle}>{row.feature}</td>
                                            <td style={cellStyle}>{row.specs}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <button className="headerbtn h">
                                <p className='headerbtncon'>Inquire Now !</p> <FaArrowRightLong className='headerbtnarrow ' style={{ fontSize: "1.5rem" }} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
const cellStyle = {
    border: '1px solid grey',
    padding: '8px',
    fontSize: "1.5rem",
    textAlign: "start"
};
export default MachineSpecs3
