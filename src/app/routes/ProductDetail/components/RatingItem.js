import React from "react";
import StarRatingComponent from "react-star-rating-component";

const RatingItem = ({ value, content, email }) => {
  debugger;
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{email}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={parseInt(value)}
          />
        </h6>
        <p className="card-text">{content}</p>
      </div>
    </div>
  );
};

export default RatingItem;
