import React from "react";
import blog01 from "images/blog/blog_1.png";
const Article = () => {
  return (
    <div className="article">
      <img className="article__thumbnail" src={blog01} alt="article" />
      <div className="heading-tertiary py-2 text-left">
        Vang Thăng Long Classic
      </div>
      <div className="article__meta">
        <span className="article__meta--author"> Đăng bởi Giangle</span>
        <span className="article__meta--date">30/06/2015</span>
        <span className="article__meta--comments">60 bình luận</span>
      </div>
      <div className="article__description py-2">
        Vang nổ Thăng Long có hương vị đặc trưng của sản phẩm lên men tự nhiên
        từ hoa quả với độ rượu nhẹ, bọt ga đầy trắng mịn. Vang Nổ thăng long tạo
        cảm giác hương phấn, êm dịu, vui tươi, sản phẩm được đóng chai dung tích
        750ml...
      </div>
      <a className="h-read-more-link" href="#">
        Read more
      </a>
    </div>
  );
};

export default Article;
