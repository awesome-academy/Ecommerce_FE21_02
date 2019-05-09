import { APIClient, endpoints } from "services/APIClient";
import { actionTypes, targets } from "../constants";

export const getProduct = productId => async dispatch => {
  dispatch({
    type: actionTypes.GET_PRODUCT_BEGIN
  });

  try {
    const product = await APIClient.getProduct(productId);
    dispatch({
      type: actionTypes.GET_PRODUCT_SUCCESS,
      payload: {
        product
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

export const getProductsBy = (categoryId, subCategoryId) => async dispatch => {
  dispatch({
    type: actionTypes.GET_PRODUCT_BEGIN
  });

  try {
    const { data } = await APIClient.getProductsBy(categoryId, subCategoryId);

    dispatch({
      type: actionTypes.GET_PRODUCT_SUCCESS,
      payload: {
        data: data.products
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

export const getAllProducts = categories => async dispatch => {
  dispatch({
    type: actionTypes.GET_PRODUCT_BEGIN
  });
  try {
    const { data } = await APIClient.getAllProducts(categories);
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
