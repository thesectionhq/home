import { createContext } from "react";

export const GlobalContext = createContext({
  categories: [],
  articles: [],
  topicArticles: [],
  homepage: null as any,
});
