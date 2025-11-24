import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return echoResponse(request);
}

export async function POST(request: NextRequest) {
  return echoResponse(request);
}

export async function PUT(request: NextRequest) {
  return echoResponse(request);
}

export async function PATCH(request: NextRequest) {
  return echoResponse(request);
}

export async function DELETE(request: NextRequest) {
  return echoResponse(request);
}

async function echoResponse(request: NextRequest) {
  const url = new URL(request.url);
  const headers: Record<string, string> = {};

  request.headers.forEach((value, key) => {
    headers[key] = value;
  });

  let body = null;
  try {
    const text = await request.text();
    if (text) {
      try {
        body = JSON.parse(text);
      } catch {
        body = text;
      }
    }
  } catch (e) {
    // Body might be empty or not readable
  }

  return NextResponse.json({
    method: request.method,
    url: request.url,
    path: url.pathname,
    query: Object.fromEntries(url.searchParams),
    headers,
    body,
    receivedAt: new Date().toISOString(),
  });
}
