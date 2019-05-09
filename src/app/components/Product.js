import React, { Component } from "react";
import { connect } from "react-redux";
import newProduct01 from "images/products/newproduct_1.png";

class Product extends Component {
  renderProduct(isDefault, isHasTag = false) {
    const {
      name,
      price,
      discountPercent,
      description,
      thumbnailURL,
      quantity
    } = this.props.product;
    return isDefault ? (
      <div className="product">
        <div className="product-box">
          <div className="row">
            <div className="col-md-4">
              <div className="product-box__image-wrap">
                <img
                  className="product-box__image"
                  src={newProduct01}
                  alt="hotdeal"
                />
              </div>
            </div>
            <div className="col-md-8">
              <h3 className="heading-tertiary product-box__title pt-4">
                {name}
              </h3>
              <p className="number-highlight my-1">
                {discountPercent > 0 ? (price * discountPercent) / 100 : price}
                <sup className="number-highlight__sub">đ </sup>
                {discountPercent > 0 && (
                  <span className="number-highlight--muted">
                    {price}
                    <sup className="number-highlight__sub">đ </sup>
                  </span>
                )}
              </p>

              <div className="product-box__description">{description}</div>
              <div className="product-box__menu">
                <button className="btn btn-primary my-1">add to cart</button>
                <a className="product-box__menu-link" href="#">
                  {" "}
                  <i className="fas fa-heart" />
                  Yêu thích
                </a>
                <a className="product-box__menu-link" href="#">
                  {" "}
                  <i className="fas fa-chart-bar" />
                  So sánh
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    ) : (
      <div className="product product--hover-effect">
        <div className="thumbnail-box">
          <div className="thumbnail-box__image-wrap">
            <img
              className="thumbnail-box__image"
              src={newProduct01}
              alt="hotdeal"
            />
            <div className="thumbnail-box__menu">
              <a className="thumbnail-box__menu-link" href="#">
                {" "}
                <i className="fas fa-heart" />
                Yêu thích
              </a>
              <a className="thumbnail-box__menu-link" href="#">
                {" "}
                <i className="fas fa-chart-bar" />
                So sánh
              </a>
            </div>
          </div>
          {isHasTag && (
            <div className="thumbnail-box__shape">
              <span className="thumbnail-box__tag" id="js--product-tag">
                Sale{" "}
              </span>
            </div>
          )}

          <h3 className="heading-tertiary pt-4">{name}</h3>
          <p className="number-highlight number-highlight--small my-1">
            {discountPercent > 0 ? (price * discountPercent) / 100 : price}
            <sup className="number-highlight__sub">đ </sup>
            {discountPercent > 0 && (
              <span className="number-highlight--muted">
                {price}
                <sup className="number-highlight__sub">đ </sup>
              </span>
            )}
          </p>
          <button className="btn btn-primary my-1">add to cart</button>
        </div>
      </div>
    );
  }

  render() {
    const { isDefault, isHasTag } = this.props;
    return this.renderProduct(isDefault, isHasTag);
  }
}
const mapStateToProps = state => {
  const common = state.common;
  return {
    isDefault: common.productUI.isDefault
  };
};
export default connect(
  mapStateToProps,
  null
)(Product);
