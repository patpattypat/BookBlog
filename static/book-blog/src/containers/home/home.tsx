import React from "react";
import { Header } from "../header";
import { Footer } from "../footer";
import "./home.scss";
import { useNavigate } from "react-router-dom";

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <Header />
      <div className="content">
        <div className="grid-container">
          <div className="grid-item">
            <img src="home-pictures/small-1.jpg" alt="small img" />
          </div>
          <div className="grid-item">
            <img src="home-pictures/small-2.jpg" alt="small img 2" />
          </div>
          <div className="grid-item vertical">
            <img src="home-pictures/vertical-1.jpg" alt="vertical img 1" />
            <button
              type="button"
              className="btn btn-grid"
              onClick={() => navigate("/news")}
            >
              <span className="text aktuelles">Events und Neuigkeiten</span>
            </button>
          </div>
          <div className="grid-item big">
            <img src="home-pictures/big-1.jpg" alt="big img 1" />
            <button
              type="button"
              className="btn btn-grid"
              onClick={() => navigate("/bibliothek")}
            >
              <span className="text stories">Kurzgeschichten</span>
            </button>
          </div>
          <div className="grid-item">
            <img src="home-pictures/small-3.jpg" alt="small img 3" />
            <button
              type="button"
              className="btn btn-grid"
              onClick={() => navigate("/autorin")}
            >
              <span className="text about">Über mich</span>
            </button>
          </div>
          <div className="grid-item">
            <img src="home-pictures/small-4.jpg" alt="small img 4" />
          </div>
          <div className="grid-item horizontal">
            <img src="home-pictures/horizontal-1.jpg" alt="horizontal img 1" />
            <button
              type="button"
              className="btn btn-grid"
              onClick={() => navigate("/blog")}
            >
              <span className="text blog">Blog</span>
            </button>
          </div>
          <div className="grid-item">
            <img src="home-pictures/small-5.jpg" alt="small img 5" />
            <button
              type="button"
              className="btn btn-grid"
              onClick={() => navigate("/karten")}
            >
              <span className="text cards">Karten</span>
            </button>
          </div>
          <div className="grid-item horizontal">
            <img src="home-pictures/horizontal-2.jpg" alt="horizontal img 2" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
