import React from "react";
import * as FP from "./FrontPage.styled";

import { IconAndTitle } from "./IconAndTitle";
import { Carousel } from "./Carousel";
import { observer } from "mobx-react-lite";

const FrontPage = () => (
  <FP.Relative>
    <FP.BackgroundImage />
    <FP.Gradient>
      <FP.Container>
        <Carousel />
        <IconAndTitle />
      </FP.Container>
    </FP.Gradient>
  </FP.Relative>
);

export default observer(FrontPage);
