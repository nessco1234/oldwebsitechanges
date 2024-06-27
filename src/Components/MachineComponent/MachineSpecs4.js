import React from 'react'

const MachineSpecs4 = (props) => {
    const data = props.data
    const labels = props.labels
    return (
        <section className="machinespecs">
            <div className="machinespecscomp">
                <h2 className='machinespecsheading'>Machine <span>Specification</span></h2>
                <div className="tableoverlay">

                    <table className='machinetable'>
                        <thead className='machinehead'>
                            <tr>{
                                labels.map((obj,key) => (
                                    <th key={key} colSpan={1} style={cellStyle}>{obj}</th>
                                ))
                            }
                            </tr>
                        </thead>
                        <tbody className='machinedata'>
                            {data.map((row,key) => (
                                <tr key={key} className='machinetablerow'>
                                    <td style={cellStyle}>{row.specs}</td>
                                    <td style={cellStyle}>{row.ns220}</td>
                                    <td style={cellStyle}>{row.ns330}</td>
                                    <td style={cellStyle}>{row.ns400}</td>
                                    <td style={cellStyle}>{row.ns460}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </section>
    )
}
const cellStyle = {
    border: '1px solid grey',
    padding: '8px',
    fontSize: "1.4rem",
    textAlign: "start"
};
export default MachineSpecs4