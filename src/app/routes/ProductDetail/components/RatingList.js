import React, { Component } from "react";
import { connect } from "react-redux";
import { getRatingsByProduct } from "app/actions/ratingAction";
import RatingItem from "./RatingItem";

class RatingList extends Component {
  componentDidMount() {
    const { productId } = this.props;
    this.props.getRatingsByProduct(productId);
  }

  render() {
    const { ratings } = this.props;
    return ratings ? (
      ratings.map(rating => {
        return (
          <RatingItem
            key={rating.id}
            value={rating.value}
            content={rating.content}
            email={rating.userEmail}
          />
        );
      })
    ) : (
      <div>Loading</div>
    );
  }
}
const mapStateToProps = state => {
  const productDetailStore = state.productDetailPage;
  return {
    ratings: productDetailStore.data.rating.data
  };
};
export default connect(
  mapStateToProps,
  { getRatingsByProduct }
)(RatingList);
