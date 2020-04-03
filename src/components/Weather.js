import React, { Component } from "react";
import axios from "axios";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: undefined,
      temp: undefined,
      description: []
    };
  }
  componentDidMount = async () => {
    const api_key = "03625bde42ecc32076867b4990e7db1b";
    const response = await axios(
      `https://api.openweathermap.org/data/2.5/weather?id=5128638&units=imperial&appid=${api_key}`
    );
    this.setState({
      city: response.data.name,
      temp: response.data.main.temp,
      description: response.data.weather
    });
    
  };

  render() {
    let temp = Math.round(this.state.temp);

    return (
      <>
        <p className="weatherInfo">
          <b>currently in {this.state.city}</b>: {temp}&deg;{" "}
          {this.state.description.map(i => (
            <i key={i}>{i.description}</i>
          ))}
        </p>
      </>
    );
  }
}

export default Weather;
