import React, { Fragment, Component } from "react";
import { withRouter } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import Helmet from "react-helmet";

import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import Router from "./Router";
import AdminRouter from "./AdminRouter";

const ROUTE_LAYOUT = {
  ADMIN: "ADMIN",
  USER: "USER"
};
class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routeLayout: ROUTE_LAYOUT.USER
    };
  }
  componentDidMount() {
    const { history } = this.props;
    debugger;
    if (
      history.location.pathname.replace("/", "") ===
      ROUTES.ADMIN_BASE.replace("/", "")
    ) {
      this.setState({ routeLayout: ROUTE_LAYOUT.ADMIN });
    } else {
      this.setState({ routeLayout: ROUTE_LAYOUT.USER });
    }
  }
  renderLayout(layout) {
    if (layout === ROUTE_LAYOUT.USER) {
      return (
        <Fragment>
          <Header />
          <Content>
            <Router />
          </Content>
          <Footer />
        </Fragment>
      );
    } else {
      return <AdminRouter />;
    }
  }
  render() {
    const { routeLayout } = this.state;
    return (
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

        {this.renderLayout(routeLayout)}
      </Fragment>
    );
  }
}

export default withRouter(Layout);
