import styled from "styled-components";
import Image from "../../App/Assets/Images/Bgimg.png";
import { BgGradient, Layout } from "../../App/Styles/";

const BackgroundImage = styled.div`
  height: 100%;
  position: absolute;
  width: 100%;
  background: url(${Image});
  background-size: cover;
`;
const Gradient = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  ${BgGradient}
`;
const Relative = styled(Layout)`
  background-color: white;
  position: relative;
`;

const Container = styled.section`
  display: flex;
  height: 100%;
  width: 100%;
`;

export { BackgroundImage, Gradient, Container, Relative };
