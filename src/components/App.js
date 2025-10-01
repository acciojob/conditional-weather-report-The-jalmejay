
import React,{useState,useEffect} from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  const [weather,setWeather]=useState({
    temperature:0, 
    conditions:""
  });
  useEffect(()=>{
    setWeather({temperature:20,conditions:"Sunny"});
  },[])
  return (
    <div>
        {/* Do not remove the main div */}
      <WeatherDisplay weather={weather}/>
    </div>
  )
}

export default App
