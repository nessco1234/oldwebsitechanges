import React, { useState } from 'react'
import { MdArrowRightAlt } from 'react-icons/md'
import { Link } from 'react-router-dom'
import logo from '../../Assets/images/logo.webp'
const Header = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <>
            <nav className="navbar">
                <div className="navbarcontainer">
                    <img src={logo} alt="" />
                    <ul className="navlist">
                        <Link className='navlink' to={'/'}>HOME</Link>
                        <Link className='navlink' to={'/about-us'}>ABOUT US</Link>
                        <div className='navlink' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                            <Link className='navlink' to={'/product'}>OUR MACHINES</Link>
                            {isHovered && (
                                <ul className="menu-list">
                                    <div className="menulistitems">
                                        <h1 className="menulistheading">Paper Cup Machines</h1>
                                        <Link className='menulistlinks' to={'/product/paper-glass-making-machine'}>Paper cup Machines</Link>
                                        <Link className='menulistlinks' to={'/'}>Paper cup Machines</Link>
                                        <Link className='menulistlinks' to={'/'}>Paper cup Machines</Link>
                                        <Link className='menulistlinks' to={'/'}>Paper cup Machines</Link>
                                        <Link className='menulistlinks' to={'/'}>Paper cup Machines</Link>
                                    </div>
                                    <div className="menulistitems">
                                        <h1 className="menulistheading">Paper Cup Machines</h1>
                                        <Link className='menulistlinks' to={'/'}>Paper cup Machines</Link>
                                        <Link className='menulistlinks' to={'/'}>Paper cup Machines</Link>
                                        <Link className='menulistlinks' to={'/'}>Paper cup Machines</Link>
                                        <Link className='menulistlinks' to={'/'}>Paper cup Machines</Link>
                                        <Link className='menulistlinks' to={'/'}>Paper cup Machines</Link>
                                    </div>
                                    <div className="menulistitems">
                                        <h1 className="menulistheading">Paper Cup Machines</h1>
                                        <Link className='menulistlinks' to={'/'}>Paper cup Machines</Link>
                                        <Link className='menulistlinks' to={'/'}>Paper cup Machines</Link>
                                        <Link className='menulistlinks' to={'/'}>Paper cup Machines</Link>
                                        <Link className='menulistlinks' to={'/'}>Paper cup Machines</Link>
                                        <Link className='menulistlinks' to={'/'}>Paper cup Machines</Link>
                                    </div>
                                    <div className="menulistitems">
                                        <h1 className="menulistheading">Paper Cup Machines</h1>
                                        <Link className='menulistlinks' to={'/'}>Paper cup Machines</Link>
                                        <Link className='menulistlinks' to={'/'}>Paper cup Machines</Link>
                                        <Link className='menulistlinks' to={'/'}>Paper cup Machines</Link>
                                        <Link className='menulistlinks' to={'/'}>Paper cup Machines</Link>
                                        <Link className='menulistlinks' to={'/'}>Paper cup Machines</Link>
                                    </div>
                                </ul>
                            )}
                        </div>
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
