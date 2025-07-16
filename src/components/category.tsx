"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { Article } from "@/types/article";
import Filter from "@/app/_components/filter";

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
            <div key={index} className={`${index % 2 === 0 ? 'md:flex-row rounded-l-md' : 'md:flex-row-reverse rounded-r-md'} w-full h-[90vh] bg-gray flex items-center justify-between gap-5 bg-gray-100 mb-5`}>
              <Link
                className={'md:w-1/2 w-full h-full flex md:flex-col flex-col-reverse justify-center gap-4 md:gap-0 md:px-2'}
                href={`/${article.category}/${article.slug}`}
              >
                <div className={`${index % 2 === 0 ? 'md:items-end' : 'md:items-start'} flex flex-col md:gap-5 gap-4 px-4 pb-4 md:p-0 md:border-t`}>
                  <h1 className={`${index % 2 === 0 ? 'md:text-end' : 'md:text-start'} md:text-4xl text-xl font-secondary uppercase font-bold md:text-end leading-[25px] md:leading-[40px] md:pt-5`}>{article.title}</h1>
                    <div key={index} className="flex flex-col md:items-end gap-1">
                      <p className={`${index % 2 === 0 ? 'md:pl-24 md:text-end' : 'md:pl-0 md:text-start'} md:text-sm text-xs pl-0 text-[#333] tracking-normal font-secondary`}>
                        {article.excerpt}
                      </p>
                    </div>
                  <p className='font-secondary text-xs font-bold border-b pb-[2px] w-fit'>KEEP READING</p>
                </div>
                <div className='w-full h-full block md:hidden relative'>
                  <Image src={article.cover?.url} alt="hero-image" fill quality={100} className=" w-full h-full object-cover rounded-t-sm shadow-lg" />
                </div>
              </Link>
              <div className='w-1/2 h-full hidden md:block relative'>
                <Image src={article.cover?.url} alt="hero-image" fill quality={100} className={`${index % 2 === 0 ? 'rounded-r-md' : 'rounded-l-md'} w-full h-full object-cover shadow-lg`} />
              </div>
            </div>
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
