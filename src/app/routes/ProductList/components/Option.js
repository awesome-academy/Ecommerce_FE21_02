import React from "react";
import { connect } from "react-redux";
import { toggleDisplayList } from "app/actions/uiAction";

const Option = ({ isDefaultList, toggleDisplayList }) => {
  return (
    <div className="product-list__option">
      <div
        onClick={() => isDefaultList && toggleDisplayList()}
        style={{
          cursor: isDefaultList ? "pointer" : "auto",
          color: isDefaultList ? "#000" : "#e6ae48"
        }}
      >
        <i className="product-list__option__icon fas fa-th" />
      </div>
      <div
        onClick={() => !isDefaultList && toggleDisplayList()}
        style={{
          marginLeft: "1rem",
          cursor: !isDefaultList ? "pointer" : "auto",
          color: !isDefaultList ? "#000" : "#e6ae48"
        }}
      >
        <i className="product-list__option__icon fas fa-list" />
      </div>

      <div className="product-list__option__page-select">
        <i className="fas fa-caret-left" />
        <a className="product-list__link" href="#">
          {" "}
          1
        </a>
        <a className="product-list__link" href="#">
          {" "}
          2
        </a>
        <a className="product-list__link" href="#">
          {" "}
          3
        </a>
        <a className="product-list__link" href="#">
          {" "}
          4
        </a>
        <a className="product-list__link product-list__link--active" href="#">
          5
        </a>
        <i className="fas fa-caret-right" />
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  const productListStore = state.productListPage;
  return {
    isDefaultList: productListStore.ui.productListContainer.isDefaultList
  };
};

export default connect(
  mapStateToProps,
  { toggleDisplayList }
)(Option);
