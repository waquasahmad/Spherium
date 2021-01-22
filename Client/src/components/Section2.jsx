import React from 'react'
import video from "../resources/images/A-SV1.mp4";

const Section2 = () => {
	return (
		<div>
			<div className="section2">
				<div className="row">
					<div className="col-md-4 col-sm-12">
						<div className="title">One ecosystem with <br />multiple DeFi offerings</div>
						<div className="subtitle">
							Increased user experience creating a DeFi ecosystem with core products like money market, lending and others with an enhanced rewards structure.
	    	            </div>
					</div>
					<div className="col-md-2 col-sm-12"></div>
					<div className="col-md-6 col-sm-12 video-section">
						<video controls width="100%" height="289">
							<source src={video} type="video/mp4" />
						</video>
					</div>
				</div>
			</div>

		</div>
	)
}

export default Section2
