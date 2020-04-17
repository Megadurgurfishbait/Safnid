import styled from "styled-components";
import { Segment } from "semantic-ui-react";

import { Colors as C, Font as F } from "../../../../../App/Styles";

const Container = styled.div`
  height: calc(100vh * 0.13);
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const TopColumn = styled.div`
  height: 30px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: absolute;

  & > h6 {
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px;
    font-size: 12px;
    background-color: ${C.RED};
    color: ${C.BROWN};
    text-transform: uppercase;
    ${F.Montserrat.medium}
  }
`;

const BottomColumn = styled(Segment)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: ${C.RED};
  background-color: ${C.BROWN} !important;

  & > h1 {
    font-size: 16px;
    margin: 0px auto;
    padding: 0px 20%;
    text-align: left;
    line-height: 0.9;
    ${F.Montserrat.medium}
  }
`;

export { Container, TopColumn, BottomColumn };
