import { React, useState } from "react";
import "./index.css";
import axios from "axios";
import DayImage from "../../images/bgimage.jpg";
import NightImage from "../../images/nightbg.jpg";
import Icons from "./../Icons"
import Checkbox from "./../Checkbox"
import WeatherDescription from "./../WeatherDescription"
import UnitCheckbox from "./../UnitCheckbox"
require('dotenv').config()


const MainSection = () => {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [nightMode, setNightMode] = useState(false);
  const [isCelsius, setIsCelsius] = useState(true);
  const [temp, setTemp] = useState(0);
  const [country, setCountry] = useState("");
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
  })
  const key = process.env.REACT_APP_API_KEY;

  
 const  handleLocationSearch = (event) => {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(
    (location) => {
      let lat = location.coords.latitude;
      let lon = location.coords.longitude;
      console.log("getCurrentPosition Success " + lat + " " + lon)
      setLocation( {latitude:lat, longitude:lon});
    },
    (error) => {
      this.props.displayError("Error dectecting your location");
      console.error(JSON.stringify(error))
    }
  )
  setClicked(true);
  axios
  .get(
    `http://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&units=metric&appid=${key}`
  )
  .then((response) => {
    setWeather(response.data);
    let temp = response.data.main;
    let country = response.data.sys;
    setTemp(temp.temp)
    setCountry(country.country);
    setSearch("")
  });
}
 
  const handleSearch = (event) => {
    event.preventDefault();
    if(search.length !== 0){
      setClicked(true);
      axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${key}`
      )
      .then((response) => {
        console.log(response.data);
        setWeather(response.data);
        let temp = response.data.main;
        let country = response.data.sys;
        setTemp(temp.temp)
        setCountry(country.country);
        setSearch("")
      });
    }
   
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
    
  };

  const handleNightMode =(event) => {
    setNightMode(!nightMode);
  }

  const handleUnitChange = (event) => {   
    setIsCelsius(!isCelsius);
  }
 
  return (
    <>
      <div className="mainContainer">
        {nightMode? <img className="bgImage" src={NightImage} alt="backgroun"/> : <img className="bgImage" src={DayImage} alt="backgroun" />}    
        <Checkbox handleNightMode={handleNightMode}/>
        <UnitCheckbox handleUnitChange={handleUnitChange} nightMode={nightMode}/>
        <div className="settingsIcon">
        </div>
        <div className={nightMode ? "nightcontent":"content"}>
         <div className="search">
         <form onSubmit={handleSearch}> 
            <input type="text" value={search} onChange={handleChange}  />
          </form> 
          <button onClick={handleSearch}>Search</button>
          <button onClick={handleLocationSearch}>Location</button>
           </div>         
          {clicked ?<div className="weather">
            <p>{weather.name}, {country}</p>
            <div className="icon">
              <Icons weather={weather}/>
              <WeatherDescription weather={weather}/>
            </div>
            {isCelsius ? <p>{temp} Celsius</p>:<p>{parseFloat(temp*1.8+32).toFixed(2)} Fahrenheit</p>}            
             </div>: <h1>Search for weather info</h1>}
        </div>
      </div>
    </>
  );
};

export default MainSection;
