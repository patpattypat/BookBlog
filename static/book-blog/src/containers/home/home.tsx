import React from "react";
import { useNavigate } from "react-router-dom";
import { useBookContext } from "context";
import "./home.scss";

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const { gridItems } = useBookContext();

  return (
    <main className="home" role="main">
      <div className="grid-container">
        {gridItems.map((item, index) => (
          <div key={index} className={`grid-item ${item.className ?? ""}`}>
            <img src={item.src} alt={item.alt} />
            {item.to && item.label && (
              <button
                type="button"
                className="btn btn-grid"
                onClick={() => navigate(item.to!)}
                aria-label={`Navigiere zu ${item.label}`}
              >
                <span className="text">{item.label}</span>
              </button>
            )}
          </div>
        ))}
      </div>
    </main>
  );
};
