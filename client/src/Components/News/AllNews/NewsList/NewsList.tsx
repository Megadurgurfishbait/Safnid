import React from "react";
import * as NL from "./NewsList.styled";
import { INews } from "../../../../App/Models/News";

export const NewsList: React.FC<{ getAllNews: INews[] }> = ({ getAllNews }) => {
  return (
    <NL.Container>
      <NL.TitleContainer>
        <h1>Allar fréttir</h1>
      </NL.TitleContainer>
      <NL.List>
        {getAllNews.slice(0, 18).map((v, i) => (
          <NL.ListItem key={v.post_id} to={`/frettir/${v.post_id}`}>
            <NL.ListDate>
              <NL.ListDDMM>{v.formattedPostDate}</NL.ListDDMM>
              <NL.ListYear>{v.year}</NL.ListYear>
            </NL.ListDate>
            <NL.ListTitle>{v.title}</NL.ListTitle>
            <NL.Button curve={i === 0 ? true : false}>></NL.Button>
          </NL.ListItem>
        ))}
      </NL.List>
    </NL.Container>
  );
};
