'use client';

import { Plus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import type { RequestHeader } from '@/types';

interface HeaderEditorProps {
  headers: RequestHeader[];
  onChange: (headers: RequestHeader[]) => void;
}

export function HeaderEditor({ headers, onChange }: HeaderEditorProps) {
  const addHeader = () => {
    onChange([...headers, { key: '', value: '', enabled: true }]);
  };

  const updateHeader = (index: number, field: keyof RequestHeader, value: string | boolean) => {
    const updated = [...headers];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  const removeHeader = (index: number) => {
    onChange(headers.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-2">
      <div className="grid grid-cols-[auto_1fr_1fr_auto] gap-2 text-sm font-medium text-muted-foreground mb-2">
        <div className="w-8"></div>
        <div>Key</div>
        <div>Value</div>
        <div className="w-8"></div>
      </div>

      {headers.map((header, index) => (
        <div key={index} className="grid grid-cols-[auto_1fr_1fr_auto] gap-2 items-center">
          <input
            type="checkbox"
            checked={header.enabled}
            onChange={(e) => updateHeader(index, 'enabled', e.target.checked)}
            className="w-4 h-4 rounded border-input"
          />
          <Input
            placeholder="Header name"
            value={header.key}
            onChange={(e) => updateHeader(index, 'key', e.target.value)}
          />
          <Input
            placeholder="Value"
            value={header.value}
            onChange={(e) => updateHeader(index, 'value', e.target.value)}
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => removeHeader(index)}
            className="h-8 w-8"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ))}

      <Button
        variant="outline"
        size="sm"
        onClick={addHeader}
        className="mt-2"
      >
        <Plus className="h-4 w-4 mr-2" />
        Add Header
      </Button>
    </div>
  );
}
