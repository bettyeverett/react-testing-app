// Create a component 

// Update your <Paragraph> component so that it can accept a message prop, which it will display between the <p> tags. If no message is provided it should just display "Hello, world".

import React from "react";

const Paragraph = ({ message }) => (
    <p>{ message }</p>
);

Paragraph.defaultProps = {
    message: "Something has gone wrong and there isn't any text available right now!"
};

export default Paragraph;