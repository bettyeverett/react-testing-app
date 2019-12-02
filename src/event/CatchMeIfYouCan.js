// Create a <CatchMeIfYouCan jump={ 100 }> component. It should have a <button> that when clicked moves jump pixels down the screen.

import React, { Component } from "react";

class CatchMeIfYouCan extends Component {

    constructor(props) {
        super(props);

        this.state = {
            yposition: 0,
        };

        this.handleClick = this.handleClick.bind(this);
    
    }

    handleClick() {
        this.setState( {
            yposition: this.state.yposition + this.props.jump,
        } );

    }

    render() {
        return (
            <button
                style={ { position: "relative", top: this.state.yposition + "px" } }
                onClick={ this.handleClick }
                className="btn btn-primary"
            >
                Catch Me If You Can!
            </button>
        );
    }

}

export default CatchMeIfYouCan;