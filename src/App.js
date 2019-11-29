import React from "react";
// import the Header component
// we give React components capitalised names // this makes it clear that they are components 
import Stuff from "./Stuff";
import Event from "./Event";
// use the Header component as if it was an HTML element
const App = () => (
  <>
    <Stuff />
    <Event />
  </>
);

export default App;