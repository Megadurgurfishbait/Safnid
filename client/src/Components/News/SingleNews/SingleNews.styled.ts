import styled from "styled-components";
import { Layout } from "../../../App/Styles";

export const Container = styled(Layout)`
  display: flex;
  overflow: hidden;

  & > h1 {
    align-self: center;
  }
`;
