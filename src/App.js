import React from "react";
import "./App.css";
import Form from "./app_component/form.component";
import Weather from "./app_component/weather.component";


const Api_Key = "429736441cf3572838aa10530929f7cd";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      main: undefined,
      celsius: undefined,
      description: "",
      error: false
    };

  }


  calCelsius(temp) {
    let cell = Math.floor(temp - 273.15);
    return cell;
  }

  getWeather = async(e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;

    if (city) {
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}`);

      const response = await api_call.json();

      this.setState({
        city: response.name,
        celsius: this.calCelsius(response.main.temp),
        description: response.weather[0].description,
        error: false
      });

      
    } else {
      this.setState({
        error: true
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Form loadweather={this.getWeather} error={this.state.error} />
        <Weather
          cityname={this.state.city}
          temp_celsius={this.state.celsius}
          description={this.state.description}
        />
      </div>
    );
  }
}

export default App;

