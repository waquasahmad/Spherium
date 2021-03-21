import React from "react";
import spherecomptop from "./resources/images/spherecomptop.png";
import spherecomptop2x from "./resources/images/spherecomptop@2x.png";
import spherecomptop3x from "./resources/images/spherecomptop@3x.png";
import Wallet from "./resources/images/Wallet.png";
import Wallet2x from "./resources/images/Wallet@2x.png";
import Wallet3x from "./resources/images/Wallet@3x.png";
import Wallet_Main from "./resources/images/Wallet_Main.png";
import Wallet_Main2x from "./resources/images/Wallet_Main@2x.png";
import Wallet_Main3x from "./resources/images/Wallet_Main@3x.png";
import spherecompdigram from "./resources/images/spherecompdigram.svg";
// import spherecompdigram2x from "./resources/images/spherecompdigram@2x.png";
// import spherecompdigram3x from "./resources/images/spherecompdigram@3x.png";
import spherecompdigramM from "./resources/images/spherecompdigramM.svg";
// import spherecompdigramM2x from './resources/images/spherecompdigramM@2x.png';
// import spherecompdigramM3x from './resources/images/spherecompdigramM@3x.png';
import one from "./resources/images/one.svg";
import two from "./resources/images/two.svg";
import three from "./resources/images/three.svg";
import cube from "./resources/images/cube.svg";
import vline from "./resources/images/vline.svg";
import mfLine from "./resources/images/mfLine.svg";
import msLine from "./resources/images/msLine.svg";
import spheriumwallet from "./resources/images/spheriumwallet.svg";
import spheriumwallet2x from "./resources/images/spheriumwallet@2x.png";
import spheriumwallet3x from "./resources/images/spheriumwallet@3x.png";
import right_arrow from "./resources/images/right_arrow.png";
import right_arrow_blue from "./resources/images/right_arrow_blue.png";
import hyperswap from "./resources/images/hyperswap.svg";
import hyperswap2x from "./resources/images/hyperswap@2x.png";
import hyperswap3x from "./resources/images/hyperswap@3x.png";
import { useHistory } from "react-router-dom";

const Section1 = () => {
  return (
    <div className="spherecomp-section-1-container">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12" data-aos="fade-up">
            <div className="spherecomp">
              <img
                src={spherecomptop}
                srcSet={`${spherecomptop} 300w, ${spherecomptop2x} 768w, ${spherecomptop3x} 1280w`}
                alt="group"
                className="headingicon"
              />
              <p className="heading">
                Decentralized money markets where investors can lend or borrow
                digital assets with interest rates determined by the law of
                supply and demand
              </p>
            </div>
          </div>
          <div
            className="col-md-6 col-sm-12 text-align-center mobile"
            data-aos="fade-up"
          >
            <img
              src={Wallet}
              srcSet={`${Wallet} 300w, ${Wallet2x} 768w, ${Wallet3x} 1280w`}
              className="wallets"
              alt="Wallet"
            />
            <img
              src={Wallet_Main}
              srcSet={`${Wallet_Main} 300w, ${Wallet_Main2x} 768w, ${Wallet_Main3x} 1280w`}
              className="adrian"
              alt="Wallet_Main"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="text-center" data-aos="fade-up">
      <div className="section2">
        <img
          src={spherecompdigram}
          className="web-view "
          alt="group"
          style={{ height: "346.8px", margin: "auto" }}
        />
        <img
          src={spherecompdigramM}
          className="mobile-view"
          alt="group"
          style={{
            marginTop: "40px",
          }}
        />
      </div>
    </div>
  );
};

const Section3 = () => {
  return (
    <div className="spherecomp-section-3-container" data-aos="fade-up">
      <div className="title">
        {" "}
        <span>How it works</span>{" "}
      </div>
      <div className="row subcontainer">
        <div className="col-md-1 col-3 number">
          <img src={one} alt="one" className="one" />
        </div>
        <div className="col-md-6 col-9 heading">
          <p className="description">
            AMM provides lenders to earn interest on supply of their digital
            assets into the protocol.
          </p>
        </div>
        <div className="col-md-12 col-3 mobile-view">
          <img src={mfLine} alt="vline" className="line" />
        </div>
        <div className="col-md-5 col-9">
          <img src={cube} alt="cube" className="cube1" />
        </div>
        <div className="col-md-12 web-view">
          <img src={vline} alt="vline" className="line" />
        </div>
        <div className="col-md-1 col-3 number">
          <img src={two} alt="two" className="two" />
        </div>
        <div className="col-md-6 col-9 heading">
          <p className="description">
            Smart contract aggregates the total liquidity of each asset into a
            pooled fund, which is available for borrowers to borrow.
          </p>
        </div>
        <div className="col-md-12 col-3 mobile-view">
          <img src={msLine} alt="vline" className="line" />
        </div>
        <div className="col-md-5 col-9">
          <img src={cube} alt="cube" className="cube2" />
        </div>
        <div className="col-md-12 web-view">
          <img src={vline} alt="vline" className="line" />
        </div>
        <div className="col-md-1 col-3 number">
          <img src={three} alt="three" className="three" />
        </div>
        <div className="col-md-6 col-9 heading">
          <p className="description">
            Loans are not matched individually between lenders and borrowers,
            but are taken from the pooled fund. Borrowers pay interest, which is
            distributed proportionately to the liquidity Lenders provide.
          </p>
        </div>
        <div className="col-3 mobile-view"></div>
        <div className="col-md-5 col-9">
          <img src={cube} alt="cube" className="cube3" />
        </div>
      </div>
    </div>
  );
};

const Section4 = () => {
  const history = useHistory();

  const products = [
    {
      id: "0",
      productImg: spheriumwallet,
      productTittle: "Spherium Wallet",
    },
    {
      id: "1",
      productImg: hyperswap,
      productTittle: "HyperSwap",
    },
  ];

  const pageredirect = (event) => {
    switch (event) {
      case "0":
        history.push("/spheriumwallet");
        break;
      case "1":
        history.push("/hyperswap");
        break;
      default:
        break;
    }
  };

  return (
    <div className="hyperswap-section-6-container" data-aos="fade-up">
      <div className="row">
        {products.map((product) => {
          return (
            <div className="col-md-6 col-6">
              <div
                className="subsection"
                onClick={() => {
                  pageredirect(product.id);
                }}
              >
                <img
                  src={product.productImg}
                 // srcSet={`${product.productImg} 300w, ${product.productImg2x} 768w, ${product.productImg3x} 1280w`}
                  className="product_icon"
                  alt="product"
                />
                <p className="mobile-view">
                  <img src={right_arrow} className="right_arrow" alt="arrow" />
                  <img
                    src={right_arrow_blue}
                    className="right_arrow"
                    alt="arrow"
                  />
                </p>
                <div className="productname">
                  <span>{product.productTittle}</span>
                  <p className="web-view">
                    <img
                      src={right_arrow}
                      className="right_arrow"
                      alt="arrow"
                    />
                    <img
                      src={right_arrow_blue}
                      className="right_arrow"
                      alt="arrow"
                    />
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const SphereComp = () => {
  return (
    <div>
      <Section1 />
      <div className="container sections-start">
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
    </div>
  );
};

export default SphereComp;
