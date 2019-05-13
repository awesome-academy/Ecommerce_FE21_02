import { actionTypes } from "../../constants";

const initialState = {
  authUser: null
};

export default (state = initialState, action) => {
  switch (action.type) {
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
