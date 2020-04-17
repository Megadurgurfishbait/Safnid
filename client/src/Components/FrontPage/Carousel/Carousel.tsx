import React, { useContext } from "react";

import { RootStoreContext } from "../../../App/Stores/rootStore";

import { Articles } from "./Articles/";

import { CarouselContainer, settings } from "./Carousel.styled";

export const Carousel = () => {
  const rootStore = useContext(RootStoreContext);
  const { LastFourNews } = rootStore.NewsStore;

  return (
    <CarouselContainer {...settings}>
      {LastFourNews.map((v) => (
        <Articles info={v} key={v?.post_id} />
      ))}
    </CarouselContainer>
  );
};
