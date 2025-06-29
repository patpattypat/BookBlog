import React from "react";
import { Header } from "../header";
import { Footer } from "../footer";
import "./base-container.scss";

interface IBaseContainer {
  children: React.ReactNode;
}

export const BaseContainer: React.FC<IBaseContainer> = ({ children }) => {
  return (
    <div className="base-container">
      <Header />

      <div className="content">{children}</div>

      <Footer />
    </div>
  );
};
