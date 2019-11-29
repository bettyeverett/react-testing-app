// Create a component 

// Update your <Paragraph> component so that it can accept a message prop, which it will display between the <p> tags. If no message is provided it should just display "Hello, world".

import React, { Component } from "react";

class Paragraph extends Component {

    render() {

        let { children } = this.props;

        return (
            <p>{ children }</p>
        );

    }

}

Paragraph.defaultProps = {
    children: "Something has gone wrong and there isn't any text available right now!"
};

export default Paragraph;