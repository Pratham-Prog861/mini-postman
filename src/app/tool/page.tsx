"use client";

import { useState, useEffect, useCallback } from "react";
import { Send, Zap, ChevronDown, ChevronUp, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { toast, Toaster } from "sonner";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MethodSelector } from "@/components/MethodSelector";
import { RequestForm } from "@/components/RequestForm";
import { ResponseViewer } from "@/components/ResponseViewer";
import { RequestHistory } from "@/components/RequestHistory";
import { useApiRequest } from "@/hooks/useApiRequest";
import type { HttpMethod, RequestHeader, ApiRequest } from "@/types";

import { ConnectionHelpDialog } from "@/components/ConnectionHelpDialog";

export default function ToolPage() {
  const [method, setMethod] = useState<HttpMethod>("GET");
  const [url, setUrl] = useState("");
  const [headers, setHeaders] = useState<RequestHeader[]>([]);
  const [body, setBody] = useState("");
  const [showHistory, setShowHistory] = useState(false);
  const [showHelpDialog, setShowHelpDialog] = useState(false);

  const {
    sendRequest,
    response,
    loading,
    history,
    clearHistory,
    removeFromHistory,
  } = useApiRequest();

  const handleSend = useCallback(async () => {
    if (!url.trim()) {
      toast.error("Please enter a URL");
      return;
    }

    const result = await sendRequest(method, url, headers, body);

    if (result.error) {
      if (result.errorType === "RESTRICTED_ACCESS") {
        setShowHelpDialog(true);
      } else {
        toast.error(result.error);
      }
    } else if (result.status >= 200 && result.status < 300) {
      toast.success(`Request successful (${result.status})`);
    }
  }, [url, method, headers, body, sendRequest]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl/Cmd + Enter to send request
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        handleSend();
      }
      // Ctrl/Cmd + K to focus URL bar
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        document.getElementById("url-input")?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleSend]);

  const loadFromHistory = (request: ApiRequest) => {
    setMethod(request.method);
    setUrl(request.url);
    setHeaders(request.headers);
    setBody(request.body);
    toast.success("Request loaded from history");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-zinc-950 via-zinc-900 to-zinc-950">
      <Toaster position="top-right" theme="dark" />
      <ConnectionHelpDialog
        open={showHelpDialog}
        onOpenChange={setShowHelpDialog}
      />

      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-linear-to-br from-primary to-primary/50">
                  <Zap className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-zinc-50">
                    Mini Postman
                  </h1>
                  <p className="text-xs text-zinc-400">
                    Lightweight API Testing Tool
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-6">
          {/* Main Content */}
          <div className="space-y-6">
            {/* URL Bar */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-2"
            >
              <MethodSelector value={method} onChange={setMethod} />
              <Input
                id="url-input"
                type="url"
                placeholder="https://api.example.com/endpoint"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1 font-mono"
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSend();
                }}
              />
              <Button
                onClick={handleSend}
                disabled={loading || !url.trim()}
                className="min-w-[100px]"
              >
                {loading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Send className="h-4 w-4" />
                  </motion.div>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send
                  </>
                )}
              </Button>
            </motion.div>

            {/* Request Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="h-[400px]"
            >
              <RequestForm
                method={method}
                headers={headers}
                body={body}
                onHeadersChange={setHeaders}
                onBodyChange={setBody}
              />
            </motion.div>

            {/* Response Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="h-[500px]"
            >
              <ResponseViewer response={response} />
            </motion.div>
          </div>

          {/* Sidebar - History */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:block hidden"
          >
            <div className="sticky top-6 h-[calc(100vh-120px)]">
              <RequestHistory
                history={history}
                onSelect={loadFromHistory}
                onClear={clearHistory}
                onRemove={removeFromHistory}
              />
            </div>
          </motion.div>
        </div>

        {/* Mobile History Toggle */}
        <div className="lg:hidden mt-6">
          <Button
            variant="outline"
            onClick={() => setShowHistory(!showHistory)}
            className="w-full"
          >
            {showHistory ? (
              <>
                <ChevronUp className="h-4 w-4 mr-2" />
                Hide History
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4 mr-2" />
                Show History ({history.length})
              </>
            )}
          </Button>

          <AnimatePresence>
            {showHistory && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 max-h-[400px] overflow-hidden"
              >
                <RequestHistory
                  history={history}
                  onSelect={(req) => {
                    loadFromHistory(req);
                    setShowHistory(false);
                  }}
                  onClear={clearHistory}
                  onRemove={removeFromHistory}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Keyboard Shortcuts Hint */}
      <div className="fixed bottom-4 right-4 text-xs text-zinc-500 bg-zinc-900/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-zinc-800 hidden md:block">
        <div className="space-y-1">
          <div>
            <kbd className="px-1.5 py-0.5 bg-zinc-800 rounded">Ctrl+Enter</kbd>{" "}
            Send
          </div>
          <div>
            <kbd className="px-1.5 py-0.5 bg-zinc-800 rounded">Ctrl+K</kbd>{" "}
            Focus URL
          </div>
        </div>
      </div>
    </div>
  );
}
