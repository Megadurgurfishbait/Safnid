import React from "react";
import { BaseLayout, Embed, Divider } from "../undirsidur.styled";
export const Stuttmyndir = () => {
  return (
    <BaseLayout>
      <h1>Landbúnaðarsafn Íslands - Fordson</h1>
      <Embed id="8j0mK2mxKr0" source="youtube" active />
      <Divider section />
      <h1>Landbúnaðarsafn Íslands - Skilvindur</h1>
      <Embed id="gMamAvZk_QE" source="youtube" active />
    </BaseLayout>
  );
};
