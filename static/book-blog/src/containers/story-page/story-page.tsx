import React, { useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useBookContext } from "context";
import "./story-page.scss";

export const StoryPage: React.FC = () => {
  const { storyId } = useParams();
  const navigate = useNavigate();
  const { shortStories } = useBookContext();
  const story = shortStories.find((story) => story.id === storyId);
  const backText = "Zurück zu allen Kurzgeschichten";

  const handleBack = useCallback(() => navigate("/bibliothek"), []);

  return (
    <main className="story-page">
      <button
        type="button"
        className="btn btn-back"
        onClick={handleBack}
        aria-label="Zurück zur Bibliothek"
      >
        {backText}
      </button>
      {story ? (
        <div className="story-page__story">
          <div className="story-details__title">{story.title}</div>

          <div className="story-content-wrapper">
            {story.imageUrl && (
              <div className="story-page__story__image">
                <img src={story.imageUrl} alt={story.imageAlt || story.title} />
              </div>
            )}

            <div className="story-details">
              <div className="story-details__genre">Genre: {story.genre}</div>
              <div className="story-details__length">
                Lesedauer: {story.readTime}min
              </div>
              <div className="story-details__project">
                Projekt: {story.project}
              </div>
            </div>
            <div className="story-page__story__content">
              {story.content.map((text, idx) => (
                <p key={idx}>{text}</p>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="no-story">Story not found</div>
      )}
      <button
        type="button"
        className="btn btn-back"
        onClick={handleBack}
        aria-label="Zurück zur Bibliothek"
      >
        {backText}
      </button>
    </main>
  );
};
