import React, { createContext, useContext, useState } from "react";

export interface ShortStory {
  imageUrl: string;
  imageAlt: string;
  title: string;
  id: string;
  project: string;
  genre: string;
  readTime: number;
  content: string[];
}

export interface FilterOption {
  value: string;
  label: string;
}

interface IContext {
  author: string[];
  filterOptions: FilterOption[];
  shortStories: ShortStory[];
}

const BookContext = createContext<IContext | undefined>(undefined);

export const BookProvider: React.FC<{
  children: React.ReactNode;
  value: IContext;
}> = ({ children, value }) => {
  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
};

export const useBookContext = () => {
  const context = useContext(BookContext);
  if (!context)
    throw new Error("useBookContext must be used within a Provider");
  return context;
};
