import { combineReducers } from "redux";
import { filterActions } from "redux-ignore";
import { targets } from "../constants";
import category from "./data/categoryReducer";
import product from "./data/productReducer";

import homeContainer from "./ui/homeContainerReducer";
import productContainer from "./ui/productContainerReducer";

export default combineReducers({
  common: combineReducers({
    category
  }),
  homePage: combineReducers({
    ui: combineReducers({
      homeContainer
    }),
    data: combineReducers({
      product: filterActions(
        product,
        action => action.target === targets.HOME_PAGE
      )
    })
  }),
  productPage: combineReducers({
    ui: combineReducers({
      productContainer
    }),
    data: combineReducers({
      product: filterActions(
        product,
        action => action.target === targets.PRODUCT_PAGE
      )
    })
  })
});
