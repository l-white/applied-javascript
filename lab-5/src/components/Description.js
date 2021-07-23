import React from 'react';

class Description extends React.Component {

    state = {
        output: []
    }

    componentDidMount(){
        fetch('https://mm214.com/demo.php')
        .then(response => response.json())
        .then(output => {
            this.setState({output: output.weather[0].description});
        }).catch(error => console.log(error));

    }
    render() {
        return (
            <li>Description: {this.state.output}</li>
        );
    }
}

export default Description;