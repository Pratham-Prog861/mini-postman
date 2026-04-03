import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'REST API Best Practices Every Developer Should Know',
  description: 'Essential best practices for designing and testing REST APIs. Learn how to build better APIs.',
};

export default function RestApiBestPracticesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Documentation Navbar */}
      <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-lg font-bold">Mini Postman</span>
            </Link>
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-2 text-sm px-3 py-2 rounded-md hover:bg-accent transition-colors">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="hidden sm:inline">Home</span>
              </Link>
              <Link href="/tool" className="flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 text-sm px-4 py-2 rounded-md transition-colors">
                <span>Get Started</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
          <span>/</span>
          <span>REST API Best Practices</span>
        </div>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            REST API Best Practices Every Developer Should Know
          </h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <time>January 5, 2025</time>
            <span>•</span>
            <span>10 min read</span>
          </div>
        </header>

        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Building a great REST API is more than just making endpoints work. It&apos;s about creating an intuitive, 
            consistent, and maintainable interface that developers love to use. Let&apos;s explore the essential best 
            practices that separate good APIs from great ones.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">1. Use Proper HTTP Methods</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            HTTP methods (verbs) have specific meanings. Use them correctly to make your API predictable and RESTful.
          </p>
          
          <div className="space-y-3 mb-8">
            <div className="border-l-4 border-green-500 bg-green-500/10 p-4 rounded-r-lg">
              <div className="flex items-center gap-3 mb-2">
                <code className="font-bold">GET</code>
                <span className="text-sm">Retrieve data (read-only, safe, idempotent)</span>
              </div>
              <code className="text-sm text-muted-foreground">GET /api/users/123</code>
            </div>
            
            <div className="border-l-4 border-blue-500 bg-blue-500/10 p-4 rounded-r-lg">
              <div className="flex items-center gap-3 mb-2">
                <code className="font-bold">POST</code>
                <span className="text-sm">Create new resources</span>
              </div>
              <code className="text-sm text-muted-foreground">POST /api/users</code>
            </div>
            
            <div className="border-l-4 border-yellow-500 bg-yellow-500/10 p-4 rounded-r-lg">
              <div className="flex items-center gap-3 mb-2">
                <code className="font-bold">PUT</code>
                <span className="text-sm">Update entire resource (idempotent)</span>
              </div>
              <code className="text-sm text-muted-foreground">PUT /api/users/123</code>
            </div>
            
            <div className="border-l-4 border-orange-500 bg-orange-500/10 p-4 rounded-r-lg">
              <div className="flex items-center gap-3 mb-2">
                <code className="font-bold">PATCH</code>
                <span className="text-sm">Partial update</span>
              </div>
              <code className="text-sm text-muted-foreground">PATCH /api/users/123</code>
            </div>
            
            <div className="border-l-4 border-red-500 bg-red-500/10 p-4 rounded-r-lg">
              <div className="flex items-center gap-3 mb-2">
                <code className="font-bold">DELETE</code>
                <span className="text-sm">Remove resource (idempotent)</span>
              </div>
              <code className="text-sm text-muted-foreground">DELETE /api/users/123</code>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">2. Use Nouns, Not Verbs in URLs</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            URLs should represent resources (nouns), not actions (verbs). The HTTP method indicates the action.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="border border-red-500/50 bg-red-500/10 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-red-500 font-bold">❌ Bad</span>
              </div>
              <div className="space-y-2 text-sm font-mono">
                <div className="text-muted-foreground">POST /api/createUser</div>
                <div className="text-muted-foreground">GET /api/getUser/123</div>
                <div className="text-muted-foreground">POST /api/deleteUser/123</div>
              </div>
            </div>
            
            <div className="border border-green-500/50 bg-green-500/10 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-green-500 font-bold">✅ Good</span>
              </div>
              <div className="space-y-2 text-sm font-mono">
                <div className="text-muted-foreground">POST /api/users</div>
                <div className="text-muted-foreground">GET /api/users/123</div>
                <div className="text-muted-foreground">DELETE /api/users/123</div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">3. Use Plural Nouns for Collections</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Keep your API consistent by always using plural nouns for resource collections.
          </p>
          
          <div className="bg-muted/50 border rounded-lg p-4 mb-8">
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-3">
                <span className="text-green-500">✓</span>
                <code>/api/users</code>
                <span className="text-muted-foreground">- Get all users</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-500">✓</span>
                <code>/api/users/123</code>
                <span className="text-muted-foreground">- Get specific user</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-500">✓</span>
                <code>/api/users/123/posts</code>
                <span className="text-muted-foreground">- Get user&apos;s posts</span>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">4. Use Proper Status Codes</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            HTTP status codes communicate what happened with the request. Use them correctly.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-3 text-green-600 dark:text-green-400">2xx Success</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-3">
                  <code className="font-mono font-bold">200</code>
                  <div>
                    <strong>OK</strong> - Request succeeded (GET, PUT, PATCH)
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <code className="font-mono font-bold">201</code>
                  <div>
                    <strong>Created</strong> - Resource created successfully (POST)
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <code className="font-mono font-bold">204</code>
                  <div>
                    <strong>No Content</strong> - Success but no response body (DELETE)
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-3 text-orange-600 dark:text-orange-400">4xx Client Errors</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-3">
                  <code className="font-mono font-bold">400</code>
                  <div>
                    <strong>Bad Request</strong> - Invalid syntax or validation error
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <code className="font-mono font-bold">401</code>
                  <div>
                    <strong>Unauthorized</strong> - Authentication required
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <code className="font-mono font-bold">403</code>
                  <div>
                    <strong>Forbidden</strong> - Authenticated but not authorized
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <code className="font-mono font-bold">404</code>
                  <div>
                    <strong>Not Found</strong> - Resource doesn&apos;t exist
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-3 text-red-600 dark:text-red-400">5xx Server Errors</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-3">
                  <code className="font-mono font-bold">500</code>
                  <div>
                    <strong>Internal Server Error</strong> - Something went wrong on server
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <code className="font-mono font-bold">503</code>
                  <div>
                    <strong>Service Unavailable</strong> - Server temporarily unavailable
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">5. Version Your API</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            APIs evolve. Versioning prevents breaking changes for existing clients.
          </p>
          
          <div className="bg-muted/50 border rounded-lg p-4 mb-8">
            <h4 className="font-semibold mb-3">Common Versioning Strategies</h4>
            <div className="space-y-3 text-sm">
              <div>
                <strong>URL Path (Recommended):</strong>
                <code className="block bg-background p-2 rounded mt-1">/api/v1/users</code>
              </div>
              <div>
                <strong>Query Parameter:</strong>
                <code className="block bg-background p-2 rounded mt-1">/api/users?version=1</code>
              </div>
              <div>
                <strong>Header:</strong>
                <code className="block bg-background p-2 rounded mt-1">Accept: application/vnd.api.v1+json</code>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">6. Provide Meaningful Error Messages</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Help developers debug issues with clear, actionable error messages.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="border border-red-500/50 bg-red-500/10 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-red-500 font-bold">❌ Bad</span>
              </div>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
{`{
  "error": "Error"
}`}
              </pre>
            </div>
            
            <div className="border border-green-500/50 bg-green-500/10 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-green-500 font-bold">✅ Good</span>
              </div>
              <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
{`{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Email is required",
    "field": "email"
  }
}`}
              </pre>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">7. Use Pagination for Large Collections</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Don&apos;t return thousands of records at once. Implement pagination to improve performance.
          </p>
          
          <div className="bg-muted/50 border rounded-lg p-4 mb-8">
            <h4 className="font-semibold mb-3">Pagination Approaches</h4>
            <div className="space-y-3 text-sm">
              <div>
                <strong>Offset-based:</strong>
                <code className="block bg-background p-2 rounded mt-1">/api/users?page=2&limit=20</code>
              </div>
              <div>
                <strong>Cursor-based (Better for large datasets):</strong>
                <code className="block bg-background p-2 rounded mt-1">/api/users?cursor=abc123&limit=20</code>
              </div>
            </div>
            <div className="mt-4">
              <strong>Response should include:</strong>
              <pre className="text-xs bg-background p-3 rounded mt-2 overflow-x-auto">
{`{
  "data": [...],
  "pagination": {
    "total": 1000,
    "page": 2,
    "limit": 20,
    "hasMore": true
  }
}`}
              </pre>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">8. Support Filtering, Sorting, and Searching</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Make your API flexible with query parameters for filtering and sorting.
          </p>
          
          <div className="space-y-2 mb-8 text-sm font-mono">
            <div className="bg-muted/50 p-3 rounded">
              <strong>Filtering:</strong> <code>/api/users?status=active&role=admin</code>
            </div>
            <div className="bg-muted/50 p-3 rounded">
              <strong>Sorting:</strong> <code>/api/users?sort=createdAt&order=desc</code>
            </div>
            <div className="bg-muted/50 p-3 rounded">
              <strong>Searching:</strong> <code>/api/users?search=john</code>
            </div>
            <div className="bg-muted/50 p-3 rounded">
              <strong>Combined:</strong> <code>/api/users?status=active&sort=name&limit=10</code>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">9. Use HTTPS Always</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Security isn&apos;t optional. Always use HTTPS to encrypt data in transit. No exceptions.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">10. Document Your API</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Great documentation makes your API easy to use. Include:
          </p>
          
          <ul className="space-y-2 mb-8 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <div>All available endpoints and methods</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <div>Request/response examples</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <div>Authentication requirements</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <div>Error codes and meanings</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <div>Rate limiting information</div>
            </li>
          </ul>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 my-8">
            <h4 className="font-semibold mb-3">Popular Documentation Tools</h4>
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li>• <strong>Swagger/OpenAPI</strong> - Industry standard, interactive docs</li>
              <li>• <strong>Postman Collections</strong> - Shareable API collections</li>
              <li>• <strong>ReadMe</strong> - Beautiful hosted documentation</li>
              <li>• <strong>Redoc</strong> - Clean OpenAPI documentation</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Bonus Tips</h2>
          
          <div className="space-y-4 mb-8">
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">Use Consistent Naming</h4>
              <p className="text-sm text-muted-foreground">
                Stick to one naming convention (camelCase or snake_case) throughout your API.
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">Implement Rate Limiting</h4>
              <p className="text-sm text-muted-foreground">
                Protect your API from abuse with rate limits. Return 429 (Too Many Requests) when exceeded.
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">Support CORS Properly</h4>
              <p className="text-sm text-muted-foreground">
                Configure CORS headers correctly to allow browser-based clients to access your API.
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">Log Everything</h4>
              <p className="text-sm text-muted-foreground">
                Comprehensive logging helps debug issues and monitor API health.
              </p>
            </div>
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-8 text-center">
            <h3 className="text-xl font-semibold mb-3">Test Your APIs with Mini Postman</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Put these best practices into action. Test your APIs quickly and easily.
            </p>
            <Link 
              href="/tool"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg transition-colors font-semibold"
            >
              Start Testing
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-4">Conclusion</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Building a great REST API takes thought and discipline. Follow these best practices to create APIs 
            that are intuitive, maintainable, and a joy to use. Your fellow developers (and future you) will 
            thank you.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Remember: consistency is key. Pick conventions and stick to them throughout your API. Happy building!
          </p>
        </div>

        <div className="mt-16 pt-8 border-t">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blog
          </Link>
        </div>
      </article>
    </div>
  );
}
