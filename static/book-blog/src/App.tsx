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
import { BookProvider } from "context";
import { filterOptions, shortStories, author } from "mapper";

function App() {
  const contextValues = {
    author,
    filterOptions,
    shortStories,
  };

  return (
    <div className="App">
      <BookProvider value={contextValues}>
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
      </BookProvider>
    </div>
  );
}

export default App;
