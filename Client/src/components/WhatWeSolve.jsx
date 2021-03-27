import React from "react";
import solution from "../resources/images/what-solve-1.png";
import network from "../resources/images/what-solve-2.png";
import cost from "../resources/images/what-solve-3.png";
import { Link, useHistory } from "react-router-dom";

const WhatWeSolve = () => {
  const products = [
    {
      id: "0",
      productImg: solution,
      productTittle: "Scattered DeFi Solutions",
      productDetails:
        "Unified DeFi Landscape (SWAP + LENDING + STAKING + BORROWING + WALLET)",
    },
    {
      id: "1",
      productImg: network,
      productTittle: "Individual Blockchain Networks",
      productDetails:
        "Cross-Chain Interoperability (Parallel Implementation on Ethereum/Polygon & BSC)",
    },
    {
      id: "2",
      productImg: cost,
      productTittle: "High Transaction Cost, Time",
      productDetails:
        " Layer 2 Solutions & BSC",
    },
  ];


  return (
    <div>
      <div className="product-section what-we-solve wow fadeInUp" data-wow-delay="0.5s">
        <div className="title">
          {" "}
          <span>What We Solve</span>{" "}
        </div>
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-md-4 col-sm-12 prm0">
                <div
                  className="product-sub-section inner-sec text-white"
                  
                >
                  <img
                    src={product.productImg}
                    className="product-icon"
                    alt="products"
                  />
                  
                  <div className="title"> {product.productTittle} </div>
                  <span className="details">{product.productDetails}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhatWeSolve;
