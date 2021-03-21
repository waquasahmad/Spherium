import React from "react";
import footer_logo from "../resources/images/footer_logo.svg";
import messanger from "../resources/images/messanger.png";
import twitter from "../resources/images/twitter.png";
import linkedin from "../resources/images/linkedin.png";
import youtube from "../resources/images/youtube.png";
import messanger1 from "../resources/images/messanger1.png";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-fluid">
        <div className="row g-0">
          <div className="col-md-2 col-12">
            <img src={footer_logo} className="logo" alt="logo" />
            {/* <p>
              Spherium Pte. Ltd. 3 Fraser Street #05-25 Duo Tower, Singapore
              189352
            </p> */}
          </div>
          <hr className="line mobile-view" />
          <div className="col-12 mobile-view">
            <div className="footer-title">Connect with us</div>
            <ul className="social-icons">
              <li>
                {" "}
                <a href="https://t.me/SpheriumCommunity" target="_blank">
                  <img src={messanger} alt="messanger" />{" "}
                </a>
              </li>
              <li>
                {" "}
                <a href="https://twitter.com/SpheriumFinance" target="_blank">
                  <img src={twitter} alt="twitter" />
                </a>{" "}
              </li>
              <li>
                {" "}
                <a
                  href="https://www.linkedin.com/company/spherium"
                  target="_blank"
                >
                  <img src={linkedin} alt="social" />{" "}
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="https://www.youtube.com/channel/UC3RKsQpOax4BWAxsDQosk7g"
                  target="_blank"
                >
                  <img src={youtube} alt="social" />
                </a>
              </li>
              <li>
                {" "}
                <a href="https://spheriumlabs.medium.com/" target="_blank">
                  <img src={messanger1} alt="social" />
                </a>{" "}
              </li>
            </ul>
          </div>
          <hr className="line mobile-view" />
          <div className="col-md-1 col-5">
            <div className="footer-title">
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Home
              </Link>
            </div>
          </div>
          <div className="col-md-2 web-view">
            <div className="footer-title">Our products</div>
            <div className="footer-sub-title">
              <Link
                to="/hyperswap"
                style={{ textDecoration: "none", color: "white" }}
              >
                HyperSwap
              </Link>
            </div>
            <div className="footer-sub-title">
              <Link
                to="/spherecomp"
                style={{ textDecoration: "none", color: "white" }}
              >
                SphereComp
              </Link>
            </div>
            <div className="footer-sub-title">
              <Link
                to="/spheriumwallet"
                style={{ textDecoration: "none", color: "white" }}
              >
                Spherium Wallet
              </Link>
            </div>
          </div>
          <div className="col-md-1 col-2">
            <div className="footer-title">
              <Link
                to="/team"
                style={{ textDecoration: "none", color: "white" }}
              >
                Team
              </Link>
            </div>
          </div>
          <div className="col-md-2 web-view">
            <div className="footer-title">Documents</div>
            <div className="footer-sub-title">
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="/document#whitepaper"
              >
                Whitepaper
              </a>
            </div>
            <div className="footer-sub-title">
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="/document#tokenomics"
              >
                Tokenomics
              </a>
            </div>
            <div className="footer-sub-title">
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="/document#governance"
              >
                Governance
              </a>
            </div>
            {/* <div className="footer-sub-title">Blog and news</div> */}
          </div>

          <div className="col-md-2 col-5">
            <div className="footer-title">
              <Link
                to="/contactus"
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginLeft: "42px",
                }}
              >
                Contact us
              </Link>
            </div>
            <div
              className="footer-title web-view"
              style={{ marginLeft: "42px", marginTop: "20px" }}
            >
              Legal
            </div>
            <div className="footer-sub-title web-view">
              <a
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginLeft: "42px",
                }}
                href="/termandpolicy#service"
              >
                Terms of Use
              </a>
            </div>
            <div className="footer-sub-title web-view">
              <a
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginLeft: "42px",
                }}
                href="/termandpolicy#policy"
              >
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="col-5 mobile-view">
            <div className="footer-title">Our products</div>
            <div className="footer-sub-title">
              <Link
                to="/hyperswap"
                style={{ textDecoration: "none", color: "white" }}
              >
                HyperSwap
              </Link>
            </div>
            <div className="footer-sub-title">
              <Link
                to="/spherecomp"
                style={{ textDecoration: "none", color: "white" }}
              >
                SphereComp
              </Link>
            </div>
            <div className="footer-sub-title">
              <Link
                to="/spheriumwallet"
                style={{ textDecoration: "none", color: "white" }}
              >
                Spherium Wallet
              </Link>
            </div>
          </div>
          <div className="col-2 mobile-view">
            <div className="footer-title">Documents</div>
            <div className="footer-sub-title">
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="/document#whitepaper"
              >
                Whitepaper
              </a>
              {/*<Link to="/document" style={{ textDecoration: 'none', color: 'white' }}>Whitepaper</Link>*/}
            </div>
            <div className="footer-sub-title">
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="/document#tokenomics"
              >
                Tokenomics
              </a>
              {/*<Link to="/document" style={{ textDecoration: 'none', color: 'white' }}>Tokenomics</Link>*/}
            </div>
            <div className="footer-sub-title">
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="/document#governance"
              >
                Governance
              </a>
              {/*<Link to="/document" style={{ textDecoration: 'none', color: 'white' }}>Governance</Link>*/}
            </div>
            {/*<div className="footer-sub-title">Blog and news</div>*/}
          </div>
          <div className="col-5 mobile-view">
            <div className="footer-title" style={{ marginLeft: "42px" }}>
              Legal
            </div>
            <div className="footer-sub-title">
              <a
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginLeft: "40px",
                }}
                href="/termandpolicy#service"
              >
                Terms of Use
              </a>
            </div>
            <div className="footer-sub-title">
              <a
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginLeft: "41px",
                }}
                href="/termandpolicy#policy"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="col-12 mobile-view">
            <div className="footerend">
              <span>©2021 Spherium | All right reserved</span>
            </div>
          </div>
          <div className="col-md-2 web-view">
            <div className="footer-title">Connect with us</div>
            <div className="social-icons">
              <li>
                {" "}
                <a href="https://t.me/SpheriumCommunity" target="_blank">
                  <img src={messanger} alt="social" />{" "}
                </a>
              </li>
              <li>
                {" "}
                <a href="https://twitter.com/SpheriumFinance" target="_blank">
                  <img src={twitter} alt="social" />
                </a>{" "}
              </li>
              <li>
                {" "}
                <a
                  href="https://www.linkedin.com/company/spherium"
                  target="_blank"
                >
                  <img src={linkedin} alt="social" />{" "}
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="https://www.youtube.com/channel/UC3RKsQpOax4BWAxsDQosk7g"
                  target="_blank"
                >
                  <img src={youtube} alt="social" />
                </a>
              </li>
              <li>
                {" "}
                <a href="https://spheriumlabs.medium.com/" target="_blank">
                  <img src={messanger1} alt="social" />
                </a>{" "}
              </li>
            </div>
          </div>
          <div className="col-sm-12 web-view">
            <div className="footerend" alt="social">
              <p>©2021 Spherium | All right reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
