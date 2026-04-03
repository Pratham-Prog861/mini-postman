import { NextRequest, NextResponse } from "next/server";

/**
 * Check if URL targets localhost or private network
 * Vercel serverless functions cannot reach private networks
 */
function isLocalhostOrPrivate(urlString: string): boolean {
  try {
    const url = new URL(urlString);
    const hostname = url.hostname.toLowerCase();

    // Check for localhost variants
    if (
      hostname === "localhost" ||
      hostname === "127.0.0.1" ||
      hostname === "::1" ||
      hostname.startsWith("127.")
    ) {
      return true;
    }

    // Check for private IP ranges (RFC 1918)
    const ipMatch = hostname.match(/^(\d+\.\d+\.\d+\.\d+)$/);
    if (ipMatch) {
      const parts = ipMatch[1].split(".").map(Number);
      // 10.0.0.0/8
      if (parts[0] === 10) return true;
      // 172.16.0.0/12
      if (parts[0] === 172 && parts[1] >= 16 && parts[1] <= 31) return true;
      // 192.168.0.0/16
      if (parts[0] === 192 && parts[1] === 168) return true;
    }

    // Check for .local mDNS domains
    if (hostname.endsWith(".local")) return true;

    return false;
  } catch {
    return false;
  }
}

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

    // Check for localhost/private network targets
    if (isLocalhostOrPrivate(url)) {
      return NextResponse.json(
        {
          data: null,
          headers: {},
          status: 0,
          statusText: "Localhost Blocked",
          time: 0,
          error: "RESTRICTED_ACCESS",
          errorDetail:
            "Cannot access localhost from a deployed website. Vercel's servers cannot reach your local development server.",
          solution: "Use a tunneling service like ngrok, Cloudflare Tunnel, or run this tool locally.",
        },
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
