import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog - API Testing Tips & Tutorials',
  description: 'Learn about API testing, REST APIs, HTTP methods, and best practices for developers.',
};

const blogPosts = [
  {
    slug: 'what-is-api-testing',
    title: 'What is API Testing? A Complete Guide for Developers',
    excerpt: 'Learn the fundamentals of API testing, why it matters, and how to get started.',
    date: '2025-01-15',
  },
  {
    slug: 'postman-alternatives',
    title: 'Top 10 Free Postman Alternatives in 2025',
    excerpt: 'Discover the best free alternatives to Postman for API testing and development.',
    date: '2025-01-10',
  },
  {
    slug: 'rest-api-best-practices',
    title: 'REST API Best Practices Every Developer Should Know',
    excerpt: 'Essential best practices for designing and testing REST APIs.',
    date: '2025-01-05',
  },
];

export default function BlogPage() {
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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-zinc-400 mb-12">
          Tips, tutorials, and best practices for API testing
        </p>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-colors"
            >
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-2xl font-semibold mb-2 hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
              </Link>
              <p className="text-zinc-400 mb-4">{post.excerpt}</p>
              <time className="text-sm text-zinc-500">{post.date}</time>
            </article>
          ))}
        </div>

        </div>
      </div>
    </div>
  );
}
