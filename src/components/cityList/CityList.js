import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { citiesList } from "../../assets/citiesList";
import { setCurrent } from "../../redux/currentCity/currentCityActions";
import { getCurrentCity } from "../../redux/selectors";
import "./cityList.scss";

const CityList = () => {
  const dispatch = useDispatch();
  const currentCity = useSelector(getCurrentCity);
  
  const selectCity = (city) => {
    dispatch(setCurrent(city));
  };

  const citiesListView = citiesList.map((city) => (
    <li
      key={city}
      className={`city-list__element${currentCity === city ? " city-list__element_active" : ""}`}
      onClick={() => selectCity(city)}
    >
      {city}
    </li>
  ));

  return <ul className="city-list">{citiesListView}</ul>;
};

export default memo(CityList);
