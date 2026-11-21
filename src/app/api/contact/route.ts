import { NextResponse } from "next/server";

export async function POST(): Promise<NextResponse> {
  return NextResponse.json(
    { success: false, error: "This endpoint is no longer available." },
    { status: 410 },
  );
}
