import { ListItem, Maps } from "context";
import blogPostData from "../assets/blog-posts-data.json";

const mapToBlogPost = (blogPostData: any): ListItem[] | undefined => {
  if (
    !Array.isArray(blogPostData?.news) ||
    !blogPostData.news.every((news: any) => typeof news?.text === "string")
  ) {
    return undefined;
  }

  return blogPostData.news.map((news: any) => ({
    text: news.text,
    imageUrl: news.imageUrl,
    imageAlt: news.alt,
    date: news.date,
    title: news.title,
  }));
};

export const blogPosts = mapToBlogPost(blogPostData);
