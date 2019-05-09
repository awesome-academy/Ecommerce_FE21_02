import { actionTypes, targets } from "../constants";

export const toggleTopMenu = () => async dispatch => {
  dispatch({
    type: actionTypes.TOGGLE_TOP_MENU,
    target: targets.HOME_PAGE
  });
};
export const toggleDisplayList = () => async dispatch => {
  dispatch({
    type: actionTypes.TOGGLE_DISPLAY_LIST,
    target: targets.PRODUCT_LIST_PAGE
  });
  dispatch({
    type: actionTypes.TOGGLE_DISPLAY_PRODUCT,
    target: targets.PRODUCT_LIST_PAGE
  });
};
