'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type { HttpMethod } from '@/types';

interface MethodSelectorProps {
  value: HttpMethod;
  onChange: (method: HttpMethod) => void;
}

const methods: HttpMethod[] = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'];

const methodColors: Record<HttpMethod, string> = {
  GET: 'text-green-500',
  POST: 'text-yellow-500',
  PUT: 'text-blue-500',
  DELETE: 'text-red-500',
  PATCH: 'text-purple-500',
  HEAD: 'text-gray-500',
  OPTIONS: 'text-gray-500',
};

export function MethodSelector({ value, onChange }: MethodSelectorProps) {
  return (
    <Select value={value} onValueChange={(v) => onChange(v as HttpMethod)}>
      <SelectTrigger className="w-[110px] font-semibold">
        <SelectValue>
          <span className={methodColors[value]}>{value}</span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {methods.map((method) => (
          <SelectItem key={method} value={method}>
            <span className={methodColors[method]}>{method}</span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
