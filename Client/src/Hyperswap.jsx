import React from "react";
import spherium from "./resources/images/spherium.mp4";
import ellipse from "./resources/images/ellipse.svg";
import hypermain from "./resources/images/hypermain.png";
import hypermain2x from "./resources/images/hypermain@2x.png";
import hypermain3x from "./resources/images/hypermain@3x.png";
import hypersection2 from "./resources/images/hypersection2.png";
import hypersection22x from "./resources/images/hypersection2@2x.png";
import hypersection23x from "./resources/images/hypersection2@3x.png";
import rewards_progress from "./resources/images/rewards_progress.svg";
import checked from "./resources/images/checked.png";
import checked2x from "./resources/images/checked@2x.png";
import checked3x from "./resources/images/checked@3x.png";
import hyperswapsection2 from "./resources/images/hyperswapsection2.png";
import hyperswapsection22x from "./resources/images/hyperswapsection2@2x.png";
import hyperswapsection23x from "./resources/images/hyperswapsection2@3x.png";
import mobileprogress from "./resources/images/mobileprogress.png";
import mobileprogress2x from "./resources/images/mobileprogress@2x.png";
import mobileprogress3x from "./resources/images/mobileprogress@3x.png";
import spherecomp from "./resources/images/spherecomp.png";
import spherecomp2x from "./resources/images/spherecomp@2x.png";
import spherecomp3x from "./resources/images/spherecomp@3x.png";
import spheriumwallet from "./resources/images/spheriumwallet.png";
import spheriumwallet2x from "./resources/images/spheriumwallet@2x.png";
import spheriumwallet3x from "./resources/images/spheriumwallet@3x.png";
import right_arrow from "./resources/images/right_arrow.png";
import right_arrow_blue from "./resources/images/right_arrow_blue.png";
import Choosewallet from "./resources/images/Choose wallet.png";
import Choosewallet2x from "./resources/images/Choose wallet@2x.png";
import Choosewallet3x from "./resources/images/Choose wallet@3x.png";
import Exchangecrypto from "./resources/images/Exchange crypto.png";
import Exchangecrypto2x from "./resources/images/Exchange crypto@2x.png";
import Exchangecrypto3x from "./resources/images/Exchange crypto@3x.png";
// import Swap_selectToken from "./resources/images/Swap_selectToken.png";
// import Swap_selectToken2x from "./resources/images/Swap_selectToken@2x.png";
// import Swap_selectToken3x from "./resources/images/Swap_selectToken@3x.png";
// import dropdown from "./resources/images/dropdown.png";
// import dropdown2x from "./resources/images/dropdown@2x.png";
// import dropdown3x from "./resources/images/dropdown@3x.png";
import Wallet_Main from "./resources/images/Wallet_Main.png";
import Wallet_Main2x from "./resources/images/Wallet_Main@2x.png";
import Wallet_Main3x from "./resources/images/Wallet_Main@3x.png";
import { useHistory } from "react-router-dom";

const Section1 = () => {
  return (
    <div>
      <div className="hyperswap-section-1-container">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="hyperswap" data-aos="fade-up">
                <img
                  src={hypermain}
                  srcSet={`${hypermain} 300w, ${hypermain2x} 768w, ${hypermain3x} 1280w`}
                  alt="group"
                  className="headingicon"
                />
                <p className="heading">
                  Decentralized Asset Swap based on an automated market-making
                  mechanism
                </p>
              </div>
              <div className="description" data-aos="fade-up">
                <p>
                  HyperSwap will provide a decentralised platform for swapping
                  ERC20 tokens using a cutting-edge Automated Market Maker (AMM)
                  algorithm that enables the liquidity providers, rather than
                  arbitrageurs, to capture profits by reducing the price skew
                  (for an asset in a pool) and bringing the asset price back to
                  the market price.
                </p>
              </div>
            </div>
            <div
              className="col-md-6 col-sm-12 text-align-center mobile"
              data-aos="fade-up"
            >
              <img
                src={Choosewallet}
                srcSet={`${Choosewallet} 300w, ${Choosewallet2x} 768w, ${Choosewallet3x} 1280w`}
                className="mobileWallets"
                alt="Choosewallet"
              />
              <img
                src={Exchangecrypto}
                srcSet={`${Exchangecrypto} 300w, ${Exchangecrypto2x} 768w, ${Exchangecrypto3x} 1280w`}
                className="mobileExchange"
                alt="Exchangecrypto"
              />
            </div>
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
          src={hypersection2}
          srcSet={`${hypersection2} 300w, ${hypersection22x} 768w, ${hypersection23x} 1280w`}
          className="web-view "
          alt="group"
        />
        <img
          src={hyperswapsection2}
          srcSet={`${hyperswapsection2} 300w, ${hyperswapsection22x} 768w, ${hyperswapsection23x} 1280w`}
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

const buttons = [
  {
    heading: "Earn SPH tokens via liquidity mining",
  },
  {
    heading: "Earn Pool's trading fee and staking rewards",
  },
];

const Section3 = () => {
  return (
    <div className="hyperswap-section-3-container" data-aos="fade-up">
      <div className="part-1">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="heading">
              <p>The best rewards in the DeFi Swap platform</p>
            </div>
          </div>
          {/* <div className="col-md-12 btns-hyperswap"> */}
          {buttons.map((button) => {
            return (
              <div className="col-md-5 col-12">
                <div className="btns">
                  <img
                    src={checked}
                    srcSet={`${checked} 300w, ${checked2x} 768w, ${checked3x} 1280w`}
                    className="check"
                    alt="checked"
                  />
                  <span className="btnheading">{button.heading}</span>
                </div>
              </div>
            );
          })}

          {/* </div> */}
          <div className="mobileprogress col-12">
            <img
              src={mobileprogress}
              srcSet={`${mobileprogress} 300w, ${mobileprogress2x} 768w, ${mobileprogress3x} 1280w`}
              className="mobile-view"
              alt="mobileprogress"
            />
          </div>
        </div>
      </div>
      <div className="part-2 web-view">
        <div className="row">
          <div className="col-12 bar">
            <div>
              <img
                className="progressbar"
                src={rewards_progress}
                alt="progressbar"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Section4 = () => {
  return (
    <div className="hyperswap-section-4-container" data-aos="fade-up">
      <div className="row">
        {/* <div className="col-12 tittle">
                    <p>Loreum ipsum dolor sit amet, ipsum loreum dolor ipsum sit amet</p>
                </div> */}
        <div className="col-12 subtittle">
          <p>
            HyperSwap will adopt the concept of virtual balances; return more of
            the profit to liquidity providers instead of arbitrage traders. Will
            small window of opportunity due to high slippage trade, the
            arbitrageurs return a much higher proportion of the price slippage
            to the pool
          </p>
        </div>
        <div className="col-12 video-section">
          {/* <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                        <source src={spherium} type="video/mp4">
                    </video> */}

          <video
            playsInline
            autoplay="autoplay"
            width="100%"
            height="300"
            muted="muted"
            loop="loop"
          >
            <source src={spherium} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

const Section5 = () => {
  return (
    <div className="hyperswap-section-5-container section5" data-aos="fade-up">
      <div className="row">
        <div className="col-md-6 imagesection web-view">
          <img
            src={Wallet_Main}
            srcSet={`${Wallet_Main} 300w, ${Wallet_Main2x} 768w, ${Wallet_Main3x} 1280w`}
            className="wallet_main"
            alt="Wallet_Main"
          />
        </div>
        <div className="col-md-6 col-sm-12 headingsection">
          <div className="heading">
            <span>Extending HyperSwap to</span>
          </div>
          <div className="row g-0 tittle1">
            <div className="col-md-1 col-1">
              <img src={ellipse} className="bulett" alt="ellipse" />
            </div>
            <div className="col-md-11 col-10">
              <p className="description1">
                Layer 2 (or Application layer) protocols for mitigating the high
                transaction cost (Gas fee) while maintaining the security
                guarantee of layer 1 (or Settlement layer )
              </p>
            </div>
          </div>
          <div className="row g-0 tittle2">
            <div className="col-md-1 col-1">
              <img src={ellipse} className="bulett" alt="ellipse" />
            </div>
            <div className="col-md-11 col-11">
              <p className="description2">
                Cross Chain Swap using platforms such as RENVM
              </p>
            </div>
          </div>
          <div className="col-sm-12 imagesection mobile-view">
            <img
              src={Wallet_Main}
              srcSet={`${Wallet_Main} 300w, ${Wallet_Main2x} 768w, ${Wallet_Main3x} 1280w`}
              className="wallet_main"
              alt="Wallet_Main"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Section6 = () => {
  const history = useHistory();

  const products = [
    {
      id: "0",
      productImg: spherecomp,
      productImg2x: spherecomp2x,
      productImg3x: spherecomp3x,
      productTittle: "SphereComp",
    },
    {
      id: "1",
      productImg: spheriumwallet,
      productImg2x: spheriumwallet2x,
      productImg3x: spheriumwallet3x,
      productTittle: "Spherium Wallet",
    },
  ];

  const pageredirect = (event) => {
    console.log(event);

    switch (event) {
      case "0":
        console.log("one");
        history.push("/spherecomp");
        break;
      case "1":
        console.log("two");
        history.push("/spheriumwallet");
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
                  srcSet={`${product.productImg} 300w, ${product.productImg2x} 768w, ${product.productImg3x} 1280w`}
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

const Hyperswap = () => {
  return (
    <div>
      <Section1 />
      <div className="container sections-start">
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </div>
    </div>
  );
};

export default Hyperswap;
