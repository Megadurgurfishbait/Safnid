import React, { useContext, useEffect } from "react";
import { RouteComponentProps } from "react-router";
import { observer } from "mobx-react-lite";

import { RootStoreContext } from "../../../App/Stores/rootStore";

import { LoadingComponent } from "../../";
import { ParagraphAndImage } from "./ParagraphAndImage";
import { SingleNewsSidebar } from "./SingleNewsSidebar";

import * as SN from "./SingleNews.styled";

export const SingleNews: React.FC<RouteComponentProps<{ id: string }>> = ({
  match
}) => {
  const rootStore = useContext(RootStoreContext);
  const { loadSingleNews, loadingInitial, clearNews } = rootStore.NewsStore;
  useEffect(() => {
    loadSingleNews(match.params.id);

    return () => clearNews();
  }, [loadSingleNews, match.params.id, clearNews]);

  if (loadingInitial) return <LoadingComponent content="Hleður efni" />;

  return (
    <SN.Container>
      <SingleNewsSidebar />
      <ParagraphAndImage />
    </SN.Container>
  );
};
export default observer(SingleNews);
