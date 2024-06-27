import React from 'react'
import { Link } from 'react-router-dom'
const Article = () => {
    return (
        <>
            <section className="article">
                <div className="articlecontainer">
                    <p className="aboutusbtn mm" style={{ marginLeft: "2.5rem" }}>ARTICLE</p>
                    <h2 className="articleheadings" style={{ marginLeft: "2.5rem" }}>
                        Latest <span>Articles</span>
                    </h2>
                    <div className="articlecards">
                        <div className="articlecard">
                            <Link to={'/blog/disposable-packaging-solutions-for-horeca/'} className="uppersection">
                                <div className="uppersectionoverlaylayer"></div>
                                <img src={'https://www.nesscoindia.com/Assets/images/news/news-1.webp'} alt="Disposable Packaging Solutions for HORECA" />
                            </Link>
                            <div className="lowersection">
                                <Link to={'/blog/disposable-packaging-solutions-for-horeca/'} className='articleheading' >Disposable Packaging Solutions for HORECA</Link>
                                <div className="articledescription">In these challenging times, it becomes difficult to navigate through...</div>
                                <Link to={'/blog/disposable-packaging-solutions-for-horeca/'} className='articlelink' ><img src={'https://www.nesscoindia.com/Assets/images/resource/readmoree.png'} alt='Disposable Packaging Solutions for HORECA'/></Link>
                            </div>
                        </div>
                        <div className="articlecard">
                            <Link to={'/blog/why-say-yes-to-paper-cups/'} className="uppersection">
                                <div className="uppersectionoverlaylayer"></div>

                                <img src={'https://www.nesscoindia.com/Assets/images/news/news-2.webp'} alt="Paper Cups – Responsible Consumer Choice?" />
                            </Link>
                            <div className="lowersection">
                                <Link className='articleheading' to={'/blog/why-say-yes-to-paper-cups/'}>Paper Cups – Responsible Consumer Choice?</Link>
                                <div className="articledescription">For a century, plastic has been among the consumer first choice...</div>
                                <Link className='articlelink' to={'/blog/why-say-yes-to-paper-cups/'}> <img src={'https://www.nesscoindia.com/Assets/images/resource/readmoree.png'} alt='Paper Cups – Responsible Consumer Choice?'/></Link>
                            </div>
                        </div>
                        <div className="articlecard condition2">
                            <Link to={'/blog/paper-plate-making-machine-an-eco-friendly-alternative/'} className="uppersection">
                                <div className="uppersectionoverlaylayer"></div>

                                <img src={'https://www.nesscoindia.com/Assets/images/news/news-3.webp'} alt="Paper Plate Making Machine An Eco Friendly Alternative" />
                            </Link>
                            <div className="lowersection">
                                <Link className='articleheading' to={'/blog/paper-plate-making-machine-an-eco-friendly-alternative/'}>Paper Plate Making Machine An Eco Friendly Alternative</Link>
                                <div className="articledescription">Nessco India promotes Paper Plate Making Machine as eco...</div>
                                <Link className='articlelink' to={'/blog/paper-plate-making-machine-an-eco-friendly-alternative/'}><img src={'https://www.nesscoindia.com/Assets/images/resource/readmoree.png'} alt='Paper Plate Making Machine An Eco Friendly Alternative'/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Article
