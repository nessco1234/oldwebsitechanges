import React from 'react'

const MachineSpecs = (props) => {
    const data = props.data
    return (
        <section className="machinespecs">
            <div className="machinespecscomp">
                <h2 className='machinespecsheading'>Machine <span>Specification</span></h2>
                <table className='machinetable'>
                    <thead className='machinehead'>
                        <tr>
                            <th className='adjustwidth' style={cellStyle}>FEATURE</th>
                            <th style={cellStyle}>SPECIFICATION</th>
                        </tr>
                    </thead>
                    <tbody className='machinedata'>
                        {data.map(row => (
                            <tr key={row.key} className='machinetablerow'>
                                <td className='adjustwidth' style={cellStyle}>{row.feature}</td>
                                <td style={cellStyle}>{row.specs}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}
const cellStyle = {
    border: '1px solid grey',
    padding: '8px',
    fontSize:"1.4rem",
    textAlign:"start"
  };
export default MachineSpecs
