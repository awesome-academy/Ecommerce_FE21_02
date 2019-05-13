import React from "react";
import Product from "app/components/Product";

const RelatedProducts = ({ products }) => {
  const renderList = () => {
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
  };

  return (
    <section className="related-products">
      <div className="container">
        <h2 className="heading-secondary">Sản phẩm liên quan</h2>
        <div className="row p-3">{renderList()}</div>
      </div>
    </section>
  );
};

export default RelatedProducts;
