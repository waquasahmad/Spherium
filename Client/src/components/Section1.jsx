import React from "react";
import { Link } from "react-router-dom";
import globe from "../resources/images/globe.svg";
import halfglobe from "../resources/images/halfglobe.svg";

const Section1 = () => {
  return (
    <div>
      <div className="home-details-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12" data-aos="fade-up">
              <div className="headings">
                <p>
                  A decentralised and borderless financial system that gives
                  users a complete control of their finances
                </p>
              </div>
              <div className="description">
                <p>
                  Transparent, Decentralized, non-custodial, and user-friendly
                  one-stop platform in the De-Fi space with a minimal effort.
                </p>
              </div>
              <div className="row col-12 section1-buttons">
                <Link className="btn white-paper" to="/contactus">
                  Contact us
                </Link>{" "}
                &nbsp; &nbsp; &nbsp; &nbsp;
                <Link className="btn white-paper" to="/document">
                  Whitepaper
                </Link>
              </div>
            </div>
            <div
              className="col-md-6 col-sm-12 text-align-right globe-section"
              data-aos="fade-up"
            >
              <img src={globe} className="geography" alt="globe" />
              {/* <img src={halfglobe} className="halfglobe mobile-view" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
