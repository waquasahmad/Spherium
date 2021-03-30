import React from 'react'
import video from "../resources/images/spheriumheatherpitch.mp4";

const Section2 = () => {
	

	return (
    <div>
      <div className="section2 wow fadeInUp" data-wow-delay="0.5s">
        <div className="row">
          <div className="col-md-5 col-sm-12">
            <div className="title">
              <p>One ecosystem with multiple DeFi offerings</p>
            </div>
            <div className="subtitle">
              <p>Spherium offers a complete suite of financial services comprising a universal wallet, token swap platform, money markets, and inter-blockchain liquidity transfer. Spherium will function as a global financial service provider, extending fundamental financial services to the unbanked.</p>
            </div>
          </div>
          <div className="col-md-7 col-sm-12 video-section">
            <video
              controls
              autoPlay="autoplay"
              width="100%"
              height="289"
              muted="muted"
              loop="loop"
            >
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;