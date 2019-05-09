import React from "react";
import { connect } from "react-redux";
import withTarget from "app/actions/withTargetAction";
import { targets } from "app/constants";
import { getProductsBy } from "app/actions/productAction";

const SubCategoryLink = ({ id, categoryId, name, isActive, getProductsBy }) => {
  return (
    <a
      href={"#"}
      className={`product-list__link ${isActive &&
        "product-list__link--active"}`}
      onClick={e => {
        e.preventDefault();
        getProductsBy(categoryId, id);
      }}
    >
      {name}
    </a>
  );
};

export default connect(
  null,
  { getProductsBy: withTarget(getProductsBy, targets.PRODUCT_LIST_PAGE) }
)(SubCategoryLink);
