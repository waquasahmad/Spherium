import React from "react";
import powered_logo1 from "../resources/images/powered_logo1.png";
import powered_logo2 from "../resources/images/powered_logo2.png";
import powered_logo3 from "../resources/images/powered_logo3.png";

const Section3 = () => {
    return (
        <div>
            <div className="section3 wow fadeInUp my-4" data-wow-delay="0.5s">
            <div className="title">
            {" "}
            <span>Spherium Powered by</span>{" "}
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="row p-4 section3-inner m-0">
                    <div className="col-md-4 text-center">
                        <img src={powered_logo1} className="img-fluid  ethereum" alt="ethereum" />
                    </div>
                    <div className="col-md-4 text-center">
                        <img src={powered_logo2} className="img-fluid binance" alt="binance" />
                    </div>
                    <div className="col-md-4 text-center">
                        <img src={powered_logo3} className="img-fluid polygon" alt="polygon" />
                    </div>
                    </div>
                </div>
                
            </div>
            </div>
        </div>
    );
}

export default Section3;