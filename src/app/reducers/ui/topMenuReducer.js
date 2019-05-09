import { actionTypes } from "../../constants";

const initialState = {
  isWhiteTopMenu: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOOGLE_TOP_MENU: {
      return {
        isWhiteTopMenu: !state.isWhiteTopMenu
      };
    }

    default: {
      return state;
    }
  }
};
