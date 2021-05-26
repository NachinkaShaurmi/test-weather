import { SET_LOADING_TRUE, SET_LOADING_FALSE } from "./isLoadingTypes";

export const setLoadingTrue = () => ({
  type: SET_LOADING_TRUE,
  payload: true
});

export const setLoadingFalse = () => ({
  type: SET_LOADING_FALSE,
  payload: false
});