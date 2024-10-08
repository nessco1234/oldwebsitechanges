import React from 'react'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import Breadcrum from '../Home/Breadcrum'
import { Helmet } from 'react-helmet'
const Horeca = () => {
    return (
        <>
            <Helmet>
                <title>Disposable Packaging Solutions for HORECA</title>
                <meta name="description" content="The ban on single use plastic from July 2021, everyone is looking for other packaging options which includes paper cups, containers and bowls that are sustainable as well as eco-friendly." />
                <meta name="keywords" content="" />
                <meta name="copyright" content="Copyright 2022 Nessco India" />
                <meta name="distribution" content="global" />
                <meta name="language" content="english" />
                <meta name="robots" content="index,follow" />
                <meta name="publisher" content="Nessco India" />
                <meta name="author" content="Nessco India" />
                <link rel="canonical" href="https://www.nesscoindia.com/blog/disposable-packaging-solutions-for-horeca/" />
            </Helmet>
            <Breadcrum third={true} previous={"Blog"} link={"/blog"} active={"Disposable Packaging Solutions for HORECA"} />
            <section className="blogdescsection">
                <div className="blogdescsectioncontainer">

                    <h1 className="blogmainheading">Disposable Packaging Solutions for HORECA</h1>
                    <p className="blogdesc">In these challenging times, it becomes difficult to navigate through the global market and its intricacies. Which is where we step in. This blog aims to break down and explain the dynamic relationship with the disposables industry. <br /><br />As we all know, disposables and flexible packaging options have seen a surge in popularity these days. Due to the rise in awareness for hygiene and health problems, more and more consumers are opting for single-use disposables because of the hygiene and sanitation that they offer. The World Health Organisation (WHO) itself recommends the use of disposable containers and packaging to avoid the need for cleaning and risk of infection from handling used containers.</p>
                    <h2 className="blogheading">Paper Disposables</h2>
                    <p className="blogdesc">Opting for paper disposables is the way to go. They tick every box, from bringing back that chic vintage vibe to keeping up with today’s eco-centric demands. The COVID 19 pandemic has truly put us into a corner, but we don’t have to survive today at the cost of tomorrow. As they say, “sustainability is a choice not a consequence”. Although many places around the world are trying to push the BYOB (bring your own box) schemes, it still hasn’t caught the momentum with HORECA as people were hoping it would. <br /> <br />As more and more people are homebound and restaurants have struck off dining in privileges, HORECA needs to focus on the rise in food delivery and takeaway services which further drive demand for flexible and disposable packaging solutions. Many companies have already switched to single-use plastics and banned reusable containers including Starbucks in March 2020. But again with the ban on single use plastic from July 2021, everyone is looking for other packaging options which includes paper containers and bowls that are sustainable as well as eco-friendly.</p>
                    <h2 className="blogheading">Disposable Manufacturing Machines</h2>
                    <img src={'https://www.nesscoindia.com/Assets/images/news/news-1.webp'} alt="News1" className="blogimg" />
                    <p className="blogdesc">
                        Disposables can almost be considered an essential at this point. But that brings us to the concern of saving our environment as well. And here we, Nessco India, contribute our part as a manufacturer and exporter of paper disposables manufacturing machines. We believe in opting for a much environment friendly way for packaging solutions. We manufacture machines for variety of paper disposables including paper cups, paper bowls, popcorn tubs, salad bowls, ice cream cups, paper cutlery, paper straws, paper bags and many more.
                        <br /><br />
                        We at Nessco India understand that it is necessary to provide some modern and sustainable packaging solutions to protect our environment. We have complete range of machines for disposables, from cold cups to hot cups with double wall and aesthetic covers. However, for years’ environmentalists and activists have been campaigning against single use plastic disposables and promoting new eco-friendly solutions, will we people be able to keep it up with that? Are we willing to put a noose around our planet’s neck? We, at Nessco India (Paper Cup Machines Manufacturer), say no, as we know the nature’s value and its vital importance to maintain a balanced ecosystem.
                    </p>
                    <div className="blognavigationbtns marr">
                        <Link to={'/blog/paper-cup-business-idea/'} className='blognavbtn'><FaArrowLeftLong style={{ marginRight: "2rem" }} /> Previous</Link>
                        <Link to={'/blog/why-say-yes-to-paper-cups/'} className='blognavbtn'>Next <FaArrowRightLong style={{ marginLeft: "2rem" }} /></Link>
                    </div>
                    <div className="blognavigationbtns marrr">
                        <h3 className="blognavigationdesc">How you can Start Business for Paper Cup</h3>
                        <h3 className="blognavigationdesc">Why Paper Cups – Responsible Consumer Choice?</h3>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Horeca
