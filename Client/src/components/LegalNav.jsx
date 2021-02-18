import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const LegalNav = () => {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
              >
                Terms of Service
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default LegalNav
