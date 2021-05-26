import { SET_CURRENT } from "./currentCityTypes";

export const setCurrent = (name) => ({
  type: SET_CURRENT,
  payload: name
});