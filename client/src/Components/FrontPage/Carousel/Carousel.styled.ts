import { RefAttributes } from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "../../../App/Styles/carousel.min.css";

const CarouselContainer = styled(Carousel)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  & > ul {
    height: 400px !important;
  }
`;

var props = {
  showArrows: false,
  showStatus: false,
  infiniteLoop: true,
  autoPlay: true,
  transitionTime: 1000,
  interval: 5000,
  axis: "'vertical'"
} as RefAttributes<Carousel>;

export { CarouselContainer, props };
