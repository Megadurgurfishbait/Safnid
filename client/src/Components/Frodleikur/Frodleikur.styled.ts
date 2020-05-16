import styled from "styled-components";
import {
  Tab as TabLayout,
  TabPane as TP,
  Segment as SegmentLayout
} from "semantic-ui-react";
import {
  Layout as L,
  Colors as C,
  Font as F,
  Scrollbar
} from "../../App/Styles/";

const Layout = styled(L)`
  height: 100%;
  width: calc(100% - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 40px;
`;

const Tab = styled(TabLayout)`
  height: 100%;
  width: 100%;
`;

const TabPane = styled(TP)`
  background-color: ${C.BROWN};
  margin: 100px 20px;
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: 800px;
  ${Scrollbar};
`;

const Segment = styled(SegmentLayout)`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Tab, TabPane, Layout, Segment };
