// Create a <Length> component. It should contain an <input> and tell you how many characters have been typed into the <input>.

import React, { Component } from "react";

class Length extends Component {

    constructor(props) {
        super(props);

        this.state = {
            input: "",
        };

        this.handleChange = this.handleChange.bind(this);

    }

    // e is the standard DOM event object
    handleChange(e) {
        // e.currentTarget: DOM element we attached the event handler to 
        // use the value property to read its current value 
        this.setState({ input: e.currentTarget.value });
    }

    render() {

        let { label, name } = this.props;
        let { input } = this.state;

        return (
            <div className="form-group jumbotron">
                <label>{ label }</label>
                <input 
                    className="form-control" 
                    name={ name } 
                    value={ input }
                    onChange={ this.handleChange }
                />
                <p className="help-block">
                    Length: { input.length } characters 
                </p>
            </div> 
        );
    } 
}

export default Length;
