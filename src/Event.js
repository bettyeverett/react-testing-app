import React from "react";
import Clicked from "./event/Clicked";
import ToggleText from "./event/ToggleText";
import Counter from "./event/Counter";
import StepCounter from "./event/StepCounter";

const Event = () => (
    <>
        <Clicked />
        <ToggleText initial="Hello" alternate="World"></ToggleText>
        <Counter initial={ 50 } max={ 100 } />
        <StepCounter max={ 100 } step={ 5 } />
    </>
);

export default Event;