import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import logo from "../resources/images/logo.png";
import message from "../resources/images/message_icon.png";
import menu from "../resources/images/noun_menu.png";
import { AiOutlineClose } from "react-icons/ai";


const Header = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div>
            {/* <!-- Navigation --> */}
            <nav className="navbar navbar-expand-lg scrolling-navbar shadow-sm">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <img src={logo} className="Spherium" />
                    </NavLink>
                    <div className="message_icon_mobile mobile-view">
                        <a href="https://t.me/SpheriumCommunity" target="_blank"><img src={message} className="Menu" /></a>
                    </div>
                    <div onClick={handleClick}>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Spherium">
                       {/* {click ? <AiOutlineClose/> : <img src={menu} className="Menu" />} */}
                       <img src={menu} className="Menu" />
                    </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/" onClick={closeMobileMenu}>Home</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Products
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <NavLink className="dropdown-item" to="/hyperswap" style={{ backgroundColor: 'white' }} onClick={closeMobileMenu}>HyperSwap</NavLink>
                                    <div className="dropdown-divider"></div>
                                    <NavLink className="dropdown-item" to="/spherecomp" style={{ backgroundColor: 'white' }} onClick={closeMobileMenu}>SphereComp</NavLink>
                                    <div className="dropdown-divider"></div>
                                    <NavLink className="dropdown-item" to="/spherecompwallet" style={{ backgroundColor: 'white' }} onClick={closeMobileMenu}>Spherium Wallet</NavLink>
                                </div>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/team" onClick={closeMobileMenu}>Team</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Documents
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {/* <NavLink className="dropdown-item" to="/document" style={{ backgroundColor: 'white' }}>Whitepaper</NavLink> */}
                                    <a className="dropdown-item" style={{ textDecoration: 'none' }} href="/document#item-1" onClick={closeMobileMenu}>Whitepaper</a>
                                    <div className="dropdown-divider"></div>
                                    {/* <NavLink className="dropdown-item" to="/document#item-2" style={{ backgroundColor: 'white' }}>Tokenomics</NavLink> */}
                                    <a className="dropdown-item" style={{ textDecoration: 'none' }} href="/document#item-2" onClick={closeMobileMenu}>Tokenomics</a>
                                    <div className="dropdown-divider"></div>
                                    {/* <NavLink className="dropdown-item" to="/document" style={{ backgroundColor: 'white' }}>Governance</NavLink> */}
                                    <a className="dropdown-item" style={{ textDecoration: 'none' }} href="/document#item-3" onClick={closeMobileMenu}>Governance</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contactus" onClick={closeMobileMenu}>Contact us</NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            {/* <li className="nav-item">
                                <button className="btn web-view" to="#">Download whitepaper</button>
                            </li> */}
                            <li className="nav-item web-view">
                                <a href="https://t.me/SpheriumCommunity" target="_blank"><img src={message} className="messageIcon" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="clearfix"></div>
        </div>
    )
}

export default Header
