import React, { Fragment } from "react";

const Category = ({ name, children }) => {
  return (
    <Fragment>
      <h3 className="heading-tertiary heading-tertiary--small">{name}</h3>
      <div className="product-list__menu">{children}</div>
    </Fragment>
  );
};

export default Category;
