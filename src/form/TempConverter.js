// Create a <TempConverter> component. It should have a degrees F and degrees C <input>. When you type a number into one <input> it should update the value in the other.

import React, { Component } from "react";

class TempConverter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            farenheit: "32",
            celsius: "0",
        }

        this.handleChangeFarenheit = this.handleChangeFarenheit.bind(this);
        this.handleChangeCelsius = this.handleChangeCelsius.bind(this);

    }

    handleChangeFarenheit(e) {

        let value = e.currentTarget.value;

        this.setState( { 
            farenheit: value,
            celsius: (value - 32) / 1.8,
        } );
    }

    handleChangeCelsius(e) {

        let value = e.currentTarget.value;

        this.setState( { 
            celsius: value,
            farenheit: (value * 1.8) + 32,
        } );
    }

    render() {

        let { farenheit, celsius } = this.state;

        return (

            <>
                <div className="form-group jumbotron">
                    <label>Farenheit</label>
                    <input 
                        className="form-control"
                        onChange={ this.handleChangeFarenheit }
                        value={ farenheit }
                    />
                </div>
                <div className="form-group jumbotron">
                    <label>Celsius</label>
                    <input 
                        className="form-control"
                        onChange={ this.handleChangeCelsius }
                        value={ celsius }
                    />
                </div>
            </>

        );

    }

}

export default TempConverter;