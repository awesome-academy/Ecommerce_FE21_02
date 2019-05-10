import { actionTypes } from "../../constants";

const initialState = {
  user: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER: {
      return {
        ...state,
        user: action.user
      };
    }
    default: {
      return state;
    }
  }
};
