import React from 'react'
import SingleBlog from '../Components/Blog/SingleBlog'
import '../Styles/Blog.css'
const Blog = () => {
    return (
        <>
            <div className="blogs">
                <div className="blogcontainer">
                    <SingleBlog />
                    <SingleBlog />
                    <SingleBlog />
                    <SingleBlog />
                    <SingleBlog />
                    <SingleBlog />
                </div>
            </div>
        </>
    )
}

export default Blog
