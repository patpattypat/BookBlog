import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Insta } from "./assets/instagram-icon.svg";
import { ReactComponent as Youtube } from "./assets/youtube-icon.svg";
import "./footer.scss";

export const Footer: React.FC = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="tag">Tamara Mileti &copy; 2024</div>
      <nav className="menu" aria-label="Footer navigation">
        <Link className="btn btn-menu" to="/impressum">
          Impressum
        </Link>
        <Link className="btn btn-menu" to="/contact">
          Kontakt
        </Link>
        <a
          className="btn btn-menu"
          href="/insta-link" //"https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <Insta aria-hidden="true" />
        </a>
        <a
          className="btn btn-menu"
          href="/youtube-link" //"https://youtube.com/..."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
        >
          <Youtube aria-hidden="true" />
        </a>
      </nav>
    </footer>
  );
};
