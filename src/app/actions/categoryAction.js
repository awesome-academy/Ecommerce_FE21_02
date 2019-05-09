import { APIClient, endpoints } from "services/APIClient";
import { actionTypes, targets } from "../constants";

export const getCategories = () => async dispatch => {
  dispatch({
    type: actionTypes.GET_CATEGORY_BEGIN
  });

  try {
    const { data } = await APIClient.getCategories();

    dispatch({
      type: actionTypes.GET_CATEGORY_SUCCESS,
      payload: {
        data
      }
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_CATEGORY_FAILURE,
      payload: {
        error
      }
    });
  }
};
