import React from 'react';

class Humidity extends React.Component {

    state = {
        output: []
    }

    componentDidMount(){
        fetch('https://mm214.com/demo.php')
        .then(response => response.json())
        .then(output => {
            this.setState({output: output.main.humidity});
        }).catch(error => console.log(error));

    }
    render() {
        return (
            <li>Humidity: {this.state.output}%</li>
        );
    }
}

export default Humidity;