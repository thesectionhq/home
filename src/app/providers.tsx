'use client';

import { useEffect, useState } from "react";
import { GlobalContext } from "@/lib/context";
import axios from "axios";

export function Providers({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  const [categories, setCategories] = useState([]);
  const [articles, setArticles] = useState([]);
  const [topicArticles, setTopicArticles] = useState([]);
  const [homepage, setHomepage] = useState(null);

  useEffect(() => {
    async function handleFetchCategories() {
      try {
        const response = await axios.get("/api/content/categories");
        const {data} = response.data;
        setCategories(data);
      } catch (err) {}
    };

    async function handleFetchArticles() {
      try {
        const response = await axios.get("/api/content/articles?type=feature");
        const {data} = response.data;
        setArticles(data);
      } catch (err) {}
    };

    async function handleFetchTopicArticles() {
      try {
        const response = await axios.get("/api/content/articles?type=topic");
        const {data} = response.data;
        setTopicArticles(data);
      } catch (err) {}
    };

    async function handleFetchHomepage() {
      try {
        const response = await axios.get("/api/content/homepage");
        const {data} = response.data;
        setHomepage(data);
      } catch (err) {}
    };

    handleFetchCategories();
    handleFetchArticles();
    handleFetchTopicArticles();
    handleFetchHomepage();
  }, []);

  return (
    <GlobalContext.Provider value={{categories, articles, topicArticles, homepage}}>
      {children}
    </GlobalContext.Provider>
  );
}
