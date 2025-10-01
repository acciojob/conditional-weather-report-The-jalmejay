import React from "react";

function WeatherDisplay({weather}){
   const tempComd={
   color:weather.temperature>20?"red":"blue",
   };
   return(
     <div>
      <p>Temperature : <span style={tempComd}>{weather.temperature}</span></p>
      <p>Conditions: {weather.conditions}</p>
      </div>
   );
}
export default WeatherDisplay;
