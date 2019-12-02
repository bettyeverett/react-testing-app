// Create a <StepCounter max={ 100 } step={ 5 } /> component. It should consist of a <p> containing a number (start at 0) and two buttons, + and -. When the user clicks the + button, the number should go up by step. When the user clicks the - button the number should go down by step. The number should not be able to go below 0. Use props to pass in a maximum value for the counter.

import React, { Component } from "react";

class StepCounter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            initial: 50,
        };

        this.handleClickAdd = this.handleClickAdd.bind(this);
        this.handleClickSubtract = this.handleClickSubtract.bind(this);

    }

    handleClickSubtract() {

        let { step } = this.props;
        let { initial } = this.state;

        if (initial > 0)
        this.setState( { 
            initial: initial - step,
        } );

    }

    handleClickAdd() {

        let { step, max } = this.props;
        let { initial } = this.state;

        if (initial < max)
        this.setState( { 
            initial: initial + step,
        } );
        
    }

    render() {

        return (
            <>
                <div className="jumbotron">
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
                </div>
            </>
        );

    }

}

export default StepCounter;