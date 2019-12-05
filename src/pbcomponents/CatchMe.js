// Using only React Bootstrap components (there shouldn't be any HTML elements), create a <CatchMeIfYouCan jump={ 100 }> component. It should have a button that when clicked moves jump pixels down the screen.
import React, { Component } from "react";
import { Button } from "react-bootstrap";

class CatchMe extends Component {

    constructor(props) {
        super(props);

        this.state = {
            yposition: 0,
        };

        this.handleClick = this.handleClick.bind(this);
    
    }

    handleClick() {

        let { yposition } = this.state;
        let { jump } = this.props;

        this.setState( {
            yposition: yposition + jump,
        } );

    }

    render() {

        let { yposition } = this.state;

        return (
            <Button
                variant="warning"
                style={ { position: "relative", top: yposition + "px" } }
                onClick={ this.handleClick }
            >
                Catch Me If You Can!
            </Button>
        );
    }

}

export default CatchMe;