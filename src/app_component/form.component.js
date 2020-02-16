import React from "react";

const Form = props => {
  return (
    <div >
      <form onSubmit={props.loadweather}>
        <div>{props.error ? error() : ""}</div>
        
            <input
              type="text"
              placeholder="City"
              name="city"
              autoComplete="off"
            />
          
            <button>Get Weather info</button>
       
      </form>
    </div>
  );
};

const error = props => {
  return (
      <p>Please Enter City Name...!</p>
  );
};

export default Form;
