import React from 'react'
import governance from "../resources/images/governance.svg";
//import governance2x from "../resources/images/governance@2x.jpg";
//import governance3x from "../resources/images/governance@3x.jpg";

const Governance = () => {
    return (
        <div>
            <div className="governance-image">
                <img src={governance} />
            </div>
                <div className="description">
                    <p>Spherium aspires to be a true DeFi. The full control of the Governance model will be handed over to SPH token holders by March 31, 2022, at approximately 12:00 GMT. In the meantime, the Spherium core team will make decisions whenever needed for the wider interest of the Spherium ecosystem but will provide a 30-day period between decision and implementation.</p>
                </div>
                <div className="button-section web-view">
                    <a href="#" className="btn btn-primary">View Details</a>
                </div>
        </div>
    )
}

export default Governance
