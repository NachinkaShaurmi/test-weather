import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentCity, getCities, loading } from "../../redux/selectors";
import { getCityData } from "../../redux/asyncActions/requestCityData";
import CityInfoView from "./CityInfoView";
import Loader from "../loader/Loader";
import "./cityInfo.scss";

const CityInfo = () => {
  const dispatch = useDispatch();
  const currentCity = useSelector(getCurrentCity);
  const cities = useSelector(getCities);
  const isLoading = useSelector(loading);

  useEffect(() => {
    if (currentCity) {

      if (!cities[currentCity]) {
        dispatch(getCityData(currentCity));
      } else if (Date.now() - cities[currentCity].time > 60_000) {
        dispatch(getCityData(currentCity));
      }

      const timer = setInterval(() => {
        dispatch(getCityData(currentCity));
      }, 60_000);
      return () => clearInterval(timer);
    }
  }, [currentCity]);

  return (
    <div className="card">
      {/* One of the conditions below be performed */}
      {!currentCity && <div style={{ fontSize: "2rem" }}>Check city</div>}
      {!cities[currentCity] && isLoading && <Loader />}
      {currentCity && cities[currentCity] && cities[currentCity].error && (
        <div style={{ fontSize: "2rem" }}>Something went wrong</div>
      )}
      {cities[currentCity] && !cities[currentCity].error && (
        <CityInfoView
          cityName={currentCity}
          temperature={cities[currentCity].data.main.temp}
          windDegree={cities[currentCity].data.wind.deg}
          windSpeed={cities[currentCity].data.wind.speed}
          description={cities[currentCity].data.weather[0].description}
          icon={cities[currentCity].data.weather[0].id}
        />
      )}
    </div>
  );
};

export default CityInfo;
