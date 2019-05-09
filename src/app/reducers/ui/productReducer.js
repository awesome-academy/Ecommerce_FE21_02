import { actionTypes } from "../../constants";

const initialState = {
  isDefault: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_DISPLAY_PRODUCT: {
      return {
        ...state,
        isDefault: !state.isDefault
      };
    }

    default: {
      return state;
    }
  }
};
