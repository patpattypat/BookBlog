import React from "react";
import { Header } from "../header";
import { Footer } from "../footer";
import "./coming-soon.scss";

export const ComingSoonPage: React.FC = () => {
  return (
    <div className="coming-soon">
      <Header />
      Baustelle unter Konstruktion
      <Footer />
    </div>
  );
};
