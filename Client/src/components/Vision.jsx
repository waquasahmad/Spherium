import React from "react";
import { Link } from "react-router-dom";
import ceo from "../resources/images/ceo.jpeg";
import quote from "../resources/images/quote.png";

const Vision = () => {
  return (
    <div className="vision-section wow fadeInUp" data-wow-delay=".5s">
      <div className="row g-0">
        <div className="col-md-6 col-sm-12 left-container">
          <div className="title">A message from CEO</div>
          <div className="row g-0">
            <div className="col-md-12 col-5">
              <img src={ceo} className="ceo" alt="ceo" />
              <div className="clearfix"></div>
            </div>
            <div className="col-md-12 col-7">
              <div className="quote">
                <img src={quote} alt="quote" />
              </div>
              <div className="description">
                <div>
                  Banks are people making the rules. Finance is the knowledge of
                  the market specifying those rules.{" "}
                </div>
                <div>
                  <strong>
                    Spherium is the freedom to live by your own rules.
                  </strong>
                </div>
              </div>
              <div className="row col-md-12 signature">
                <div className="col-md-6 col-sm-12">
                  <span>
                    <strong>Alex Berstein</strong>
                  </span>
                  <br />
                  <span>CEO, Spherium Labs</span>
                </div>
                <div className="col-md-6 col-sm-12 text-align-right meet-our-team">
                  <Link to="/team">Meet our team</Link>
                </div>
              </div>
            </div>
            <div className="col-sm-12 mobile-view">
              <div className="title">Vision</div>
              <p>
                Spherium is one of the global leading platforms in the DeFi
                space making digital finance a part of people's lives by
                developing the most innovative tools of the DeFi sector.
                Spherium token/wallet/swap solutions will not only be
                transforming processes, businesses, goods, and services into an
                economic network of value but most importantly will create an
                infrastructure where everyone can become their wealth and asset
                manager via their mobile device.
              </p>

              <p>
                Spherium will play a vital part in evolving traditional finance
                and redistributing the profits and power balance of the shared
                financial system to the users. Spherium aims to create an
                ecosystem where every individual, irrespective of their
                geographical location, faith, and social standing becomes its
                own “Wealth Manager” that ensures maximum returns on their
                investments with relatively low risk. To realize this vision,
                Spherium’s team of 30 global DeFi experts with diverse areas of
                expertise including fintech, law, smart contract development,
                business development, AML/KYC, and blockchain research is
                focusing on services that will unleash the potential DeFi
                revolution.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 right-container web-view">
          <div className="title">Vision</div>
          <p>
            Spherium is one of the global leading platforms in the DeFi space
            making digital finance a part of people's lives by developing the
            most innovative tools of the DeFi sector. Spherium token/wallet/swap
            solutions will not only be transforming processes, businesses,
            goods, and services into an economic network of value but most
            importantly will create an infrastructure where everyone can become
            their wealth and asset manager via their mobile device.
          </p>

          <p>
            Spherium will play a vital part in evolving traditional finance and
            redistributing the profits and power balance of the shared financial
            system to the users. Spherium aims to create an ecosystem where
            every individual, irrespective of their geographical location,
            faith, and social standing becomes its own “Wealth Manager” that
            ensures maximum returns on their investments with relatively low
            risk. To realize this vision, Spherium’s team of 30 global DeFi
            experts with diverse areas of expertise including fintech, law,
            smart contract development, business development, AML/KYC, and
            blockchain research is focusing on services that will unleash the
            potential DeFi revolution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vision;
