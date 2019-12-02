import React from "react";
import Clicked from "./event/Clicked";
import ToggleText from "./event/ToggleText";
import Counter from "./event/Counter";
import StepCounter from "./event/StepCounter";
import CatchMeIfYouCan from "./event/CatchMeIfYouCan";

const Event = () => (
    <>
        <Clicked />
        <ToggleText initial="Hello" alternate="World"></ToggleText>
        <Counter initial={ 50 } max={ 100 } />
        <StepCounter max={ 100 } step={ 5 } />
        <CatchMeIfYouCan jump={ 100 } />
    </>
);

export default Event;