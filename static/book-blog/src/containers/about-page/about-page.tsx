import React from "react";
import { Header } from "../header";
import { Footer } from "../footer";
import { LoremIpsum } from "react-lorem-ipsum";
import "./about-page.scss";

export const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <Header />

      <div className="content">
        <div className="profile-picture">
          <img src="profile-placeholder.jpg" alt="author" />
        </div>
        <div className="profle-text">
          <LoremIpsum p={2} />
        </div>
      </div>

      <Footer />
    </div>
  );
};
