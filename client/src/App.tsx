import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import { AllNews } from "./Components/News/AllNews";
import { SingleNews } from "./Components/News/SingleNews/";
import styled from "styled-components";
import { Side } from "./Components/Sidebar";
import { Colors as C } from "./App/Styles/";
import { BurgerMenu } from "./Components/BurgerMenu";
import { FrontPage } from "./Components/FrontPage";
import { Editor } from "./Components/Admin/Editor";

export default function App() {
  return (
    <AppContainer>
      <Side />
      <BurgerMenu />
      <Route exact path="/" component={FrontPage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <Fragment>
            <Layout>
              <Switch>
                <Route path="/frettir/:id" component={SingleNews} />
                <Route path="/frettir/" component={AllNews} />
              </Switch>
            </Layout>
          </Fragment>
        )}
      />
    </AppContainer>
  );
}

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
