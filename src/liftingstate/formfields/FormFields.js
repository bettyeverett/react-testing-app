// Create a <Form fields={ fields } /> component. It should take an array of field names as a prop. Create an <Input> component which displays an <input> with an appropriate <label>. Create an <Input> for each field name that the <Form> is passed as props. When the form is submitted it should highlight any fields that are empty with a red outline and display a message saying that the field is required.

import React, { Component } from "react";

import FormInput from "./FormInput";

class Formfields extends Component {

    constructor(props) {
        super(props);

        this.state = {
            values: props.fields.map(() => ""),
            submitted: false,
        };

        
    }

    handleChange(e, index) {

        let newValues = [...this.state.values];

        newValues[index] = e.currentTarget.value;

        this.setState( { 
            values:   newValues,
        } )

    }

    handleClick(e) {

        let blanks = false;

        blanks = this.state.values.some(value => value === "");

        if (blanks === true) {
            e.preventDefault();
            this.setState( { 
                submitted: true,
            } )
        }

    }

    render() {

        let { fields } = this.props;
        let { values, submitted } = this.state;

        return (

            <>
                { fields.map((field, index) => (
                    <FormInput 
                        key={ index } 
                        value={ values[index] }
                        label={ field }
                        onChange={ (e) => this.handleChange(e, index) }
                        filled={ submitted ? values[index] !== "" : true }
                        // handleChange={  }
                    /> 
                ))}
                <input
                    type="submit"
                    value="submit"
                    onClick={ this.handleClick }
                />
            </>

        );

    }
    
}

export default Formfields;