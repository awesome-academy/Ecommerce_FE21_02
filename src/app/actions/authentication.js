import { actionTypes, targets } from "../constants";

export const setAuthUser = authUser => dispatch => {
  dispatch({
    type: actionTypes.SET_AUTH_USER,
    payload: {
      authUser
    }
  });
};
