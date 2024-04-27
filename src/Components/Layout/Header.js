import React from 'react'
import { MdArrowRightAlt } from 'react-icons/md'
import { Link } from 'react-router-dom'
import logo from '../../Assets/images/logo.webp'
const Header = () => {
    return (
        <>
            <nav className="navbar">
                <div className="navbarcontainer">

                    <img src={logo} alt="" />
                    <ul className="navlist">
                        <Link className='navlink' to={'/'}>HOME</Link>
                        <Link className='navlink' to={'/about-us'}>ABOUT US</Link>
                        <Link className='navlink' to={'/'}>OUR MACHINES</Link>
                        <Link className='navlink' to={'/video'}>VIDEO</Link>
                        <Link className='navlink' to={'/blog'}>BLOG</Link>
                        <Link className='navlink' to={'/contact'}>CONTACT US</Link>
                    </ul>
                    <button className="headerbtn">
                        Inquire Now ! <MdArrowRightAlt style={{ fontSize: "3rem" }} /></button>
                </div>
            </nav>
        </>
    )
}

export default Header
