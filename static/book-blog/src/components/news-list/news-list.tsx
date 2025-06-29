import React from "react";
import { ListEntry } from "../../components";
import { useBookContext } from "context";
import "./news-list.scss";

export const NewsList: React.FC = () => {
  const { news } = useBookContext();

  return (
    <section className="news-list" aria-labelledby="news-list-title">
      <h2 id="news-list-title" className="news-list__title">
        Events und Neuigkeiten
      </h2>
      <ul>
        {news ? (
          news.map(({ imageUrl, date, title, text, alt }, index) => (
            <li key={index}>
              <ListEntry
                imageUrl={imageUrl}
                imageAlt={alt}
                date={date}
                title={title}
                text={text}
              />
            </li>
          ))
        ) : (
          <p>
            Im Moment gibt es keine Neuigkeiten und Events. Schau später
            nochmals vorbei.
          </p>
        )}
      </ul>
    </section>
  );
};
