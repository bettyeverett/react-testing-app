import React from "react";

// we use className to add classes for Bootstrap styling
const Header = ({ title }) => (
    <header className="jumbotron">
        <h1>{ title }</h1>
    </header>
 );

export default Header;