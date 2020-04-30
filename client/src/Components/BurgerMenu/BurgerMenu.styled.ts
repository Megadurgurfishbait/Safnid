import styled from "styled-components";
import { Label } from "semantic-ui-react";

import { BgGradient, Colors as C, Font as F } from "../../App/Styles/";
import image from "../../App/Assets/Images/Bgimg.png";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${C.RED};
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: 20;
  ${BgGradient};
`;

const BackgroundImage = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background: url(${image});
  background-repeat: none;
  background-size: cover;
`;

// prettier-ignore
const Relative = styled.div<{MenuOpen: boolean}>`
  width: 100%;
  height: 100%;
  position: absolute;
  transition: left .4s ease-in;
  left: ${props => props.MenuOpen ? "0" : "-1900px"};
  z-index: 200;
`;

const UL = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  list-style: none;
  text-transform: uppercase;
  height: 500px;
  align-items: center;
`;

// prettier-ignore
const LineAbove = styled.div<{reverse: boolean}>`
  display: flex;
  flex-direction: ${props => props.reverse && "row-reverse"};
  height: 1px;
  width: 220px;
  justify-content: space-between;

`;

const LI = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 40px;
`;

const LBL = styled(Label)`
  font-size: 40px;
  letter-spacing: 5px;
  opacity: 0.5;
  margin: 0px;
  transition: opacity 0.1s linear;
  color: white;

  ${F.Montserrat.medium}
  &:hover {
    opacity: 1;
    cursor: pointer;
    color: white;
  }
`;

interface LineProps {
  width: string;
  color: string;
}

// prettier-ignore
const Line = styled.div<LineProps>`
  width: ${props => props.width}%;
  background-color: ${props => props.color};
  height: 2px;
  box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.75);

`;

export { Container, Relative, BackgroundImage, UL, LineAbove, Line, LI, LBL };
