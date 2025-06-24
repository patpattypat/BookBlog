import React from "react";
import { BlogList } from "../../components";

export const BlogPage: React.FC = () => {
  return (
    <div className="blog-page">
      <div className="blog-page__content">
        <BlogList />
      </div>
    </div>
  );
};
