'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  Zap, 
  Code, 
  Settings, 
  AlertCircle, 
  Keyboard,
  Globe,
  FileJson,
  Shield,
  Rocket,
  Home,
  ArrowRight
} from 'lucide-react';

const Documentation = () => {
  const [activeTab, setActiveTab] = useState('getting-started');

  return (
    <div className="min-h-screen bg-background">
      {/* Documentation Navbar */}
      <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <span className="text-lg font-bold">Mini Postman</span>
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/" className="flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  <span className="hidden sm:inline">Home</span>
                </Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/tool" className="flex items-center gap-2">
                  <span>Get Started</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Documentation Content */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
      {/* Header */}
      <div className="mb-12 text-center">
        <div className="inline-flex items-center gap-2 mb-4">
          <BookOpen className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold">Documentation</h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Everything you need to know about using Mini Postman - your lightweight API testing companion
        </p>
      </div>

      {/* Main Documentation */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 h-auto gap-2">
          <TabsTrigger value="getting-started" className="flex items-center gap-2">
            <Rocket className="h-4 w-4" />
            <span className="hidden sm:inline">Getting Started</span>
            <span className="sm:hidden">Start</span>
          </TabsTrigger>
          <TabsTrigger value="features" className="flex items-center gap-2">
            <Zap className="h-4 w-4" />
            <span className="hidden sm:inline">Features</span>
            <span className="sm:hidden">Features</span>
          </TabsTrigger>
          <TabsTrigger value="api-guide" className="flex items-center gap-2">
            <Code className="h-4 w-4" />
            <span className="hidden sm:inline">API Guide</span>
            <span className="sm:hidden">Guide</span>
          </TabsTrigger>
          <TabsTrigger value="advanced" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            <span className="hidden sm:inline">Advanced</span>
            <span className="sm:hidden">Advanced</span>
          </TabsTrigger>
          <TabsTrigger value="troubleshooting" className="flex items-center gap-2">
            <AlertCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Troubleshooting</span>
            <span className="sm:hidden">Help</span>
          </TabsTrigger>
        </TabsList>

        {/* Getting Started */}
        <TabsContent value="getting-started" className="space-y-6">
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Rocket className="h-6 w-6" />
              Quick Start Guide
            </h2>
            
            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold mb-3">What is Mini Postman?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Mini Postman is a modern, browser-based API testing tool built with Next.js 16 and React 19. 
                  It provides a clean, intuitive interface for testing REST APIs without the overhead of desktop applications.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">Making Your First Request</h3>
                <div className="space-y-4">
                  <div className="bg-muted/50 p-4 rounded-lg border">
                    <p className="font-medium mb-2">Step 1: Select HTTP Method</p>
                    <p className="text-sm text-muted-foreground">
                      Choose from GET, POST, PUT, DELETE, PATCH, HEAD, or OPTIONS using the dropdown selector.
                    </p>
                  </div>
                  
                  <div className="bg-muted/50 p-4 rounded-lg border">
                    <p className="font-medium mb-2">Step 2: Enter API URL</p>
                    <p className="text-sm text-muted-foreground mb-2">
                      Type or paste your API endpoint in the URL field. Try this example:
                    </p>
                    <code className="block bg-background p-2 rounded text-sm font-mono">
                      https://jsonplaceholder.typicode.com/posts/1
                    </code>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg border">
                    <p className="font-medium mb-2">Step 3: Configure Request (Optional)</p>
                    <p className="text-sm text-muted-foreground">
                      Add custom headers or request body using the tabs below the URL bar.
                    </p>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg border">
                    <p className="font-medium mb-2">Step 4: Send Request</p>
                    <p className="text-sm text-muted-foreground">
                      Click the &quotSend&quot button or press <kbd className="px-2 py-1 bg-background rounded text-xs">Ctrl+Enter</kbd>
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">Example Requests</h3>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge>GET</Badge>
                      <span className="font-medium">Fetch a Post</span>
                    </div>
                    <code className="block bg-muted p-3 rounded text-sm font-mono">
                      https://jsonplaceholder.typicode.com/posts/1
                    </code>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">POST</Badge>
                      <span className="font-medium">Create a Post</span>
                    </div>
                    <code className="block bg-muted p-3 rounded text-sm font-mono mb-2">
                      https://jsonplaceholder.typicode.com/posts
                    </code>
                    <p className="text-sm text-muted-foreground mb-2">Body:</p>
                    <pre className="bg-muted p-3 rounded text-xs font-mono overflow-x-auto">
{`{
  "title": "My First Post",
  "body": "This is the content",
  "userId": 1
}`}
                    </pre>
                  </div>
                </div>
              </section>
            </div>
          </Card>
        </TabsContent>

        {/* Features */}
        <TabsContent value="features" className="space-y-6">
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Zap className="h-6 w-6" />
              Core Features
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <FeatureCard
                icon={<Globe className="h-5 w-5" />}
                title="All HTTP Methods"
                description="Support for GET, POST, PUT, DELETE, PATCH, HEAD, and OPTIONS requests."
              />
              
              <FeatureCard
                icon={<FileJson className="h-5 w-5" />}
                title="JSON Body Editor"
                description="Built-in JSON validation and formatting with real-time error detection."
              />

              <FeatureCard
                icon={<Settings className="h-5 w-5" />}
                title="Custom Headers"
                description="Add, edit, and toggle custom request headers with an intuitive key-value interface."
              />

              <FeatureCard
                icon={<Keyboard className="h-5 w-5" />}
                title="Keyboard Shortcuts"
                description="Boost productivity with Ctrl+Enter to send and Ctrl+K to focus URL bar."
              />

              <FeatureCard
                icon={<Code className="h-5 w-5" />}
                title="Response Viewer"
                description="Tabbed interface showing Body, Headers, and Raw response with syntax highlighting."
              />

              <FeatureCard
                icon={<Shield className="h-5 w-5" />}
                title="Request History"
                description="Automatically saves your last 10 requests to localStorage for quick access."
              />
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Keyboard Shortcuts</h3>
            <div className="space-y-3">
              <ShortcutRow 
                keys={['Ctrl', 'Enter']} 
                description="Send the current request"
                mac={['Cmd', 'Enter']}
              />
              <ShortcutRow 
                keys={['Ctrl', 'K']} 
                description="Focus the URL input field"
                mac={['Cmd', 'K']}
              />
            </div>
          </Card>
        </TabsContent>

        {/* API Guide */}
        <TabsContent value="api-guide" className="space-y-6">
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Code className="h-6 w-6" />
              API Testing Guide
            </h2>

            <div className="space-y-8">
              <section>
                <h3 className="text-xl font-semibold mb-4">HTTP Methods Explained</h3>
                <div className="space-y-4">
                  <MethodCard
                    method="GET"
                    description="Retrieve data from a server. No request body needed."
                    example="Fetching user profile, listing posts, getting product details"
                    color="default"
                  />
                  <MethodCard
                    method="POST"
                    description="Create new resources on the server. Requires request body."
                    example="Creating a new user, submitting a form, uploading data"
                    color="secondary"
                  />
                  <MethodCard
                    method="PUT"
                    description="Update existing resources completely. Requires request body."
                    example="Updating user profile, replacing document content"
                    color="secondary"
                  />
                  <MethodCard
                    method="PATCH"
                    description="Partially update existing resources. Requires request body."
                    example="Updating user email only, changing product price"
                    color="secondary"
                  />
                  <MethodCard
                    method="DELETE"
                    description="Remove resources from the server."
                    example="Deleting a post, removing a user account"
                    color="destructive"
                  />
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4">Working with Headers</h3>
                <p className="text-muted-foreground mb-4">
                  Headers provide additional information about your request. Common headers include:
                </p>
                <div className="space-y-3">
                  <HeaderExample
                    name="Content-Type"
                    value="application/json"
                    description="Tells the server you're sending JSON data"
                  />
                  <HeaderExample
                    name="Authorization"
                    value="Bearer your-token-here"
                    description="Provides authentication credentials"
                  />
                  <HeaderExample
                    name="Accept"
                    value="application/json"
                    description="Tells the server what response format you expect"
                  />
                  <HeaderExample
                    name="User-Agent"
                    value="Mini-Postman/1.0"
                    description="Identifies your application to the server"
                  />
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4">Request Body Format</h3>
                <p className="text-muted-foreground mb-4">
                  For POST, PUT, and PATCH requests, you can send data in the request body. 
                  Mini Postman supports JSON format with real-time validation.
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm font-medium mb-2">Example JSON Body:</p>
                  <pre className="bg-background p-3 rounded text-xs font-mono overflow-x-auto">
{`{
  "username": "johndoe",
  "email": "john@example.com",
  "age": 30,
  "active": true,
  "tags": ["developer", "designer"],
  "address": {
    "city": "New York",
    "country": "USA"
  }
}`}
                  </pre>
                </div>
              </section>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Public APIs for Testing</h3>
            <p className="text-muted-foreground mb-4">
              Try these free public APIs to test Mini Postman:
            </p>
            <div className="space-y-3">
              <ApiExample
                name="JSONPlaceholder"
                url="https://jsonplaceholder.typicode.com"
                description="Fake REST API for testing and prototyping"
              />
              <ApiExample
                name="ReqRes"
                url="https://reqres.in/api"
                description="Test API with realistic user data"
              />
              <ApiExample
                name="HTTPBin"
                url="https://httpbin.org"
                description="HTTP request & response testing service"
              />
              <ApiExample
                name="Dog API"
                url="https://dog.ceo/api"
                description="Random dog images and breed information"
              />
              <ApiExample
                name="Cat Facts"
                url="https://catfact.ninja"
                description="Random cat facts API"
              />
            </div>
          </Card>
        </TabsContent>

        {/* Advanced */}
        <TabsContent value="advanced" className="space-y-6">
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Settings className="h-6 w-6" />
              Advanced Usage
            </h2>

            <div className="space-y-8">
              <section>
                <h3 className="text-xl font-semibold mb-4">Request History</h3>
                <p className="text-muted-foreground mb-4">
                  Mini Postman automatically saves your last 10 requests to browser localStorage. 
                  This allows you to quickly revisit and resend previous requests.
                </p>
                <div className="bg-muted/50 p-4 rounded-lg border space-y-2">
                  <p className="text-sm"><strong>Features:</strong></p>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4 list-disc">
                    <li>Stores up to 10 most recent requests</li>
                    <li>Click any history item to restore that request</li>
                    <li>Clear all history with one click</li>
                    <li>Persists across browser sessions</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4">Response Analysis</h3>
                <p className="text-muted-foreground mb-4">
                  The response viewer provides three different views of your API response:
                </p>
                <div className="space-y-3">
                  <div className="border rounded-lg p-4">
                    <p className="font-medium mb-2">Body Tab</p>
                    <p className="text-sm text-muted-foreground">
                      Formatted JSON with syntax highlighting and proper indentation. 
                      Perfect for reading structured data.
                    </p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <p className="font-medium mb-2">Headers Tab</p>
                    <p className="text-sm text-muted-foreground">
                      Clean key-value display of all response headers including content-type, 
                      cache-control, and custom headers.
                    </p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <p className="font-medium mb-2">Raw Tab</p>
                    <p className="text-sm text-muted-foreground">
                      Plain text view of the response body, useful for debugging or 
                      copying the exact response.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4">Status Codes</h3>
                <p className="text-muted-foreground mb-4">
                  Understanding HTTP status codes helps you debug API issues:
                </p>
                <div className="space-y-2">
                  <StatusCodeRow code="2xx" label="Success" description="Request completed successfully" color="text-green-500" />
                  <StatusCodeRow code="3xx" label="Redirection" description="Further action needed to complete request" color="text-blue-500" />
                  <StatusCodeRow code="4xx" label="Client Error" description="Problem with your request" color="text-orange-500" />
                  <StatusCodeRow code="5xx" label="Server Error" description="Problem on the server side" color="text-red-500" />
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4">Performance Metrics</h3>
                <p className="text-muted-foreground mb-4">
                  Each response includes timing information showing how long the request took in milliseconds. 
                  This helps you identify slow endpoints and optimize your API calls.
                </p>
              </section>
            </div>
          </Card>
        </TabsContent>

        {/* Troubleshooting */}
        <TabsContent value="troubleshooting" className="space-y-6">
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <AlertCircle className="h-6 w-6" />
              Troubleshooting
            </h2>

            <div className="space-y-6">
              <TroubleshootCard
                title="CORS Errors"
                problem="You see an error message about CORS or &apos;Access-Control-Allow-Origin&apos;"
                solution={
                  <div className="space-y-2">
                    <p>CORS (Cross-Origin Resource Sharing) is a browser security feature. Solutions:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li>Use APIs that support CORS (like JSONPlaceholder, ReqRes)</li>
                      <li>Use a CORS proxy service for development</li>
                      <li>If you control the API, add CORS headers on the server</li>
                      <li>Use browser extensions that disable CORS (development only)</li>
                    </ul>
                  </div>
                }
              />

              <TroubleshootCard
                title="Invalid JSON Error"
                problem="The body editor shows a JSON validation error"
                solution={
                  <div className="space-y-2">
                    <p>Common JSON mistakes:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li>Missing quotes around property names</li>
                      <li>Trailing commas after the last property</li>
                      <li>Single quotes instead of double quotes</li>
                      <li>Unescaped special characters in strings</li>
                    </ul>
                  </div>
                }
              />

              <TroubleshootCard
                title="Network Error"
                problem="Request fails with &apos;Network Error&apos; or timeout"
                solution={
                  <div className="space-y-2">
                    <p>Possible causes:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li>Check your internet connection</li>
                      <li>Verify the URL is correct and accessible</li>
                      <li>The server might be down or unreachable</li>
                      <li>Firewall or proxy blocking the request</li>
                    </ul>
                  </div>
                }
              />

              <TroubleshootCard
                title="404 Not Found"
                problem="Server returns 404 status code"
                solution={
                  <div className="space-y-2">
                    <p>The endpoint doesn&apost exist:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li>Double-check the URL for typos</li>
                      <li>Verify the API endpoint path is correct</li>
                      <li>Check if the resource ID exists</li>
                      <li>Consult the API documentation</li>
                    </ul>
                  </div>
                }
              />

              <TroubleshootCard
                title="401 Unauthorized"
                problem="Server returns 401 status code"
                solution={
                  <div className="space-y-2">
                    <p>Authentication required:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li>Add Authorization header with your API key or token</li>
                      <li>Verify your credentials are correct</li>
                      <li>Check if your token has expired</li>
                      <li>Ensure you have permission to access the resource</li>
                    </ul>
                  </div>
                }
              />

              <TroubleshootCard
                title="History Not Saving"
                problem="Request history doesn't persist"
                solution={
                  <div className="space-y-2">
                    <p>LocalStorage issues:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li>Check if localStorage is enabled in your browser</li>
                      <li>Clear browser cache and try again</li>
                      <li>Ensure you&apos;re not in private/incognito mode</li>
                      <li>Check if storage quota is exceeded</li>
                    </ul>
                  </div>
                }
              />
            </div>
          </Card>

          <Card className="p-6 bg-muted/50">
            <h3 className="text-lg font-semibold mb-3">Still Need Help?</h3>
            <p className="text-muted-foreground mb-4">
              If you&apos;re experiencing issues not covered here, try these resources:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Check the browser console (F12) for detailed error messages</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Test with a known working API like JSONPlaceholder</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Open an issue on GitHub with detailed reproduction steps</span>
              </li>
            </ul>
          </Card>
        </TabsContent>
      </Tabs>
      </div>
    </div>
  );
};

// Helper Components
const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="border rounded-lg p-4 hover:border-primary/50 transition-colors">
    <div className="flex items-start gap-3">
      <div className="text-primary mt-1">{icon}</div>
      <div>
        <h4 className="font-semibold mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  </div>
);

const ShortcutRow = ({ keys, description, mac }: { keys: string[]; description: string; mac?: string[] }) => (
  <div className="flex items-center justify-between py-2 border-b last:border-0">
    <span className="text-sm text-muted-foreground">{description}</span>
    <div className="flex items-center gap-2">
      <div className="flex gap-1">
        {keys.map((key, i) => (
          <kbd key={i} className="px-2 py-1 bg-muted rounded text-xs font-mono border">
            {key}
          </kbd>
        ))}
      </div>
      {mac && (
        <>
          <span className="text-muted-foreground text-xs">or</span>
          <div className="flex gap-1">
            {mac.map((key, i) => (
              <kbd key={i} className="px-2 py-1 bg-muted rounded text-xs font-mono border">
                {key}
              </kbd>
            ))}
          </div>
        </>
      )}
    </div>
  </div>
);

const MethodCard = ({ method, description, example, color }: { method: string; description: string; example: string; color: 'default' | 'secondary' | 'destructive' | 'outline' }) => (
  <div className="border rounded-lg p-4">
    <div className="flex items-center gap-3 mb-2">
      <Badge variant={color}>{method}</Badge>
      <span className="font-medium">{description}</span>
    </div>
    <p className="text-sm text-muted-foreground ml-16">
      <strong>Use cases:</strong> {example}
    </p>
  </div>
);

const HeaderExample = ({ name, value, description }: { name: string; value: string; description: string }) => (
  <div className="bg-muted/50 p-3 rounded-lg border">
    <div className="flex items-start gap-3 mb-1">
      <code className="text-sm font-mono font-semibold">{name}:</code>
      <code className="text-sm font-mono text-muted-foreground">{value}</code>
    </div>
    <p className="text-xs text-muted-foreground ml-0">{description}</p>
  </div>
);

const ApiExample = ({ name, url, description }: { name: string; url: string; description: string }) => (
  <div className="border rounded-lg p-4 hover:border-primary/50 transition-colors">
    <div className="flex items-start justify-between mb-2">
      <h4 className="font-semibold">{name}</h4>
    </div>
    <code className="block text-sm font-mono text-primary mb-2">{url}</code>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
);

const StatusCodeRow = ({ code, label, description, color }: { code: string; label: string; description: string; color: string }) => (
  <div className="flex items-center gap-4 p-3 bg-muted/30 rounded-lg">
    <code className={`font-mono font-bold text-lg ${color}`}>{code}</code>
    <div>
      <p className="font-medium text-sm">{label}</p>
      <p className="text-xs text-muted-foreground">{description}</p>
    </div>
  </div>
);

const TroubleshootCard = ({ title, problem, solution }: { title: string; problem: string; solution: React.ReactNode }) => (
  <div className="border rounded-lg p-5 space-y-3">
    <h3 className="text-lg font-semibold text-destructive">{title}</h3>
    <div>
      <p className="text-sm font-medium mb-1">Problem:</p>
      <p className="text-sm text-muted-foreground">{problem}</p>
    </div>
    <div>
      <p className="text-sm font-medium mb-2">Solution:</p>
      <div className="text-sm text-muted-foreground">{solution}</div>
    </div>
  </div>
);

export default Documentation;