import React, { Component, Fragment } from "react";
import Navigation from "../../components/Navigation";
import Breadcumb from "../../components/Breadcumb";
import CartList from "./containers/CartList";

class Cart extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <Breadcumb />
        <CartList />
      </Fragment>
    );
  }
}

export default Cart;
