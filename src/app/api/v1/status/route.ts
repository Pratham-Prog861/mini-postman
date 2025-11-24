import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    message: "Mini Postman API is running",
    timestamp: new Date().toISOString(),
    version: "1.0.0",
  });
}
