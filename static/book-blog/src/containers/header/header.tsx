import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as HeaderIcon } from "./assets/header.svg";
import "./header.scss";

export const Header: React.FC = () => {
  return (
    <header className="header" role="banner">
      <div className="logo">
        <Link className="btn btn-home" to="/" aria-label="Homepage">
          <HeaderIcon aria-hidden="true" focusable="false" />
          <span className="sr-only">Homepage</span>
        </Link>
      </div>

      <nav className="menu" aria-label="Main navigation">
        <ul>
          <li>
            <Link className="btn btn-menu" to="/">
              Home
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link className="btn btn-menu" to="/autorin">
              Autorin
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link className="btn btn-menu" to="/blog">
              Blog
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link className="btn btn-menu" to="/bibliothek">
              Bibliothek
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link className="btn btn-menu" to="/karten">
              Karten
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
