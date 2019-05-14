import React from "react";
import { Switch, Route } from "react-router-dom";
import * as ROUTES from "app/constants/routes";
import Home from "../routes/Home";
import ProductList from "../routes/ProductList";
import Register from "../routes/Register";
import Login from "../routes/Login";
import ProductDetail from "../routes/ProductDetail";
import Cart from "../routes/Cart";

const Router = () => (
  <Switch>
    <Route exact path={ROUTES.HOMEPAGE} component={Home} />
    <Route exact path={ROUTES.REGISTER} component={Register} />
    <Route exact path={ROUTES.LOGIN} component={Login} />
    <Route exact path={ROUTES.PRODUCT_LIST} component={ProductList} />
    <Route
      exact
      path={`${ROUTES.PRODUCT_DETAIL}/:productId`}
      component={ProductDetail}
    />
    <Route exact path={ROUTES.CART} component={Cart} />
  </Switch>
);
export default Router;
