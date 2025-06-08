import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  AboutPage,
  BlogPage,
  Maps,
  News,
  Library,
  StoryPage,
  ComingSoonPage,
} from "./containers";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/autorin" Component={AboutPage} />
          <Route path="/blog" Component={BlogPage} />
          <Route path="/karten" Component={Maps} />
          <Route path="/news" Component={News} />
          <Route path="/bibliothek" Component={Library} />
          <Route path="/bibliothek/:storyId" Component={StoryPage} />
          <Route path="/youtube-link" Component={ComingSoonPage} />
          <Route path="/insta-link" Component={ComingSoonPage} />
          <Route path="/contact" Component={ComingSoonPage} />
          <Route path="/impressum" Component={ComingSoonPage} />
          <Route path="*" Component={Home} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
