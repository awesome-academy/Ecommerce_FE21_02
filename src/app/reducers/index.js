import { combineReducers } from "redux";
import { filterActions } from "redux-ignore";
import { targets } from "../constants";
import category from "./data/categoryReducer";
import product from "./data/productReducer";
import productUI from "./ui/productReducer";

import homeContainer from "./ui/homeContainerReducer";
import topMenu from "./ui/topMenuReducer";
import productListContainer from "./ui/productListContainerReducer";

export default combineReducers({
  common: combineReducers({
    category,
    topMenu,
    productUI
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
  productListPage: combineReducers({
    ui: combineReducers({
      productListContainer
    }),
    data: combineReducers({
      product: filterActions(
        product,
        action => action.target === targets.PRODUCT_LIST_PAGE
      )
    })
  })
});
