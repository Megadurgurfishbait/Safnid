import React from "react";
import { Sidebar } from "./Sidebar.styled";
import { BurgerMenu } from "./BurgerMenu";
export const Side: React.FC = () => (
  <Sidebar>
    <BurgerMenu />
  </Sidebar>
);
