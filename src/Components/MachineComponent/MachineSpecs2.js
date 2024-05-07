import React from 'react'

const MachineSpecs2 = (props) => {
    const data = props.data
    const labels = props.labels
    return (
        <div className="machinespecs">
            <div className="machinespecscomp">
                <h1 className='machinespecsheading'>Machine <span>Specification</span></h1>
                <table className='machinetable'>
                    <thead className='machinehead'>
                        <tr>{
                            labels.map(obj => (
                                <th style={cellStyle}>{obj}</th>
                            ))
                        }
                        </tr>
                    </thead>
                    <tbody className='machinedata'>
                        {data.map(row => (
                            <tr key={row.key} className='machinetablerow'>
                                <td style={cellStyle}>{row.specs}</td>
                                <td style={cellStyle}>{row.ns220}</td>
                                <td style={cellStyle}>{row.ns330}</td>
                                <td style={cellStyle}>{row.ns460}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
const cellStyle = {
    border: '1px solid grey',
    padding: '8px',
    fontSize: "1.5rem",
    textAlign: "start"
};
export default MachineSpecs2