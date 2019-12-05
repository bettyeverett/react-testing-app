// Create a component <Comments articleID={ number }> which lists all of the comments for a given article.

// Update your <Article> component to use the <Comments> component at the bottom

import React, { Component } from "react";
import axios from "./axios";

class Comments extends Component {

    constructor (props) {
        super(props);

        this.state = {
            loaded: false,
            comments: [],
        }
    }

    componentDidMount() {

        let { id } = this.props;

        // make the GET request
        axios.get(`/articles/${id }/comments`).then(({ data }) => {
            // once the data has come back update the component state
            this.setState({
                loaded: true,
                comments: data.data,
            }); 
            
        });
                
    }

    render() {

        let { loaded, comments } = this.state;

        return !loaded ? <p>Loading...</p> : ( 
            <>

                <ul className="list-group">
                    { comments.map(comment => (
                        <li className="list-group-item">
                            <h2>{ comment.email }</h2>
                            <p>{ comment.comment }</p>
                        </li>
                    )) }
                </ul>
                
            </> 
        );   

    }

}

export default Comments;