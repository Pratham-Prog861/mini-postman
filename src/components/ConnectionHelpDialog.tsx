import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Copy, Check, ExternalLink } from "lucide-react";
import { toast } from "sonner";

interface ConnectionHelpDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ConnectionHelpDialog({
  open,
  onOpenChange,
}: ConnectionHelpDialogProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success("Code copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  const nodeCode = `const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: 'https://mini-postman-rouge.vercel.app',
  credentials: true,
}));

// Allow Private Network Access
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Private-Network', 'true');
  next();
});

app.options('*', (req, res) => {
  res.header('Access-Control-Allow-Private-Network', 'true');
  res.send();
});`;

  const pythonCode = `from flask import Flask, request, make_response

app = Flask(__name__)

def _corsify_actual_response(response):
    response.headers.add("Access-Control-Allow-Origin", "https://mini-postman-rouge.vercel.app")
    response.headers.add("Access-Control-Allow-Private-Network", "true")
    return response

@app.route('/api/<path:path>', methods=['GET', 'POST', 'OPTIONS'])
def api(path):
    if request.method == 'OPTIONS':
        response = make_response()
        response.headers.add("Access-Control-Allow-Origin", "https://mini-postman-rouge.vercel.app")
        response.headers.add("Access-Control-Allow-Headers", "*")
        response.headers.add("Access-Control-Allow-Methods", "*")
        response.headers.add("Access-Control-Allow-Private-Network", "true")
        return response
    
    # Your logic here
    response = make_response("Hello")
    return _corsify_actual_response(response)`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl bg-zinc-900 border-zinc-800 text-zinc-50">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <span className="text-amber-500">⚠️</span> Connection Blocked by
            Browser
          </DialogTitle>
          <DialogDescription className="text-zinc-400">
            Browsers block public websites from accessing <code>localhost</code>{" "}
            for security. To fix this, you must add specific headers to your
            backend.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          <Tabs defaultValue="node" className="w-full">
            <TabsList className="bg-zinc-800 border-zinc-700">
              <TabsTrigger value="node">Node.js (Express)</TabsTrigger>
              <TabsTrigger value="python">Python (Flask)</TabsTrigger>
            </TabsList>

            <div className="mt-4 relative group">
              <Button
                size="icon"
                variant="ghost"
                className="absolute right-2 top-2 h-8 w-8 bg-zinc-800/50 hover:bg-zinc-700 text-zinc-400 hover:text-white"
                onClick={() =>
                  copyToClipboard(
                    document.getElementById("code-content")?.innerText || ""
                  )
                }
              >
                {copied ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>

              <TabsContent value="node" className="mt-0">
                <pre
                  id="code-content"
                  className="bg-zinc-950 p-4 rounded-lg border border-zinc-800 overflow-x-auto text-sm font-mono text-zinc-300"
                >
                  {nodeCode}
                </pre>
              </TabsContent>

              <TabsContent value="python" className="mt-0">
                <pre className="bg-zinc-950 p-4 rounded-lg border border-zinc-800 overflow-x-auto text-sm font-mono text-zinc-300">
                  {pythonCode}
                </pre>
              </TabsContent>
            </div>
          </Tabs>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Close
          </Button>
          <Button
            variant="default"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() =>
              window.open(
                "https://developer.chrome.com/blog/private-network-access-preflight",
                "_blank"
              )
            }
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Learn More
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
