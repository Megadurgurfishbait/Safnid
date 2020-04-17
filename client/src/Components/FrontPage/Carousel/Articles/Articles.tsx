import React from "react";
import { observer } from "mobx-react-lite";

import * as A from "./Articles.styled";
import { INews } from "../../../../App/Models/News";

const Articles: React.FC<{ info: INews }> = ({ info }) => (
  <A.Container>
    <A.Content>
      <A.Title>{info.title}</A.Title>
      <A.TextAndChoose>
        {info.text?.length! > 400 ? (
          <A.Text>{info.text?.slice(0, 400)}...</A.Text>
        ) : (
          <A.Text>{info.text}..</A.Text>
        )}
      </A.TextAndChoose>
      <A.Button to={`/frettir/${info.post_id}`}>Skoða Frétt</A.Button>
    </A.Content>
  </A.Container>
);

export default observer(Articles);
