// Create a component <People> that displays a list of names in a <ul>. The names should comes from an array.
// Update your <People> component so that it can accept an array of names with a names prop. If no names are passed in it should display a paragraph saying: "Nothing to see here"
import React, { Component } from "react";

class People extends Component {

    handleClick() {
        console.log("Hello, world!")
    }

    render() {

        let { names } = this.props;

        return (

            names ? (
                <div className="jumbotron">
                    <ul
                        onClick={ this.handleClick }
                    >
                        { /* use map to output an <li> for each */ } 
                        { /* item in the array */ }
                        { names.map((value, index) => (
                            <li key={ index }>
                                <p>{ value }</p>
                            </li> 
                        ))}
                    </ul>
                </div>
            ) : <p>Nothing to see here!</p>
                

        );

    }

}

export default People;