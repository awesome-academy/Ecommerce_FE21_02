import React, { Component } from "react";
import Review from "../components/Review";
class ReviewCarousel extends Component {
  render() {
    return (
      <section className="reviews">
        <h2 className="heading-secondary pb-4">Khách hàng</h2>
        <div
          className="carousel slide"
          id="reviewCarousel"
          data-ride="carousel"
          data-interval="false"
        >
          <ol className="carousel-indicators">
            <li
              className="bg-secondary active"
              data-target="#reviewCarousel"
              data-slide-to="0"
            />
            <li
              className="bg-secondary"
              data-target="#reviewCarousel"
              data-slide-to="1"
            />
            <li
              className="bg-secondary"
              data-target="#reviewCarousel"
              data-slide-to="2"
            />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Review />
            </div>
            <div className="carousel-item">
              <Review />
            </div>
            <div className="carousel-item">
              <Review />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ReviewCarousel;
