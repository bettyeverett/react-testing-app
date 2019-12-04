import React from "react";
// import Link from ReactRouter
import { Link } from "react-router-dom";

const Footer = () => (
    <ul className="list-group">
        <li className="list-group-item">
            { /* use Link instead of <a> */ } 
            <Link to="/">Home</Link>
        </li>
        <li className="list-group-item">
            <Link to="/content">Content</Link>
        </li>
        <li className="list-group-item">
            <Link to="/form">Form</Link>
        </li>
        <li className="list-group-item">
            <Link to="/square">Square</Link>
        </li>
        <li className="list-group-item">
            <Link to="/transform">Transform</Link>
        </li>
    </ul> 
);

export default Footer;