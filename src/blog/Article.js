// Create a component <Article id={ number }> which shows a specific article based on its id. It should show when you visit /articles/{id}

// Update your <Articles> component to link through to <Article>
import React, { Component } from "react";
import axios from "./axios";
import Comments from "./Comments";

class Article extends Component {

    constructor (props) {
        super(props);

        this.state = {
            loaded: false,
            article: {},
        }
    }

    componentDidMount() {

        let { id } = this.props;

        // make the GET request
        axios.get(`/articles/${ id }`).then(({ data }) => {
            // once the data has come back update the component state
            this.setState({
                loaded: true,
                article: data.data,
            }); 
            
        });
                
    }

    render() {

        let { loaded, article } = this.state;

        return !loaded ? <p>Loading...</p> : ( 
            <>
                <h2>{ article.title }</h2> 
                <p>{ article.article }</p>
                <ul className="list-group">
                    { article.tags.map(tag => (
                        <li className="list-group-item">{ tag }</li>
                    )) }
                </ul>
                <Comments id={ article.id } />
                
            </> 
        );   

    }

}

export default Article;