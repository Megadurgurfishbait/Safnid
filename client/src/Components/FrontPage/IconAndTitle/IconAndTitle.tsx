import React from "react";
import * as IT from "./IconAndTitle.styled";

const IconAndTitle = () => (
  <IT.Container>
    <IT.IconContainer>
      <IT.Icon />
    </IT.IconContainer>
    <IT.TitleContainer>
      <h1>Landbúnaðarsafn Íslands</h1>
      <IT.Divider />
      <h5>
        Verið velkomin á <span>Hvanneyri </span>
      </h5>
    </IT.TitleContainer>
  </IT.Container>
);

export default IconAndTitle;
