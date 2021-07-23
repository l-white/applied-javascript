
import React from 'react';

class City extends React.Component {

    state = {
        output: []
    }

    componentDidMount(){
        fetch('https://mm214.com/demo.php')
        .then(response => response.json())
        .then(output => {
            this.setState({output: output.name});
            console.log(output);
        }).catch(error => console.log(error));
    }

    render() {
        return (
            <h1>Current Weather Conditions for {this.state.output}</h1>
        );
    }
}

export default City;