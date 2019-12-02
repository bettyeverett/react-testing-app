// Create a <Counter initial={ 50 } max={ 100 } /> component. It should consist of a <p> containing a number (which starts at the initial value) and two buttons, + and -. When the user clicks the + button, the number should go up. When the user clicks the - button the number should go down. The number should not be able to go below 0. Use props to pass in a maximum value for the counter.

import React, { Component } from "react";

class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            initial: 50,
        };

        this.handleClickAdd = this.handleClickAdd.bind(this);
        this.handleClickSubtract = this.handleClickSubtract.bind(this);

    }

    handleClickSubtract() {

        if (this.state.initial > 0)
        this.setState( { 
            initial: this.state.initial - 1,
        } );

    }

    handleClickAdd() {

        if (this.state.initial < this.props.max)
        this.setState( { 
            initial: this.state.initial + 1,
        } );
        
    }

    render() {

        return (
            <>
                <p style={ { margin: "30px" } } class="lead">{ this.state.initial }</p>
                <button 
                    onClick={ this.handleClickAdd }
                    style={ { margin: "30px" } } 
                    class="btn btn-dark"
                >+</button>
                <button 
                    onClick={ this.handleClickSubtract }
                    style={ { margin: "30px" } } 
                    class="btn btn-dark"
                >-</button>
            </>
        );

    }

}

export default Counter;