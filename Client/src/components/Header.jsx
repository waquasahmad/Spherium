import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../resources/images/logo.svg";
import menu from "../resources/images/noun_menu.png";
import message from "../resources/images/message_icon.svg";

const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} className="Spherium" alt="logo" />
          </a>
          <a href="https://t.me/SpheriumCommunity" target="_blank">
            <img
              src={message}
              alt="message"
              className="messageIcon mobile-view"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={!isNavCollapsed ? true : false}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <img src={menu} className="Menu" />
          </button>

          <div
            className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item" onClick={handleNavCollapse}>
                <NavLink
                  className="nav-link"
                  exact
                  to="/"
                  activeClassName="active"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item dropdown" onClick={handleNavCollapse}>
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Products
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <NavLink
                    className="dropdown-item"
                    to="/hyperswap"
                    activeClassName="active"
                  >
                    HyperSwap
                  </NavLink>
                  <div className="dropdown-divider"></div>
                  <NavLink
                    className="dropdown-item"
                    to="/spherecomp"
                    activeClassName="active"
                  >
                    SphereComp
                  </NavLink>
                  <div className="dropdown-divider"></div>
                  <NavLink
                    className="dropdown-item"
                    to="/spheriumwallet"
                    activeClassName="active"
                  >
                    Spherium Wallet
                  </NavLink>
                </div>
              </li>
              <li className="nav-item" onClick={handleNavCollapse}>
                <NavLink
                  className="nav-link"
                  to="/team"
                  activeClassName="active"
                >
                  Team
                </NavLink>
              </li>
              <li className="nav-item dropdown" onClick={handleNavCollapse}>
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Documents
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a
                    className="dropdown-item"
                    href="/document#whitepaper"
                    activeClassName="active"
                  >
                    Whitepaper
                  </a>
                  <div className="dropdown-divider"></div>
                  <a
                    className="dropdown-item"
                    href="/document#tokenomics"
                    activeClassName="active"
                  >
                    Tokenomics
                  </a>
                  <div className="dropdown-divider"></div>
                  <a
                    className="dropdown-item"
                    href="/document#governance"
                    activeClass="active"
                  >
                    Governance
                  </a>
                </div>
              </li>
            </ul>
            <ul className="ml-auto">
              <li className="web-view">
                <a href="https://t.me/SpheriumCommunity" target="_blank">
                  <img src={message} className="messageIcon" alt="message" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
