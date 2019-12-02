// Create a <RollCall names={ names }> component. It should have a button "Next". When the component first loads it should show the first name in the array. Every time you click "Next" it should show the next name in the array. It should loop back to the beginning.

import React, { Component } from "react";

class RollCall extends Component {

    constructor(props) {
        super(props);

        this.state = {
            index: 0,
        };

        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {

        let { index } = this.state;
        let { names } = this.props;

        this.setState( { 
            index: ( index + 1 ) % names.length,
        } );

    }

    render() {

        let { index } = this.state;
        let { names } = this.props;

        return (

            <div className="jumbotron">
                <p className="card card-body">{ names[index] }</p>
                <button className="btn btn-secondary" onClick={ this.handleClick }>Next</button>
            </div>

        );

    }

}

export default RollCall;