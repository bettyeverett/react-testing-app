// Update your <Square> component so that it can accept a colour prop, which will change the background colour of the square. Also add a default value for colour.
import React from "react";
  
const Square = ({ colour }) => (
  <div style={ { 
    backgroundColor: colour,
    width: "200px", 
    height: "200px" } }>

  </div>
);

Square.defaultProps = {
  colour: "red"
};

export default Square;