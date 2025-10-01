
import React,{useState} from "react";
import './../styles/App.css';
import WeatherDisplay from "./weatherDisplay";
const App = () => {
  const [weather]=useState({
    temperature:20,
    conditions:"Sunny"
  })
  return (
    <div>
        {/* Do not remove the main div */}
      <WeatherDisplay weather={weather}/>
    </div>
  )
}

export default App
