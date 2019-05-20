import { combineReducers } from "redux";
import { filterActions } from "redux-ignore";
import { targets } from "../constants";
import category from "./data/categoryReducer";
import product from "./data/productReducer";
import productUI from "./ui/productReducer";
import rating from "./data/ratingReducer";
import homeContainer from "./ui/homeContainerReducer";
import topMenu from "./ui/topMenuReducer";
import productListContainer from "./ui/productListContainerReducer";
import sessionReducer from "./data/sessionReducer";
import cart from "./data/cartReducer";
export default combineReducers({
  common: combineReducers({
    category,
    topMenu,
    productUI,
    cart
  }),
  user: combineReducers({
    session: sessionReducer
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
  }),
  productDetailPage: combineReducers({
    data: combineReducers({
      product: filterActions(
        product,
        action => action.target === targets.PRODUCT_DETAIL_PAGE
      ),
      rating
    })
  })
});
