import React, { Fragment } from "react";
import staticImage from "images/detail-page/staticblock_6.png";
import RatingList from "./RatingList";
import RatingForm from "./RatingForm";
import NeedLoginMessage from "./NeedLoginMessage";

const TABS = {
  FEATURED: "FEATURED",
  INFO: "INFO",
  REVIEW: "REVIEW"
};

class InfoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: TABS.FEATURED
    };
  }
  onChangeTab(e, tab) {
    e.preventDefault();
    this.setState({
      currentTab: tab
    });
  }
  renderTab(tab, product) {
    const { user } = this.props;
    switch (tab) {
      case TABS.REVIEW:
        return (
          <Fragment>
            {!user ? (
              <NeedLoginMessage />
            ) : (
              <Fragment>
                <RatingForm productId={product.id} />
                <RatingList productId={product.id} />
              </Fragment>
            )}
          </Fragment>
        );
      default:
        return <p>{product.highlights}</p>;
    }
  }
  render() {
    const { product } = this.props;
    return (
      <section className="product-info">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="product-info__tab">
                <a
                  className={`product-info__link ${this.state.currentTab ===
                    TABS.FEATURED && "product-info__link--active"}`}
                  href="#"
                  onClick={e => this.onChangeTab(e, TABS.FEATURED)}
                >
                  đặc điểm nổi bật
                </a>
                <a
                  className={`product-info__link ${this.state.currentTab ===
                    TABS.INFO && "product-info__link--active"}`}
                  href="#"
                  onClick={e => this.onChangeTab(e, TABS.INFO)}
                >
                  thông tin sản phẩm
                </a>
                <a
                  className={`product-info__link ${this.state.currentTab ===
                    TABS.REVIEW && "product-info__link--active"}`}
                  href="#"
                  onClick={e => this.onChangeTab(e, TABS.REVIEW)}
                >
                  đánh giá
                </a>
              </div>
              <div className="product-info__text">
                {this.renderTab(this.state.currentTab, product)}
              </div>
            </div>
            <div className="col-lg-5">
              <div className="product-info__image-box">
                <img className="product-info__image" src={staticImage} alt="" />
                <h2 className="product-info__image-text">Rượu nho </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default InfoBox;
