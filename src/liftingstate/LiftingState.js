import React from "react";

import SquaresLS from "./squares/SquaresLS";
import Login from "./password/Login";

const LiftingState = () => (
    <>
        <SquaresLS colour="hotpink" />
        <Login minLength={ 12 }/>
    </>
);

export default LiftingState;