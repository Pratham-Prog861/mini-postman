import axios, { AxiosError, AxiosRequestConfig } from "axios";
import type { HttpMethod, ApiResponse, RequestHeader } from "@/types";

/**
 * Validates if a URL is properly formatted
 */
export function isValidUrl(url: string): boolean {
  try {
    const urlObj = new URL(url);
    return urlObj.protocol === "http:" || urlObj.protocol === "https:";
  } catch {
    return false;
  }
}

/**
 * Validates JSON string
 */
export function isValidJson(str: string): boolean {
  if (!str.trim()) return true; // Empty is valid
  try {
    JSON.parse(str);
    return true;
  } catch {
    return false;
  }
}

/**
 * Converts header array to object, filtering out disabled headers
 */
function headersToObject(headers: RequestHeader[]): Record<string, string> {
  return headers
    .filter((h) => h.enabled && h.key.trim())
    .reduce((acc, h) => {
      acc[h.key.trim()] = h.value.trim();
      return acc;
    }, {} as Record<string, string>);
}

/**
 * Main API client function to send HTTP requests
 * Uses a server-side proxy to bypass CORS restrictions
 */
export async function sendApiRequest(
  method: HttpMethod,
  url: string,
  headers: RequestHeader[],
  body: string
): Promise<ApiResponse> {
  // Validate URL
  if (!isValidUrl(url)) {
    return {
      data: null,
      headers: {},
      status: 0,
      statusText: "Invalid URL",
      time: 0,
      error: "Please provide a valid HTTP or HTTPS URL",
    };
  }

  // Validate JSON body for methods that support it
  if (["POST", "PUT", "PATCH"].includes(method) && body.trim()) {
    if (!isValidJson(body)) {
      return {
        data: null,
        headers: {},
        status: 0,
        statusText: "Invalid JSON",
        time: 0,
        error: "Request body contains invalid JSON. Please check your syntax.",
      };
    }
  }

  const startTime = performance.now();

  try {
    // Prepare data for proxy
    let requestData = null;
    if (["POST", "PUT", "PATCH"].includes(method) && body.trim()) {
      try {
        requestData = JSON.parse(body);
      } catch {
        requestData = body;
      }
    }

    const headersObj = headersToObject(headers);

    // Send request through our proxy API route
    const response = await axios.post(
      "/api/proxy",
      {
        method,
        url,
        headers: headersObj,
        data: requestData,
      },
      {
        timeout: 30000, // 30 second timeout
      }
    );

    const endTime = performance.now();

    // Check if the proxy returned an error response
    if (response.data.error && response.data.status === 0) {
      return {
        data: response.data.data,
        headers: response.data.headers || {},
        status: response.data.status,
        statusText: response.data.statusText,
        time: response.data.time || Math.round(endTime - startTime),
        error: response.data.error,
      };
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
      const axiosError = error as AxiosError;

      // Check if it's a response from our proxy with error details
      if (axiosError.response?.data) {
        const errorData = axiosError.response.data as any;
        if (errorData.error) {
          return {
            data: errorData.data || null,
            headers: errorData.headers || {},
            status: errorData.status || 0,
            statusText: errorData.statusText || "Error",
            time: errorData.time || time,
            error: errorData.error,
          };
        }
      }

      // Network errors (timeout, connection issues, etc.)
      if (!axiosError.response) {
        let errorMessage = "Network Error";
        let errorDetails = "";

        if (axiosError.code === "ECONNABORTED") {
          errorMessage = "Request Timeout";
          errorDetails = "The request took too long to complete (30s timeout)";
        } else if (axiosError.code === "ERR_NETWORK") {
          errorMessage = "Network Error";
          errorDetails =
            "Could not connect to the proxy server. Please check your internet connection.";
        } else {
          errorDetails = axiosError.message;
        }

        return {
          data: null,
          headers: {},
          status: 0,
          statusText: errorMessage,
          time,
          error: errorDetails,
        };
      }

      // HTTP error responses (4xx, 5xx)
      return {
        data: axiosError.response.data,
        headers: axiosError.response.headers as Record<string, string>,
        status: axiosError.response.status,
        statusText: axiosError.response.statusText,
        time,
        error: `HTTP ${axiosError.response.status}: ${axiosError.response.statusText}`,
      };
    }

    // Unknown errors
    return {
      data: null,
      headers: {},
      status: 0,
      statusText: "Error",
      time,
      error:
        error instanceof Error ? error.message : "An unknown error occurred",
    };
  }
}
