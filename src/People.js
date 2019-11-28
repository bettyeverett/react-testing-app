// Create a component <People> that displays a list of names in a <ul>. The names should comes from an array.
import React from "react";

let names = ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"];

// your component here
const People = () => (
    <ul>
        { /* use map to output an <li> for each */ } 
        { /* item in the array */ }
        { names.map((value, index) => (
            <li key={ index }>
                <p>{ value }</p>
            </li> 
        ))}
    </ul>

);

export default People;