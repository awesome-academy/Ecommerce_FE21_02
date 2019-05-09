import React from "react";
import reviewAvatar01 from "images/review/avatar_1.png";
const Review = () => {
  return (
    <div className="review">
      <div className="review__icon">
        <i className="fas fa-quote-right" />
      </div>
      <div className="review__description">
        Vang nổ Thăng Long có hương vị đặc trưng của sản phẩm lên men tự nhiên
        từ hoa quả với độ rượu nhẹ, bọt ga đầy trắng mịn. Vang Nổ thăng long .
      </div>
      <a className="h-read-more-link" href="#">
        Read more
      </a>
      <img className="review__avatar my-2" src={reviewAvatar01} alt="avatar" />
      <span className="review__author review__author--name">Giang Lt</span>
      <span className="review__author review__author--role">
        Graphic Design{" "}
      </span>
    </div>
  );
};

export default Review;
