import { sectionServiceClient } from "@/lib/api";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const response = await sectionServiceClient({
      url: "/categories?populate=*&sort=order",
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
