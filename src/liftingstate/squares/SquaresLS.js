// Create a component <Squares color="hotpink"> that displays two of your <Square> components and passes through the color prop. As before, when clicked the background colour should change. But only one of the <Square>s should show the given colour at once. You'll need to turn your squares back into stateless components.

// import Fragment
import React, { Fragment, Component } from "react";

// import the currently self-aware square component
import SquareLS from "./SquareLS";

class SquaresLS extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selected: 1
        };
    }

    render() {

        let { colour } = this.props;
        let { selected } = this.state;

        // need to use a Fragment to output multiple elements
         return (
          <Fragment>
            <SquareLS 
                colour={ colour }
                selected={ selected === 1 }
                handleClick={ () => this.setState({ selected: 1 }) }
            />
            <SquareLS 
                colour={ colour } 
                selected={ selected === 2 }
                handleClick={ () => this.setState({ selected: 2 }) }
            />
          </Fragment>
    ); }

}

export default SquaresLS;