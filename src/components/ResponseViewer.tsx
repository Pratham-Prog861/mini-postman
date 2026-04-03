"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { ApiResponse } from "@/types";

interface ResponseViewerProps {
  response: ApiResponse | null;
}

export function ResponseViewer({ response }: ResponseViewerProps) {
  const [copied, setCopied] = useState(false);

  if (!response) {
    return (
      <Card className="p-8 text-center text-muted-foreground">
        <p>Send a request to see the response here</p>
      </Card>
    );
  }

  const copyToClipboard = async () => {
    try {
      const text =
        typeof response.data === "string"
          ? response.data
          : JSON.stringify(response.data, null, 2);
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  const getStatusColor = (status: number) => {
    if (status === 0) return "destructive";
    if (status >= 200 && status < 300) return "default";
    if (status >= 300 && status < 400) return "secondary";
    if (status >= 400 && status < 500) return "destructive";
    return "destructive";
  };

  return (
    <Card className="flex flex-col h-full min-w-0 overflow-hidden">
      <div className="flex items-center justify-between gap-3 p-4 border-b min-w-0">
        <div className="flex items-center gap-3">
          <Badge variant={getStatusColor(response.status)}>
            {response.status || "Error"} {response.statusText}
          </Badge>
          <span className="text-sm text-muted-foreground">
            {response.time}ms
          </span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={copyToClipboard}
          disabled={!response.data}
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>

      {response.error && (
        <div className="p-4 bg-destructive/10 border-b border-destructive/20 space-y-2">
          <p className="text-sm text-destructive font-medium">
            {response.error}
          </p>
          {response.errorDetail && (
            <p className="text-xs text-destructive/80">
              {response.errorDetail}
            </p>
          )}
          {response.solution && (
            <p className="text-xs text-green-600 dark:text-green-400 flex items-center gap-1">
              <span>💡</span> {response.solution}
            </p>
          )}
        </div>
      )}

      <Tabs
        defaultValue="body"
        className="flex-1 flex flex-col min-h-0 min-w-0"
      >
        <TabsList className="mx-4 mt-4 shrink-0">
          <TabsTrigger value="body">Body</TabsTrigger>
          <TabsTrigger value="headers">Headers</TabsTrigger>
          <TabsTrigger value="raw">Raw</TabsTrigger>
        </TabsList>

        <TabsContent
          value="body"
          className="flex-1 overflow-auto p-4 mt-0 min-h-0 min-w-0"
        >
          {response.data ? (
            typeof response.data === "object" ? (
              <pre className="font-mono text-sm whitespace-pre-wrap break-words text-foreground bg-muted/30 p-4 rounded-lg w-full max-w-full overflow-auto">
                {JSON.stringify(response.data, null, 2)}
              </pre>
            ) : (
              <pre className="font-mono text-sm whitespace-pre-wrap break-words text-foreground bg-muted/30 p-4 rounded-lg w-full max-w-full overflow-auto">
                {String(response.data)}
              </pre>
            )
          ) : (
            <p className="text-muted-foreground text-sm">No response body</p>
          )}
        </TabsContent>

        <TabsContent
          value="headers"
          className="flex-1 overflow-auto p-4 mt-0 min-h-0 min-w-0"
        >
          {Object.keys(response.headers).length > 0 ? (
            <div className="space-y-2">
              {Object.entries(response.headers).map(([key, value]) => (
                <div
                  key={key}
                  className="grid grid-cols-[200px_1fr] gap-4 text-sm"
                >
                  <span className="font-medium text-muted-foreground">
                    {key}:
                  </span>
                  <span className="font-mono break-all">{value}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground text-sm">No headers</p>
          )}
        </TabsContent>

        <TabsContent
          value="raw"
          className="flex-1 overflow-auto p-4 mt-0 min-h-0 min-w-0"
        >
          <pre className="font-mono text-sm whitespace-pre-wrap break-words text-foreground w-full max-w-full overflow-auto">
            {typeof response.data === "string"
              ? response.data
              : JSON.stringify(response.data, null, 2)}
          </pre>
        </TabsContent>
      </Tabs>
    </Card>
  );
}
