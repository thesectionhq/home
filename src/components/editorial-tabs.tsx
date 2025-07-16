"use client";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import MasonryGrid from "@/components/MasonryGrid";
import Link from "next/link";
import { GlobalContext } from "@/lib/context";

export default function EditorialTabs() {
  const [columns, setColumns] = useState(3);
  const [visibleCount, setVisibleCount] = useState(3);
  const { topicArticles } = useContext(GlobalContext);

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 640) {
        setColumns(1);
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setColumns(2);
        setVisibleCount(6);
      } else {
        setColumns(3);
        setVisibleCount(6);
      }
    };


    updateColumns(); // Call initially
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  return (
    <div className="w-full">
      <div className="container bg-white mx-auto text-center px-6 py-40">
        <p className="font-bold font-secondary text-6xl uppercase italic text-gray-4">"One good thing about music, when it hits you, you feel no pain."</p>
        <p className="italic font-medium font-secondary text-xl mt-4">-Bob Marley</p>
      </div>

      <div
        className="w-full transition-colors duration-500 bg-[#777]"
      >
        <div className="container mx-auto px-6 py-6">
          <MasonryGrid columns={columns} className="p-6 rounded-xl transition-colors duration-500">
            {topicArticles.slice(0, visibleCount).map((article: any, index) => (
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
                  <div className="flex flex-col items-start gap-3 mt-2 mb-2 px-4">
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
