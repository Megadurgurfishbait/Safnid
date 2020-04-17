import styled from "styled-components";
import { Colors as C, Font as F } from "../../../../App/Styles/";

const FullWidth = styled.div`
  margin-top: 30px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Container = styled.article`
  display: flex;
  height: 80vh;
  flex-direction: column;
  align-items: center;
  max-width: 60%;
  overflow: hidden;
  align-self: center;
`;

interface Props {
  direction?: string;
}

// prettier-ignore
const CustomImage = styled.img<Props>`
  float: ${props => props.direction};
  max-height: 400px;
  max-width: 400px;
  margin: 20px; 
  margin-top: 0px;
  margin-right: ${({direction}) => direction === "right" && "0px"};
  margin-left: ${({direction}) => direction === "left" && "0px"};
  align-self: center;
`;
const Paragraph = styled.div`
  white-space: pre-line;
  line-height: 1.8;
  ${F.Montserrat.medium}
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  color: ${C.BLACK};

  & > h1 {
    margin: 0px;
    letter-spacing: 0.5px;
    ${F.IBMPlex.bold}
  }

  & > h5 {
    margin: 0px;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 2px;
    opacity: 0.5;
    ${F.IBMPlex.bold}
  }

  margin: 20px 0px;
`;
const Date = styled.div`
  height: 20px;
  margin: 0px;
`;

const TextAndImage = styled.div``;
const Content = styled.section`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  min-height: 70%;
  padding-right: 50px;
  /* Track */
  ::-webkit-scrollbar-track {
    background: ${C.BROWN_LIGHT};
    border-radius: 5px;
    box-shadow: 2px 2px 10px ${C.BROWN_DARK};
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${C.RED};
    border-radius: 5px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export {
  Title,
  Date,
  FullWidth,
  Paragraph,
  Content,
  CustomImage,
  Container,
  TextAndImage
};
