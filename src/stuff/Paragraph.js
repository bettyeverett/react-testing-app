// Create a component 

// Update your <Paragraph> component so that it can accept a message prop, which it will display between the <p> tags. If no message is provided it should just display "Hello, world".

import React from "react";

const Paragraph = () => (

    <div className="jumbotron">
        <p>Here is some text about the World, which is really very interesting. Much more interesting than listening to David Attenborough drone on about it!</p>
    </div>
    
);

Paragraph.defaultProps = {
    children: "Something has gone wrong and there isn't any text available right now!"
};

export default Paragraph;