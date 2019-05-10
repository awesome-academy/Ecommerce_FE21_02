import React, { Component, Fragment } from "react";
import Navigation from "app/components/Navigation";
import Breadcumb from "app/components/Breadcumb";
import Banner from "./components/Banner";
import SideBar from "./containers/SideBar";
import Content from "./containers/Content";
import { withAuthentication } from "app/session";
class ProductList extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <Breadcumb />
        <Banner />
        <section className="container product-list">
          <SideBar />
          <Content />
        </section>
      </Fragment>
    );
  }
}

export default withAuthentication(ProductList);
