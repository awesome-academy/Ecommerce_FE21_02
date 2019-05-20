import { actionTypes, targets } from "../constants";
import { firebase } from "services/firebase/FirebaseService";

export const updateUser = (newUser, uid) => async dispatch => {
  dispatch({
    type: actionTypes.SET_USER_BEGIN
  });

  try {
    await firebase.updateUser(newUser, uid);
    dispatch({
      type: actionTypes.SET_USER_SUCCESS,
      payload: {
        data: newUser
      }
    });
  } catch (error) {
    dispatch({
      type: actionTypes.SET_USER_FAILURE,
      payload: {
        error
      }
    });
  }
};
