import React from "react";
import {FaCloud, FaSun, FaCloudRain, FaCloudSun} from "react-icons/fa"
import {GiSnowing} from "react-icons/gi"

const Icons = (props) => {
    const weather = props.weather.weather;
    if(weather === undefined) return null;
    else{
      const main = weather[0].main;
      let iconStyles = { color: "white", fontSize: "100px"};
      switch(main){
        case "Clouds":
          return   <FaCloud className="icon" style={iconStyles}/> ;
        case "Rain":
          return   <FaCloudRain  className="icon" style={iconStyles}/> ;
        case "Clear":
          return   <FaCloudSun  className="icon" style={iconStyles}/> ;
        case "Sunny":
            return   <FaSun  className="icon" style={iconStyles}/> ;
        case "Snow":
            return   <GiSnowing  className="icon" style={iconStyles}/> ;
        default: 
        return   <FaCloud  className="icon" style={iconStyles}/> ;
      } 
    }
    
  }

  export default Icons;