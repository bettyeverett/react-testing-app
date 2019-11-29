import React, { Component } from "react";

class Header extends Component {

    render() {

        let { children } = this.props;

        return (
            <header className="jumbotron">
                <h1>{ children }</h1>
            </header>
        );
    }

}
// we use className to add classes for Bootstrap styling

export default Header;