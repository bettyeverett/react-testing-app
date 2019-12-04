import React from "react";

import Length from "./form/Length";
import List from "./form/List";
import Adder from "./form/Adder";
import TempConverter from "./form/TempConverter";
import Transform from "./form/Transform";

const Form = () => (
    <>
      <Length />
      <List />
      <Adder />
      <TempConverter />
      <Transform transform={ x => x * x } label="Squared" name="squared" />
      <Transform transform={ x => x + x } label="Double" name="double" />
    </>
  );

export default Form;