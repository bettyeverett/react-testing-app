import React from "react";

const SquareLS = ( { selected, handleClick, colour } ) => (

    <div 
    className="jumbotron"
    onClick={ handleClick }
    style={ { 
        display: "inline-block",
        position: "center",
        backgroundColor: selected ? "teal" : colour,
        width: "200px", 
        height: "200px",
        margin: "10px", 
    } }
    >
    </div>

);

export default SquareLS;