import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import Router from "./Router";

const Layout = ({ children }) => (
  <Fragment>
    <Helmet
      title="FE Drink"
      meta={[
        {
          name: "description",
          content: "FE Drink React-Redux ECommerce Project"
        },
        { name: "keywords", content: "ecommerce,react,redux,sun asterisk" },
        { name: "viewport", content: "width=device-width, initial-scale=1" }
      ]}
    />
    <Header />
    <Content>
      <Router />
    </Content>
    <Footer />
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.func
};

export default Layout;
