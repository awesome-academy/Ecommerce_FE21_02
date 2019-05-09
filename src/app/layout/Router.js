import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../routes/Home/index";
import ProductList from "../routes/ProductList/index";

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/product-list" component={ProductList} />
  </Switch>
);
export default Router;
