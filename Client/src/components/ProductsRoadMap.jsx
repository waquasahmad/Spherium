import React from "react";
import product_road_map from "../resources/images/product_road_map.svg";
import product_road_map_mobile from "../resources/images/product_road_map_mobile.svg";

const ProductsRoadMap = () => {
  return (
    <div className="product-road-section wow fadeInUp" data-wow-delay="0.5s">
      <div className="title">
        <span>Product roadmap</span>
      </div>
      <div className="col-12 row image-section gx-0">
        <img className="web-view" src={product_road_map} alt="roadmapweb"/>
        <img className="mobile-view" src={product_road_map_mobile} alt="roadmapmob"/>
      </div>
    </div>
  );
};

export default ProductsRoadMap;
