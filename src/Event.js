import React from "react";
import Clicked from "./event/Clicked";
import ToggleText from "./event/ToggleText";
import Counter from "./event/Counter"

const Event = () => (
    <>
        <Clicked />
        <ToggleText initial="Hello" alternate="World"></ToggleText>
        <Counter initial={ 50 } max={ 100 } />
    </>
);

export default Event;