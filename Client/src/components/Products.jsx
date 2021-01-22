import React from 'react'
import hyperswap from "../resources/images/hyperswap.png";
import spherecomp from "../resources/images/spherecomp.png";
import spheriumwallet from "../resources/images/spheriumwallet.png";
import right_arrow from "../resources/images/right_arrow.png";
import right_arrow_blue from "../resources/images/right_arrow_blue.png";
import { Link, useHistory } from 'react-router-dom';

const products = [
    {
        id: "0",
        productImg: hyperswap,
        productTittle: "HyperSwap",
        productDetails: "Decentralized Asset Swap based on an automated market-making mechanism with enhanced features",
    },
    {
        id: "1",
        productImg: spherecomp,
        productTittle: "SphereComp",
        productDetails: "Decentralize money market where investors can trade digital assets with auto interest rates determined by law of supply & demand",
    },
    {
        id: "2",
        productImg: spheriumwallet,
        productTittle: "Spherium Wallet",
        productDetails: "Decentralized and Secure Wallet for Spherium products and Services",
    },
]






const Products = () => {

    const history = useHistory();

    const products = [
        {
            id: "0",
            productImg: hyperswap,
            productTittle: "HyperSwap",
            productDetails: "Decentralized Asset Swap based on an automated market-making mechanism with enhanced features",
        },
        {
            id: "1",
            productImg: spherecomp,
            productTittle: "SphereComp",
            productDetails: "Decentralize money market where investors can trade digital assets with auto interest rates.",
        },
        {
            id: "2",
            productImg: spheriumwallet,
            productTittle: "Spherium Wallet",
            productDetails: "Decentralized and Secure Wallet for Spherium products and Services with multiple wallet integration.",
        },
    ]

    const pageredirect = (event) => {
    
        switch (event) {
            case "0":
                history.push("/hyperswap");
                break;
            case "1":
                history.push("/spherecomp")
                break;
            case "2":
                history.push("/spherecompwallet");
                break;
            default:
                break;
        }
    };

    return (
        <div>
            <div className="product-section wow fadeInUp" data-wow-delay=".5s">
                <div className="title"> <span>Products</span> </div>
                <div className="row">
                    {
                        products.map((product) => {
                            return (
                                <div className="col-md-4 col-sm-12 prm0">
                                    {/* <Link to="{id}" style={{ textDecoration: 'none'}}> */}
                                        <div className="product-sub-section" onClick={() => { pageredirect(product.id) }}>
                                            <img src={product.productImg} className="product-icon" />
                                            <p>
                                                <img src={right_arrow} className="right_arrow" />
                                                <img src={right_arrow_blue} className="right_arrow" />

                                            </p>
                                            <div className="title"> {product.productTittle} </div>
                                            <span className="details">
                                                {product.productDetails}
                                            </span>
                                        </div>
                                    {/* </Link> */}
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Products
