// Create a component <Password label="Password"> that contains an <input> with a <label>. Inside a <SignUp minimumLength={ 12 }> component put two of these <Password> components: one should have the label "Password" and the other "Confirm Password". Both <Password> components should have a red border unless they are longer than minimumLength and match each other.
import React from "react";

const Password = ({ value, handleChange, label, valid }) => (

    <div class="jumbotron form-group">
        <label>{ label }</label>
        <input 
            onChange={ handleChange }
            value={ value }
            style={ {
                borderColor: valid? "green" : "red",
            } } 
        />
    </div>

);

export default Password;