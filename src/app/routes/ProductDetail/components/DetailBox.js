import React from "react";

const DetailBox = ({ product }) => {
  return (
    <div className="product">
      <h1 className="heading-secondary heading-secondary--pattern-left">
        {product.name}
      </h1>
      <p className="number-highlight my-2"> {product.price}</p>
      <hr />
      <div className="product__stars-review">
        <div className="product__stars-review--stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt"> </i>
        </div>
        <div className="product__stars-review--content" />1 Review(S) | Add Your
        Review
      </div>
      <hr />
      <h3 className="heading-tertiary my-4">Màu sắc</h3>
      <a className="product__colors product__colors--yellow" href="#">
        {" "}
      </a>
      <a className="product__colors product__colors--black" href="#">
        {" "}
      </a>
      <a className="product__colors product__colors--red" href="#">
        {" "}
      </a>
      <h3 className="heading-tertiary my-4">Kích cỡ</h3>
      <div className="form-group">
        <select className="form-control product__size-select" id="size">
          <option>Loại to</option>
          <option>Loại vừa</option>
          <option>Loại nhỏ</option>
        </select>
      </div>
      <h3 className="heading-tertiary my-4">số lượng </h3>
      <div className="product__quantity-select">
        <div className="product__quantity-box">
          <button>-</button>
          <span>3 </span>
          <button>+</button>
        </div>
        <button className="btn btn-primary">Add to card</button>
      </div>
      <div className="d-block py-3">
        <a className="product__link" href="#">
          <i className="fas fa-heart"> </i>Yêu thích
        </a>
        <a className="product__link" href="#">
          <i className="fas fa-signal"> </i>So sánh
        </a>
        <a className="product__link" href="#">
          <i className="fas fa-envelope"> </i>Email
        </a>
      </div>
      <h3 className="heading-tertiary my-4">mô tả </h3>
      <div className="product__description">{product.description}</div>
    </div>
  );
};

export default DetailBox;
