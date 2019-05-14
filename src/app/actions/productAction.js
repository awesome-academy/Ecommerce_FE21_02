import { actionTypes, targets } from "../constants";
import { firebase } from "services/firebase/FirebaseService";

export const getProduct = productId => async dispatch => {
  dispatch({
    type: actionTypes.GET_PRODUCT_BEGIN
  });

  try {
    const { data } = await firebase.product(productId);
    debugger;
    dispatch({
      type: actionTypes.GET_PRODUCT_SUCCESS,
      payload: {
        data
      }
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCT_FAILURE,
      payload: {
        error
      }
    });
  }
};

export const getProductsBy = subCategoryId => async dispatch => {
  dispatch({
    type: actionTypes.GET_PRODUCT_BEGIN
  });

  try {
    const { data } = await firebase.productBy(subCategoryId);
    dispatch({
      type: actionTypes.GET_PRODUCT_SUCCESS,
      payload: {
        data
      }
    });
    dispatch({
      type: actionTypes.SET_ACTIVE_SUB_CATEGORY,
      payload: {
        activeSubCategoryId: subCategoryId
      }
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCT_FAILURE,
      payload: {
        error
      }
    });
  }
};

export const getAllProducts = () => async dispatch => {
  dispatch({
    type: actionTypes.GET_PRODUCT_BEGIN
  });
  try {
    const { data } = await firebase.products();
    dispatch({
      type: actionTypes.GET_PRODUCT_SUCCESS,
      payload: {
        data
      }
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCT_FAILURE,
      payload: {
        error
      }
    });
  }
};
