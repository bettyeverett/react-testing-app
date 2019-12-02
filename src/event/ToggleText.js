// Create <ToggleText initial="Hello" alternate="World"> component. It should consist of a <p> and a <button>Toggle</button>. When the <button> is clicked the text of the <p> tag should alternate between initial and alternate.

import React, { Component } from "react";

class ToggleText extends Component {

    constructor(props) {
        super(props);

        this.state = {
            initial: true,
        };

        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        this.setState( { 
            initial: !this.state.initial 
        } );
    }

    render () {

        let {initial, alternate} = this.props;

        return (
            <>
                <p>
                    { this.state.initial ? initial : alternate }
                </p>
                <button onClick={ this.handleClick }>Toggle</button>
            </>
        );
    }

}


export default ToggleText;