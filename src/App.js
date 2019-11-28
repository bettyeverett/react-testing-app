import React from "react";
// import the Header component
// we give React components capitalised names // this makes it clear that they are components 
import Header from "./Header";
import Paragraph from "./Paragraph";
import Square from "./Square";
import People from "./People";
// use the Header component as if it was an HTML element
const App = () => (
  <>
    <Header />
    <Paragraph />
    <Square />
    <People/>
  </>
);

export default App;