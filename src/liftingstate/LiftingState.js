import React from "react";

import SquaresLS from "./squares/SquaresLS";
import Login from "./password/Login";
import FormFields from "./formfields/FormFields";

const LiftingState = () => (
    <>
        <SquaresLS colour="hotpink" />
        <Login minLength={ 12 }/>
        <FormFields fields={ ["First Name", "Last Name", "Email"] }/>
    </>
);

export default LiftingState;