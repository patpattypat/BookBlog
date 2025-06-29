import { ListItem, Maps } from "context";
import blogPostData from "../assets/blog-posts-data.json";

const mapToBlogPost = (blogPostData: any): ListItem[] | undefined => {
  if (
    !Array.isArray(blogPostData?.blogPosts) ||
    !blogPostData.blogPosts.every(
      (blogPost: any) => typeof blogPost?.text === "string",
    )
  ) {
    return undefined;
  }

  return blogPostData.blogPosts.map((news: any) => ({
    text: news.text,
    imageUrl: news.imageUrl,
    imageAlt: news.alt,
    date: news.date,
    title: news.title,
  }));
};

export const blogPosts = mapToBlogPost(blogPostData);
