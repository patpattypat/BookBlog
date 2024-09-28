import React from "react";
import { Header } from "../header";
import { Footer } from "../footer";
import { useParams } from "react-router-dom";
import { LoremIpsum } from "react-lorem-ipsum";
import { useNavigate } from "react-router-dom";
import "./story-page.scss";

export const StoryPage: React.FC = () => {
  const { storyId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="story-page">
      <Header />

      <div className="story-page__story">
        <div className="story-details">
          <button
            type="button"
            className="btn btn-back"
            onClick={() => navigate("/bibliothek")}
          >
            zurück zu allen Kurzgeschichten
          </button>
          <div className="story-details__title">{storyId}</div>
          <div className="story-details__genre">Genre: Fantasy</div>
          <div className="story-details__lenght">Lesedauer: 12min</div>
        </div>
        <div className="story-page__story__image">
          <img src="/home-pictures/vertical-1.jpg" alt="vertical img 1" />
        </div>
        <div className="story-page__story__content">
          <LoremIpsum p={8} />
        </div>
        <button
          type="button"
          className="btn btn-back"
          onClick={() => navigate("/bibliothek")}
        >
          zurück zu allen Kurzgeschichten
        </button>
      </div>

      <Footer />
    </div>
  );
};
