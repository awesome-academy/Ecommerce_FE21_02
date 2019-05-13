import { actionTypes } from "../constants";

export const addToCart = item => dispatch => {
  dispatch({
    type: actionTypes.ADD_PRODUCT_TO_CART,
    payload: {
      data: item
    }
  });
};
export const removeFromCart = item => dispatch => {
  dispatch({
    type: actionTypes.REMOVE_PRODUCT_FROM_CART,
    payload: {
      data: item
    }
  });
};
export const removeAllFromCart = item => dispatch => {
  dispatch({
    type: actionTypes.REMOVE_ALL_FROM_CART,
    payload: {
      data: item
    }
  });
};
