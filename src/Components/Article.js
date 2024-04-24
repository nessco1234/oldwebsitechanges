import React from 'react'
import { Link } from 'react-router-dom'
import news1 from '../Assets/images/news/news-1.webp'
import news2 from '../Assets/images/news/news-2.webp'
import news3 from '../Assets/images/news/news-3.webp'
const Article = () => {
    return (
        <>
            <section className="article">
                <div className="articlecontainer">
                    <h1 className="aboutusbtn " style={{marginLeft:"2.5rem"}}>ARTICLE</h1>
                    <h1 className="articleheading" style={{marginLeft:"2.5rem"}}>
                        Latest <span>Articles</span>
                    </h1>
                    <div className="articlecards">
                        <div className="articlecard">
                            <Link className="uppersection">
                                <img src={news1} alt="" />
                            </Link>
                            <div className="lowersection">
                                <Link className='articleheading' to={'/'}>Disposable Packaging Solutions for HORECA</Link>
                                <div className="articledescription">In these challenging times, it becomes difficult to navigate through...</div>
                                <Link className='articlelink' to={'/'}>Read more</Link>
                            </div>
                        </div>
                        <div className="articlecard">
                            <Link className="uppersection">
                                <img src={news2} alt="" />
                            </Link>
                            <div className="lowersection">
                                <Link className='articleheading' to={'/'}>Disposable Packaging Solutions for HORECA</Link>
                                <div className="articledescription">In these challenging times, it becomes difficult to navigate through...</div>
                                <Link className='articlelink' to={'/'}>Read more</Link>
                            </div>
                        </div>
                        <div className="articlecard">
                            <Link className="uppersection">
                                <img src={news3} alt="" />
                            </Link>
                            <div className="lowersection">
                                <Link className='articleheading' to={'/'}>Disposable Packaging Solutions for HORECA</Link>
                                <div className="articledescription">In these challenging times, it becomes difficult to navigate through...</div>
                                <Link className='articlelink' to={'/'}>Read more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Article
