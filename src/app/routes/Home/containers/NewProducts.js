import React, { Component } from "react";
import Product from "app/components/Product";
import { connect } from "react-redux";

class NewProducts extends Component {
  renderList(products) {
    if (products) {
      let sortedProducts = this.getNewProducts(products);
      return sortedProducts.map((product, index) => {
        if (index > 3) {
          return;
        }
        return (
          <div className="col-sm-6 col-md-3">
            <Product key={product.id} product={product} isHasTag={true} />
          </div>
        );
      });
    }
  }
  getNewProducts(products) {
    return products.concat().sort(function(product01, product02) {
      let date01 = new Date(product01.createdAt);
      let date02 = new Date(product02.createdAt);
      return date02 - date01;
    });
  }
  render() {
    return (
      <section className="new-products">
        <div className="container">
          <h2 className="heading-secondary">Sản phẩm mới</h2>
          <div className="row p-3" id="js--new-products-list">
            {this.renderList(this.props.products)}
          </div>
        </div>
      </section>
    );
  }
}
const mapStateToProps = state => {
  const homePage = state.homePage;
  return {
    products: homePage.data.product.data
  };
};
export default connect(mapStateToProps)(NewProducts);
