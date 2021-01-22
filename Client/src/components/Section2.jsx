import React, { useEffect } from 'react'
import video from "../resources/images/spheriumheatherpitch.mp4";
import WOW from 'wowjs';

const Section2 = () => {


	useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
	});
	

	return (
		<div>
			<div className="section2 wow fadeInUp" data-wow-delay="0.5s">
				<div className="row">
					<div className="col-md-5 col-sm-12">
						<div className="title">
							<p>One ecosystem with multiple DeFi offerings</p>
						</div>
						<div className="subtitle">
							<p>Spherium offers a collection of DeFi services including a universally usable wallet, token swap platform, money markets, and inter-blockchain liquidity transfer, which will further be enriched by integrating new innovative services developed by the Spherium team in the near future.</p>
	    	            </div>
					</div>
					<div className="col-md-7 col-sm-12 video-section">
						<video controls autoplay="autoplay" width="100%" height="289" muted="muted" loop="loop">
							<source src={video} type="video/mp4" />
						</video>
					</div>
				</div>
			</div>

		</div>
	)
}

export default Section2
