import styled from "styled-components";
import { Colors as C, Font as F } from "../../../../App/Styles/";

const Container = styled.aside`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 280px;
  background-color: ${C.BROWN_LIGHT};
`;

const TextContainer = styled.div`
  display: flex;
  height: calc(100vh * 0.2);
  width: 100%;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  color: ${C.RED} !important;

  & * h3,
  & > h3 {
    color: ${C.RED};
    ${F.Montserrat.medium}
  }
`;

export { Container, TextContainer };
