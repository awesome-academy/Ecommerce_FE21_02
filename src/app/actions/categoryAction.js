import { actionTypes, targets } from "../constants";
import { firebase } from "services/firebase/FirebaseService";

export const getCategories = () => async dispatch => {
  dispatch({
    type: actionTypes.GET_CATEGORY_BEGIN
  });

  try {
    const data = await firebase.categories();

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
