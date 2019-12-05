// Create a component <Articles> which lists all of the articles. It should show when you visit /articles
import React, { Component } from "react";
import axios from "./axios";
import { Link } from "react-router-dom";

class Articles extends Component {

    constructor (props) {
        super(props);

        this.state = {
            loaded: false,
            articles: [],
        }
    }

    componentDidMount() {

        // make the GET request
        axios.get("/articles").then(({ data }) => {
            // once the data has come back update the component state
            this.setState({
                loaded: true,
                articles: data.data,
            }); 

        });
                
    }

    render() {

        let { loaded, articles } = this.state;

        return !loaded ? <p>Loading...</p> : ( 
            <>
                <h2>Some very interesting articles</h2> 
                <ul className="list-group">
                    { articles.map(article => (
                        <li className="list-group-item">
                            <Link to={ `/articles/${ article.id }` }>{ article.title }</Link>
                        </li>
                    )) } 
                </ul>
            </> 
        );   

    }

}

export default Articles;