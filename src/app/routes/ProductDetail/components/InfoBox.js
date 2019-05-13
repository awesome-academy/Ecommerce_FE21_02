import React from "react";
import staticImage from "images/detail-page/staticblock_6.png";
const InfoBox = ({ product }) => {
  return (
    <section className="product-info">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="product-info__tab">
              <a
                className="product-info__link product-info__link--active"
                href="#"
              >
                đặc điểm nổi bật
              </a>
              <a className="product-info__link" href="#">
                thông tin sản phẩm
              </a>
              <a className="product-info__link" href="#">
                đánh giá
              </a>
            </div>
            <div className="product-info__text">
              <p>{product.highlights}</p>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="product-info__image-box">
              <img className="product-info__image" src={staticImage} alt="" />
              <h2 className="product-info__image-text">Rượu nho </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoBox;
