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
import { Copy, Check, ExternalLink, Server, Globe, Home } from "lucide-react";
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
  origin: 'https://your-app.vercel.app',
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
    response.headers.add("Access-Control-Allow-Origin", "https://your-app.vercel.app")
    response.headers.add("Access-Control-Allow-Private-Network", "true")
    return response

@app.route('/api/<path:path>', methods=['GET', 'POST', 'OPTIONS'])
def api(path):
    if request.method == 'OPTIONS':
        response = make_response()
        response.headers.add("Access-Control-Allow-Origin", "https://your-app.vercel.app")
        response.headers.add("Access-Control-Allow-Headers", "*")
        response.headers.add("Access-Control-Allow-Methods", "*")
        response.headers.add("Access-Control-Allow-Private-Network", "true")
        return response
    
    response = make_response("Hello")
    return _corsify_actual_response(response)`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-zinc-900 border-zinc-800 text-zinc-50">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <Server className="h-5 w-5 text-amber-500" />
            Cannot Access Localhost
          </DialogTitle>
          <DialogDescription className="text-zinc-300 text-base">
            Vercel&apos;s servers cannot reach your local development server. When
            you access this tool at <code className="bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-200">vercel.app</code>,
            requests are routed through Vercel&apos;s cloud infrastructure, which
            has no access to your machine&apos;s localhost.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6 space-y-6">
          {/* Solution 1: Run locally */}
          <div className="bg-zinc-800/50 rounded-lg p-4 border border-zinc-700">
            <div className="flex items-center gap-3 mb-2">
              <Home className="h-5 w-5 text-green-400" />
              <h3 className="font-semibold text-zinc-100">Option 1: Run Locally (Recommended)</h3>
            </div>
            <p className="text-zinc-400 text-sm">
              Clone this repository and run it locally with{" "}
              <code className="bg-zinc-700 px-1.5 py-0.5 rounded text-zinc-200">npm run dev</code>.
              This allows direct access to your localhost APIs.
            </p>
          </div>

          {/* Solution 2: Tunnel */}
          <div className="bg-zinc-800/50 rounded-lg p-4 border border-zinc-700">
            <div className="flex items-center gap-3 mb-2">
              <Globe className="h-5 w-5 text-blue-400" />
              <h3 className="font-semibold text-zinc-100">Option 2: Use a Tunnel</h3>
            </div>
            <p className="text-zinc-400 text-sm mb-3">
              Expose your localhost to the internet using a tunneling service:
            </p>
            <div className="space-y-2 pl-4">
              <div className="flex items-center gap-2">
                <code className="text-zinc-300 text-sm">ngrok http 3000</code>
                <Button
                  variant="link"
                  size="sm"
                  className="text-blue-400 h-auto p-0"
                  onClick={() => window.open("https://ngrok.com", "_blank")}
                >
                  Get ngrok <ExternalLink className="h-3 w-3 ml-1" />
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <code className="text-zinc-300 text-sm">cloudflared tunnel --url localhost:3000</code>
                <Button
                  variant="link"
                  size="sm"
                  className="text-blue-400 h-auto p-0"
                  onClick={() => window.open("https://cloudflare.com/products/tunnel", "_blank")}
                >
                  Get Cloudflare <ExternalLink className="h-3 w-3 ml-1" />
                </Button>
              </div>
            </div>
          </div>

          {/* Solution 3: Add headers */}
          <div className="bg-zinc-800/50 rounded-lg p-4 border border-zinc-700">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-amber-400 font-bold text-lg">⚠️</span>
              <h3 className="font-semibold text-zinc-100">Option 3: Browser Private Network Access</h3>
            </div>
            <p className="text-zinc-400 text-sm mb-3">
              If accessing from the same machine, you can configure your local
              server to allow private network access. Add these headers:
            </p>
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
                    className="absolute right-2 top-2 h-8 w-8 bg-zinc-800/50 hover:bg-zinc-700 text-zinc-400 hover:text-white z-10"
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
            <p className="text-zinc-500 text-xs mt-3">
              Note: This only works when accessing from the same machine via browser.
              Vercel serverless functions still cannot reach localhost.
            </p>
          </div>
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
                "https://developer.chrome.com/blog/private-network-access-update",
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