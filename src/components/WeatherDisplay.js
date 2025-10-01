import React from "react";

function WeatherDisplay({weather}){
  
   return(
     <div>
      <p>Temperature:{" "}<span style={{color: weather.temperature >20?"red":"blue"}} > {weather.temperature}</span></p>
      <p>Conditions: {weather.conditions}</p>
      </div>
   );
}
export default WeatherDisplay;
