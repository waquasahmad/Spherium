import React from "react";
import hyperswap from "../resources/images/hyperswap.svg";
import spherecomp from "../resources/images/spherecomp.svg";
import spheriumwallet from "../resources/images/spheriumwallet.svg";
import right_arrow from "../resources/images/right_arrow.png";
import right_arrow_blue from "../resources/images/right_arrow_blue.png";
import { Link, useHistory } from "react-router-dom";

const Products = () => {
  const history = useHistory();

  const products = [
    {
      id: "0",
      productImg: hyperswap,
      productTittle: "HyperSwap",
      productDetails:
        "Decentralized Asset Swap based on an automated market-making mechanism.",
    },
    {
      id: "1",
      productImg: spherecomp,
      productTittle: "SphereComp",
      productDetails:
        "Decentralized money market where investors can trade digital assets with auto interest rates.",
    },
    {
      id: "2",
      productImg: spheriumwallet,
      productTittle: "Spherium Wallet",
      productDetails:
        "Decentralized and Secure Wallet for Spherium products and Services with multiple wallet integration.",
    },
  ];

  const pageredirect = (event) => {
    switch (event) {
      case "0":
        history.push("/hyperswap");
        break;
      case "1":
        history.push("/spherecomp");
        break;
      case "2":
        history.push("/spheriumwallet");
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div className="product-section wow fadeInUp" data-wow-delay="0.5s">
        <div className="title">
          {" "}
          <span>Spherium Ecosystem</span>{" "}
        </div>
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-md-4 col-sm-12 prm0">
                <div
                  className="product-sub-section"
                  onClick={() => {
                    pageredirect(product.id);
                  }}
                >
                  <img
                    src={product.productImg}
                    className="product-icon"
                    alt="products"
                  />
                  <p>
                    <img
                      src={right_arrow}
                      className="right_arrow"
                      alt="arrow1"
                    />
                    <img
                      src={right_arrow_blue}
                      className="right_arrow"
                      alt="arrow2"
                    />
                  </p>
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

export default Products;
