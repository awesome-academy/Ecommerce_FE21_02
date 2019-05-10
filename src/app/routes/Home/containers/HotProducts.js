import React, { Component } from "react";
import Product from "app/components/Product";
import { connect } from "react-redux";

class HotProducts extends Component {
  renderList(products) {
    if (products) {
      return products.map((product, index) => {
        if (index > 3) {
          return;
        }
        return (
          <div className="col-sm-6 col-md-3">
            <Product key={product.id} product={product} />
          </div>
        );
      });
    }
  }

  render() {
    return (
      <section className="hot-products">
        <div className="container">
          <h2 className="heading-secondary">Sản phẩm bán chạy</h2>
          <div className="row p-3">{this.renderList(this.props.products)}</div>
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
export default connect(mapStateToProps)(HotProducts);
