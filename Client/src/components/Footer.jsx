import React from 'react'
import footer_logo from "../resources/images/footer_logo.svg";
import messanger from "../resources/images/messanger.png";
import twitter from "../resources/images/twitter.png";
import linkedin from "../resources/images/linkedin.png";
import youtube from "../resources/images/youtube.png";
import messanger1 from "../resources/images/messanger1.png";
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <div className="row">
                <div className="col-md-2 col-12">
                    <img src={footer_logo} className="logo" />
                    <p>Spherium Pte. Ltd. Address: 3 Fraser Street #05-25 Duo Tower, Singapore 189352</p>
                </div>
                <hr className="line mobile-view" />
                <div className="col-12 mobile-view">
                    <div className="footer-title">Connect with us</div>
                    <ul className="social-icons">
                        <li> <a href="https://t.me/SpheriumCommunity" target="_blank"><img src={messanger} /> </a></li>
                        <li> <a href="https://twitter.com/SpheriumFinance" target="_blank"><img src={twitter} /></a> </li>
                        <li> <a href="https://www.linkedin.com/company/spherium" target="_blank"><img src={linkedin} /> </a></li>
                        <li> <a href="https://www.youtube.com/channel/UC3RKsQpOax4BWAxsDQosk7g" target="_blank"><img src={youtube} /></a></li>
                        <li> <a href="https://spheriumlabs.medium.com/" target="_blank"><img src={messanger1} /></a> </li>
                    </ul>
                </div>
                <hr className="line mobile-view" />
                <div className="col-md-1 col-4">
                    <div className="footer-title">
                        <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
                    </div>
                </div>
                <div className="col-md-2 web-view">
                    <div className="footer-title">Our products</div>
                    <div className="footer-sub-title">
                        <Link to="/hyperswap" style={{ textDecoration: 'none', color: 'white' }}>HyperSwap</Link>
                    </div>
                    <div className="footer-sub-title">SphereComp</div>
                    <div className="footer-sub-title">SphereComp Wallet</div>
                </div>
                <div className="col-md-1 col-4">
                    <div className="footer-title">
                        <Link to="/team" style={{ textDecoration: 'none', color: 'white' }}>Team</Link>
                    </div>
                </div>
                <div className="col-md-2 web-view">
                    <div className="footer-title">Documents</div>
                    <div className="footer-sub-title">Whitepaper</div>
                    <div className="footer-sub-title">Tokenomics</div>
                    <div className="footer-sub-title">Governance</div>
                    <div className="footer-sub-title">Blog and news</div>
                </div>
                <div className="col-md-1 col-4">
                    <div className="footer-title">
                        <Link to="/contactus" style={{ textDecoration: 'none', color: 'white' }}>Contact us</Link>
                    </div>
                </div>
                <div className="col-4 mobile-view">
                    <div className="footer-title">Our products</div>
                    <div className="footer-sub-title">
                        <Link to="/hyperswap" style={{ textDecoration: 'none', color: 'white' }}>HyperSwap</Link>
                    </div>
                    <div className="footer-sub-title">SphereComp</div>
                    <div className="footer-sub-title">SphereComp Wallet</div>
                </div>
                <div className="col-4 mobile-view">
                    <div className="footer-title">Documents</div>
                    <div className="footer-sub-title">Whitepaper</div>
                    <div className="footer-sub-title">Tokenomics</div>
                    <div className="footer-sub-title">Governance</div>
                    <div className="footer-sub-title">Blog and news</div>
                </div>
                <div className="col-12 mobile-view">
                    <div className="footerend">
                        <p>©2020 BTCD Ltd | All right reserved</p>
                    </div>
                </div>
                <div className="col-md-3 web-view">
                    <div className="footer-title">Connect with us</div>
                    <ul className="social-icons">
                        <li> <a href="https://t.me/SpheriumCommunity" target="_blank"><img src={messanger} /> </a></li>
                        <li> <a href="https://twitter.com/SpheriumFinance" target="_blank"><img src={twitter} /></a> </li>
                        <li> <a href="https://www.linkedin.com/company/spherium" target="_blank"><img src={linkedin} /> </a></li>
                        <li> <a href="https://www.youtube.com/channel/UC3RKsQpOax4BWAxsDQosk7g" target="_blank"><img src={youtube} /></a></li>
                        <li> <a href="https://spheriumlabs.medium.com/" target="_blank"><img src={messanger1} /></a> </li>
                    </ul>
                </div>
                <div className="col-12 web-view">
                    <div className="footerend">
                        <p>©2020 BTCD Ltd | All right reserved</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer
