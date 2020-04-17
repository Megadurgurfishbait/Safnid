import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import * as NL from "./NewsList.styled";
import { RootStoreContext } from "../../../../App/Stores/rootStore";

const NewsList = () => {
  const rootStore = useContext(RootStoreContext);
  const { getAllNews } = rootStore.NewsStore;
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

export default observer(NewsList);
