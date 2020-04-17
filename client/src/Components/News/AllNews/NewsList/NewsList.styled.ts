import styled from "styled-components";
import { Link } from "react-router-dom";

import { Colors as C, Font as F } from "../../../../App/Styles/";

export const Container = styled.section`
  height: 90vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  align-self: center;
`;

export const List = styled.ul`
  overflow-y: scroll;
  width: 1000px;
  padding-left: 0px;
  padding-right: 100px;

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

export const TitleContainer = styled.div`
  height: 60px;
  width: 80%;
  text-align: center;
  color: ${C.RED};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const ListItem = styled(Link)`
  width: 100%;
  height: 50px;
  background-color: #dad3bd;
  list-style: none;
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
`;

export const ListTitle = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 1px;
  margin-left: 40px;
  font-size: 18px;
  color: ${C.BLACK};
  ${F.Montserrat.thin}
`;
export const ListDate = styled.div`
  height: 100%;
  width: 100px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;
export const ListDDMM = styled.h3`
  margin: -3px;
  padding: 0px;
  font-size: 20px;
  direction: flex;
  align-items: flex-end;
  letter-spacing: -2px;
  color: ${C.BLACK};
  ${F.IBMPlex.bold}
`;
export const ListYear = styled.h6`
  margin: 0px !important;
  padding: 0px;
  font-size: 0.5em;
  line-height: 1;
  font-size: 12px;
  color: ${C.RED};
  ${F.Montserrat.medium}
`;
interface IProps {
  curve?: boolean;
}
// prettier-ignore
export const Button = styled.button<IProps>`
  height: 100%;
  width: 60px;
  border: none;
  color: ${C.BROWN};
  background-color: ${C.RED};


  border-top-left-radius: ${props => props.curve ?  "25px !important" : "0px" } 
  
  
`;
