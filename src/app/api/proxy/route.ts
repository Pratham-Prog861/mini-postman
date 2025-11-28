import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { method, url, headers, data } = body;

    // Validate the URL
    if (!url || typeof url !== "string") {
      return NextResponse.json(
        { error: "Invalid URL provided" },
        { status: 400 }
      );
    }

    // Remove headers that shouldn't be forwarded
    const headersToRemove = [
      "host",
      "connection",
      "content-length",
      "origin",
      "referer",
    ];

    const cleanHeaders: Record<string, string> = {};
    if (headers && typeof headers === "object") {
      Object.entries(headers).forEach(([key, value]) => {
        const lowerKey = key.toLowerCase();
        if (!headersToRemove.includes(lowerKey) && typeof value === "string") {
          cleanHeaders[key] = value;
        }
      });
    }

    const startTime = Date.now();

    // Make the request
    const fetchOptions: RequestInit = {
      method: method || "GET",
      headers: cleanHeaders,
    };

    // Add body for methods that support it
    if (["POST", "PUT", "PATCH"].includes(method) && data) {
      fetchOptions.body =
        typeof data === "string" ? data : JSON.stringify(data);

      // Set default content-type if not provided
      if (!cleanHeaders["Content-Type"] && !cleanHeaders["content-type"]) {
        cleanHeaders["Content-Type"] = "application/json";
      }
    }

    const response = await fetch(url, fetchOptions);
    const endTime = Date.now();

    // Get response body
    let responseData;
    const contentType = response.headers.get("content-type");

    if (contentType?.includes("application/json")) {
      try {
        responseData = await response.json();
      } catch {
        responseData = await response.text();
      }
    } else {
      responseData = await response.text();
    }

    // Convert headers to object
    const responseHeaders: Record<string, string> = {};
    response.headers.forEach((value, key) => {
      responseHeaders[key] = value;
    });

    return NextResponse.json({
      data: responseData,
      headers: responseHeaders,
      status: response.status,
      statusText: response.statusText,
      time: endTime - startTime,
    });
  } catch (error: unknown) {
    // Handle fetch errors
    const err = error as Error;
    if (err.name === "TypeError" && err.message.includes("fetch")) {
      return NextResponse.json(
        {
          data: null,
          headers: {},
          status: 0,
          statusText: "Network Error",
          time: 0,
          error:
            "Failed to connect to the server. Please check the URL and try again.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        data: null,
        headers: {},
        status: 0,
        statusText: "Error",
        time: 0,
        error: err.message || "An unknown error occurred",
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS preflight
export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    }
  );
}
