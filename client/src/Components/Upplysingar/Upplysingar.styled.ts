import styled from "styled-components";
import { Colors as C } from "../../App/Styles";

const Section = styled.section`
  height: 100%;
  width: 500px;
  position: absolute;
  top: 00px;
  left: 60px;
  z-index: 600;
  background-color: ${C.BROWN};
`;

const Relative = styled.div`
  height: 100%;
  width: 98%;
  position: relative;
  background-color: ${C.BROWN};
`;

const Wave = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  position: absolute;

  & > img {
    min-width: 100vh;
    transform: rotate(90deg);
    transform-origin: 100% 100%;
    background-size: contain;
  }
`;

const BackWave = styled(Wave)`
  opacity: 0.3;
`;
const MiddleWave = styled(Wave)`
  opacity: 0.6;
`;
const FrontWave = styled(Wave)`
  background-color: ${C.BROWN};
  fill: ${C.BROWN};
`;
const InformationContainer = styled.div``;

export {
  Section,
  BackWave,
  MiddleWave,
  FrontWave,
  InformationContainer,
  Relative
};
