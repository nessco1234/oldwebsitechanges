import React from 'react'
import SingleBlog from '../Components/Blog/SingleBlog'
import '../Styles/Blog.css'
import img1 from '../Assets/images/news/news-1.webp'
import img2 from '../Assets/images/news/news-2.webp'
import img3 from '../Assets/images/news/news-3.webp'
import img4 from '../Assets/images/news/use-paper-cups-it-can-be-recycled.webp'
import img5 from '../Assets/images/news/paper-cups-for-hot-beverages.webp'
import img6 from '../Assets/images/news/Paper-cup-Startup.webp'
const data = [
    {
        "url": img1,
        "heading": "Disposable Packaging Solutions for HORECA",
        "desc": "In these challenging times, it becomes difficult to nvigate ...",
        "link": "/blog/disposable-packaging-solutions-for-horeca/",
    },
    {
        "url": img2,
        "heading": "Paper Cups – Responsible Consumer Choice?",
        "desc": "For a century, plastic has been among the consumer first...",
        "link": "/blog/why-say-yes-to-paper-cups/",
    },
    {
        "url": img3,
        "heading": "Paper Plate Making Machine An Eco Friendly Alternative",
        "desc": "Nessco India promotes Paper Plate Making Machine as eco...",
        "link": "/blog/paper-plate-making-machine-an-eco-friendly-alternative",
    },
    {
        "url": img4,
        "heading": "Use Paper Cups It Can Be Recycled",
        "desc": "Many Consumers feel they don’t want to choose single-use",
        "link": "/blog/use-paper-cups-it-can-be-recycled/",
    },
    {
        "url": img5,
        "heading": "Premium Paper Cups For Hot Beverages",
        "desc": "Disposable market is segmented by two parts – Plastic and...",
        "link": "/blog/paper-cups-for-hot-beverages/",
    },
    {
        "url": img6,
        "heading": "How You Can Start A Business for Paper Cup",
        "desc": "“The advent of paper cups is increasingly replacing plastic cups...",
        "link": "/blog/paper-cup-business-idea/",
    },
]
const Blog = () => {
    return (
        <>
            <section className="blogs">
                <div className="blogcontainer">
                    {
                        data.map(datax => (
                            <SingleBlog data={datax} />
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default Blog
