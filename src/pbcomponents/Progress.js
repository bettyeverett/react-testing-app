// Using only React Bootstrap components (there shouldn't be any HTML elements), create a <Progress> component. It should have a progress bar and a "More!" button. The progress bar should start at 0. Each time the button is pressed it should move 10% further along until it reaches 100%. Once it reaches 100% the button should become disabled.

import React, { Component } from "react";

import { ProgressBar, Button } from "react-bootstrap";

class Progress extends Component {

    constructor(props) {
        super(props);

        this.state = {
            now: 0,
        };

        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {

        let { now } = this.state;

        if (now < 100)
        this.setState( { 
            now: now + 10,
        } );


    }

    render() {

        let { now } = this.state;

        return (

            <>
                <ProgressBar 
                    now={ now } 
                    label={`${ now }%`} 
                    striped variant="info" 
                />
                <Button 
                    variant="outline-secondary"
                    onClick={ this.handleClick }
                    disabled={ now === 100 }
                >
                    More!
                </Button>
            </>

        );

    }

}

export default Progress;