import React from "react";
import { Link } from "react-router-dom";

import { INews } from "../../../../../App/Models/News";
import * as NN from "./NewNews.styled";

export const NewNews: React.FC<{ News: INews }> = ({
  News: { title, formattedPostDate, year, post_id }
}) => {
  return (
    <NN.Container>
      <NN.TopColumn>
        <h6>{`${formattedPostDate} ${year}`}</h6>
      </NN.TopColumn>
      <NN.BottomColumn as={Link} to={`/frettir/${post_id}`}>
        <h1>{title}</h1>
      </NN.BottomColumn>
    </NN.Container>
  );
};
