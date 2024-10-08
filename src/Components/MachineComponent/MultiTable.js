import React from 'react'

const MultiTable = (props) => {
    const data = props.data
    const labels = props.labels
    return (
        <section className="machinespecscomp">
            <div className="tableoverlay">

                <table className='machinetable'>
                    <thead className='machinehead'>
                        <tr>{
                            labels.map((obj,key) => (
                                <th key={key} style={cellStyle}>{obj}</th>
                            ))
                        }
                        </tr>
                    </thead>
                    <tbody className='machinedata'>
                        {data.map((row,key) => (
                            <tr key={key} className='machinetablerow'>
                                <td style={cellStyle}>{row.rope}</td>
                                <td style={cellStyle}>{row.T1}</td>
                                <td style={cellStyle}>{row.T2}</td>
                                <td style={cellStyle}>{row.T3}</td>
                                <td style={cellStyle}>{row.T4}</td>
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
    fontSize: "1.4rem",
    textAlign: "start"
};
export default MultiTable