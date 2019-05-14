import { actionTypes } from "../../constants";

const initialState = {
  isFetching: false,
  data: null,
  fetchError: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_RATING_BEGIN: {
      return {
        ...state,
        isFetching: true
      };
    }
    case actionTypes.GET_RATING_SUCCESS: {
      const { data } = action.payload;

      return {
        ...state,
        data: data,
        fetchError: null,
        isFetching: false
      };
    }
    case actionTypes.GET_RATING_FAILURE: {
      const { error: fetchError } = action.payload;

      return {
        ...state,
        fetchError,
        isFetching: false
      };
    }
    case actionTypes.SET_RATING_BEGIN: {
      return {
        ...state,
        isFetching: true
      };
    }
    case actionTypes.SET_RATING_SUCCESS: {
      const { data } = action.payload;

      return {
        ...state,
        data: [...state.data, data],
        fetchError: null,
        isFetching: false
      };
    }
    case actionTypes.SET_RATING_FAILURE: {
      const { error: fetchError } = action.payload;

      return {
        ...state,
        fetchError,
        isFetching: false
      };
    }
    default: {
      return state;
    }
  }
};
