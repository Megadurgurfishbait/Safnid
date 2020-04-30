import React, { Fragment } from "react";
import { Segment, Divider } from "./VefritList.styled";
import { DeildMap } from "./DeildMap";

import { Vefrit } from "../../../../../App/Assets/PDF/";

export const VefritList = () => (
  <Fragment>
    <Segment>
      <h3>Deild - A</h3>
      {Vefrit.ADeild.map((pdf) => (
        <DeildMap {...pdf} />
      ))}
    </Segment>
    <Divider />
    <Segment>
      <h3>Deild - B</h3>
      {Vefrit.BDeild.map((pdf) => (
        <DeildMap {...pdf} />
      ))}
    </Segment>
  </Fragment>
);
