import styled from "styled-components";
import {
  List as SList,
  Embed as SEmbed,
  Divider as SDivider
} from "semantic-ui-react";
import { Font as F } from "../../../App/Styles";

const BaseLayout = styled.div`
  height: 100%;
  min-height: 800px;
  padding: 40px;

  & > h1,
  & > h3 {
    ${F.Montserrat.medium}
  }
  & > p {
    width: 80%;
    line-height: 1.7;
    ${F.IBMPlex.thin};
  }
`;

const List = styled(SList)`
  ${F.Montserrat.medium};
  line-height: 1.7;
`;

const Embed = styled(SEmbed)``;
const Divider = styled(SDivider)``;

export { BaseLayout, List, Embed, Divider };
