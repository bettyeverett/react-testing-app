// Create a component <Stuff> that includes all of the components so far and then use it in your <App> component:
import React from "react";
import Header from "./Header";
import Paragraph from "./Paragraph";
import Square from "./Square";
import People from "./People";

const Stuff = () => (

    <React.Fragment>
        <Header title="Hello, world!" />
        <Paragraph message="Here is some text about the World, which is really very interesting. Much more interesting than listening to David Attenborough drone on about it!" />
        <Square />
        <People />
    </React.Fragment>

);

export default Stuff;

