import { APIClient, endpoints } from "services/APIClient";
import { actionTypes, targets } from "../constants";

export const getProduct = productId => async dispatch => {
  dispatch({
    type: actionTypes.GET_PRODUCT_BEGIN,
    target: targets.PRODUCT_PAGE
  });

  try {
    const product = await APIClient.getProduct(productId);
    dispatch({
      type: actionTypes.GET_PRODUCT_SUCCESS,
      target: targets.PRODUCT_PAGE,
      payload: {
        product
      }
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCT_FAILURE,
      target: targets.PRODUCT_PAGE,
      payload: {
        error
      }
    });
  }
};

export const getProducts = categoryId => async dispatch => {};
