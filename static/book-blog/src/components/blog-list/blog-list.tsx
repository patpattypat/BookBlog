import React from "react";
import { ListEntry } from "../../components";
import "./blog-list.scss";
import { useBookContext } from "context";

// Utility to convert "DD.MM.YYYY" to Date object
const parseDate = (dateStr: string): Date =>
  new Date(dateStr.split(".").reverse().join("-"));

export const BlogList: React.FC = () => {
  const { blogPosts } = useBookContext();

  const sortedPosts = blogPosts
    ? [...blogPosts].sort((a, b) => {
        if (!a.date || !b.date) return 0;
        return parseDate(b.date).getTime() - parseDate(a.date).getTime();
      })
    : [];

  return (
    <section className="blog-list" aria-labelledby="blog-heading">
      <h2 id="blog-heading" className="blog-list__title">
        Blog
      </h2>
      {sortedPosts.map((post, index) => (
        <article key={index}>
          <ListEntry
            imageUrl={post.imageUrl}
            imageAlt={post.alt}
            date={post.date}
            title={post.title}
            text={post.text}
          />
        </article>
      ))}
    </section>
  );
};
