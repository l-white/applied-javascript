import React from 'react';

let visibility;

class Visibility extends React.Component {

    state = {
        output: []
    }
    componentDidMount(){
        fetch('https://mm214.com/demo.php')
        .then(response => response.json())
        .then(output => {
            this.setState({output: output.visibility});
            console.log(output);
        }).catch(error => console.log(error));
    }
    getVisibility(){
        if (this.state.output > 3000) {
            visibility = "Visibility: Good"
        } else {
            visibility = "Visibility: Poor"
        }
        return visibility;
    }
    render() {
        return (
            <li>{this.getVisibility()}</li>
        );
    }
}

export default Visibility;