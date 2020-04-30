import React, { Fragment, useEffect, useContext } from "react";
import { Switch, Route } from "react-router-dom";

import { RootStoreContext } from "./App/Stores/rootStore";

import * as C from "./Components";
import * as A from "./App.styled";

export default function App() {
  const rootStore = useContext(RootStoreContext);
  const { loadNews, loadingInitial } = rootStore.NewsStore;

  useEffect(() => {
    loadNews();
  }, [loadNews]);

  if (loadingInitial) return <C.LoadingComponent content={"Hleður Fréttir"} />;
  return (
    <A.AppContainer>
      <C.Side />
      <C.BurgerMenu />
      <Route exact path="/" component={C.Frodleikur} />
      <Route
        path={"/(.+)"}
        render={() => (
          <Fragment>
            <A.Layout>
              <Switch>
                <Route path="/frettir/:id" component={C.SingleNews} />
                <Route path="/frettir/" component={C.AllNews} />
              </Switch>
            </A.Layout>
          </Fragment>
        )}
      />
    </A.AppContainer>
  );
}
