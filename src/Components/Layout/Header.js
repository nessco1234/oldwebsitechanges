import React, { useState } from 'react'
import { MdArrowRightAlt } from 'react-icons/md'
import { Link } from 'react-router-dom'
import logo from '../../Assets/images/logo.webp'
import { FaArrowRightLong } from 'react-icons/fa6'
const list1 = [
    {
        id: 1,
        name: "Paper Glass Machine",
        link: "/product/paper-glass-making-machine/",
    },
    {
        id: 2,
        name: "Paper Disposable Cup Machine",
        link: "/product/disposable-paper-cup-making-machine/",
    },
    {
        id: 3,
        name: "High Speed Paper Cup Machine",
        link: "/product/high-speed-paper-cup-making-machine/",
    },
    {
        id: 4,
        name: "Paper Handle Cup Machine",
        link: "/product/paper-handle-cup-making-machine/",
    },
    {
        id: 5,
        name: "Ripple wall Cup Machine",
        link: "/product/ripple-wall-cup-machine/",
    },
    {
        id: 6,
        name: "Serve Driven Paper Cup Machine",
        link: "/product/Servo-driven-paper-cup-machine/",
    },
    {
        id: 6,
        name: "Paper Dome Lid Cup Machine",
        link: "/product/paper-dome-lid-machine/",
    },
]
const list2 = [
    {
        id: 1,
        name: "Paper Bowl Machine",
        link: "/product/paper-container-bowl-making-machine/",
    },
    {
        id: 2,
        name: "Paper Salad Bowl Machine",
        link: "/product/salad-bowl-making-machine/",
    },
    {
        id: 4,
        name: "Paper Lid Machine",
        link: "/product/paper-lid-making-machine/",
    },
    {
        id: 5,
        name: "Paper Cultery Machine",
        link: "/product/paper-cutlery-machine/",
    },
    {
        id: 3,
        name: "Paper Bucket Machine ( Pop Corn / Chicken Tub Mahchine )",
        link: "/product/pop-corn-tub-making-machine/",
    },
]
const list3 = [
    {
        id: 5,
        name: "Paper Plate Machine",
        link: "/product/paper-plate-making-machine/",
    },
    {
        id: 3,
        name: "Lunch Box Forming Machine",
        link: "/product/lunch-box-forming-machine/",
    },
    {
        id: 4,
        name: "Carton Erecting Machine",
        link: "/product/carton-erecting-machine/",
    },
    {
        id: 2,
        name: "Octagonal Box Forming Machine",
        link: "/product/automatic-octagonal-box-forming-machine/",
    },
    {
        id: 1,
        name: "Rectangular Flat Bottom Bowl Machine",
        link: "/product/rectangle-flat-bottom-bowl-machine/",
    },
]
const list4 = [
    {
        id: 1,
        name: "Flexo Printing Machine",
        link: "/product/flexo-printing-machine/",
    },
    {
        id: 2,
        name: "Roll Die Cutting Machine",
        link: "/product/roll-die-cutting-machine/",
    },
    {
        id: 3,
        name: "PE Coating Machine",
        link: "/product/pe-coating-machine/",
    },
    {
        id: 4,
        name: "Paper Straw Machine",
        link: "/product/paper-straw-making-machine/",
    },
    {
        id: 5,
        name: "Ripple Wall Cup Sleeve Glueing Machine",
        link: "/product/ripple-wall-cup-sleeve-glueing-machine/",
    },
    {
        id: 5,
        name: "Paper Sleeve Gluing & Folding Machine",
        link: "/product/paper-sleeve-gluing-folding-machine/",
    },
]

const list5 = [
    {
        id: 1,
        name: "Fully Automatic Paper Bag Machine",
        link: "/product/paper-shopping-bag-making-machine/",
    },
    {
        id: 2,
        name: "Square Bottom paper Bag Machine",
        link: "/product/paper-food-bag-making-machine/",
    },
]
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
                            <Link onClick={() => setIsHovered(false)} className='navlink' to={'/product'}>OUR MACHINES</Link>
                            {isHovered && (
                                <ul className="menu-list">
                                    <div className="menu-list-container">

                                        <div className="menulistitems">
                                            <h1 className="menulistheading">Paper Cup Machines</h1>
                                            {list1.map(obj => (
                                                <Link onClick={() => setIsHovered(false)} className='menulistlinks' key={obj.id} to={obj.link}>{obj.name}</Link>
                                            ))}
                                        </div>
                                        <div className="menulistitems">
                                            <h1 className="menulistheading">Paper Container Machines</h1>
                                            {list2.map(obj => (
                                                <Link onClick={() => setIsHovered(false)} className='menulistlinks' key={obj.id} to={obj.link}>{obj.name}</Link>
                                            ))}
                                        </div>
                                        <div className="menulistitems">
                                            <h1 className="menulistheading">Paper Forming Machines</h1>
                                            {list3.map(obj => (
                                                <Link onClick={() => setIsHovered(false)} className='menulistlinks' key={obj.id} to={obj.link}>{obj.name}</Link>
                                            ))}
                                        </div>
                                        <div className="menulistitems">
                                            <h1 className="menulistheading">Other Machines</h1>
                                            {list4.map(obj => (
                                                <Link onClick={() => setIsHovered(false)} className='menulistlinks' key={obj.id} to={obj.link}>{obj.name}</Link>
                                            ))}
                                        </div>
                                        <div className="menulistitems">
                                            <h1 className="menulistheading">Paper Bag Machines</h1>
                                            {list5.map(obj => (
                                                <Link onClick={() => setIsHovered(false)} className='menulistlinks' key={obj.id} to={obj.link}>{obj.name}</Link>
                                            ))}
                                        </div>
                                    </div>

                                </ul>
                            )}
                        </div>
                        <Link className='navlink' to={'/video'}>VIDEO</Link>
                        <Link className='navlink' to={'/blog'}>BLOG</Link>
                        <Link className='navlink' to={'/contact'}>CONTACT US</Link>
                    </ul>
                    <button className="headerbtn">
                        <p className='headerbtncon'>Inquire Now !</p> <FaArrowRightLong className='headerbtnarrow' style={{ fontSize: "1.5rem" }} /></button>
                </div>
            </nav>
        </>
    )
}

export default Header
