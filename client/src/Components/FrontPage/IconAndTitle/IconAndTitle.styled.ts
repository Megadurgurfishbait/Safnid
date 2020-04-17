import styled from "styled-components";

import { Colors as C, Font as F } from "../../../App/Styles/";
import Image from "../../../App/Assets/Images/LBS_trans.gif";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

const ContainerBluePrint = styled.div`
  display: flex;
  height: 200px;
  width: 100%;
`;

const IconContainer = styled(ContainerBluePrint)`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
`;
const Icon = styled.div`
  height: 80px;
  width: 80px;
  background: url(${Image});
  background-size: contain;
  margin: 40px 40px;
`;

const TitleContainer = styled(ContainerBluePrint)`
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 0px 40px 40px 0px;

  color: ${C.BROWN};
  & > h1 {
    font-size: 60px;
    margin: 0px;
    font-weight: inherit;
    letter-spacing: -4px;
    ${F.Montserrat.thin}
  }

  & > h5 {
    text-transform: uppercase;
    margin: 0px;
    font-weight: inherit;
    font-size: 18px;
    letter-spacing: 2px;
    ${F.Montserrat.thin}
    & > span {
      font-weight: 800;
    }
  }
`;
const Divider = styled.div`
  height: 2px;
  width: 50%;
  background-color: ${C.BROWN};
  margin: 10px 0px;
`;

export { Container, TitleContainer, IconContainer, Divider, Icon };
