import { Colors as C } from "./App/Styles/";
import styled from "styled-components";

const AppContainer = styled.main`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  margin-top: 0px;
  background-color: ${C.BROWN_LIGHT};
  position: relative;
`;

const Layout = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`;

export { AppContainer, Layout };
