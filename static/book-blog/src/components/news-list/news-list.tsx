import React from "react";
import { loremIpsum } from "react-lorem-ipsum";
import { ListEntry } from "../../components";
import "./news-list.scss";

export const NewsList: React.FC = () => {
  return (
    <div className="news-list">
      <div className="news-list__title">Events und Neuigkeiten</div>
      <ListEntry imageUrl="home-pictures/small-1.jpg" text={loremIpsum()[0]} />
      <ListEntry imageUrl="home-pictures/small-3.jpg" text={loremIpsum()[0]} />
      <ListEntry
        date="04.08.2024"
        title="This is an example"
        text={loremIpsum()[0]}
      />
      <ListEntry imageUrl="home-pictures/big-1.jpg" text={loremIpsum()[0]} />
      <ListEntry imageUrl="home-pictures/small-2.jpg" text={loremIpsum()[0]} />
      <ListEntry
        date="10.11.2014"
        title="This is so amazing!"
        text={loremIpsum()[0]}
      />
    </div>
  );
};
