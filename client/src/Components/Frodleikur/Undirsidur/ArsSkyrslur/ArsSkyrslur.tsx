import React from "react";
import { BaseLayout, List } from "../undirsidur.styled";
import { Arsskyrslur as Skyrslur } from "../../../../App/Assets/PDF";

export const ArsSkyrslur = () => (
  <BaseLayout>
    {console.log(Skyrslur[0].link)}
    <h1> Ársskýrslur fyrri ára</h1>
    <List>
      {Skyrslur.map((Skyrsla) => (
        <List.Item as="a" href={`${Skyrsla.link}`}>
          {Skyrsla.title}
        </List.Item>
      ))}
    </List>
  </BaseLayout>
);
