import React from "react";

const WeatherDescription = (props) => {
  const weather = props.weather.weather;
  if(weather === undefined) return null;
  else {
    const main = weather[0].main;
    return (
      <p>{main}</p>
    )
  }
}

export default WeatherDescription;