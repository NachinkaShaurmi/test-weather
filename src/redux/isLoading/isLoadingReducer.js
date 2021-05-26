import { SET_LOADING_TRUE, SET_LOADING_FALSE } from "./isLoadingTypes";

const isLoadingReducer = (state = false, action) => {
  switch (action.type) {
    case SET_LOADING_TRUE:
      return true;
    case SET_LOADING_FALSE:
      return false;
    default:
      return state;
  }
};

export default isLoadingReducer;
