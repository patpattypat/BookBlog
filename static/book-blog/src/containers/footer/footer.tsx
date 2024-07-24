import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
import { ReactComponent as Insta } from "./assets/instagram-icon.svg";
import { ReactComponent as Youtube } from "./assets/youtube-icon.svg";

export const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="tag">Tamara Mileti &copy; 2024</div>
      <div className="menu">
        <Link className="btn btn-menu" to="/impressum">
          Impressum
        </Link>
        <Link className="btn btn-menu" to="/contact">
          Kontakt
        </Link>
        <Link className="btn btn-menu" to="/insta-link">
          <Insta />
        </Link>
        <Link className="btn btn-menu" to="/youtube-link">
          <Youtube />
        </Link>
      </div>
    </div>
  );
};
