import React from "react";
import { Grid } from "semantic-ui-react";

import { NewsList } from "./NewsList";

export const AllNews = () => (
  <>
    <Grid style={{ margin: "0px 0px 0px 60px", width: "100%" }}>
      <Grid.Row style={{ height: "100vh", padding: "0px" }}>
        <Grid.Column width={3}></Grid.Column>
        <Grid.Column
          width={10}
          style={{ display: "flex", alignItems: "center" }}
        >
          <NewsList />
        </Grid.Column>
        <Grid.Column width={3}></Grid.Column>
      </Grid.Row>
    </Grid>
  </>
);
