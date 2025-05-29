import React from "react";
import { Header } from "../header";
import { Footer } from "../footer";
import { LoremIpsum } from "react-lorem-ipsum";
import aboutData from "../../assets/about-data.json";
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
          {(aboutData as {"author": string[]}).author.map((text, idx) => (
            <p key={idx}>{text}</p>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};
