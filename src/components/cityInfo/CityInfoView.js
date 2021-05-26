import React, { memo } from 'react';

const CityInfoView = ({cityName, temperature, windDegree, windSpeed, icon, description}) => {
  // console.log("render", cityName);
  return (
    <div className="card__wrapper">
      <h4 className="card__element card__element_title">{cityName}</h4>
      <div className="card__element">Температура, градусы: {temperature}</div>
      <div className="card__element">Направление ветра, градусы: {windDegree}</div>
      <div className="card__element">Скорость ветра, м/с: {windSpeed}</div>
      <div className="card__element">Описание: {description}</div>
      <i className = {`card__element card__element_img weather-icon owf owf-${icon}`}></i>
    </div>
  )
}

export default memo(CityInfoView)