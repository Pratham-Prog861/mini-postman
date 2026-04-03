/**
 * Type definitions for Mini Postman API testing tool
 */

export type HttpMethod =
  | "GET"
  | "POST"
  | "PUT"
  | "DELETE"
  | "PATCH"
  | "HEAD"
  | "OPTIONS";

export interface RequestHeader {
  key: string;
  value: string;
  enabled: boolean;
}

export interface ApiRequest {
  id: string;
  method: HttpMethod;
  url: string;
  headers: RequestHeader[];
  body: string;
  timestamp: number;
}

export type ApiErrorType =
  | "VALIDATION_ERROR"
  | "CONNECTION_REFUSED"
  | "CORS_ERROR"
  | "MIXED_CONTENT"
  | "TIMEOUT"
  | "LOCALHOST_BLOCKED"
  | "NETWORK_ERROR"
  | "HTTP_ERROR"
  | "UNKNOWN";

export interface ApiResponse {
  data: unknown;
  headers: Record<string, string>;
  status: number;
  statusText: string;
  time: number;
  error?: string;
  errorType?: ApiErrorType;
  errorDetail?: string;
  solution?: string;
}

export interface ApiError {
  message: string;
  type: "network" | "validation" | "http" | "unknown";
  details?: string;
}
