'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { JsonView, defaultStyles } from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';
import type { ApiResponse } from '@/types';

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
      const text = typeof response.data === 'string' 
        ? response.data 
        : JSON.stringify(response.data, null, 2);
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const getStatusColor = (status: number) => {
    if (status === 0) return 'destructive';
    if (status >= 200 && status < 300) return 'default';
    if (status >= 300 && status < 400) return 'secondary';
    if (status >= 400 && status < 500) return 'destructive';
    return 'destructive';
  };

  return (
    <Card className="flex flex-col h-full">
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-3">
          <Badge variant={getStatusColor(response.status)}>
            {response.status || 'Error'} {response.statusText}
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
        <div className="p-4 bg-destructive/10 border-b border-destructive/20">
          <p className="text-sm text-destructive font-medium">{response.error}</p>
        </div>
      )}

      <Tabs defaultValue="body" className="flex-1 flex flex-col">
        <TabsList className="mx-4 mt-4">
          <TabsTrigger value="body">Body</TabsTrigger>
          <TabsTrigger value="headers">Headers</TabsTrigger>
          <TabsTrigger value="raw">Raw</TabsTrigger>
        </TabsList>

        <TabsContent value="body" className="flex-1 overflow-auto p-4 mt-0">
          {response.data ? (
            typeof response.data === 'object' ? (
              <div className="json-viewer-dark">
                <JsonView
                  data={response.data}
                  shouldExpandNode={(level) => level < 2}
                  style={{
                    ...defaultStyles,
                    container: 'font-mono text-sm',
                    basicChildStyle: 'padding-left: 1rem;',
                    label: 'color: hsl(var(--primary)); font-weight: 500;',
                    nullValue: 'color: hsl(var(--muted-foreground));',
                    undefinedValue: 'color: hsl(var(--muted-foreground));',
                    numberValue: 'color: #60a5fa;',
                    stringValue: 'color: #34d399;',
                    booleanValue: 'color: #f472b6;',
                    otherValue: 'color: hsl(var(--foreground));',
                    punctuation: 'color: hsl(var(--muted-foreground));',
                  }}
                />
              </div>
            ) : (
              <pre className="font-mono text-sm whitespace-pre-wrap text-foreground">
                {String(response.data)}
              </pre>
            )
          ) : (
            <p className="text-muted-foreground text-sm">No response body</p>
          )}
        </TabsContent>

        <TabsContent value="headers" className="flex-1 overflow-auto p-4 mt-0">
          {Object.keys(response.headers).length > 0 ? (
            <div className="space-y-2">
              {Object.entries(response.headers).map(([key, value]) => (
                <div key={key} className="grid grid-cols-[200px_1fr] gap-4 text-sm">
                  <span className="font-medium text-muted-foreground">{key}:</span>
                  <span className="font-mono break-all">{value}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground text-sm">No headers</p>
          )}
        </TabsContent>

        <TabsContent value="raw" className="flex-1 overflow-auto p-4 mt-0">
          <pre className="font-mono text-sm whitespace-pre-wrap text-foreground">
            {typeof response.data === 'string'
              ? response.data
              : JSON.stringify(response.data, null, 2)}
          </pre>
        </TabsContent>
      </Tabs>
    </Card>
  );
}
