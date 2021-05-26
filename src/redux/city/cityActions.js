import { ADD_CITY_DATA } from "./cityTypes";

export const addCityData = (data) => ({
  type: ADD_CITY_DATA,
  payload: data
});