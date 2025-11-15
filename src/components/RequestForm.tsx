'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { HeaderEditor } from './HeaderEditor';
import { BodyEditor } from './BodyEditor';
import type { RequestHeader, HttpMethod } from '@/types';

interface RequestFormProps {
  method: HttpMethod;
  headers: RequestHeader[];
  body: string;
  onHeadersChange: (headers: RequestHeader[]) => void;
  onBodyChange: (body: string) => void;
}

export function RequestForm({
  method,
  headers,
  body,
  onHeadersChange,
  onBodyChange,
}: RequestFormProps) {
  const showBody = ['POST', 'PUT', 'PATCH'].includes(method);

  return (
    <Card className="flex flex-col h-full">
      <Tabs defaultValue="headers" className="flex-1 flex flex-col">
        <TabsList className="mx-4 mt-4">
          <TabsTrigger value="headers">Headers</TabsTrigger>
          {showBody && <TabsTrigger value="body">Body</TabsTrigger>}
        </TabsList>

        <TabsContent value="headers" className="flex-1 overflow-auto p-4 mt-0">
          <HeaderEditor headers={headers} onChange={onHeadersChange} />
        </TabsContent>

        {showBody && (
          <TabsContent value="body" className="flex-1 overflow-auto p-4 mt-0">
            <BodyEditor value={body} onChange={onBodyChange} />
          </TabsContent>
        )}
      </Tabs>
    </Card>
  );
}
