import React from 'react';
class Temperature extends React.Component {

  state = {
      output: []
  }
  componentDidMount(){
      fetch("https://mm214.com/demo.php")
      .then(response => response.json())
      .then(output => {
          this.setState({output: output.main.temp});
    }).catch(error => console.log(error));
  }
  render() {
      return (
          <li>Temp in Fahrenheit: {Math.round((this.state.output - 273.15) * 9/5 + 32)} degrees</li>
      );
  }
}

export default Temperature;