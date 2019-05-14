import React from "react";
import { connect } from "react-redux";
import StarRatingComponent from "react-star-rating-component";
import * as ROUTES from "../../../constants/routes";
import { toast } from "react-toastify";
import { setRating } from "app/actions/ratingAction";
import RatingAverage from "./RatingAverage";

class RatingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      content: ""
    };
  }
  onStarClick(nextValue) {
    this.setState({ rating: nextValue });
  }
  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const { user, productId } = this.props;
    const { rating, content } = this.state;
    this.props.setRating(user, productId, rating, content);
  }

  render() {
    const { user } = this.props;
    const { rating, content } = this.state;
    const isInvalid = content === "" || rating === 0;

    return (
      <div className="row border  my-3">
        <div className="col-lg-3">
          <RatingAverage />
        </div>
        <div className="col-lg-9">
          <form className="p-3" onSubmit={e => this.onSubmit(e)}>
            <div className="form-group">
              <label htmlFor="inputContent">
                Feedback: <sup>*</sup>
              </label>
              <textarea
                name="content"
                value={content}
                onChange={e => this.handleInputChange(e)}
                className="form-control"
                id="inputContent"
                type="text"
              />
            </div>
            <div className="form-group">
              <div className="star-rating-box">
                <label className="star-rating-label">
                  Give it a star rating️ :
                </label>
                <StarRatingComponent
                  name="rate1"
                  starCount={5}
                  value={rating}
                  onStarClick={index => this.onStarClick(index)}
                />
              </div>
              <button
                className="btn btn-primary ml-auto"
                type="submit"
                style={{ margin: "auto 0" }}
                disabled={isInvalid}
              >
                Đăng
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const userStore = state.user;
  return {
    user: userStore.session.authUser
  };
};
export default connect(
  mapStateToProps,
  { setRating }
)(RatingForm);
