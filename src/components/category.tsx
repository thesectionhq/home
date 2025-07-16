"use client";

import { useState } from "react";
import Filter from "@/app/_components/filter";
import SingleArticle from "./content/single-article";

export default function Category({articles, category}: any) {
  // const [visibleCount, setVisibleCount] = useState(6); // show first 6
  const [loading, setLoading] = useState(false);

  // const handleLoadMore = () => {
  //   setVisibleCount((prev) => prev + 6);
  // };

  return (
    <div className="container mx-auto px-4 py-8 mt-15">
      <div className="w-full flex items-center justify-center md:justify-between  md:py-10">
        <h1 className="text-[40px] text-center font-secondary font-bold uppercase">{category}</h1>
        <Filter />
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {articles.map((article: any, index: number) => (
            <SingleArticle article={article} index={index} />
          ))}

          {/* {visibleCount < articles.length && (
            <div className="text-center mt-8">
              <button
                onClick={handleLoadMore}
                className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
              >
                Load More
              </button>
            </div>
          )} */}
        </>
      )}
    </div>
  );
}
