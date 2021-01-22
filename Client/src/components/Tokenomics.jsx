import React from 'react'
import tokenomics from "../resources/images/tokenomics.svg";
import { Link } from 'react-router-dom';
//import tokenomics from "../resources/images/token_update.png";

const Tokenomics = () => {
    return (
        <div>
            <div className="tokenomics-image wow fadeInUp" data-wow-delay=".5s">
                <img src={tokenomics} alt="Tokenomics"/>
            </div>
                <div className="description">
                    <p>The process of the Spherium token allocation will be based on a community-type distribution, whereby each of these stakeholders will play an important part of the ecosystem.
                        Spherium Labs and the Foundation are deeply committed for the long-term vesting that clearly demonstrates this to all other network participants.</p>
                </div>
                <div className="button-section web-view">
                    <Link to="/document" className="btn btn-primary" style={{ textDecoration: 'none', color: 'white' }}>View Details</Link>
                </div>
            </div>
    )
}

export default Tokenomics
