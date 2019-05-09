import { actionTypes } from "../../constants";

const initialState = {
  isDefaultList: false,
  activeSubCategoryId: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_DISPLAY_LIST: {
      return {
        isDefaultList: !state.isDefaultList
      };
    }
    case actionTypes.SET_ACTIVE_SUB_CATEGORY: {
      let { activeSubCategoryId } = action.payload;
      return {
        ...state,
        activeSubCategoryId
      };
    }
    default: {
      return state;
    }
  }
};
