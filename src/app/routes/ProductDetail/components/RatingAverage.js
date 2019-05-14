import React from "react";
import { connect } from "react-redux";
import StarRatingComponent from "react-star-rating-component";

const RatingAverage = ({ ratings }) => {
  const getAverageScore = () => {
    let average = 0;
    if (ratings) {
      let ratingValues = ratings.map(rating => rating.value);
      average = ratingValues
        .map(function(x) {
          return x / ratingValues.length;
        })
        .reduce(function(adder, value) {
          return adder + value;
        });
    }
    return average;
  };

  return (
    <div className="rating-average">
      <div className="text-center">
        <h1 className="rating-num">{getAverageScore()}</h1>
        <StarRatingComponent
          name="rate1"
          starCount={5}
          value={getAverageScore()}
        />
        <div>
          <p>
            {getAverageScore()} average based on {ratings && ratings.length}{" "}
            reviews.
          </p>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  const productDetailStore = state.productDetailPage;
  return {
    ratings: productDetailStore.data.rating.data
  };
};
export default connect(
  mapStateToProps,
  null
)(RatingAverage);
