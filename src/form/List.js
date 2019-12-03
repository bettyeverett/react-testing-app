// Create a <List> component that consists of a <ul>, an <input>, and a <button>Add</button>. When you click the "Add" button, whatever is in the <input> should get added to the <ul>.
import React, { Component } from "react";

class List extends Component {

    constructor(props) {
        super(props);

        this.state = {
            input: "",
            list: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState( { input: e.currentTarget.value } );
    }

    handleClick() {

        let { list, input } = this.state;

        this.setState( { 
            list: [...list, input], 
            input: "",
        } );
    }

    render() {

        let { label, name } = this.props;
        let { input, list } = this.state;

        return (

            <div 
                className="form-group jumbotron"
            >
                <label>{ label }</label>
                <input 
                    onChange={ this.handleChange }
                    value={ input }
                    className="form-control"
                    name={ name }
                />
                <button onClick={ this.handleClick } >Add</button>
                <ul>
                    { list.map((value, index) => (
                        <li key={ index }>
                            { value }
                        </li> 
                    ))}
                </ul>
            </div>

        );

    }


}

export default List;