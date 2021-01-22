import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from "../resources/images/logo.png";
import message from "../resources/images/message_icon.png";
import menu from "../resources/images/noun_menu.png";


const Header = () => {
    return (
        <div>
            {/* <!-- Navigation --> */}
            <nav className="navbar navbar-expand-lg static-top">                
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <img src={logo} className="Spherium" />
                    </NavLink>
                    <div className="message_icon_mobile mobile-view">
                        <img src={message} className="Menu" />
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Spherium">
                        <img src={menu} className="Menu" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">                    
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Products
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
                                    <a className="dropdown-item" href="/hyperswap">HyperSwap</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">SphereComp</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/team">Team</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Documents
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contactus">Contact us</NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <button className="btn white-paper" to="#">Whitepaper</button>
                            </li>
                            <li className="nav-item web-view">
                                <img src={message} className="messageIcon" />
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
