import React from 'react'
import { BiSolidRightArrowAlt } from 'react-icons/bi'
import img1 from '../../Assets/images/news/news-1.webp'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from 'react-icons/fa6'
const SingleBlog = (props) => {
    const d=props.data
    return (
        <>
            <div className="singleblogcard">
                <div className="singleblogcardupper">
                    <img src={d.url} alt="" />
                </div>
                <div className="singleblogcardlower">
                    <h1 className="singleblogcardtitle">
                        {d.heading}
                    </h1>
                    <p className="singleblogcarddesc">
                        {d.desc}
                    </p>
                    <Link to={d.link} className="singleblogbtn">
                        Learn More <FaArrowRightLong style={{marginLeft:"1rem"}}/> 
                    </Link>
                </div>
            </div>
        </>
    )
}

export default SingleBlog
