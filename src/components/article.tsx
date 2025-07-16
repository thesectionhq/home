"use client";
import { useState } from "react";
import Image from "next/image";
import markdownit from "markdown-it";
import LogoAnimation from "./logo-animation";

export default function Article({ article }: any) {
  const [loading, setLoading] = useState(true);

  const md = markdownit({
    html: true,
    linkify: true,
    typographer: true
  })

  // if (loading) {
  //   return <LogoAnimation />;
  // }

  return (
    <>
      {/* <div className="hidden fixed z-10 left-0 top-1/2 rotate-[-90deg] font-secondary font-medium text-sm text-gray-3 mt-10 md:flex items-center "><p className="mr-2">POWERED BY</p> <Image src={require("@/assets/sycamore.png")} quality={100} className="grayscale" width={120} alt="" /></div> */}
      <article className="container relative mx-auto flex flex-col items-center w-full px-4 py-8 mt-15 mb-10">
        <div className="flex flex-col justify-between w-full pt-4 h-full">
          <div className="md:px-40 text-center">
            <h1 className="md:text-4xl text-xl text-center font-secondary font-bold uppercase leading-[25px] md:leading-[40px] pt-5">
              {article?.title}
            </h1>
            <p className="font-secondary font-medium text-xs uppercase mt-4">{article?.credits}</p>
            <div className="my-5" />
          </div>

          {/* Mobile Image Column */}
          <div className="w-full h-full md:hidden block">
            <div className="w-full h-full">
              <Image
                src={article?.cover?.url}
                alt={article?.title}
                width={600}
                height={600}
                layout="responsive"
                className="rounded-lg object-cover object-top w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row relative h-full md:px-0">
          <div className="hidden md:block top-20 sticky w-1/2 md:h-[80vh]">
            <Image
              src={article?.cover?.url}
              alt={article?.title}
              quality={100}
              fill
              className="rounded-lg object-cover object-top"
            />
          </div>

          <div className="overflow-hidden md:w-1/2 w-full md:mt-0 mt-10">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-2 content md:px-5">
                {article?.content && <div dangerouslySetInnerHTML={{ __html: md.render(article?.content) }} className="text-[16px] leading-[25px] font-secondary tracking-wide" />}
              </div>
            </div>
          </div>
        </div>
      </article>
      {article?.video_url && <div className="flex flex-col items-center px-10 my-10">
        <div className="w-full md:w-1/2 h-[250px] md:h-[500px] rounded-2xl overflow-hidden">
          <iframe width="100%" height="100%" src={article?.video_url} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>}
    </>
  );
}
