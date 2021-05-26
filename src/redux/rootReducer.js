import { combineReducers } from "redux";
import cityReducer from "./city/cityReducer";
import currentCityReducer from "./currentCity/currentCityReducer";
import isLoadingReducer from "./isLoading/isLoadingReducer";

const rootReducer = combineReducers({
  cities: cityReducer,
  currentCity: currentCityReducer,
  loading: isLoadingReducer,
});

export default rootReducer;
