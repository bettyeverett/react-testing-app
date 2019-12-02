// Update your <Square> component so that it can accept a colour prop, which will change the background colour of the square. Also add a default value for colour.

// Update your <Square colour="hotpink"> component so that the background starts red, but when it is clicked it changes to the passed in colour. It should alternate every time you click.
import React, { Component } from "react";

class Square extends Component {

  constructor(props) {
    super(props);

    this.state = {

      isRed: true,

    };

    // force this to always be *this* this in handleClick
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick() {

    this.setState( { isRed: !this.state.isRed } );

  }

  render () {

    let { colour } = this.props;

    return (

      <div 
        className="jumbotron"
        onClick={ this.handleClick }
        style={ { 
          position: "center",
          backgroundColor: this.state.isRed ? "red" : colour,
          width: "200px", 
          height: "200px" 
        } }
      >
      </div>

    );

  }

}

export default Square;