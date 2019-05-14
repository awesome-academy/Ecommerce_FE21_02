import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "app/constants/routes";
import StarRatingComponent from "react-star-rating-component";

const NeedLoginMessage = () => {
  return (
    <div className="card">
      <div className="card-body">
        <p className="card-text">
          Vui lòng
          <Link style={{ margin: "auto .5rem" }} to={ROUTES.LOGIN}>
            Đăng nhập
          </Link>
          để đánh giá sản phẩm.
        </p>
      </div>
    </div>
  );
};

export default NeedLoginMessage;
