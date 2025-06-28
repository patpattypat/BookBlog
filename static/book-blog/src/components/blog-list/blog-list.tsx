import React from "react";
import { ListEntry } from "../../components";
import "./blog-list.scss";

// Utility to convert "DD.MM.YYYY" to Date object
const parseDate = (dateStr: string): Date =>
  new Date(dateStr.split(".").reverse().join("-"));

export const BlogList: React.FC = () => {
  const blogPosts = [
    {
      imageUrl: "home-pictures/small-1.jpg",
      imageAlt: "Old blog post illustration",
      date: "01.05.2000",
      title: "This is an old entry",
      text: "Back when dial-up ruled the internet, this gem of a post broke records — mainly for loading time.",
    },
    {
      imageUrl: "home-pictures/small-3.jpg",
      imageAlt: "Example blog post image",
      date: "04.08.2024",
      title: "This is an example",
      text: "An example so good it became a standard. Still not sure what it’s an example *of*, though.",
    },
    {
      imageUrl: "home-pictures/horizontal-1.jpg",
      imageAlt: "Horizontal scenic view",
      date: "04.08.2024",
      title: "Horizontal delight",
      text: "Proof that a good blog post can be wider than your screen — metaphorically and literally.",
    },
    {
      imageUrl: "home-pictures/big-1.jpg",
      imageAlt: "Futuristic city illustration",
      date: "25.10.2030",
      title: "This is a future event",
      text: "Join us in 2030, where hoverboards are real and blog posts are written by AI… oh wait.",
    },
    {
      imageUrl: "home-pictures/small-2.jpg",
      imageAlt: "Second small image",
      date: "10.03.2015",
      title: "Another example",
      text: "Another blog post that tried to be cool and accidentally started a fashion trend.",
    },
    {
      imageUrl: "home-pictures/vertical-1.jpg",
      imageAlt: "Vertical design inspiration",
      date: "10.11.2014",
      title: "This is so amazing!",
      text: "It’s amazing how little it takes to be amazing — just add an exclamation mark!",
    },
  ];
  const sortedPosts = [...blogPosts].sort((a, b) => {
    if (!a.date || !b.date) return 0;
    return parseDate(b.date).getTime() - parseDate(a.date).getTime();
  });

  return (
    <section className="blog-list" aria-labelledby="blog-heading">
      <h2 id="blog-heading" className="blog-list__title">
        Blog
      </h2>
      {sortedPosts.map((post, index) => (
        <article key={index}>
          <ListEntry
            imageUrl={post.imageUrl}
            imageAlt={post.imageAlt}
            date={post.date}
            title={post.title}
            text={post.text}
          />
        </article>
      ))}
    </section>
  );
};
