import React from "react";
// import the Header component
// we give React components capitalised names // this makes it clear that they are components 
import Stuff from "./Stuff";
import Event from "./Event";
import Form from "./Form";

// use the Header component as if it was an HTML element
const App = () => (
  <>
    <Stuff />
    <Event />
    <Form />
  </>
);

export default App;