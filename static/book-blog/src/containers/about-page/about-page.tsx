import React from "react";
import { useBookContext } from "context";
import "./about-page.scss";

export const AboutPage: React.FC = () => {
  const { author } = useBookContext();

  return (
    <main className="about-page">
      {!author || author.length === 0 ? (
        <p>Author information not available.</p>
      ) : (
        <div className="about-page__content">
          <figure className="profile-picture">
            <img src="profile-placeholder.jpg" alt="Portrait of the author" />
          </figure>

          <section className="profile-text">
            {author.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </section>
        </div>
      )}
    </main>
  );
};
