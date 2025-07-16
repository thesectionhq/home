import { notFound } from "next/navigation";
import { Metadata } from "next";
import Article from "@/components/article";
import pillarsSeo from "@/data/pillars-seo";
import Category from "@/components/category";

type Pillars = "music" | "art" | "fashion" | "film" | "travel";

async function getData(slugArray: string[]) {
  let url = null;
  if (slugArray?.length > 1) {
    url = `http://localhost:3000/api/content/articles?slug=${slugArray[1]}`;
  } else {
    url = `http://localhost:3000/api/content/articles?category=${slugArray[0]}`;
  }
  const response = await fetch(url, {
    next: {
      revalidate: 60,
    }
  });
  if (!response.ok) {
    throw new Error('Data fetch failed');
  }

  return response.json();
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const paramData = await params;
  const slugArray = paramData?.slug || [];

  const response = await getData(slugArray);

  if (!response) {
    return {
      title: 'Post Not Found',
    };
  }

  if (slugArray?.length > 1) {
    return {
      title: `SECTION STUDIO | ${response?.data[0]?.title}`,
      description: response?.data[0]?.excerpt,
      openGraph: {
        images: [response?.data[0]?.cover?.url],
      }
    };
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

  const response = await getData(slugArray);

  if (slugArray?.length > 1) {
    return <Article article={response.data[0]} />
  } else {
    return <Category articles={response.data} category={slugArray[0]} />
  };
}
