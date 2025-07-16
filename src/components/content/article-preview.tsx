import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/date-formatter";

export default function ArticlePreview({article}: any) {
  return (
    <Link
      href={`/${article.category}/${article.slug}`}
      key={article.slug}
      className="group border-t border-[#898989] flex flex-col gap-4 mb-5"
    >
      <div className="mt-3">
        <h2 className="text-lg font-secondary-bold text-ellipsis overflow-hidden text-nowrap" title={article.title}>{article.title}</h2>
        {/* <p className="text-sm font-secondary tracking-wide leading-[20px] mt-2 mb-1 text-nowrap overflow-hidden text-ellipsis">{article.excerpt}</p> */}
        <p className="text-xs text-[#898989] font-secondary">
          {formatDate(article.date)}
        </p>
      </div>

      <div>
        <div className="relative w-full h-[250px] overflow-hidden rounded-lg">
          <div className="absolute bottom-0 backdrop-blur-md bg-white/60 text-black text-[15px] rounded-bl-lg z-10 px-8 py-1 uppercase">
            <p>{article.category}</p>
          </div>
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* <div className="flex flex-col items-start gap-3 mt-3">
          <p className="text-sm font-secondary tracking-wide leading-[20px]">{article.excerpt}</p>
        </div> */}
      </div>
    </Link>
  );
}
