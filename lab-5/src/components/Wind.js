import React from 'react';

let isWindy = "Yes";
let notWindy = "No";

class Wind extends React.Component {
   constructor(props) {
        super(props);
        this.getWindConditions = this.getWindConditions.bind(this);
    }
    
    state = {
        output: []
    }
    componentDidMount(){
        fetch('https://mm214.com/demo.php')
        .then(response => response.json())
        .then(output => {
            this.setState({output: output.wind.speed});
        }).catch(error => console.log(error));
    }
    getWindConditions(){
        console.log(this.context);
        return (this.state.output > 30 ? isWindy : notWindy); 
    }
    render() {
        return (
            <li>Windy: {this.getWindConditions()}</li>
        );
    }
}

export default Wind;