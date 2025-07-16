import { sectionServiceClient } from "@/lib/api";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  try {
    const body = await request.json();
    const response = await sectionServiceClient({
      url: "/subscribers",
      method: "post",
      data: body,
      headers: {
        "Content-Type": "application/json"
      }
    });

    return NextResponse.json({
      ...response.data,
      status: response.status,
    });
  } catch (error: any) {
    console.log(error, "dkfjf")
    return NextResponse.json(
      { error: error.message || 'External API error' },
      { status: 500 }
    );
  }
};
