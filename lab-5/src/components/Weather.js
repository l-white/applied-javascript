import React, { Component } from 'react';

class Weather extends React.Component {
  state = {
    weather: []
  }
componentDidMount(){
  fetch("https://mm214.com/demo.php")
  .then(response => response.json())
  .then(weather => {
    this.setState({ weather: weather.description });
  })
  .catch(error => console.log(error));
}
render(){
  return (
    <p>{this.state.weather.description}</p>
  );
}

}

export default Weather;