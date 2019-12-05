// Using only React Bootstrap components (there shouldn't be any HTML elements), create a <PasswordStrength> component. It should contain an value with the type password. The background styling should change depending on the length of the password:

// If it's empty the background shouldn't have styling.
// If it's less than 9 it should be red.
// If it's less than 16 it should be orange.
// If it's 16 or more then it should be green.
import React, { Component } from "react";

import { Form } from "react-bootstrap";

class PasswordStrength extends Component {

    constructor(props){
        super(props);

        this.state = {
            value: "",
        }
        
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(e) {

        let value = e.currentTarget.value;

        this.setState( {
            value: value,
        } );

    }

    lengthCheck(length) {
        if (length < 9) {
            return "red";
        } else if (length < 16) {
            return "orange";
        } else {
            return "green";
        }
    }

    backgroundColour() {

        let { value } = this.state;

        let length = value.length;

        if (length > 0) {
            return "backgroundColor: " + this.lengthCheck(value.length);
        }

    }

    render() {

        let { value } = this.state;

        let style = this.backgroundColour();

        return(

            <Form>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password"
                        handleChange={ this.handleChange }
                        value={ value }
                        style={ style } 
                    />
                    <Form.Text className="text-muted">
                        Some Text
                    </Form.Text>
                </Form.Group>
            </Form>

        );

    }

}

export default PasswordStrength;