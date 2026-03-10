import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Log web vitals
    console.log("Web Vitals:", body);

    // Here you can send to your analytics service
    // Example: Google Analytics, Vercel Analytics, etc.

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Analytics error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
