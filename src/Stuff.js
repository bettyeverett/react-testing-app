// Create a component <Stuff> that includes all of the components so far and then use it in your <App> component:

// Update your <Stuff> component so that it can accept a square prop, which will determine whether the <Square> component is displayed or not. This prop should default to true.

import React from "react";
import Header from "./stuff/Header";
import Paragraph from "./stuff/Paragraph";
import Square from "./stuff/Square";
import People from "./stuff/People";

const Stuff = ( { square } ) => (

    <React.Fragment>
        <Header />
        <Paragraph />
        { square ? (<Square colour="teal" />) : null }
        <People names={ ["Charlotte", "Beth", "Gareth"] } />
    </React.Fragment>

);

Stuff.defaultProps = {
    square: true,
};

export default Stuff;

