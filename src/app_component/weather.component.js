import React from "react";


const Weather = props => {
  return (
        
        <div>
        <h1>{props.cityname}</h1>

        {/* Get Celsius */}
        {props.temp_celsius ? ( <h1 >{props.temp_celsius}&deg;</h1>) : null}

        {/* Weather description */}
        <h4>
          {props.description.charAt(0).toUpperCase() + props.description.slice(1)}
        </h4>
        </div>
     
  );
};

export default Weather;
