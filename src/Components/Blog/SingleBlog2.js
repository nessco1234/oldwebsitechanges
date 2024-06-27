import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from 'react-icons/fa6'
const SingleBlog2 = (props) => {
    const d=props.data
    
    return (
        <>
            <Link to={d.link} className="singleblogcard">
                <div className="singleblogcardupper">
                    <img src={d.url} alt={d.heading} />
                </div>
                <div className="singleblogcardlower">
                    <h2 className="singleblogcardtitle">
                        {d.heading}
                    </h2>
                    <p className="singleblogcarddesc">
                        {d.desc}
                    </p>
                    <Link className='articlelink' to={d.link}><img src={'https://www.nesscoindia.com/Assets/images/resource/readmoree.png'} alt={d.heading}/></Link>
                </div>
            </Link>
        </>
    )
}

export default SingleBlog2
