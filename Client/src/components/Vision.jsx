import React from 'react'
import ceo from "../resources/images/ceo.jpeg";
import quote from "../resources/images/quote.png";

const Vision = () => {
    return (
            <div className="vision-section col-12 prm0">
                <div className="row">
                    <div className="col-md-6 col-sm-12 left-container">
                        <div className="title">
                            A message from CEO
	                    </div>
                        <img src={ceo} className="ceo" />
                        {/* <div className="clearfix"></div> */}
                        <div className="quote">
                            <img src={quote} />
                        </div>
                        <div className="description">
                            <div>Banks are people making the rules. Finance is the knowledge of the market specifying those rules. </div>
                            <div><strong>Spherium is the freedom to live by your own rules.</strong></div>
                        </div>
                        <div className="row col-md-12 signature">
                            <div className="col-md-6 col-sm-12">
                                <span><strong>Alex Berstein</strong></span><br />
                                <span>CEO, Spherium Labs</span>
                            </div>
                            <div className="col-md-6 col-sm-12 text-align-right meet-our-team">
                                <a href="#">Meet our team</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 right-container">
                        <div className="title">
                            Vision
	                    </div>
                        <p>Spherium aims to bring real world assets into a digital finance circuits through the dynamics of decentralised automation. Spherium is architected with secure and scalable workflows powered by blockchain protocols. Spherium will facilitate the circulation of these assets from the virtual space to the real world as valuable tokens. In doing so, Spherium will be creating a circular economy, making it timely, trustworthy and transparent.</p>

                        <p>Spherium will be converting isolated goods and services into an economic network of valuable tokens. The Spherium native token will connect people, processes and businesses.</p>
                    </div>
                </div>
            </div>
    )
}

export default Vision
