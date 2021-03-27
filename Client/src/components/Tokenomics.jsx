import React from 'react'
import tokenomics from "../resources/images/tokenomics.svg";
import { Link } from 'react-router-dom';
//import tokenomics from "../resources/images/tokenomics.jpeg";

const Tokenomics = () => {
    return (
      <div>
        <div className="tokenomics-image wow fadeInUp" data-wow-delay=".5s">
          <img src={tokenomics} alt="Tokenomics" />
        </div>
        <div className="description">
          <p>
            The process of the Spherium token allocation will be based on a
            community-type distribution, whereby each of these stakeholders will
            play an important part of the ecosystem. 
            Spherium Labs and the Foundation are deeply committed to the long-term vesting that demonstrates our dedication to make Spherium the de-facto DeFi platform.
          </p>
        </div>
        <div className="button-section web-view">
          <a className="btn button" href="/document#tokenomics">
            View Details
          </a>
        </div>
      </div>
    );
}

export default Tokenomics
