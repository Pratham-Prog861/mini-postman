"use client";

import { useState, useEffect, useCallback } from "react";
import { sendApiRequest } from "@/lib/apiClient";
import type {
  HttpMethod,
  ApiResponse,
  ApiRequest,
  RequestHeader,
} from "@/types";

const HISTORY_KEY = "mini-postman-history";
const MAX_HISTORY = 10;

/**
 * Custom hook for managing API requests, responses, and history
 */
export function useApiRequest() {
  const [response, setResponse] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState<ApiRequest[]>([]);

  // Load history from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(HISTORY_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setHistory(parsed);
      }
    } catch (error) {
      console.error("Failed to load history:", error);
    }
  }, []);

  // Save history to localStorage whenever it changes
  const saveHistory = useCallback((newHistory: ApiRequest[]) => {
    try {
      localStorage.setItem(HISTORY_KEY, JSON.stringify(newHistory));
      setHistory(newHistory);
    } catch (error) {
      console.error("Failed to save history:", error);
    }
  }, []);

  /**
   * Send an API request
   */
  const sendRequest = useCallback(
    async (
      method: HttpMethod,
      url: string,
      headers: RequestHeader[],
      body: string
    ): Promise<ApiResponse> => {
      setLoading(true);
      setResponse(null);

      try {
        const result = await sendApiRequest(method, url, headers, body);
        setResponse(result);

        // Add to history if request was valid
        if (url.trim()) {
          const newRequest: ApiRequest = {
            id: Date.now().toString(),
            method,
            url,
            headers,
            body,
            timestamp: Date.now(),
          };

          setHistory((prev) => {
            const updated = [newRequest, ...prev].slice(0, MAX_HISTORY);
            saveHistory(updated);
            return updated;
          });
        }

        return result;
      } finally {
        setLoading(false);
      }
    },
    [saveHistory]
  );

  /**
   * Clear request history
   */
  const clearHistory = useCallback(() => {
    localStorage.removeItem(HISTORY_KEY);
    setHistory([]);
  }, []);

  /**
   * Remove a single item from history
   */
  const removeFromHistory = useCallback(
    (id: string) => {
      setHistory((prev) => {
        const updated = prev.filter((item) => item.id !== id);
        saveHistory(updated);
        return updated;
      });
    },
    [saveHistory]
  );

  return {
    sendRequest,
    response,
    loading,
    history,
    clearHistory,
    removeFromHistory,
  };
}
