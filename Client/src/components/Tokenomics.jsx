import React from 'react'
import tokenomics from "../resources/images/tokenomics.png";
import tokenomics2x from "../resources/images/tokenomics@2x.png";
import tokenomics3x from "../resources/images/tokenomics@3x.png";

const Tokenomics = () => {
    return (
        <div>
            <div className="tokenomics-image">
                <img src={tokenomics} srcSet={`${tokenomics} 300w, ${tokenomics2x} 768w, ${tokenomics3x} 1280w`} alt="Tokenomics"/>
            </div>
                <div className="description">
                    <p>The process of the Spherium token allocation will be based on a community-type distribution, whereby each of these stakeholders will play an important part of the ecosystem.
                        Spherium Labs and the Foundation are deeply committed for the long-term vesting that clearly demonstrates this to all other network participants.</p>
                </div>
                <div className="button-section web-view">
                    <a href="#" className="btn btn-primary">View Details</a>
                </div>
            </div>
    )
}

export default Tokenomics
