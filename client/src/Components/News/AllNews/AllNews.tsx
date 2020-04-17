import React, { useContext, useEffect, Fragment } from "react";
import { Grid } from "semantic-ui-react";
import { observer } from "mobx-react-lite";

import { RootStoreContext } from "../../../App/Stores/rootStore";

import { LoadingComponent } from "../../Common";
import { NewsList } from "./NewsList";

const AllNews: React.FC = () => {
  const rootStore = useContext(RootStoreContext);
  const { getAllNews, loadNews, loadingInitial } = rootStore.NewsStore;

  useEffect(() => {
    loadNews();
  }, [loadNews]);

  if (loadingInitial) return <LoadingComponent content="Hleður fréttir" />;

  return (
    <Fragment>
      <Grid style={{ margin: "0px 0px 0px 60px", width: "100%" }}>
        <Grid.Row style={{ height: "100vh", padding: "0px" }}>
          <Grid.Column width={3}></Grid.Column>
          <Grid.Column
            width={10}
            style={{ display: "flex", alignItems: "center" }}
          >
            <NewsList getAllNews={getAllNews} />
          </Grid.Column>
          <Grid.Column width={3}></Grid.Column>
        </Grid.Row>
      </Grid>
    </Fragment>
  );
};

export default observer(AllNews);
