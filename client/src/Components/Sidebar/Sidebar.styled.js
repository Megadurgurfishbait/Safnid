import styled from "styled-components";
import { Colors as C } from "../../App/Styles/";

export const Sidebar = styled.aside`
  height: 100vh;
  width: 60px;
  margin: 0px;
  background-color: ${C.RED};
  position: fixed;
  z-index: 500;
  border-right: ${C.BROWN} 1px solid;
`;
