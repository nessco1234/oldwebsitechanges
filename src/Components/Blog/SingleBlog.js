import React from 'react'
import { BiSolidRightArrowAlt } from 'react-icons/bi'
import img1 from '../../Assets/images/news/news-1.webp'
const SingleBlog = (props) => {
    return (
        <>
            <div className="singleblogcard">
                <div className="singleblogcardupper">
                    <img src={img1} alt="" />
                </div>
                <div className="singleblogcardlower">
                    <h1 className="singleblogcardtitle">
                        Disposable Packaging Solutions for HORECA
                    </h1>
                    <p className="singleblogcarddesc">
                        In these challenging times, it becomes difficult to nvigate ...
                    </p>
                    <button className="singleblogbtn">
                        Learn More <BiSolidRightArrowAlt />
                    </button>
                </div>
            </div>
        </>
    )
}

export default SingleBlog
