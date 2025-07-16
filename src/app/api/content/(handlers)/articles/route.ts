import { sectionServiceClient } from "@/lib/api";
import { NextResponse } from "next/server";

export const GET = async ({url}: any) => {
  const urlParams = new URL(url).searchParams;
  const type = urlParams.get("type");
  const slug = urlParams.get("slug");
  const category = urlParams.get("category");

  let articleUrl = "/articles?populate=*&sort[0]=live_date:desc&filters[live_status][$eq]=active";
  if (type) {
    articleUrl += `&filters[type][$eq]=${type}`;
  }
  if (slug) {
    articleUrl += `&filters[slug][$eq]=${slug}`;
  }
  if (category) {
    articleUrl += `&filters[category][$eq]=${category}`;
  }

  try {
    const response = await sectionServiceClient({
      url: articleUrl,
      method: "get",
    });

    return NextResponse.json({
      ...response.data,
      status: response.status,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'External API error' },
      { status: 500 }
    );
  }
};
