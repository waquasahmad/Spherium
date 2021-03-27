import React from 'react'
import governance from "../resources/images/governance.svg";
import { Link } from 'react-router-dom';
//import governance2x from "../resources/images/governance@2x.jpg";
//import governance3x from "../resources/images/governance@3x.jpg";

const Governance = () => {
    return (
      <div>
        <div className="governance-image wow fadeInUp" data-wow-delay=".5s">
          <img src={governance} alt="gov" />
        </div>
        <div className="description">
          <p>
          Spherium will implement its on-chain governance protocol by March 31, 2022, at approximately 12:00 GMT. Spherium Team and Foundation will be responsible for all development and implementation decisions until our on-chain governance protocol is live.
          </p>
        </div>
        <div className="button-section web-view">
          <a className="btn button" href="/document#governance">
            View Details
          </a>
        </div>
      </div>
    );
}

export default Governance
