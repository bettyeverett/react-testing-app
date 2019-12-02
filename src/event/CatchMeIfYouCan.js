// Create a <CatchMeIfYouCan jump={ 100 }> component. It should have a <button> that when clicked moves jump pixels down the screen.

import React, { Component } from "react";

class CatchMeIfYouCan extends Component {

    constructor(props) {
        super(props);

        this.state = {
            yposition: 0,
        }

        this.handleClick = this.handleClick.bind(this);
    
    }

    handleClick() {
        this.setState
    }

}