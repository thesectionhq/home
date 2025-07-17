import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";
import Article from "@/components/article";
import pillarsSeo from "@/data/pillars-seo";
import Category from "@/components/category";
import { getArticles } from "@/lib/api";

type Pillars = "music" | "art" | "fashion" | "film" | "travel";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const paramData = await params;
  const slugArray = paramData?.slug || [];

  const response = await getArticles(slugArray);

  if (!response) {
    return {
      title: 'Page Not Found',
    };
  }

  if (slugArray?.length > 1) {
    if (response?.data?.length > 0) {
      return {
        title: `SECTION STUDIO | ${response?.data[0]?.title}`,
        description: response?.data[0]?.excerpt,
        openGraph: {
          images: [{
            url: response?.data[0]?.cover?.url,
            width: 1200,
            height: 1500,
          }],
        },
        twitter: {
          creator: '@thesectionhq',
          creatorId: '1813659278718242816',
          images: [{
            url: response?.data[0]?.cover?.url,
            width: 1200,
            height: 1500,
          }],
        },
      };
    } else {
      return {}
    }
  } else {
    return {
      title: pillarsSeo[slugArray[0] as Pillars].title,
      description: pillarsSeo[slugArray[0] as Pillars].description,
    }
  }
}

export default async function DynamicPage({ params }: any) {
  const paramData = await params;
  const slugArray = paramData?.slug || [];
  const categories = ['music', 'art', 'fashion', 'film', 'travel'];

  if (!categories.includes(slugArray[0])) {
    notFound();
  }

  const response = await getArticles(slugArray);

  if (slugArray?.length > 1) {
    return <Article article={response.data[0]} />
  } else {
    return <Category articles={response.data} category={slugArray[0]} />
  };
}
