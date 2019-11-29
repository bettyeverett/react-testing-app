// Create a <Clicked> component. It should initially display "Not clicked" in a <p>. Once it's been clicked it should change to "Clicked".
import React, { Component } from "react";

class Clicked extends Component {

    // add a constructor method
    // it gets passed props as its first argument
    constructor(props) {
        // make sure you always add this, it makes Component work
        super(props);

        // setup our state
        // just a plain old JavaScript object 
        this.state = {
            clicked: false,
            };

        // force this to always be *this* this in handleClick
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        // set new value
        // pass in a POJO with values we want to update 
        this.setState({ clicked: true });
    }

    render() {

        return (
            <p 
                className="jumbotron" 
                onClick={ this.handleClick }
            >
                { this.state.clicked  ? "Clicked" : "Not Clicked" }
            </p>
    
        );

    }

}

export default Clicked;