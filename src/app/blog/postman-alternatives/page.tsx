import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Top 10 Free Postman Alternatives in 2025',
  description: 'Discover the best free alternatives to Postman for API testing and development. Compare features, pros, and cons.',
};

export default function PostmanAlternativesPage() {
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
          <span>Postman Alternatives</span>
        </div>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Top 10 Free Postman Alternatives in 2025
          </h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <time>January 10, 2025</time>
            <span>•</span>
            <span>12 min read</span>
          </div>
        </header>

        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Postman is great, but it&apos;s not the only option. Whether you need something lighter, faster, or with 
            different features, there are excellent free alternatives available. Let&apos;s explore the best ones.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Why Look for Alternatives?</h2>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <div><strong>Size:</strong> Postman is ~200MB - some alternatives are much lighter</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <div><strong>Speed:</strong> Browser-based tools start instantly</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <div><strong>Simplicity:</strong> Some tools focus on core features without bloat</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <div><strong>Privacy:</strong> No account required, no data syncing</div>
            </li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">The Top 10 Alternatives</h2>

          {/* #1 Mini Postman */}
          <div className="border-2 border-primary rounded-lg p-6 mb-6 bg-primary/5">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold mb-2">1. Mini Postman</h3>
                <div className="flex gap-2 mb-3">
                  <span className="text-xs bg-green-500/20 text-green-600 dark:text-green-400 px-2 py-1 rounded">Free</span>
                  <span className="text-xs bg-blue-500/20 text-blue-600 dark:text-blue-400 px-2 py-1 rounded">Browser-Based</span>
                  <span className="text-xs bg-purple-500/20 text-purple-600 dark:text-purple-400 px-2 py-1 rounded">No Installation</span>
                </div>
              </div>
              <span className="text-3xl">🏆</span>
            </div>
            <p className="text-muted-foreground mb-4">
              A lightweight, modern API testing tool built with Next.js 16. Perfect for quick API testing without 
              the overhead of desktop applications.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <h4 className="font-semibold text-sm mb-2 text-green-600 dark:text-green-400">Pros</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>✓ No installation required</li>
                  <li>✓ Instant startup</li>
                  <li>✓ Clean, modern UI</li>
                  <li>✓ Request history</li>
                  <li>✓ Keyboard shortcuts</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-2 text-orange-600 dark:text-orange-400">Cons</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>✗ No team collaboration</li>
                  <li>✗ Limited to browser storage</li>
                  <li>✗ No automated testing</li>
                </ul>
              </div>
            </div>
            <Link href="/tool" className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-semibold transition-colors">
              Try Mini Postman
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* #2 Insomnia */}
          <div className="border rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-bold mb-2">2. Insomnia</h3>
            <div className="flex gap-2 mb-3">
              <span className="text-xs bg-green-500/20 text-green-600 dark:text-green-400 px-2 py-1 rounded">Free</span>
              <span className="text-xs bg-gray-500/20 text-gray-600 dark:text-gray-400 px-2 py-1 rounded">Desktop</span>
            </div>
            <p className="text-muted-foreground mb-4">
              A powerful REST client with a beautiful interface. Great for GraphQL and gRPC testing too.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-sm mb-2 text-green-600 dark:text-green-400">Pros</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>✓ Beautiful, intuitive UI</li>
                  <li>✓ GraphQL support</li>
                  <li>✓ Environment variables</li>
                  <li>✓ Code generation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-2 text-orange-600 dark:text-orange-400">Cons</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>✗ Requires installation</li>
                  <li>✗ Some features need paid plan</li>
                </ul>
              </div>
            </div>
          </div>

          {/* #3 Thunder Client */}
          <div className="border rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-bold mb-2">3. Thunder Client (VS Code)</h3>
            <div className="flex gap-2 mb-3">
              <span className="text-xs bg-green-500/20 text-green-600 dark:text-green-400 px-2 py-1 rounded">Free</span>
              <span className="text-xs bg-blue-500/20 text-blue-600 dark:text-blue-400 px-2 py-1 rounded">VS Code Extension</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Lightweight REST client for VS Code. Test APIs without leaving your editor.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-sm mb-2 text-green-600 dark:text-green-400">Pros</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>✓ Integrated in VS Code</li>
                  <li>✓ Very lightweight</li>
                  <li>✓ Collections support</li>
                  <li>✓ Environment variables</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-2 text-orange-600 dark:text-orange-400">Cons</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>✗ Requires VS Code</li>
                  <li>✗ Limited UI space</li>
                </ul>
              </div>
            </div>
          </div>

          {/* #4 HTTPie */}
          <div className="border rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-bold mb-2">4. HTTPie</h3>
            <div className="flex gap-2 mb-3">
              <span className="text-xs bg-green-500/20 text-green-600 dark:text-green-400 px-2 py-1 rounded">Free</span>
              <span className="text-xs bg-gray-500/20 text-gray-600 dark:text-gray-400 px-2 py-1 rounded">CLI + Desktop</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Modern command-line HTTP client with an intuitive syntax. Also has a desktop app.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-sm mb-2 text-green-600 dark:text-green-400">Pros</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>✓ Beautiful CLI output</li>
                  <li>✓ Simple syntax</li>
                  <li>✓ Great for automation</li>
                  <li>✓ Desktop app available</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-2 text-orange-600 dark:text-orange-400">Cons</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>✗ CLI learning curve</li>
                  <li>✗ Desktop app is paid</li>
                </ul>
              </div>
            </div>
          </div>

          {/* #5 Hoppscotch */}
          <div className="border rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-bold mb-2">5. Hoppscotch</h3>
            <div className="flex gap-2 mb-3">
              <span className="text-xs bg-green-500/20 text-green-600 dark:text-green-400 px-2 py-1 rounded">Free</span>
              <span className="text-xs bg-blue-500/20 text-blue-600 dark:text-blue-400 px-2 py-1 rounded">Browser-Based</span>
              <span className="text-xs bg-purple-500/20 text-purple-600 dark:text-purple-400 px-2 py-1 rounded">Open Source</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Open-source API development ecosystem. Supports REST, GraphQL, WebSocket, and more.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-sm mb-2 text-green-600 dark:text-green-400">Pros</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>✓ Open source</li>
                  <li>✓ Multiple protocols</li>
                  <li>✓ Real-time collaboration</li>
                  <li>✓ Self-hostable</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-2 text-orange-600 dark:text-orange-400">Cons</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>✗ Can be overwhelming</li>
                  <li>✗ Requires account for sync</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quick comparison of remaining 5 */}
          <h3 className="text-2xl font-bold mt-12 mb-6">6-10: Quick Overview</h3>
          
          <div className="space-y-4 mb-8">
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">6. REST Client (VS Code Extension)</h4>
              <p className="text-sm text-muted-foreground">Send HTTP requests directly from .http files in VS Code. Great for version control.</p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">7. cURL</h4>
              <p className="text-sm text-muted-foreground">The classic command-line tool. Available everywhere, perfect for scripts and automation.</p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">8. Bruno</h4>
              <p className="text-sm text-muted-foreground">Offline-first API client. Stores collections in your filesystem, great for Git workflows.</p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">9. Paw (Mac Only)</h4>
              <p className="text-sm text-muted-foreground">Native Mac app with beautiful design. Powerful features but Mac-exclusive.</p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">10. Advanced REST Client (Browser Extension)</h4>
              <p className="text-sm text-muted-foreground">Chrome extension for quick API testing. Lightweight and always accessible.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Comparison Table</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full border rounded-lg text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Tool</th>
                  <th className="p-3 text-center">Type</th>
                  <th className="p-3 text-center">Installation</th>
                  <th className="p-3 text-center">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-semibold">Mini Postman</td>
                  <td className="p-3 text-center text-muted-foreground">Browser</td>
                  <td className="p-3 text-center text-green-600">None</td>
                  <td className="p-3 text-center text-muted-foreground">Quick testing</td>
                </tr>
                <tr className="border-t bg-muted/30">
                  <td className="p-3 font-semibold">Insomnia</td>
                  <td className="p-3 text-center text-muted-foreground">Desktop</td>
                  <td className="p-3 text-center text-orange-600">Required</td>
                  <td className="p-3 text-center text-muted-foreground">GraphQL</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-semibold">Thunder Client</td>
                  <td className="p-3 text-center text-muted-foreground">VS Code</td>
                  <td className="p-3 text-center text-orange-600">Extension</td>
                  <td className="p-3 text-center text-muted-foreground">In-editor</td>
                </tr>
                <tr className="border-t bg-muted/30">
                  <td className="p-3 font-semibold">Hoppscotch</td>
                  <td className="p-3 text-center text-muted-foreground">Browser</td>
                  <td className="p-3 text-center text-green-600">None</td>
                  <td className="p-3 text-center text-muted-foreground">Teams</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-semibold">cURL</td>
                  <td className="p-3 text-center text-muted-foreground">CLI</td>
                  <td className="p-3 text-center text-green-600">Pre-installed</td>
                  <td className="p-3 text-center text-muted-foreground">Automation</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Which One Should You Choose?</h2>
          
          <div className="space-y-4 mb-8">
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Choose Mini Postman if:</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• You need quick, no-setup API testing</li>
                <li>• You&apos;re on a shared or public computer</li>
                <li>• You want something lightweight and fast</li>
                <li>• You don&apos;t need team collaboration features</li>
              </ul>
            </div>
            
            <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Choose Insomnia if:</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• You work with GraphQL frequently</li>
                <li>• You want a polished desktop experience</li>
                <li>• You need code generation features</li>
              </ul>
            </div>
            
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Choose Thunder Client if:</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• You live in VS Code</li>
                <li>• You want minimal context switching</li>
                <li>• You prefer lightweight tools</li>
              </ul>
            </div>
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-8 text-center">
            <h3 className="text-xl font-semibold mb-3">Try Mini Postman Today</h3>
            <p className="text-sm text-muted-foreground mb-4">
              No installation, no signup, no hassle. Start testing APIs in seconds.
            </p>
            <Link 
              href="/tool"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg transition-colors font-semibold"
            >
              Launch Mini Postman
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-4">Conclusion</h2>
          <p className="text-muted-foreground leading-relaxed">
            There&apos;s no one-size-fits-all solution. The best API testing tool depends on your workflow, team size, 
            and specific needs. Try a few options and see what works best for you. The good news? Most of these 
            tools are free, so you can experiment without any cost.
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
