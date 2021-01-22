import React, { useEffect } from 'react'
import product_road_map from "../resources/images/product_road_map.svg";
import product_road_map_mobile from "../resources/images/product_road_map_mobile.svg";

//Calling WOWjs
import WOW from 'wowjs';


const ProductsRoadMap = () => {

    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    });


    return (
            <div className="product-road-section">
                <div className="title">
                    <span>Product roadmap</span>
                </div>
                <div className="col-12 row image-section wow fadeInUp gx-0" data-wow-delay=".5s">
                    <img className="web-view" src={product_road_map} />
                    <img className="mobile-view" src={product_road_map_mobile} />
                </div>
            </div>
    )
}

export default ProductsRoadMap
