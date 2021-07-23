import React from 'react';

let goodVisibility = "Good";
let poorVisibility = "Poor";

class Visibility extends React.Component {

    state = {
        output: []
    }
    componentDidMount(){
        fetch('https://mm214.com/demo.php')
        .then(response => response.json())
        .then(output => {
            this.setState({output: output.visibility});
        }).catch(error => console.log(error));
    }

    getVisibility(){
      return (this.state.output > 30000 ? goodVisibility : poorVisibility); 
    }
    render() {
        return (
            <li>Visibility: {this.getVisibility()}</li>
        );
    }
}

export default Visibility;