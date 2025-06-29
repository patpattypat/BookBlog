import React from "react";
import { useBookContext } from "context";
import "./about-page.scss";

export const AboutPage: React.FC = () => {
  const { author } = useBookContext();

  return (
    <main className="about-page">
      {!author ? (
        <p>Author information not available.</p>
      ) : (
        <div className="about-page__content">
          <figure className="profile-picture">
            {/* have image and alt also in Context */}
            <img src={author.imageUrl} alt={author.imageAlt} />
          </figure>

          <section className="profile-text">
            {author.description.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </section>
        </div>
      )}
    </main>
  );
};
