import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 60px;
  width: 60px;

  position: relative;
  justify-content: center;
  transition: all 1s ease-in;
  z-index: 3;
  padding: 0px;
  overflow: hidden;
  &:hover {
    cursor: pointer;
  }
`;

interface LineProps {
  lineWidth: string;
  color: string;
  open?: boolean;
}
// prettier-ignore
const Line = styled.div<LineProps>`
    height: 2px;
    width: ${({lineWidth}) => lineWidth}%;
    background-color: ${({color}) => color};
    transition: width .2s ease-in;
    
    width: ${({open, lineWidth}) => open ? "0" : lineWidth }%;
`;

// prettier-ignore
const LineWhite = styled(Line)<LineProps>`
    height: 2px;
    width: ${({lineWidth}) => lineWidth}%;
    background-color: ${({color}) => color};
    transition: width .2s ease-in;
    /*
      open
    */
   width: ${({open, lineWidth}) => open ? "100" : lineWidth }%;
`;

const CustomButton = styled.button`
  height: 100%;
  width: 100%;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  outline: none;
  &:hover ${Line} {
    width: 0%;
  }
  &:hover ${LineWhite} {
    width: 100%;
  }
`;

const LineContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  margin: 0px;
`;
// prettier-ignore
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 33%;
  padding: 0px;
  align-items: center;
  position: relative;
  transition: transform  0.3s;
  transform-origin: center;
`;

// prettier-ignore
const RowHide = styled(Row)<{open: boolean}>`
  transition: width  0.3s;
  width: ${({open}) => open && "0px"};
  height: ${({open}) => open && "0px"};
`;
// prettier-ignore
const RowTop = styled(Row)<{open:boolean}>`
  height: ${({open}) => open && "1px"}; 
  transform: ${({open}) => open && "rotate(40deg)"}; 
`
// prettier-ignore
const RowBottom = styled(Row)<{open:boolean}>`
  transform: ${({open}) => open && "rotate(-40deg)"}; 
  height: ${({open}) => open && "1px"}; 
  `;

export {
  Container,
  CustomButton,
  LineContainer,
  Line,
  LineWhite,
  RowTop,
  RowBottom,
  RowHide
};
