import React from "react";
import { BaseLayout } from "../undirsidur.styled";

import { VefritText } from "./VefritTexti";
import { VefritList } from "./VefritList";

export const Vefrit = () => (
  <BaseLayout>
    <VefritText />
    <VefritList />
  </BaseLayout>
);
