import React from "react";

const Breadcumb = () => {
  return (
    <div className="breadcrumb container">
      <a className="breadcrumb__link" href="index.html">
        Trang chủ
      </a>
      <a className="breadcrumb__link" href="index.html">
        Sản phẩm
      </a>
      <a
        className="breadcrumb__link breadcrumb__link--active"
        href="index.html"
      >
        Rượu vang đỏ
      </a>
    </div>
  );
};

export default Breadcumb;
