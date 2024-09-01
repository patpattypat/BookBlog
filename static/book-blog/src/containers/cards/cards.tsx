import React from "react";
import { Header } from "../header";
import { Footer } from "../footer";

export const Cards: React.FC = () => {
  return (
    <div className="cards">
      <Header />
      <div className="content">Cards</div>

      <Footer />
    </div>
  );
};
