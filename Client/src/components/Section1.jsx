import React from 'react'
import geography from "../resources/images/geography.gif";
import geographyPNG from "../resources/images/geography.png";
import globe from "../resources/images/globe.svg";

const Section1 = () => {
    return (
        <div>
            <div className="home-details-section">
                <div className="container">
                    <div className="row col-12">
                        <div className="col-md-6 col-sm-12">
                            <div className="headings">
                                <p>A decentralised and borderless financial system that gives users a complete control of their financials</p>
                            </div>
                            <div className="description">
                                <p>Aiming to be a decentralised platform for some of the most advanced Defi products and assets protocols whereby users can manage and trade assets on large liquidity pools cost effectively.</p>
                            </div>
                            <div className="row col-6 section1-buttons">
                                <a className="btn white-paper" href="#">Contact us</a>
		      	            <a className="btn white-paper" href="#">Whitepaper</a>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 text-align-center globe-section">
                            <img src={globe} className="geography" />
                            {/* {< img src={geographyPNG} srcset="images/geography@2x.png 2x, images/geography@3x.png 3x" className="geography" />} */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1
