import React from 'react';

let isWindy;

class Wind extends React.Component {

    state = {
        output: []
    }
    componentDidMount(){
        fetch('https://mm214.com/demo.php')
        .then(response => response.json())
        .then(output => {
            this.setState({output: output.wind.speed});
            console.log(output);
        }).catch(error => console.log(error));
    }
    getWindConditions(){
        if (this.state.output > 30) {
            isWindy = "Windy: Yes"
        } else {
            isWindy = "Windy: No"
        }
        return isWindy;
    }
    render() {
        return (
            <li>{this.getWindConditions()}</li>
        );
    }
}

export default Wind;