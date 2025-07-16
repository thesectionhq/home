"use client";
import { useContext } from "react";
import Image from "next/image";
import MasonryGrid from "@/components/MasonryGrid";
import Link from "next/link";
import { GlobalContext } from "@/lib/context";

export default function EditorialTabs() {
  const { topicArticles } = useContext(GlobalContext);

  return (
    <div className="w-full">
      <div className="container bg-white mx-auto text-center px-6 py-40">
        <p className="font-bold font-secondary text-6xl uppercase italic text-gray-4">"One good thing about music, when it hits you, you feel no pain."</p>
        <p className="italic font-medium font-secondary text-xl mt-4">-Bob Marley</p>
      </div>

      <div
        className="w-full transition-colors duration-500 bg-[#AC95FF]"
      >
        <div className="container mx-auto px-6 py-6">
          <MasonryGrid columns={3} className="p-6 rounded-xl transition-colors duration-500">
            {topicArticles.map((article: any, index) => (
              <Link key={index} href={`/${article?.category}/${article.slug}`} className="group">
                <div
                  className="break-inside-avoid bg-white p-1 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 mb-6"
                >
                  <Image
                    src={article.cover?.url}
                    alt={article.title}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover rounded-md mb-4"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="flex flex-col items-start gap-3 mt-3 px-4">
                    <p className="text-[16px] leading-[20px] font-secondary font-semibold uppercase">{article.title}</p>
                  </div>
                </div>
              </Link>
            ))}
          </MasonryGrid>
        </div>
      </div>
    </div>
  );
}
