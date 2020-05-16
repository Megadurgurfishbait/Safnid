import React from "react";
import * as U from "./Upplysingar.styled";
import { SVG } from "../../App/Assets/SVG";
export const Upplysingar = () => {
  return (
    <U.Section>
      <U.Relative>
        <U.BackWave>
          <img src={SVG.wave3} />
        </U.BackWave>
        <U.MiddleWave>
          <img src={SVG.wave4} />
        </U.MiddleWave>
        <U.FrontWave>
          <img src={SVG.wave5} />
        </U.FrontWave>
      </U.Relative>
    </U.Section>
  );
};
