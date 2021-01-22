import React from 'react'
import hyperswap from "../resources/images/hyperswap.png";
import spherecomp from "../resources/images/spherecomp.png";
import spheriumwallet from "../resources/images/spheriumwallet.png";
import right_arrow from "../resources/images/right_arrow.png";
import right_arrow_blue from "../resources/images/right_arrow_blue.png";
import { Link } from 'react-router-dom';

const products = [
    {
        id: "product1",
        productImg: hyperswap,
        productTittle: "HyperSwap",
        productDetails: "Decentralized Asset Swap based on an automated market-making mechanism with enhanced features",
    },
    {
        id: "product2",
        productImg: spherecomp,
        productTittle: "SphereComp",
        productDetails: "Decentralize money market where investors can trade digital assets with auto interest rates determined by law of supply & demand",
    },
    {
        id: "product3",
        productImg: spheriumwallet,
        productTittle: "Spherium Wallet",
        productDetails: "Decentralized and Secure Wallet for Spherium products and Services",
    },
]

const Products = () => {
    return (
        <div>
            <div class="product-section">
                <div class="title"> <span>Products</span> </div>
                <div class="row">
                    {
                        products.map((product) => {
                            return (
                                <div class="col-md-4 col-sm-12 prm0">
                                    <div class="product-sub-section">
                                        <img src={product.productImg} class="product-icon" />
                                        <p>
                                            <Link to="/hyperswap"><img src={right_arrow} class="right_arrow" />
                                                <img src={right_arrow_blue} class="right_arrow" />
                                            </Link>
                                        </p>
                                        <div class="title"> {product.productTittle} </div>
                                        <span>
                                            {product.productDetails}
                                        </span>
                                    </div>
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
