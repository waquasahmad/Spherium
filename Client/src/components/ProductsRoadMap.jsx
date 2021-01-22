import React from 'react'
import product_road_map from "../resources/images/product_road_map.png";
import product_road_map_mobile from "../resources/images/product_road_map_mobile.svg";

const ProductsRoadMap = () => {
    return (
        <div>
            <div class="product-road-section">
                <div class="title">
                    <span>Product roadmap</span>
                </div>
                <div class="col-12 row image-section">
                    <img class="web-view" src={product_road_map} />
                    {/* <img class="web-view" src={product_road_map} class="road-map" /> */}
                    <img class="mobile-view" src={product_road_map_mobile} />
                </div>
            </div>
        </div>
    )
}

export default ProductsRoadMap
