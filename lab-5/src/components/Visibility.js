import React from 'react';

let goodVisibility = "Good";
let poorVisibility = "Poor";

class Visibility extends React.Component {
    constructor (props) {
        super(props);
        this.getVisibility = this.getVisibility.bind(this);
        console.log(this);
    }
    
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
        //console.log(this);
        return (this.state.output > 30000 ? goodVisibility : poorVisibility); 
    }
    render() {
        return (
            <li>Visibility: {this.getVisibility()}</li>
        );
    }
}

export default Visibility;