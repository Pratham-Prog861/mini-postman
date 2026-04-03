import axios, { AxiosError } from "axios";
import type {
  HttpMethod,
  ApiResponse,
  ApiErrorType,
  RequestHeader,
} from "@/types";

function isValidUrl(url: string): boolean {
  try {
    const urlObj = new URL(url);
    return urlObj.protocol === "http:" || urlObj.protocol === "https:";
  } catch {
    return false;
  }
}

function isValidJson(str: string): boolean {
  if (!str.trim()) return true;
  try {
    JSON.parse(str);
    return true;
  } catch {
    return false;
  }
}

function headersToObject(headers: RequestHeader[]): Record<string, string> {
  return headers
    .filter((h) => h.enabled && h.key.trim())
    .reduce(
      (acc, h) => {
        acc[h.key.trim()] = h.value.trim();
        return acc;
      },
      {} as Record<string, string>,
    );
}

function isLocalhostOrPrivate(urlString: string): boolean {
  try {
    const url = new URL(urlString);
    const hostname = url.hostname.toLowerCase();

    if (
      hostname === "localhost" ||
      hostname === "127.0.0.1" ||
      hostname === "::1" ||
      hostname.startsWith("127.")
    ) {
      return true;
    }

    const ipMatch = hostname.match(/^(\d+\.\d+\.\d+\.\d+)$/);
    if (ipMatch) {
      const parts = ipMatch[1].split(".").map(Number);
      if (parts[0] === 10) return true;
      if (parts[0] === 172 && parts[1] >= 16 && parts[1] <= 31) return true;
      if (parts[0] === 192 && parts[1] === 168) return true;
    }

    if (hostname.endsWith(".local")) return true;

    return false;
  } catch {
    return false;
  }
}

function isMixedContentRequest(urlString: string): boolean {
  if (typeof window === "undefined") return false;

  try {
    const target = new URL(urlString);
    return window.location.protocol === "https:" && target.protocol === "http:";
  } catch {
    return false;
  }
}

function categorizeError(
  error: unknown,
  url: string,
  isLocalhost: boolean,
): {
  errorType: ApiErrorType;
  error: string;
  errorDetail?: string;
  solution?: string;
} {
  const axiosError = error as AxiosError;

  if (!axiosError.response) {
    const code = axiosError.code;
    const message = axiosError.message || "";

    if (code === "ECONNABORTED") {
      return {
        errorType: "TIMEOUT",
        error: "Request timed out",
        errorDetail: "The server took too long to respond (30s timeout).",
        solution:
          "Check if your server is running and consider increasing the timeout.",
      };
    }

    if (isMixedContentRequest(url)) {
      return {
        errorType: "MIXED_CONTENT",
        error: "Blocked by browser security",
        errorDetail:
          "This page is running on HTTPS but the target URL is HTTP, so the browser blocked the request.",
        solution:
          "Use an HTTPS API URL, run this tool locally over HTTP, or expose your local API through an HTTPS tunnel.",
      };
    }

    if (
      message.includes("Network Error") ||
      code === "ERR_NETWORK" ||
      message.includes("ECONNREFUSED")
    ) {
      if (isLocalhost) {
        return {
          errorType: "CONNECTION_REFUSED",
          error: "Cannot connect to server",
          errorDetail:
            "Could not reach your local API. The server may be down, blocked by CORS/private-network policy, or listening on a different port.",
          solution:
            "Start your local server, verify host/port, and enable CORS for your website origin (or use a tunnel URL).",
        };
      }
      return {
        errorType: "NETWORK_ERROR",
        error: "Network error",
        errorDetail:
          "Could not reach the server. Check your internet connection.",
        solution: "Verify the URL is correct and the server is accessible.",
      };
    }

    if (message.includes("Failed to fetch") || message.includes("fetch")) {
      if (isLocalhost) {
        return {
          errorType: "CORS_ERROR",
          error: "Local request blocked by browser",
          errorDetail:
            "The browser blocked access to your localhost API due to CORS or private network access checks.",
          solution:
            "Allow your app origin in CORS and enable private network access headers, or test using an HTTPS tunnel.",
        };
      }
      return {
        errorType: "NETWORK_ERROR",
        error: "Request failed",
        errorDetail: message,
        solution: "Check the URL and try again.",
      };
    }

    return {
      errorType: "UNKNOWN",
      error: "Request failed",
      errorDetail: message,
      solution: "Try again or check the URL.",
    };
  }

  if (axiosError.response.status === 0) {
    return {
      errorType: "CORS_ERROR",
      error: "CORS blocked",
      errorDetail: "The server did not allow this request due to CORS policy.",
      solution: "Add 'Access-Control-Allow-Origin: *' header to your server.",
    };
  }

  return {
    errorType: "HTTP_ERROR",
    error: `HTTP ${axiosError.response.status}`,
    errorDetail: axiosError.response.statusText,
    solution: "Check your request and try again.",
  };
}

function buildErrorResponse(
  errorType: ApiErrorType,
  error: string,
  time: number,
  errorDetail?: string,
  solution?: string,
): ApiResponse {
  return {
    data: null,
    headers: {},
    status: 0,
    statusText: error,
    time,
    error,
    errorType,
    errorDetail,
    solution,
  };
}

export async function sendApiRequest(
  method: HttpMethod,
  url: string,
  headers: RequestHeader[],
  body: string,
): Promise<ApiResponse> {
  if (!isValidUrl(url)) {
    return buildErrorResponse(
      "VALIDATION_ERROR",
      "Invalid URL",
      0,
      "Please provide a valid HTTP or HTTPS URL",
      "Use a URL starting with http:// or https://",
    );
  }

  if (["POST", "PUT", "PATCH"].includes(method) && body.trim()) {
    if (!isValidJson(body)) {
      return buildErrorResponse(
        "VALIDATION_ERROR",
        "Invalid JSON",
        0,
        "Request body contains invalid JSON",
        "Check your JSON syntax and try again",
      );
    }
  }

  const isLocalhost = isLocalhostOrPrivate(url);
  const startTime = performance.now();
  const headersObj = headersToObject(headers);
  let requestData = null;

  if (["POST", "PUT", "PATCH"].includes(method) && body.trim()) {
    try {
      requestData = JSON.parse(body);
    } catch {
      requestData = body;
    }
  }

  try {
    if (isLocalhost) {
      const response = await axios({
        method: method.toLowerCase(),
        url,
        headers: headersObj,
        data: requestData,
        timeout: 30000,
      });

      const endTime = performance.now();
      return {
        data: response.data,
        headers: response.headers as Record<string, string>,
        status: response.status,
        statusText: response.statusText,
        time: Math.round(endTime - startTime),
      };
    }

    const response = await axios.post(
      "/api/proxy",
      { method, url, headers: headersObj, data: requestData },
      { timeout: 30000 },
    );

    const endTime = performance.now();

    if (response.data.error && response.data.status === 0) {
      if (response.data.error === "RESTRICTED_ACCESS") {
        return buildErrorResponse(
          "LOCALHOST_BLOCKED",
          "Localhost blocked",
          response.data.time || Math.round(endTime - startTime),
          response.data.errorDetail,
          response.data.solution,
        );
      }
      return buildErrorResponse(
        "UNKNOWN",
        response.data.error,
        response.data.time || Math.round(endTime - startTime),
      );
    }

    return {
      data: response.data.data,
      headers: response.data.headers || {},
      status: response.data.status,
      statusText: response.data.statusText,
      time: response.data.time || Math.round(endTime - startTime),
    };
  } catch (error) {
    const endTime = performance.now();
    const time = Math.round(endTime - startTime);

    if (axios.isAxiosError(error)) {
      const categorized = categorizeError(error, url, isLocalhost);
      return buildErrorResponse(
        categorized.errorType,
        categorized.error,
        time,
        categorized.errorDetail,
        categorized.solution,
      );
    }

    return buildErrorResponse(
      "UNKNOWN",
      "Unknown error",
      time,
      error instanceof Error ? error.message : "An unexpected error occurred",
      "Try again or check your request",
    );
  }
}

export { isValidJson };
