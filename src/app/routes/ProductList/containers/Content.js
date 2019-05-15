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
  getProductListClassName = isDefaultList => {
    if (isDefaultList) {
      return "product-list__list product-list__list--default";
    } else {
      return "product-list__list";
    }
  };
  render() {
    return (
      <div className="product-list__item product-list__content">
        <Option />
        <div className={this.getProductListClassName(this.props.isDefaultList)}>
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
