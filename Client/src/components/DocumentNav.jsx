import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const DocumentNav = () => {


    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="whitepaper"
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
              >
                Whitepaper
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="tokenomics"
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
              >
                Tokenomics
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="governance"
                spy={true}
                smooth={true}
                offset={-125}
                duration={500}
              >
                Governance
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default DocumentNav
