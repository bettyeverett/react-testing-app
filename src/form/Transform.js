// Create a <Transform transform={ /* ...your function here... */ }> component. It should accept a function that takes a number and returns a number (e.g. a squaring function x => x * x or an increment function x => x + 1). The component should have an <input type="number"> and a <p>. When the user types into the <input> the <p> should output the result of running the number through the transform function. Try adding a few <Transform> components to your app with a different function for each one.

import React, { Component } from "react";

class Transform extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: "",
        };

        this.handleChange = this.handleChange.bind(this);

    }

   handleChange(e) {

    this.setState( {
        value: e.currentTarget.value,
    } );

    } 

    render() {

        let { value } = this.state;
        let { transform, label, name } = this.props;

        return (

            <div className="form-group jumbotron">
                <label>{ label }</label>
                <input 
                    type="number"
                    name={ name } 
                    value={ value }
                    onChange={ this.handleChange }
                />
                <p>{ transform(+value) }</p>
            </div>

        );

    }    

}

export default Transform;