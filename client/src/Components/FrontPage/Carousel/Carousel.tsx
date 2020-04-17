import React, { useContext } from "react";
import { RootStoreContext } from "../../../App/Stores/rootStore";

import { Articles } from "./Articles/";
import { LoadingComponent } from "../../Common";

import { CarouselContainer, props } from "./Carousel.styled";

const Carousel = () => {
  const rootStore = useContext(RootStoreContext);
  const { LastFourNews } = rootStore.NewsStore;

  if (LastFourNews.length < 1)
    return <LoadingComponent content={"Hleður Fréttir"} />;

  return (
    <CarouselContainer {...props}>
      {LastFourNews.map((v) => (
        <Articles info={v} key={v?.post_id} />
      ))}
    </CarouselContainer>
  );
};

export default Carousel;
