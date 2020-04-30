import React from "react";
import { List } from "../VefritList.styled";

interface IProps {
  nr: string;
  title: string;
  date: string;
  author: string;
  link: string;
}

export const DeildMap: React.FC<IProps> = ({
  nr,
  link,
  title,
  date,
  author
}) => (
  <List>
    <List.Item key={nr}>
      <List.Icon name="newspaper outline" />
      <List.Content>
        <List.Header href={link} as="a">
          {title}
        </List.Header>
        <List.Description>{date}</List.Description>
        <List.Content>{author}</List.Content>
      </List.Content>
    </List.Item>
  </List>
);
