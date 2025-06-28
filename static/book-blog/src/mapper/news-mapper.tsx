import { ListItem } from "context";
import newsData from "../assets/news-data.json";

const mapToNews = (newsData: any): ListItem[] | undefined => {
  if (
    !Array.isArray(newsData?.news) ||
    !newsData.news.every((news: any) => typeof news?.text === "string")
  ) {
    return undefined;
  }

  return newsData.news.map((news: any) => ({
    text: news.text,
    imageUrl: news.imageUrl,
    imageAlt: news.alt,
    date: news.date,
    title: news.title,
  }));
};

export const news = mapToNews(newsData);
