import React from "react";
import banner from "images/product-list-page/banner.jpg";
const Banner = () => {
  return (
    <div className="container">
      <img className="banner__image d-block w-100" src={banner} />
    </div>
  );
};

export default Banner;
