import React from "react";

const FormInput = ( { label, value, handleChange, filled } ) => (

    <div className="form-group">
        <label>{ label }</label>
        <input 
            value={ value }
            onChange={ handleChange }
            style={ {
                border: filled? "green" : "red"
            } }
        />
        { filled? "" : <p>field is required</p> }
    </div>

);

export default FormInput;