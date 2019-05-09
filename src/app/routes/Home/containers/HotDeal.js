import React, { Component } from "react";
import hotDealImage from "images/hotdeal.png";
import hotDealBackground from "images/hotdeal-background.jpg";
import TimeBox from "../components/TimeBox";
class HotDeal extends Component {
  render() {
    return (
      <section className="hotdeal">
        <div className="container d-flex flex-column align-items-center">
          <img className="hotdeal__banner" src={hotDealBackground} alt="" />
          <div className="hotdeal__box">
            <div className="row">
              <div className="col-md-6">
                <div className="thumbnail-box">
                  <img
                    className="thumbnail-box__image thumbnail-box__image--big"
                    id="js--hotdeal-thumbnail"
                    src={hotDealImage}
                    alt="hotdeal"
                  />
                  <div className="thumbnail-box__shape thumbnail-box__shape--big">
                    <span className="thumbnail-box__tag">Sale</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="hotdeal__info">
                  <h2
                    className="heading-secondary heading-secondary--pattern-left"
                    id="js--hotdeal-title"
                  >
                    rượu nho năm 1987
                  </h2>
                  <p className="number-highlight my-3" id="js--hotdeal-price">
                    {" "}
                    330.000<sup>đ</sup>
                  </p>
                  <button className="btn btn-primary my-3">add to cart</button>
                  <p className="my-3" id="js--hotdeal-description">
                    Một hợp chất có trong rượu vang được gọi là resveratro có
                    khả năng làm tăng tối đa tuổi thọ. Resveratro còn có khả
                    năng ngăn chặn mật độ oxy hóa của protein béo.
                  </p>
                  <TimeBox />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HotDeal;
