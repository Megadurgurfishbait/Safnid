import styled from "styled-components";
import { Link } from "react-router-dom";

import { Colors as C, Font as F } from "../../../../App/Styles";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-height: 400px;
  min-width: 100%;
  background: transparent !important;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 400px;
  width: 80%;
  text-align: left;
  background: transparent !important;
`;

const Title = styled.h1`
  font-size: 40px;
  color: ${C.BROWN};
  line-height: 1.1;
  width: 90%;
  ${F.Montserrat.medium};
`;
const TextAndChoose = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Text = styled.p`
  width: 70%;
  opacity: 0.8;
  color: ${C.BROWN_LIGHT};
  line-height: 1.6;
  ${F.Montserrat.thin};
  letter-spacing: 1px;
  text-overflow: ellipsis;
`;
const Choose = styled.div`
  background-color: red;
  width: 10%;
`;
const Button = styled(Link)`
  width: 150px;
  height: 40px;
  text-transform: uppercase;
  font-weight: 800;
  text-align: center;
  line-height: 40px;
  letter-spacing: 1px;
  margin-top: 35px;
  background-color: ${C.BROWN};
  border: none;
  outline: none;
  color: ${C.RED};
  ${F.Montserrat.medium}
`;

export { Container, Content, Title, Text, TextAndChoose, Choose, Button };
