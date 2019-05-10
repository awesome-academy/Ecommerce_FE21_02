import { actionTypes, targets } from "../constants";

export const setAuthUser = authUser => async dispatch => {
  debugger;
  dispatch({
    type: actionTypes.SET_AUTH_USER,
    payload: {
      authUser
    }
  });
};
