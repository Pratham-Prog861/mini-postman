import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mini Postman vs Postman - Feature Comparison',
  description: 'Compare Mini Postman with Postman. See which API testing tool is right for you. Free, lightweight, and no installation required.',
};

export default function ComparePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Documentation Navbar */}
      <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-lg font-bold">Mini Postman</span>
            </Link>

            {/* Navigation Links */}
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

      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center">
            Mini Postman vs Postman
          </h1>
        <p className="text-zinc-400 mb-12 text-center max-w-2xl mx-auto">
          Choosing the right API testing tool? Here&aposs how Mini Postman compares to Postman.
        </p>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border border-zinc-800 rounded-lg">
            <thead className="bg-zinc-900">
              <tr>
                <th className="p-4 text-left">Feature</th>
                <th className="p-4 text-center">Mini Postman</th>
                <th className="p-4 text-center">Postman</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-zinc-800">
                <td className="p-4">Price</td>
                <td className="p-4 text-center text-green-400">Free</td>
                <td className="p-4 text-center">Free / Paid Plans</td>
              </tr>
              <tr className="border-t border-zinc-800 bg-zinc-900/50">
                <td className="p-4">Installation Required</td>
                <td className="p-4 text-center text-green-400">No</td>
                <td className="p-4 text-center text-red-400">Yes</td>
              </tr>
              <tr className="border-t border-zinc-800">
                <td className="p-4">Browser-Based</td>
                <td className="p-4 text-center text-green-400">✓</td>
                <td className="p-4 text-center">Web & Desktop</td>
              </tr>
              <tr className="border-t border-zinc-800 bg-zinc-900/50">
                <td className="p-4">HTTP Methods</td>
                <td className="p-4 text-center text-green-400">All</td>
                <td className="p-4 text-center text-green-400">All</td>
              </tr>
              <tr className="border-t border-zinc-800">
                <td className="p-4">Custom Headers</td>
                <td className="p-4 text-center text-green-400">✓</td>
                <td className="p-4 text-center text-green-400">✓</td>
              </tr>
              <tr className="border-t border-zinc-800 bg-zinc-900/50">
                <td className="p-4">JSON Body Editor</td>
                <td className="p-4 text-center text-green-400">✓</td>
                <td className="p-4 text-center text-green-400">✓</td>
              </tr>
              <tr className="border-t border-zinc-800">
                <td className="p-4">Response Viewer</td>
                <td className="p-4 text-center text-green-400">✓</td>
                <td className="p-4 text-center text-green-400">✓</td>
              </tr>
              <tr className="border-t border-zinc-800 bg-zinc-900/50">
                <td className="p-4">Request History</td>
                <td className="p-4 text-center text-green-400">✓</td>
                <td className="p-4 text-center text-green-400">✓</td>
              </tr>
              <tr className="border-t border-zinc-800">
                <td className="p-4">Collections</td>
                <td className="p-4 text-center text-yellow-400">Coming Soon</td>
                <td className="p-4 text-center text-green-400">✓</td>
              </tr>
              <tr className="border-t border-zinc-800 bg-zinc-900/50">
                <td className="p-4">Team Collaboration</td>
                <td className="p-4 text-center text-red-400">✗</td>
                <td className="p-4 text-center text-green-400">✓</td>
              </tr>
              <tr className="border-t border-zinc-800">
                <td className="p-4">Environment Variables</td>
                <td className="p-4 text-center text-yellow-400">Coming Soon</td>
                <td className="p-4 text-center text-green-400">✓</td>
              </tr>
              <tr className="border-t border-zinc-800 bg-zinc-900/50">
                <td className="p-4">Automated Testing</td>
                <td className="p-4 text-center text-red-400">✗</td>
                <td className="p-4 text-center text-green-400">✓</td>
              </tr>
              <tr className="border-t border-zinc-800">
                <td className="p-4">File Size</td>
                <td className="p-4 text-center text-green-400">~2MB</td>
                <td className="p-4 text-center">~200MB</td>
              </tr>
              <tr className="border-t border-zinc-800 bg-zinc-900/50">
                <td className="p-4">Startup Time</td>
                <td className="p-4 text-center text-green-400">Instant</td>
                <td className="p-4 text-center">3-5 seconds</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="border border-zinc-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-green-400">
              When to Use Mini Postman
            </h2>
            <ul className="space-y-2 text-zinc-300">
              <li>✓ Quick API testing without installation</li>
              <li>✓ Working on a shared/public computer</li>
              <li>✓ Simple REST API testing</li>
              <li>✓ Learning API development</li>
              <li>✓ Lightweight alternative needed</li>
              <li>✓ No account/signup required</li>
            </ul>
          </div>

          <div className="border border-zinc-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">
              When to Use Postman
            </h2>
            <ul className="space-y-2 text-zinc-300">
              <li>✓ Team collaboration needed</li>
              <li>✓ Complex API testing workflows</li>
              <li>✓ Automated testing required</li>
              <li>✓ Mock servers needed</li>
              <li>✓ API documentation generation</li>
              <li>✓ Enterprise features required</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/tool"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Try Mini Postman Now
          </Link>
          <p className="mt-4 text-zinc-400">
            No installation required • 100% Free • No signup
          </p>
        </div>

        </div>
      </div>
    </div>
  );
}
