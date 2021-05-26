import { addCityData } from "../city/cityActions"
import { setLoadingTrue, setLoadingFalse } from "../isLoading/isLoadingActions"

export const getCityData = (city) => (dispatch) => {
  // console.log("request", city);
  dispatch(setLoadingTrue())
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=9a77da4e0c0bc7a037e79ebf3605bec4&units=metric`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.cod !== 200) {
        dispatch(setLoadingFalse())
        dispatch(addCityData({name: city, error: true, time: Date.now()}));
      } else {
        dispatch(setLoadingFalse())
        dispatch(addCityData({name: city, error: false, data: data, time: Date.now()}));
      }
    })
    .catch((err) => {
      dispatch(setLoadingFalse())
      dispatch(addCityData({name: city, error: true, time: Date.now()}));
    });
};
