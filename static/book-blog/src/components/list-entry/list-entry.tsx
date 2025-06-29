import React from "react";
import "./list-entry.scss";

interface IListEntryProps {
  text: string;
  imageUrl?: string;
  imageAlt?: string;
  date?: string;
  title?: string;
}

export const ListEntry: React.FC<IListEntryProps> = ({
  text,
  imageAlt,
  imageUrl,
  date,
  title,
}) => {
  return (
    <article
      className="list-entry"
      aria-labelledby={title ? `title-${title}` : undefined}
    >
      {(date || title) && (
        <header className="details">
          {date && (
            <time className="date" dateTime={date}>
              {date}
            </time>
          )}
          {title && (
            <h3 id={`title-${title}`} className="title">
              {title}
            </h3>
          )}
        </header>
      )}

      {imageUrl && (
        <figure className="image">
          <img src={imageUrl} alt={imageAlt ?? "Related image"} />
        </figure>
      )}

      <p className="text">{text}</p>
    </article>
  );
};
