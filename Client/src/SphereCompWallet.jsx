import React from 'react';
import spherewallettop from './resources/images/spherewallettop.png';
import spherewallettop2x from './resources/images/spherewallettop@2x.png';
import spherewallettop3x from './resources/images/spherewallettop@3x.png';
import walletcomponent from './resources/images/walletcomponent.png';
import walletcomponent2x from './resources/images/walletcomponent@2x.png';
import walletcomponent3x from './resources/images/walletcomponent@3x.png';
import walletdigram from './resources/images/walletdigram.png';
import walletdigram2x from './resources/images/walletdigram@2x.png';
import walletdigram3x from './resources/images/walletdigram@3x.png';
import walletmobiledigram from './resources/images/walletmobiledigram.png';
import walletmobiledigram2x from './resources/images/walletmobiledigram@2x.png';
import walletmobiledigram3x from './resources/images/walletmobiledigram@3x.png';
import Wallet_Main from './resources/images/Wallet_Main.png';
import Wallet_Main2x from './resources/images/Wallet_Main@2x.png';
import Wallet_Main3x from './resources/images/Wallet_Main@3x.png';
import ellipse from "./resources/images/ellipse.svg";
import SendMondey_Success from './resources/images/SendMondey_Success.png';
import SendMondey_Success2x from './resources/images/SendMondey_Success@2x.png';
import SendMondey_Success3x from './resources/images/SendMondey_Success@3x.png';
import spheriumwallet from "./resources/images/spheriumwallet.png";
import spheriumwallet2x from "./resources/images/spheriumwallet@2x.png";
import spheriumwallet3x from "./resources/images/spheriumwallet@3x.png";
import spherecomp from "./resources/images/spherecomp.png";
import spherecomp2x from "./resources/images/spherecomp@2x.png";
import spherecomp3x from "./resources/images/spherecomp@3x.png";
import right_arrow from "./resources/images/right_arrow.png";
import right_arrow_blue from "./resources/images/right_arrow_blue.png";
import hyperswap from "./resources/images/hyperswap.png";
import hyperswap2x from "./resources/images/hyperswap@2x.png";
import hyperswap3x from "./resources/images/hyperswap@3x.png";
import { useHistory } from 'react-router-dom';


const Section1 = () => {
    return (
        <div>
            <div className="wallet-section-1-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12" data-aos="fade-right">
                            <div className="spherecompwallet">
                                <img src={spherewallettop} srcSet={`${spherewallettop} 300w, ${spherewallettop2x} 768w, ${spherewallettop3x} 1280w`} alt="group" className="headingicon" />
                                <p className="heading">Decentralized and Secure Wallet for Spherium products and Services</p>
                            </div>
                            <div className="description">
                                <p>Spherium Wallet is a non-custodial and secure mobile wallet for ERC20 tokens, which will facilitate our customers to use all the services provided by the Spherium ecosystem anytime and anywhere from their mobile device.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 text-align-center" data-aos="fade-left">
                            <img src={walletcomponent} srcSet={`${walletcomponent} 300w, ${walletcomponent2x} 768w, ${walletcomponent3x} 1280w`} className="component" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



const Section2 = () => {
    return (
        <div className="text-center" data-aos="fade-in-up">
            <div className="section2">
                <img src={walletdigram} srcSet={`${walletdigram} 300w, ${walletdigram2x} 768w, ${walletdigram3x} 1280w`} className="web-view " alt="group" style={{ width: "911.9px", height: "346.8px", margin: "auto" }} />
                <img src={walletmobiledigram} srcSet={`${walletmobiledigram} 300w, ${walletmobiledigram2x} 768w, ${walletmobiledigram3x} 1280w`} className="mobile-view" alt="group" style={{
                    marginTop: "40px"
                }} />
            </div>
        </div>
    )
}



const Section3 = () => {
    return (
        <div className="wallet-section-3-container" data-aos="fade-in-up">
            <div className="row g-0">
                <div className="col-md-6 col-sm-12 headingsection" data-aos="fade-right">
                    <div className="heading">
                        <span>Looking ahead</span>
                    </div>
                    <div className="row g-0 tittle1">
                        <div className="col-md-1 col-1">
                            <img src={ellipse} className="bulett" />
                        </div>
                        <div className="col-md-11 col-10">
                            <p className="description1">Additional cutting edge features, such as post-quantum cryptography powered security and multi-signature aggregation capabilities will be part of the wallet in the roadmap ahead.</p>
                        </div>
                    </div>
                    <div className="row g-0 tittle2">
                        <div className="col-md-1 col-1">
                            <img src={ellipse} className="bulett" />
                        </div>
                        <div className="col-md-11 col-11">
                            <p className="description2">Furthermore, Spherium wallet will evolve to include staking opportunities for other ERC20 tokens and services such as virtual debit cards so that users can buy and pay with their cryptocurrencies.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 imagesection web-view" data-aos="fade-left">
                    <img src={SendMondey_Success} srcSet={`${SendMondey_Success} 300w, ${SendMondey_Success2x} 768w, ${SendMondey_Success3x} 1280w`} className="sendmondey_success" />
                </div>
                <div className="col-sm-12 imagesection mobile-view" data-aos="fade-left">
                    <img src={Wallet_Main} srcSet={`${Wallet_Main} 300w, ${Wallet_Main2x} 768w, ${Wallet_Main3x} 1280w`} className="wallet_main" />
                </div>
            </div>
        </div>
    )
}




const Section4 = () => {

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
        productImg: hyperswap,
        productImg2x: hyperswap2x,
        productImg3x: hyperswap3x,
        productTittle: "HyperSwap",
    },
]

const pageredirect = (event) => {
    
    switch (event) {
        case "0":
            history.push("/spherecomp");
            break;
        case "1":
            history.push("/hyperswap")
            break;
        default:
            break;
    }
};
    return (
        <div className="hyperswap-section-6-container">
            <div className="row">
                {
                    products.map((product) => {
                        return (
                            <div className="col-md-6 col-6" data-aos="fade-up">
                                <div className="subsection" onClick={() => { pageredirect(product.id) }}>
                                    <img src={product.productImg} srcSet={`${product.productImg} 300w, ${product.productImg2x} 768w, ${product.productImg3x} 1280w`} className="product_icon" />
                                    <p className="mobile-view">
                                        <img src={right_arrow} className="right_arrow" />
                                        <img src={right_arrow_blue} className="right_arrow" />
                                    </p>
                                    <div className="productname">
                                        <span >{product.productTittle}</span>
                                        <p className="web-view">
                                            <img src={right_arrow} className="right_arrow" />
                                            <img src={right_arrow_blue} className="right_arrow" />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}





const SphereCompWallet = () => {
    return (
        <div>
            <Section1 />
            <div className="container sections-start">
                <Section2 />
                <Section3 />
                <Section4/>
            </div>
        </div>
    )
}

export default SphereCompWallet;