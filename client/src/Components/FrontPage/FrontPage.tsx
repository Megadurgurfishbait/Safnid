import React from "react";
import * as FP from "./FrontPage.styled";

import { IconAndTitle } from "./IconAndTitle";
import { Carousel } from "./Carousel";

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

export default FrontPage;
