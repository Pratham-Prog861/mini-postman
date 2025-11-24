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
    const config: AxiosRequestConfig = {
      method,
      url,
      headers: headersToObject(headers),
      timeout: 30000, // 30 second timeout
    };

    // Add body for methods that support it
    if (["POST", "PUT", "PATCH"].includes(method) && body.trim()) {
      try {
        config.data = JSON.parse(body);
        // Set content-type if not already set
        if (!config.headers?.["Content-Type"]) {
          config.headers = {
            ...config.headers,
            "Content-Type": "application/json",
          };
        }
      } catch {
        config.data = body;
      }
    }

    const response = await axios(config);
    const endTime = performance.now();

    return {
      data: response.data,
      headers: response.headers as Record<string, string>,
      status: response.status,
      statusText: response.statusText,
      time: Math.round(endTime - startTime),
    };
  } catch (error) {
    const endTime = performance.now();
    const time = Math.round(endTime - startTime);

    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;

      // Network errors (CORS, DNS, connection refused, etc.)
      if (!axiosError.response) {
        let errorMessage = "Network Error";
        let errorDetails = "";

        if (axiosError.code === "ECONNABORTED") {
          errorMessage = "Request Timeout";
          errorDetails = "The request took too long to complete (30s timeout)";
          return {
            data: null,
            headers: {},
            status: 0,
            statusText: errorMessage,
            time,
            error: errorDetails,
            errorType: "TIMEOUT",
          };
        } else if (axiosError.code === "ERR_NETWORK") {
          errorMessage = "Network Error";

          // Check for specific HTTPS -> Localhost issue
          const isHttps =
            typeof window !== "undefined" &&
            window.location.protocol === "https:";
          const isLocalhostTarget =
            url.includes("localhost") || url.includes("127.0.0.1");

          if (isHttps && isLocalhostTarget) {
            errorMessage = "Restricted Access";
            errorDetails =
              "Browsers block public websites from accessing localhost. You must enable 'Private Network Access' headers on your backend or use a tunnel (ngrok).";
            return {
              data: null,
              headers: {},
              status: 0,
              statusText: errorMessage,
              time,
              error: errorDetails,
              errorType: "RESTRICTED_ACCESS",
            };
          } else {
            errorDetails =
              "Could not connect to the server. This might be due to CORS, network issues, or the server being down.";
            return {
              data: null,
              headers: {},
              status: 0,
              statusText: errorMessage,
              time,
              error: errorDetails,
              errorType: "NETWORK_ERROR",
            };
          }
        } else if (axiosError.message.includes("CORS")) {
          errorMessage = "CORS Error";
          errorDetails =
            "The server does not allow requests from this origin. Try using a CORS proxy or enable CORS on the server.";
          return {
            data: null,
            headers: {},
            status: 0,
            statusText: errorMessage,
            time,
            error: errorDetails,
            errorType: "CORS_ERROR",
          };
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
          errorType: "UNKNOWN",
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
