import React, { useContext } from "react";
import { observer } from "mobx-react-lite";

import { RootStoreContext } from "../../../../App/Stores/rootStore";
import * as PAI from "./ParagraphAndImage.styled";

const ParagraphAndImage: React.FC = () => {
  const rootStore = useContext(RootStoreContext);
  const { news } = rootStore.NewsStore;

  if (!news) return <h2>Efni finnst ekki</h2>;
  const { title, text, formattedPostDate, year, images } = news;

  const paragraphs = text?.split(/\n/);
  return (
    <PAI.FullWidth>
      <PAI.Container>
        <PAI.Title>
          <h1>{title}</h1>
          <h5>{formattedPostDate + " " + year}</h5>
        </PAI.Title>
        <PAI.Content>
          <PAI.TextAndImage>
            {images[0] && (
              <PAI.CustomImage
                direction={"left"}
                src={capitalizeFirstLetter(images[0])}
              />
            )}
            {paragraphs?.slice(0, paragraphs.length / 2).map((v) => (
              <PAI.Paragraph> {v} </PAI.Paragraph>
            ))}
          </PAI.TextAndImage>
          <PAI.TextAndImage>
            {images[1] && (
              <PAI.CustomImage
                direction={"right"}
                src={capitalizeFirstLetter(images[1])}
              />
            )}
            {paragraphs
              ?.slice(paragraphs.length / 2, paragraphs.length)
              .map((v) => (
                <PAI.Paragraph> {v} </PAI.Paragraph>
              ))}
          </PAI.TextAndImage>
          {images[2] &&
            images
              .slice(2)
              .map((v) => <PAI.CustomImage src={capitalizeFirstLetter(v)} />)}
        </PAI.Content>
      </PAI.Container>
    </PAI.FullWidth>
  );
};

export default observer(ParagraphAndImage);

// Myndirnar eru geymdar sem Mynd_ en saveaðar í DB sem mynd_ og virka því ekki að sækja nema að breyta í stórt M.
function capitalizeFirstLetter(string: string) {
  return `https://geymsla.ams3.digitaloceanspaces.com/images/${
    string.charAt(0).toUpperCase() + string.slice(1)
  }`;
}
