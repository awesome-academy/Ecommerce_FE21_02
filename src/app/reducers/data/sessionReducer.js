import { actionTypes } from "../../constants";

const initialState = {
  authUser: null,
  isFetching: false,
  fetchError: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER_BEGIN: {
      return {
        ...state,
        isFetching: true
      };
    }
    case actionTypes.SET_USER_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        authUser: data,
        fetchError: null,
        isFetching: false
      };
    }
    case actionTypes.SET_USER_FAILURE: {
      const { error: fetchError } = action.payload;

      return {
        ...state,
        fetchError,
        isFetching: false
      };
    }
    case actionTypes.SET_AUTH_USER: {
      let { authUser } = action.payload;
      return {
        authUser
      };
    }
    default: {
      return state;
    }
  }
};
