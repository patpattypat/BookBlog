import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  AboutPage,
  Maps,
  Library,
  StoryPage,
  ComingSoonPage,
} from "./containers";
import "./App.css";
import { BookProvider } from "context";
import {
  news,
  blogPosts,
  filterOptions,
  shortStories,
  author,
  maps,
} from "mapper";
import { BaseContainer } from "containers/base-container";
import { BlogList, NewsList } from "components";

function App() {
  const contextValues = {
    author,
    filterOptions,
    shortStories,
    maps,
    news,
    blogPosts,
  };

  return (
    <div className="App">
      <BookProvider value={contextValues}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <BaseContainer>
                  <Home />
                </BaseContainer>
              }
            />
            <Route
              path="/autorin"
              element={
                <BaseContainer>
                  <AboutPage />
                </BaseContainer>
              }
            />
            <Route
              path="/blog"
              element={
                <BaseContainer>
                  <BlogList />
                </BaseContainer>
              }
            />
            <Route
              path="/karten"
              element={
                <BaseContainer>
                  <Maps />
                </BaseContainer>
              }
            />
            <Route
              path="/news"
              element={
                <BaseContainer>
                  <NewsList />
                </BaseContainer>
              }
            />
            <Route
              path="/bibliothek"
              element={
                <BaseContainer>
                  <Library />
                </BaseContainer>
              }
            />
            <Route
              path="/bibliothek/:storyId"
              element={
                <BaseContainer>
                  <StoryPage />
                </BaseContainer>
              }
            />
            <Route
              path="/youtube-link"
              element={
                <BaseContainer>
                  <ComingSoonPage />
                </BaseContainer>
              }
            />
            <Route
              path="/insta-link"
              element={
                <BaseContainer>
                  <ComingSoonPage />
                </BaseContainer>
              }
            />
            <Route
              path="/contact"
              element={
                <BaseContainer>
                  <ComingSoonPage />
                </BaseContainer>
              }
            />
            <Route
              path="/impressum"
              element={
                <BaseContainer>
                  <ComingSoonPage />
                </BaseContainer>
              }
            />
            <Route
              path="*"
              element={
                <BaseContainer>
                  <Home />
                </BaseContainer>
              }
            />
          </Routes>
        </BrowserRouter>
      </BookProvider>
    </div>
  );
}

export default App;
