import React from "react";
import { BurgerMenu } from "./BurgerMenu";
import { Sidebar } from "./Sidebar.styled";

export const Side: React.FC = () => (
  <Sidebar>
    <BurgerMenu />
  </Sidebar>
);
