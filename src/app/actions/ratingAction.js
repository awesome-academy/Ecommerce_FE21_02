import { actionTypes, targets } from "../constants";
import { firebase } from "services/firebase/FirebaseService";

export const getRatingsByProduct = productId => async dispatch => {
  dispatch({
    type: actionTypes.GET_RATING_BEGIN
  });

  try {
    const data = await firebase.ratingsByProduct(productId);
    dispatch({
      type: actionTypes.GET_RATING_SUCCESS,
      payload: {
        data
      }
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_RATING_FAILURE,
      payload: {
        error
      }
    });
  }
};

export const getRatingsByUser = userId => async dispatch => {
  dispatch({
    type: actionTypes.GET_RATING_BEGIN
  });

  try {
    const { data } = await firebase.ratingsByUser(userId);
    dispatch({
      type: actionTypes.GET_RATING_SUCCESS,
      payload: {
        data
      }
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_RATING_FAILURE,
      payload: {
        error
      }
    });
  }
};

export const setRating = (
  user,
  productId,
  value,
  content
) => async dispatch => {
  dispatch({
    type: actionTypes.SET_RATING_BEGIN
  });
  try {
    await firebase.setRating(user.uid, productId, value, content);
    let data = {
      userId: user.uid,
      email: user.email,
      productId,
      value,
      content
    };
    dispatch({
      type: actionTypes.SET_RATING_SUCCESS,
      payload: {
        data
      }
    });
  } catch (error) {
    dispatch({
      type: actionTypes.SET_RATING_FAILURE,
      payload: {
        error
      }
    });
  }
};
