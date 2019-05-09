import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getCategories } from "app/actions/categoryAction";
import { getAllProducts } from "app/actions/productAction";
import Banner from "./components/Banner";
import Intro from "./components/Intro";
import HotDeal from "./containers/HotDeal";
import NewProducts from "./containers/NewProducts";
import HotProducts from "./containers/HotProducts";
import Gallery from "./containers/Gallery";
import NewsBlog from "./containers/NewsBlog";
import Navigation from "app/components/Navigation";
import withTarget from "app/actions/withTargetAction";
import { targets } from "app/constants";
class Home extends Component {
  componentDidMount() {
    this.props.getCategories().then(() => {
      this.props.getAllProducts(this.props.categories);
    });
  }

  render() {
    return (
      <Fragment>
        <Banner />
        <Navigation />
        <Intro />
        <HotDeal />
        <NewProducts />
        <Gallery />
        <HotProducts />
        <NewsBlog />
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  const common = state.common;
  return {
    categories: common.category.data
  };
};

export default connect(
  mapStateToProps,
  {
    getCategories: withTarget(getCategories, targets.HOME_PAGE),
    getAllProducts: withTarget(getAllProducts, targets.HOME_PAGE)
  }
)(Home);
