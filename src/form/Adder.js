// Create an <Adder> component. It should have a number <input> field and an "Add" <button>. When the "Add" button is pressed the number should be added to a list of numbers on screen and the total of all the numbers in the list should be displayed below. Make sure you test the total is correct: try 1, 2, and 3 and check you get 6

import React, { Component } from "react";

class Adder extends Component {

    constructor(props) {
        super(props);

        this.state = {
            input: "",  
            list: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }

    handleChange(e) {
        this.setState( { input: e.currentTarget.value } );
    }

    handleClick() {

        let { input, list } = this.state;

        this.setState( { 
            list: [...list, +input],
            input: "",
        })


    }

    render() {

        let { label, name } = this.props;
        let { input, list } = this.state;

        return (

            <div className="form-group jumbotron">
                <label>{ label }</label>  
                <input 
                    onChange={ this.handleChange }
                    value={ input }
                    className="form-control"
                    name={ name }
                />
                <button onClick={ this.handleClick } >Add Me!</button>
                <ul>
                    { list.map((value, index) => (
                        <li key={ index }>
                            <p>{ value }</p>
                        </li> 
                    ))}
                </ul>
                <p>{ list.reduce((total, input) => total + input, 0) }</p>
            </div>

        );

    }

}

export default Adder;