// Create a component <Stuff> that includes all of the components so far and then use it in your <App> component:

// Update your <Stuff> component so that it can accept a square prop, which will determine whether the <Square> component is displayed or not. This prop should default to true.

import React from "react";
import Header from "./Header";
import Paragraph from "./Paragraph";
import Square from "./Square";
import People from "./People";

const Stuff = () => (

    <React.Fragment>
        <Header>Hello, world!</Header>
        <Paragraph>Here is some text about the World, which is really very interesting. Much more interesting than listening to David Attenborough drone on about it!</Paragraph>
        <Square colour="teal" />
        <People names={ ["Charlotte", "Beth", "Gareth"] } />
    </React.Fragment>

);

export default Stuff;

