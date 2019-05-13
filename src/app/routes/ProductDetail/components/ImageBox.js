import React from "react";
import hotproduct01 from "images/products/hotproduct_1.png";
import mainProduct from "images/products/detailblog_box.png";

const ImageBox = () => {
  return (
    <div className="row detail-images">
      <div className="col-lg-2 h-right-border d-none d-lg-block">
        <div className="detail-images__list">
          <div className="detail-images__item">
            <i className="fas fa-arrow-up" />
          </div>
          <div className="detail-images__item">
            <img className="detail-images__image" src={hotproduct01} alt="" />
          </div>
          <div className="detail-images__item">
            <img className="detail-images__image" src={hotproduct01} alt="" />
          </div>
          <div className="detail-images__item">
            <img className="detail-images__image" src={hotproduct01} alt="" />
          </div>
          <div className="detail-images__item">
            <img className="detail-images__image" src={hotproduct01} alt="" />
          </div>
          <div className="detail-images__item">
            <img className="detail-images__image" src={hotproduct01} alt="" />
          </div>
          <div className="detail-images__item">
            <i className="fas fa-arrow-down" />
          </div>
        </div>
      </div>
      <div className="col-lg-10">
        <div className="detail-images__image-box">
          <img className="detail-images__main-image" src={mainProduct} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ImageBox;
