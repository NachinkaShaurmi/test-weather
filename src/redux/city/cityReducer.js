import { ADD_CITY_DATA } from "./cityTypes";

const cityReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_CITY_DATA:
      const newState = { ...state };
      newState[action.payload.name] = {...state[action.payload.name], ...action.payload};
      return newState;
    default:
      return state;
  }
};

export default cityReducer;