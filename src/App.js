import React from "react";
// import the Header component
// we give React components capitalised names // this makes it clear that they are components 
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Header from "./stuff/Header";
import Paragraph from "./stuff/Paragraph";
import Form from "./Form";
import Square from "./stuff/Square";
import Transform from "./form/Transform";
import Footer from "./stuff/Footer";

// use the Header component as if it was an HTML element
const App = () => (
  <Router>
    <>
    <Route path="/" component={ Header }/>
    <Route exact path="/content" component={ Paragraph }/>
    <Route exact path="/form" component={ Form } />

    <Route path="/square" render={ () => (
      <Square 
        colour="blue"
      /> ) } 
    />

    <Route path="/transform" render={ () => (
      <Transform 
        transform={ x => x * x } 
        label="Squared" 
        name="squared"
      />

    ) } />

    <Footer />
      
    </>
  </Router>
);

export default App;