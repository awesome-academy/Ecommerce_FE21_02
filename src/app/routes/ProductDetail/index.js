import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getProduct } from "app/actions/productAction";
import Navigation from "../../components/Navigation";
import Breadcumb from "../../components/Breadcumb";
import ImageBox from "./components/ImageBox";
import DetailBox from "./components/DetailBox";
import InfoBox from "./components/InfoBox";
import RelatedProducts from "./containers/RelatedProducts";
import withTarget from "../../actions/withTargetAction";
import { targets } from "../../constants";

class ProductDetail extends Component {
  componentDidMount() {
    const { productId } = this.props.match.params;
    this.props.getProduct(productId);
  }

  render() {
    const { product, user } = this.props;
    return (
      <Fragment>
        <Navigation />
        <Breadcumb />
        <div className="container">
          <div className="row pb-5">
            <div className="col-lg-6">{product && <ImageBox />}</div>
            <div className="col-lg-6">
              {product && <DetailBox product={product} />}
            </div>
          </div>
        </div>
        {product && <InfoBox product={product} user={user} />}
        <RelatedProducts />
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  const productDetailStore = state.productDetailPage;
  const userStore = state.user;

  return {
    product: productDetailStore.data.product.data,
    user: userStore.session.authUser
  };
};
export default connect(
  mapStateToProps,
  {
    getProduct: withTarget(getProduct, targets.PRODUCT_DETAIL_PAGE)
  }
)(ProductDetail);
