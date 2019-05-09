import React, { Component } from "react";
import { connect } from "react-redux";
import Option from "../components/Option";
import Product from "app/components/Product";

class Content extends Component {
  renderList(products) {
    return products.map(product => {
      console.log(product);
      return <Product key={product.id} product={product} />;
    });
  }

  render() {
    return (
      <div className="product-list__item product-list__content">
        <Option />
        <div
          className={`product-list__list ${
            this.props.isDefaultList ? "product-list__list--default" : null
          }`}
        >
          {this.props.products && this.renderList(this.props.products)}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const productListStore = state.productListPage;
  const common = state.common;

  return {
    products: productListStore.data.product.data,
    categories: common.category.data,
    isDefaultList: productListStore.ui.productListContainer.isDefaultList
  };
};

export default connect(
  mapStateToProps,
  null
)(Content);
