import React, { Component } from "react";

import Password from "./Password";

class Login extends Component {

    constructor(props){
        super(props);

        this.state = {
            input: "",
            inputConf: "",
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeConf = this.handleChangeConf.bind(this);
    }

    handleChange(e) {

        this.setState( {
            input: e.currentTarget.value,
        } );
    }

    handleChangeConf(e) {

        this.setState( {
            inputConf: e.currentTarget.value,
        } );
    }

    render() {

        let { minLength } = this.props;
        let { input, inputConf } = this.state;

        let valid = input.length >= minLength && input === inputConf;
        
        return (
            <>
                <Password 
                    value={ input }
                    label="Password"
                    handleChange={ this.handleChange }
                    valid={ valid }
                />
                <Password 
                    value={ inputConf }
                    label="Confirm Password"
                    handleChange={ this.handleChangeConf }
                    valid={ valid }
                />
            </>
        );

    }

}

export default Login;