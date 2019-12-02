import React from "react";
import Clicked from "./event/Clicked";
import ToggleText from "./event/ToggleText";
import Counter from "./event/Counter";
import StepCounter from "./event/StepCounter";
import CatchMeIfYouCan from "./event/CatchMeIfYouCan";
import RollCall from "./event/RollCall";

const Event = () => (
    <>
        <Clicked />
        <ToggleText initial="Hello" alternate="World"></ToggleText>
        <Counter initial={ 50 } max={ 100 } />
        <StepCounter max={ 100 } step={ 5 } />
        <CatchMeIfYouCan jump={ 100 } />
        <RollCall names={ ["james", "sally", "jerry", "sarah"] } />
    </>
);

export default Event;