import React from 'react';
import TempConverter from './TempConverter';
class Temperature extends React.Component {

  state = {
      output: []
  }
  componentDidMount(){
      fetch("https://mm214.com/demo.php")
      .then(response => response.json())
      .then(output => {
          this.setState({output: output.main.feels_like});
    }).catch(error => console.log(error));
  }
  
  render() {
      return (
        <li>Feels Like: {TempConverter(this.state.output)} degrees</li>
      );
  }
}

export default Temperature;