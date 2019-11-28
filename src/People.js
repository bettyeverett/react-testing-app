// Create a component <People> that displays a list of names in a <ul>. The names should comes from an array.
// Update your <People> component so that it can accept an array of names with a names prop. If no names are passed in it should display a paragraph saying: "Nothing to see here"
import React from "react";

// your component here
const People = ( { names } ) => (
    names ? (
        <ul>
            { /* use map to output an <li> for each */ } 
            { /* item in the array */ }
            { names.map((value, index) => (
                <li key={ index }>
                    <p>{ value }</p>
                </li> 
            ))}
        </ul>
    ) : <p>Nothing to see here!</p>

);

export default People;