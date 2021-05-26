import { SET_CURRENT } from "./currentCityTypes";

const currentCityReducer = (state = "", action) => {
  switch (action.type) {
    case SET_CURRENT:
      return action.payload;
    default:
      return state;
  }
};

export default currentCityReducer;
