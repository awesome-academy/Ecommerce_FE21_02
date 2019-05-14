import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import * as ROUTES from "app/constants/routes";
import { addToCart } from "../actions/cartAction";
import newProduct01 from "images/products/newproduct_1.png";
import { withRouter } from "react-router-dom";

class Product extends Component {
  onAddToCart(item) {
    this.props.addToCart(item);
  }
  onProductClicked(id) {
    const { history } = this.props;
    history.push(`${ROUTES.PRODUCT_DETAIL}/${id}`);
  }
  renderProduct(isDefault, isHasTag = false, product) {
    const thisItemInCart = this.props.cart.filter(
      item => item.id === product.id
    )[0];

    const {
      id,
      name,
      price,
      discountPercent,
      description,
      thumbnailURL,
      quantity
    } = product;
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
                <a
                  href="#"
                  className="product-box__link"
                  onClick={() => this.onProductClicked(id)}
                >
                  {name}
                </a>
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
          <a
            href="#"
            className="product-box__link"
            onClick={() => this.onProductClicked(id)}
          >
            <h3 className="heading-tertiary pt-4">{name}</h3>
          </a>
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
          <button
            className="btn btn-primary my-1"
            onClick={() => this.onAddToCart(product)}
          >
            add to cart ( {(thisItemInCart && thisItemInCart.quantity) || 0})
          </button>
        </div>
      </div>
    );
  }

  render() {
    const { isDefault, isHasTag, product } = this.props;
    return this.renderProduct(isDefault, isHasTag, product);
  }
}
const mapStateToProps = state => {
  const common = state.common;
  return {
    cart: common.cart,
    isDefault: common.productUI.isDefault
  };
};

export default compose(
  connect(
    mapStateToProps,
    { addToCart }
  ),
  withRouter
)(Product);
