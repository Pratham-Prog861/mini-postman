'use client';

import { Clock, Trash2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import type { ApiRequest, HttpMethod } from '@/types';

interface RequestHistoryProps {
  history: ApiRequest[];
  onSelect: (request: ApiRequest) => void;
  onClear: () => void;
  onRemove: (id: string) => void;
}

const methodColors: Record<HttpMethod, string> = {
  GET: 'bg-green-500/10 text-green-500 hover:bg-green-500/20',
  POST: 'bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20',
  PUT: 'bg-blue-500/10 text-blue-500 hover:bg-blue-500/20',
  DELETE: 'bg-red-500/10 text-red-500 hover:bg-red-500/20',
  PATCH: 'bg-purple-500/10 text-purple-500 hover:bg-purple-500/20',
  HEAD: 'bg-gray-500/10 text-gray-500 hover:bg-gray-500/20',
  OPTIONS: 'bg-gray-500/10 text-gray-500 hover:bg-gray-500/20',
};

export function RequestHistory({ history, onSelect, onClear, onRemove }: RequestHistoryProps) {
  if (history.length === 0) {
    return (
      <Card className="p-6 text-center text-muted-foreground">
        <Clock className="h-8 w-8 mx-auto mb-2 opacity-50" />
        <p className="text-sm">No request history yet</p>
      </Card>
    );
  }

  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    
    if (diff < 60000) return 'Just now';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`;
    return date.toLocaleDateString();
  };

  return (
    <Card className="flex flex-col h-full">
      <div className="flex items-center justify-between p-4 border-b">
        <h3 className="font-semibold">History</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClear}
          className="text-muted-foreground hover:text-destructive"
        >
          <Trash2 className="h-4 w-4 mr-2" />
          Clear All
        </Button>
      </div>

      <div className="flex-1 overflow-auto">
        {history.map((request, index) => (
          <div key={request.id}>
            <div
              className="p-3 hover:bg-accent cursor-pointer group relative"
              onClick={() => onSelect(request)}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="outline" className={methodColors[request.method]}>
                      {request.method}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {formatTime(request.timestamp)}
                    </span>
                  </div>
                  <p className="text-sm truncate" title={request.url}>
                    {request.url}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemove(request.id);
                  }}
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            </div>
            {index < history.length - 1 && <Separator />}
          </div>
        ))}
      </div>
    </Card>
  );
}
