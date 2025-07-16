"use client";
import React, { useContext } from 'react'
import { GlobalContext } from "@/lib/context";
import SingleArticle from './content/single-article';

export default function Hero() {
  const { articles } = useContext(GlobalContext);

  return (
    <div className='container mt-32 mb-10 w-full h-auto mx-auto px-4 md:px-8'>
      <div className='block md:hidden'>
        <h1 data-cursor="hover" className='md:text-[80px] text-[40px] text-center font-primary text-[#333] leading-[40px] md:leading-[80px] uppercase tracking-tighter md:py-10 py-5 mb-5'>Section Studio</h1>
      </div>

      {articles.map((article: any, index) => (
        <SingleArticle article={article} index={index} />
      ))}
    </div>
  )
}
