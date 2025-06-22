import React from "react";
import { Header } from "../header";
import { Footer } from "../footer";
import { useBookContext } from "context";
import "./about-page.scss";

export const AboutPage: React.FC = () => {
  const { author } = useBookContext();

  return (
    <div className="about-page">
      <Header />

      {!author || author.length === 0 ? (
        <main className="content">
          <p>Author information not available.</p>
        </main>
      ) : (
        <main className="content">
          <figure className="profile-picture">
            <img src="profile-placeholder.jpg" alt="Portrait of the author" />
          </figure>

          <section className="profile-text">
            {author.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </section>
        </main>
      )}

      <Footer />
    </div>
  );
};
