import React from 'react'
import SingleBlog from '../Components/Blog/SingleBlog'
import '../Styles/Blog.css'
import { Helmet } from 'react-helmet'
import { FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const data = [
    {
        "url": 'https://www.nesscoindia.com/Assets/images/news/news-1.webp',
        "heading": "Disposable Packaging Solutions for HORECA",
        "desc": "In these challenging times, it becomes difficult to nvigate ...",
        "link": "/blog/disposable-packaging-solutions-for-horeca/",
    },
    {
        "url": 'https://www.nesscoindia.com/Assets/images/news/news-2.webp',
        "heading": "Paper Cups – Responsible Consumer Choice?",
        "desc": "For a century, plastic has been among the consumer first...",
        "link": "/blog/why-say-yes-to-paper-cups/",
    },
    {
        "url": 'https://www.nesscoindia.com/Assets/images/news/news-3.webp',
        "heading": "Paper Plate Making Machine An Eco Friendly Alternative",
        "desc": "Nessco India promotes Paper Plate Making Machine as eco...",
        "link": "/blog/paper-plate-making-machine-an-eco-friendly-alternative",
    },
    {
        "url": 'https://www.nesscoindia.com/Assets/images/news/use-paper-cups-it-can-be-recycled.webp',
        "heading": "Use Paper Cups It Can Be Recycled",
        "desc": "Many Consumers feel they don’t want to choose single-use",
        "link": "/blog/use-paper-cups-it-can-be-recycled/",
    },
    {
        "url": 'https://www.nesscoindia.com/Assets/images/news/paper-cups-for-hot-beverages.webp',
        "heading": "Premium Paper Cups For Hot Beverages",
        "desc": "Disposable market is segmented by two parts – Plastic and...",
        "link": "/blog/paper-cups-for-hot-beverages/",
    },
    {
        "url": 'https://www.nesscoindia.com/Assets/images/news/Paper-cup-Startup.webp',
        "heading": "How You Can Start A Business for Paper Cup",
        "desc": "“The advent of paper cups is increasingly replacing plastic cups...",
        "link": "/blog/paper-cup-business-idea/",
    },
]
const Blog = () => {
    return (
        <>
            <Helmet>
                <title>Disposable Industry Blog | Nessco India</title>
                <meta name="description" content="Nesscoindia latest disposable industry blog. Contact us for more detail about disposable paper cup industries. Visit the website!" />
                <meta name="keywords" content="" />
                <meta name="State" content="Rajasthan" />
                <meta name="City" content="Jaipur" />
                <meta name="address" content="186 Apparel Park, Mahal Rd, Ricco Industrial Area, Jagatpura, Jaipur, Rajasthan 302022, India" />
                <meta name="copyright" content="Copyright 2022 Nessco India" />
                <meta name="distribution" content="global" />
                <meta name="language" content="english" />
                <meta name="robots" content="index,follow" />
                <meta name="publisher" content="Nessco India" />
                <meta name="author" content="Nessco India" />
                <link rel="canonical" href="https://www.nesscoindia.com/blog/" />

            </Helmet>
            <section className="breadcrum">
                <div className="breadcrumcontainer">
                    <Link to={'/'} className='breadcrumheading'>Home<FaAngleRight className='breadcrumicon' /></Link><h3 className='breadcrumheading'><span>Blog</span> </h3>
                </div>
            </section>
            <section className="blogs">
                <div className="blogcontainer">
                    {
                        data.map((datax,key) => (
                            <SingleBlog key={key} data={datax} />
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default Blog
