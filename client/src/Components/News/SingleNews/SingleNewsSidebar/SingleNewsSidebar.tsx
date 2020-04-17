import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { RootStoreContext } from "../../../../App/Stores/rootStore";
import { NewNews } from "./NewNews";

import * as SNS from "./SingleNewsSidebar.styled";

const SingleNewsSidebar: React.FC = () => {
  const rootStore = useContext(RootStoreContext);
  const { LastFourNews } = rootStore.NewsStore;

  return (
    <SNS.Container>
      <SNS.TextContainer>
        <h3>Nýjustu fréttir</h3>
      </SNS.TextContainer>
      {LastFourNews.map((news) => (
        <NewNews News={news} />
      ))}
      <SNS.TextContainer>
        <Link to={"/"}>
          <h3>Sjá fleiri fréttir</h3>
        </Link>
      </SNS.TextContainer>
    </SNS.Container>
  );
};

export default observer(SingleNewsSidebar);
